import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPasswordPage: React.FC = () => {
  const { token } = useParams(); // Grabs the long token from the URL
  const navigate = useNavigate();
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // Call your backend API
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccess(true);
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/auth'); // Change this to your login route (e.g., '/' or '/login')
      }, 2000);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative font-sans text-slate-900 overflow-hidden bg-[#F8FAFC] pt-28">
      
      {/* BACKGROUND EFFECTS (Same as AuthPage) */}
      <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent"></div>
          <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
          <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse delay-75"></div>
      </div>

      <div className="relative z-10 w-full max-w-md m-4">
        
        {/* HEADER TEXT */}
        <div className="text-center mb-10">
           <h1 className="text-4xl font-black mb-3 text-slate-900 tracking-tight">Set New Password</h1>
           <p className="text-slate-500 font-medium">Enter your new password below.</p>
        </div>

        {/* CARD */}
        <div className="bg-white/60 backdrop-blur-2xl rounded-[32px] border border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-8">
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-500 text-sm font-bold rounded-xl flex items-center gap-2 border border-red-100">
               <span className="material-icons-round text-base">error</span> {error}
            </div>
          )}

          {success ? (
            <div className="text-center py-8">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons-round text-3xl">check</span>
               </div>
               <h3 className="text-xl font-bold text-slate-900">Password Reset!</h3>
               <p className="text-slate-500 mt-2">Redirecting you to login...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">New Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/80 border-none rounded-xl p-4 text-slate-900 font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 shadow-sm ring-1 ring-slate-200/50 transition-all outline-none"
                  placeholder="••••••••" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Confirm Password</label>
                <input 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full bg-white/80 border-none rounded-xl p-4 text-slate-900 font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 shadow-sm ring-1 ring-slate-200/50 transition-all outline-none"
                  placeholder="••••••••" 
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 text-sm mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Updating...' : 'Update Password'} 
                {!loading && <span className="material-icons-round text-sm">arrow_forward</span>}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;