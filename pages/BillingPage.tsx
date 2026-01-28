import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

// --- CONFIGURATION ---
// 1. Access the key from .env (Vite uses import.meta.env)
const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

// 2. Safety check to ensure key exists
if (!STRIPE_KEY) {
  console.error("Stripe Public Key is missing! Check your .env file.");
}

const stripePromise = loadStripe(STRIPE_KEY); 

// Types
interface FormData {
  email: string;
  fullName: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  // NOTE: Card details removed from here. Stripe handles them securely.
}

// --- SUB-COMPONENT: The Actual Payment Form ---
// We need this sub-component so we can use the `useStripe` hook
const CheckoutForm = ({ 
    onSuccess, 
    billingCycle, 
    totalPrice 
}: { 
    onSuccess: () => void, 
    billingCycle: string, 
    totalPrice: number 
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Return URL is required, but if we use redirect: 'if_required', 
                // we can handle success without a full page reload for card payments.
                return_url: window.location.origin + "/dashboard", 
            },
            redirect: "if_required", 
        });

        if (error) {
            setMessage(error.message || "An unexpected error occurred.");
            setIsLoading(false);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            onSuccess(); // Trigger the success step in parent
        } else {
            setMessage("Payment processing.");
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
            
            {message && <div className="text-red-500 text-sm font-medium">{message}</div>}

            <button 
                disabled={isLoading || !stripe || !elements}
                type="submit"
                className={`w-full py-4 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
                {isLoading ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Processing...</span>
                    </>
                ) : (
                    <>
                        <span>Subscribe & Pay ${totalPrice.toFixed(2)}</span>
                        <span className="material-icons-round text-sm">lock</span>
                    </>
                )}
            </button>
        </form>
    );
};

// --- MAIN PAGE COMPONENT ---
const BillingPage: React.FC = () => {
  const navigate = useNavigate();
  
  // --- STATE ---
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [clientSecret, setClientSecret] = useState("");
  
  const [formData, setFormData] = useState<FormData>({
    email: '', 
    fullName: '', 
    address: '', 
    city: '', 
    zip: '', 
    country: 'United States'
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  // --- PRICING ---
  const basePrice = 24;
  const discount = 0.20; 
  const pricePerMonth = billingCycle === 'yearly' ? basePrice * (1 - discount) : basePrice;
  const subtotal = billingCycle === 'yearly' ? pricePerMonth * 12 : pricePerMonth;
  
  // Tax Logic
  const isUK = formData.country?.toLowerCase().includes('united kingdom') || formData.country?.toLowerCase() === 'uk';
  const isCA = formData.country?.toLowerCase().includes('canada');
  const taxRate = isUK ? 0.20 : isCA ? 0.13 : 0;
  const taxAmount = subtotal * taxRate;
  const totalDue = subtotal + taxAmount;

  // --- INPUT HANDLERS ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  // --- VALIDATION ---
  const validateStep1 = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.country) newErrors.country = "Country is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- API CALL TO GET SECRET ---
  const handleNextStep = async () => {
    if (validateStep1()) {
        // 1. Call Backend to create PaymentIntent
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    billingCycle, 
                    email: formData.email 
                }),
            });
            const data = await res.json();
            
            if (data.clientSecret) {
                setClientSecret(data.clientSecret);
                setStep(2);
            } else {
                alert("Failed to initialize payment. Check server logs.");
            }
        } catch (err) {
            console.error(err);
            alert("Error connecting to server.");
        }
    }
  };

  // --- RENDER SUCCESS ---
  if (step === 3) {
      return (
          <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-6">
              <div className="fixed inset-0 -z-10 bg-white dark:bg-[#0B0F19]">
                  <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 blur-[120px]" />
                  <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px]" />
              </div>
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-12 rounded-2xl shadow-xl text-center max-w-lg w-full border border-slate-200 dark:border-slate-800 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="material-icons-round text-4xl">check</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Payment Successful!</h2>
                  <p className="text-slate-500 mb-8">Confirmation sent to {formData.email}.</p>
                  <button onClick={() => navigate('/generate')} className="w-full py-3 bg-slate-900 dark:bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition-all">Continue to Spec Generation</button>
              </div>
          </div>
      )
  }

  // --- STRIPE OPTIONS ---
  const appearance = {
    theme: 'night' as const, // or 'stripe' for light mode
    variables: {
      colorPrimary: '#6366f1',
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-500/30 pb-20">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-white dark:bg-[#0B0F19]">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-purple-200/30 dark:bg-purple-900/10 blur-[120px] mix-blend-multiply dark:mix-blend-normal animate-blob" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-cyan-200/30 dark:bg-cyan-900/10 blur-[120px] mix-blend-multiply dark:mix-blend-normal animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 lg:pt-36 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7">
            
            {/* STEPS INDICATOR */}
            <div className="flex items-center gap-4 mb-8 text-sm font-bold select-none">
                <div className={`flex items-center gap-2 ${step === 1 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${step === 1 ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50 dark:bg-indigo-900/20' : 'border-slate-300 text-slate-500'}`}>1</div>
                    <span>Details</span>
                </div>
                <div className="w-12 h-0.5 bg-slate-200 dark:bg-slate-800"></div>
                <div className={`flex items-center gap-2 ${step === 2 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${step === 2 ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50 dark:bg-indigo-900/20' : 'border-slate-300 text-slate-400'}`}>2</div>
                    <span>Payment</span>
                </div>
            </div>

            {/* --- STEP 1: CONTACT --- */}
            {step === 1 && (
                <div className="space-y-8 animate-fade-in-up">
                    <section>
                        <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="relative group">
                                <span className={`absolute left-4 top-3.5 material-icons-round transition-colors ${errors.email ? 'text-red-500' : 'text-slate-400'}`}>email</span>
                                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@company.com" className={`w-full pl-12 pr-4 py-3.5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border rounded-xl focus:ring-2 outline-none transition-all shadow-sm font-medium ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-800 focus:ring-indigo-500'}`} />
                                {errors.email && <p className="text-red-500 text-xs mt-1 font-medium ml-1">{errors.email}</p>}
                            </div>
                            <div className="relative group">
                                <span className={`absolute left-4 top-3.5 material-icons-round transition-colors ${errors.fullName ? 'text-red-500' : 'text-slate-400'}`}>person</span>
                                <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" placeholder="Full Name" className={`w-full pl-12 pr-4 py-3.5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border rounded-xl focus:ring-2 outline-none transition-all shadow-sm font-medium ${errors.fullName ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-800 focus:ring-indigo-500'}`} />
                                {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium ml-1">{errors.fullName}</p>}
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold mb-4">Billing Address</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 relative">
                                <input 
                                    name="country" 
                                    list="country-list"
                                    value={formData.country} 
                                    onChange={handleChange}
                                    placeholder="Select or Type Country"
                                    className={`w-full px-4 py-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border rounded-xl focus:ring-2 outline-none transition-all shadow-sm font-medium appearance-none ${errors.country ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-indigo-500'}`}
                                />
                                <datalist id="country-list">
                                    <option value="United States" />
                                    <option value="United Kingdom" />
                                    <option value="Canada" />
                                </datalist>
                            </div>
                            <div className="col-span-2">
                                <input name="address" value={formData.address} onChange={handleChange} type="text" placeholder="Street Address" className={`w-full px-4 py-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border rounded-xl focus:ring-2 outline-none transition-all shadow-sm font-medium ${errors.address ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-indigo-500'}`} />
                            </div>
                            <div>
                                <input name="city" value={formData.city} onChange={handleChange} type="text" placeholder="City" className={`w-full px-4 py-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border rounded-xl focus:ring-2 outline-none transition-all shadow-sm font-medium ${errors.city ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-indigo-500'}`} />
                            </div>
                            <div>
                                <input name="zip" value={formData.zip} onChange={handleChange} type="text" placeholder="Zip Code" className={`w-full px-4 py-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border rounded-xl focus:ring-2 outline-none transition-all shadow-sm font-medium ${errors.zip ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-indigo-500'}`} />
                            </div>
                        </div>
                    </section>
                    
                    {/* Mobile Button */}
                    <div className="pt-4 lg:hidden">
                        <button onClick={handleNextStep} className="w-full px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">
                            Continue to Payment
                        </button>
                    </div>
                </div>
            )}

            {/* --- STEP 2: PAYMENT (STRIPE) --- */}
            {step === 2 && clientSecret && (
                <div className="space-y-8 animate-fade-in-up">
                    <button onClick={() => setStep(1)} className="flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors mb-2">
                        <span className="material-icons-round text-sm">arrow_back</span> Back to details
                    </button>

                    <section>
                        <h3 className="text-lg font-bold mb-4">Secure Payment</h3>
                        {/* STRIPE ELEMENTS WRAPPER */}
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm 
                                onSuccess={() => setStep(3)} 
                                billingCycle={billingCycle} 
                                totalPrice={totalDue} 
                            />
                        </Elements>
                    </section>
                </div>
            )}
        </div>

        {/* RIGHT COLUMN: SUMMARY */}
        <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
                <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-800/40">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Order Summary</h3>
                    </div>
                    
                    <div className="p-6 space-y-6">
                        <div className="flex justify-between items-start">
                           <div>
                               <h4 className="text-xl font-bold text-slate-900 dark:text-white">Pro Plan</h4>
                               <p className="text-sm text-slate-500 mt-1">Unlimited specs, AI models.</p>
                           </div>
                           <span className="font-bold text-lg">${subtotal.toFixed(0)}</span>
                        </div>

                        {/* Billing Cycle Toggle */}
                        {step === 1 && (
                            <div className="bg-indigo-50/50 dark:bg-indigo-900/20 p-4 rounded-xl flex items-center justify-between border border-indigo-100 dark:border-indigo-500/30">
                                <div>
                                    <div className="text-sm font-bold text-indigo-900 dark:text-indigo-200">Billed {billingCycle === 'monthly' ? 'Monthly' : 'Yearly'}</div>
                                    <div className="text-xs text-indigo-600/80 dark:text-indigo-300">Save 20% with annual billing</div>
                                </div>
                                <button onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')} className="relative w-12 h-6 bg-indigo-200 dark:bg-indigo-700 rounded-full transition-colors duration-300 focus:outline-none">
                                    <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-md transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                </button>
                            </div>
                        )}

                        <hr className="border-slate-100 dark:border-slate-800" />

                        <div className="space-y-2 pt-2">
                            <div className="flex justify-between text-slate-500 text-sm">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-slate-500 text-sm">
                                <span>Tax ({taxRate * 100}%)</span>
                                <span>${taxAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-end pt-4 border-t border-slate-100 dark:border-slate-800">
                                <span className="font-bold text-slate-900 dark:text-white">Total due today</span>
                                <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">${totalDue.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Button: Only show here for Step 1. In Step 2, the CheckoutForm handles the button. */}
                        {step === 1 && (
                            <button 
                                onClick={handleNextStep}
                                className="w-full py-4 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-slate-900/10 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                <span>Continue to Payment</span>
                                <span className="material-icons-round text-sm">arrow_forward</span>
                            </button>
                        )}
                        
                        <div className="flex justify-center gap-4 opacity-50 grayscale pt-2">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-5" alt="Visa"/>
                             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5" alt="Mastercard"/>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-6">
                    <div className="flex -space-x-3">
                        <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" src="https://i.pravatar.cc/100?img=4" alt="User 1" />
                        <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" src="https://i.pravatar.cc/100?img=5" alt="User 2" />
                        <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" src="https://i.pravatar.cc/100?img=6" alt="User 3" />
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                        Trusted by <span className="font-bold text-slate-900 dark:text-white">1,000+ developers</span> worldwide.
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;