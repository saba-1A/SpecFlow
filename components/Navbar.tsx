import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthContext'; // Import Context

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth(); 
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', path: '/features' },
    { label: 'Generator', path: '/generate' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b
        ${isScrolled 
          ? 'py-4 bg-slate-50/80 backdrop-blur-xl border-slate-200/50 shadow-sm' 
          : 'py-6 bg-transparent border-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
{/* Logo */}
<Link to="/" className="flex items-center gap-2 group">
  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
    {/* CHANGED FROM BOLT TO DESCRIPTION */}
    <span className="material-icons-round text-white text-lg">description</span>
  </div>
  <span className="text-xl font-bold text-slate-900 tracking-tight">SpecFlow</span>
</Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${isScrolled ? 'bg-transparent border-transparent' : 'bg-slate-200/50 backdrop-blur-md border border-white/20 shadow-sm'}`}>
          {navLinks.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isActive(item.path) ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          
          {user ? (
            // --- LOGGED IN STATE ---
            <div className="flex items-center gap-3">
               
               {/* User Pill 
                   - Changed bg-white -> bg-slate-200/50 (Matches Navbar Links) 
                   - Removed shadow-sm to make it flatter
               */}
               <div className="flex items-center gap-3 pl-1 pr-4 py-1 rounded-full bg-slate-200/50 border border-white/20 backdrop-blur-sm">
                 
                 {/* Avatar 
                     - Changed bg-indigo-600 -> bg-indigo-100 (Light color)
                     - Changed text-white -> text-indigo-700 (Dark text)
                 */}
                 <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold">
                    {user.name.charAt(0).toUpperCase()}
                 </div>
                 
                 <span className="text-sm font-bold text-slate-700 max-w-[120px] truncate">
                   {user.name}
                 </span>
               </div>

               {/* Divider */}
               <div className="h-6 w-px bg-slate-300 mx-1"></div>

               {/* Logout Button */}
               <button 
                 onClick={logout}
                 title="Logout"
                 className="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all hover:scale-105 active:scale-95"
               >
                 <span className="material-icons-round text-xl">logout</span>
               </button>

            </div>
          ) : (
            // --- LOGGED OUT STATE ---
            <>
               <Link 
                to="/auth"
                className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors px-4"
               >
                 Log In
               </Link>
               <button 
                  onClick={() => navigate('/generate')}
                  className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-slate-900/20 hover:scale-105 active:scale-95 transition-all"
                >
                  Get Started
               </button>
            </>
          )}

        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-icons-round text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-50/95 backdrop-blur-xl border-b border-slate-200 transition-all duration-300 overflow-hidden shadow-xl ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4 text-center">
           {navLinks.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-medium ${isActive(item.path) ? 'text-indigo-600' : 'text-slate-600'}`}>
                  {item.label}
              </Link>
           ))}
           
           <hr className="border-slate-200"/>

           {user ? (
              <div className="flex flex-col gap-4 items-center">
                {/* Mobile version matches desktop changes */}
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
                   <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                      {user.name.charAt(0).toUpperCase()}
                   </div>
                   <span className="font-bold text-slate-800">{user.name}</span>
                </div>
                <button 
                  onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                  className="flex items-center gap-2 text-red-500 font-bold bg-red-50 px-6 py-2 rounded-full"
                >
                  <span className="material-icons-round">logout</span> Sign Out
                </button>
              </div>
           ) : (
              <>
                <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Log In</Link>
                <button onClick={() => { navigate('/generate'); setIsMobileMenuOpen(false); }} className="text-lg font-bold text-slate-900 bg-slate-200 py-3 rounded-xl">Get Started</button>
              </>
           )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;