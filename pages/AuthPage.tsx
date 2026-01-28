import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../components/AuthContext'; 

type AuthMode = 'login' | 'signup' | 'forgot';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

    try {
      let endpoint = '';
      let body = {};

      if (authMode === 'signup') {
        endpoint = `${API_URL}/signup`;
        body = { username: formData.username, email: formData.email, password: formData.password };
      } else if (authMode === 'login') {
        endpoint = `${API_URL}/login`;
        body = { email: formData.email, password: formData.password };
      } else if (authMode === 'forgot') {
        endpoint = `${API_URL}/forgot-password`;
        body = { email: formData.email };
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.msg || 'Something went wrong');
      }

      if (authMode === 'forgot') {
        alert("Password reset link sent to your email!");
        setAuthMode('login');
      } else {
        login(data.token, data.user); 
        navigate('/generate');
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/google`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: tokenResponse.access_token }),
        });
        const data = await res.json();
        
        if(res.ok) {
           login(data.token, data.user);
           navigate('/generate');
        }
      } catch (err) {
        setError('Google Login Failed');
      }
    },
    onError: () => setError('Google Login Failed'),
  });

  const getHeaderContent = () => {
    switch (authMode) {
      case 'login': return { title: 'Welcome back', subtitle: 'Enter your details to access your workspace.' };
      case 'signup': return { title: 'Create account', subtitle: 'Start turning ideas into specs today.' };
      case 'forgot': return { title: 'Reset Password', subtitle: 'Enter your email to receive a reset link.' };
    }
  };

  const content = getHeaderContent();

  return (
    // CHANGE HERE: Changed 'pt-28' to 'py-28' and 'overflow-hidden' to 'overflow-x-hidden'
    <div className="min-h-screen flex items-center justify-center relative font-sans text-slate-900 overflow-x-hidden bg-[#F8FAFC] py-28">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent"></div>
          <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
          <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse delay-75"></div>
      </div>

      <div className="relative z-10 w-full max-w-md m-4">
        
        {/* HEADER TEXT */}
        <div className="text-center mb-10">
           <h1 className="text-4xl font-black mb-3 text-slate-900 tracking-tight">{content.title}</h1>
           <p className="text-slate-500 font-medium">{content.subtitle}</p>
        </div>

        {/* AUTH CARD */}
        <div className="bg-white/60 backdrop-blur-2xl rounded-[32px] border border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-8">
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-500 text-sm font-bold rounded-xl flex items-center gap-2 border border-red-100">
               <span className="material-icons-round text-base">error</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {authMode === 'signup' && (
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/80 border-none rounded-xl p-4 text-slate-900 font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 shadow-sm ring-1 ring-slate-200/50 transition-all outline-none"
                  placeholder="John Doe" 
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/80 border-none rounded-xl p-4 text-slate-900 font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 shadow-sm ring-1 ring-slate-200/50 transition-all outline-none"
                placeholder="name@company.com" 
              />
            </div>

            {authMode !== 'forgot' && (
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/80 border-none rounded-xl p-4 text-slate-900 font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 shadow-sm ring-1 ring-slate-200/50 transition-all outline-none"
                  placeholder="••••••••" 
                />
              </div>
            )}

            {authMode === 'login' && (
              <div className="flex justify-end">
                <button 
                  type="button" 
                  onClick={() => setAuthMode('forgot')}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 text-sm mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : (authMode === 'login' ? 'Sign In' : authMode === 'signup' ? 'Get Started Free' : 'Send Reset Link')} 
              {!loading && <span className="material-icons-round text-sm">arrow_forward</span>}
            </button>

            {authMode === 'forgot' && (
               <button 
                type="button"
                onClick={() => setAuthMode('login')}
                className="w-full text-slate-500 font-bold py-2 rounded-xl hover:text-slate-800 transition-colors text-sm"
               >
                 Back to Sign In
               </button>
            )}
          </form>

          {/* SOCIAL LOGIN */}
          {authMode !== 'forgot' && (
            <>
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200/80"></div></div>
                <div className="relative flex justify-center text-[10px] uppercase tracking-widest"><span className="bg-[#fcfdfd] px-2 text-slate-400 font-bold rounded-full">Or continue with</span></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => googleLogin()}
                  className="flex items-center justify-center gap-2 bg-white p-3.5 rounded-xl border border-slate-200/60 hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-sm text-slate-600 shadow-sm"
                >
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" /> Google
                </button>
                
                <button className="flex items-center justify-center gap-2 bg-white p-3.5 rounded-xl border border-slate-200/60 hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-sm text-slate-600 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-5 h-5" alt="Github" /> GitHub
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-slate-500 font-medium">
                {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
                <button 
                  onClick={() => { setAuthMode(authMode === 'login' ? 'signup' : 'login'); setError(''); }}
                  className="text-slate-900 font-bold hover:text-indigo-600 transition-colors"
                >
                  {authMode === 'login' ? 'Sign up' : 'Log in'}
                </button>
              </p>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default AuthPage;