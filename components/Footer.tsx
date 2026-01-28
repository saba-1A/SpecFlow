import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      // Assuming your backend runs on port 5000 based on previous context
      const response = await fetch(`${import.meta.env.VITE_API_URL}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Welcome aboard! Check your inbox.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to connect to server.');
    }
  };

  return (
    <footer className="bg-white rounded-t-[50px] pt-24 pb-12 mt-12 shadow-orbai-card border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="material-icons-round text-white text-lg">description</span>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">SpecFlow</span>
            </Link>
            <p className="text-gray-500 leading-relaxed font-medium text-sm max-w-xs font-inter">
              Next-gen AI systems, built for tomorrow’s innovators. Stop writing docs, start building.
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-2">
            <h4 className="font-extrabold text-orbai-text mb-8 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold font-inter">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold font-inter">Pricing</Link></li>
              <li><Link to="/generate" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold font-inter">Generator</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-extrabold text-orbai-text mb-8 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold font-inter">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold font-inter">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4">
            <div className="bg-orbai-bg p-8 rounded-[30px] border border-gray-200">
              <h4 className="font-extrabold text-orbai-text mb-2">Subscribe</h4>
              <p className="text-gray-500 mb-6 text-xs leading-relaxed font-medium font-inter">
                Join 10,000+ builders receiving the latest AI insights.
              </p>
              
              <form className="flex gap-2 relative" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  disabled={status === 'loading' || status === 'success'}
                  className={`flex-1 bg-white border rounded-xl px-4 py-3 text-orbai-text outline-none transition-all placeholder:text-gray-400 text-sm font-medium disabled:opacity-60
                    ${status === 'error' ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary'}
                  `}
                />
                <button 
                  disabled={status === 'loading' || status === 'success'}
                  className={`px-6 py-3 rounded-xl font-bold transition-all text-sm shadow-lg flex items-center justify-center min-w-[80px]
                    ${status === 'success' ? 'bg-green-500 text-white' : 'bg-orbai-text text-white hover:bg-gray-800'}
                    disabled:opacity-80
                  `}
                >
                  {status === 'loading' ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : status === 'success' ? (
                    <span className="material-icons-round text-sm">check</span>
                  ) : (
                    'Join'
                  )}
                </button>
              </form>

              {/* Feedback Message */}
              {status !== 'idle' && (
                <p className={`mt-3 text-xs font-bold animate-in fade-in slide-in-from-top-1
                  ${status === 'error' ? 'text-red-500' : 'text-green-600'}
                `}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs font-bold font-inter">© 2026 SpecFlow Inc.</p>
          
          <div className="flex gap-8">
            <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors text-xs font-bold font-inter">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors text-xs font-bold font-inter">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;