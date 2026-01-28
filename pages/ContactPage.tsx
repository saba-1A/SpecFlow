import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // --- UPDATED HANDLER ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Make API call to your Node.js backend
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Server error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* INJECTED FONTS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Geist:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Main Wrapper */}
      <div className="min-h-screen relative overflow-x-hidden font-['Plus_Jakarta_Sans'] text-[#16101e] selection:bg-black selection:text-white">
        
        {/* --- GLOBAL BACKGROUND --- */}
        <div className="fixed inset-0 -z-10 bg-[#f8fafc] dark:bg-[#0B0F19]">
            <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-purple-300/40 dark:bg-purple-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-normal animate-pulse"></div>
            <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-300/40 dark:bg-indigo-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-normal animate-pulse delay-75"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-300/40 dark:bg-blue-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-normal animate-pulse delay-150"></div>
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-16 space-y-6">
            <h1 className="text-5xl md:text-[80px] font-['Inter+Tight'] font-medium leading-[1.1] tracking-tight max-w-4xl mx-auto">
              <span className="bg-gradient-to-b from-[#16101e] to-[#16101e]/40 bg-clip-text text-transparent">
                Reach Us At Anytime
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#16101e]/70 max-w-[500px] font-medium">
              Have questions or need any help? We’re here to help you with that
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            
            {/* Left Column: Info Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="group bg-[#F5F5F5]/60 backdrop-blur-xl p-10 rounded-2xl border border-white/50 shadow-[inset_0_3px_1px_#fff,0_30px_30px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-b from-black to-gray-600 rounded-xl flex items-center justify-center mb-8 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <p className="text-[#16101e]/80 text-lg mb-4 font-medium">
                  Feel free to email me if you have any questions or need more details!
                </p>
                <a href="mailto:sabaf0186@gmail.com" className="text-lg font-['Geist'] font-bold underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity">
                  sabaf0186@gmail.com
                </a>
              </div>

              {/* Call Card */}
              <div className="group bg-[#F5F5F5]/60 backdrop-blur-xl p-10 rounded-2xl border border-white/50 shadow-[inset_0_3px_1px_#fff,0_30px_30px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-b from-black to-gray-600 rounded-xl flex items-center justify-center mb-8 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <p className="text-[#16101e]/80 text-lg mb-4 font-medium">
                  Feel free to book a call if that’s more convenient and easier for you
                </p>
                <a href="#" className="text-lg font-bold underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity">
                  Book a call
                </a>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-[#F5F5F5]/60 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/50 shadow-[inset_0_3px_1px_#fff,0_30px_30px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h2 className="text-2xl font-['Inter+Tight'] font-bold mb-2">Message Sent</h2>
                  <p className="text-gray-500 mb-8 font-medium">We'll get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="font-bold underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-['Geist'] font-bold uppercase tracking-wider opacity-80 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Saba Fathima"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 bg-[#F5F5F5]/50 rounded-xl border border-transparent shadow-[inset_0_3px_1px_#fff,0_1.8px_1.8px_-1.3px_rgba(0,0,0,0.1)] focus:border-black/10 focus:outline-none transition-all placeholder:text-black/30 font-medium"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-['Geist'] font-bold uppercase tracking-wider opacity-80 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="sabaf0186@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 bg-[#F5F5F5]/50 rounded-xl border border-transparent shadow-[inset_0_3px_1px_#fff,0_1.8px_1.8px_-1.3px_rgba(0,0,0,0.1)] focus:border-black/10 focus:outline-none transition-all placeholder:text-black/30 font-medium"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-['Geist'] font-bold uppercase tracking-wider opacity-80 ml-1">Subject Of Interest</label>
                    <input
                      type="text"
                      placeholder="Regarding Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-5 py-4 bg-[#F5F5F5]/50 rounded-xl border border-transparent shadow-[inset_0_3px_1px_#fff,0_1.8px_1.8px_-1.3px_rgba(0,0,0,0.1)] focus:border-black/10 focus:outline-none transition-all placeholder:text-black/30 font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-['Geist'] font-bold uppercase tracking-wider opacity-80 ml-1">How may we assist you?</label>
                    <textarea
                      placeholder="Give us more info.."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-5 py-4 bg-[#F5F5F5]/50 rounded-xl border border-transparent shadow-[inset_0_3px_1px_#fff,0_1.8px_1.8px_-1.3px_rgba(0,0,0,0.1)] focus:border-black/10 focus:outline-none transition-all h-32 resize-none placeholder:text-black/30 font-medium"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-black text-white font-['Plus_Jakarta_Sans'] font-bold rounded-xl shadow-[0_10px_18px_-3.75px_rgba(0,0,0,0.25)] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                        <>
                         <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></span>
                         Sending...
                        </>
                    ) : 'Send Your Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;