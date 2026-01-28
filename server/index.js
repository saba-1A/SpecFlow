const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

// --- STRIPE CONFIGURATION ---
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

// --- MIDDLEWARE ---
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// --- CONFIGURATION ---
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// --- SCHEMAS ---
const UserSchema = new mongoose.Schema({ name: String, email: { type: String, required: true, unique: true }, password: String, profilePicture: String });
const User = mongoose.model('User', UserSchema);

const SubscriberSchema = new mongoose.Schema({ email: { type: String, required: true, unique: true }, subscribedAt: { type: Date, default: Date.now } });
const Subscriber = mongoose.model('Subscriber', SubscriberSchema);

// --- GMAIL SMTP TRANSPORTER ---
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,   // your Gmail
    pass: process.env.EMAIL_PASS    // your Gmail App Password
  }
});

transporter.verify((error, success) => {
  if (error) console.error("❌ SMTP CONNECTION ERROR:", error);
  else console.log("✅ Connected to Gmail SMTP Successfully");
});

// ================= ROUTES ================= //

/* AUTH ROUTES */
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ name: username, email, password: hashedPassword, profilePicture: null });

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ user: newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(404).json({ message: "User not found" });

    if (!existingUser.password) return res.status(400).json({ message: "Please sign in with Google" });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ user: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.post('/api/auth/google', async (req, res) => {
  const { token } = req.body;
  try {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', { headers: { Authorization: `Bearer ${token}` } });
    const googleUser = await response.json();
    if (!googleUser.email) return res.status(401).json({ message: "Invalid Google Token" });

    const { email, name, picture } = googleUser;
    let user = await User.findOne({ email });
    if (!user) user = await User.create({ name, email, profilePicture: picture });

    const jwtToken = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ user, token: jwtToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Google Login Failed" });
  }
});

app.post('/api/auth/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' });
    const resetLink = `${CLIENT_URL}/reset-password/${token}`;

    const mailOptions = {
      from: `"Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Password Reset',
      html: `<h2>Reset Your Password</h2><p>Click below to reset your password:</p><a href="${resetLink}">Reset Password</a>`
    };

    transporter.sendMail(mailOptions).catch(err => console.error(err));
    res.status(200).json({ message: "Reset link sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.post('/api/auth/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.findByIdAndUpdate(decoded.id, { password: hashedPassword });
    res.status(200).json({ message: "Password updated successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Link expired or invalid token" });
  }
});

/* STRIPE PAYMENT */
app.post('/api/create-payment-intent', async (req, res) => {
  const { billingCycle, email } = req.body;
  try {
    const basePrice = 2400;
    const finalAmount = billingCycle === 'yearly' ? basePrice * 12 * 0.8 : basePrice;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(finalAmount),
      currency: 'usd',
      receipt_email: email,
      automatic_payment_methods: { enabled: true },
      metadata: { billingCycle }
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

/* NEWSLETTER SUBSCRIPTION */
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Already subscribed!' });

    await new Subscriber({ email }).save();

    const mailOptions = {
      from: `"SpecFlow Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to SpecFlow Insights 🚀',
      html: `<div style="font-family: Arial; color: #333;"><h2 style="color:#4F46E5;">Welcome to the Inner Circle!</h2><p>Thanks for subscribing to <strong>SpecFlow Insights</strong>.</p></div>`
    };

    transporter.sendMail(mailOptions).catch(err => console.error(err));
    res.status(201).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error. Try again later.' });
  }
});

/* CONTACT FORM */
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!email || !message) return res.status(400).json({ error: 'Email and message required' });

  try {
    const mailOptions = {
      from: `"SpecFlow Contact" <${process.env.EMAIL_USER}>`,
      to: 'sabaf0186@gmail.com',
      replyTo: email,
      subject: `New Contact Msg: ${subject || 'No Subject'}`,
      html: `<div><h2>New Contact Submission</h2><p><strong>Name:</strong> ${name || 'N/A'}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><hr/><p>${message}</p></div>`
    };

    transporter.sendMail(mailOptions).catch(err => console.error(err));
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port: ${PORT}`));