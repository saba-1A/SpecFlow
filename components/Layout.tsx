import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme, theme }) => {
  return (
    <div className="min-h-screen relative text-[#1a1a1a] selection:bg-[#000] selection:text-white overflow-x-hidden font-sans">
      
      {/* --- BACKGROUND STYLES --- */}
      <style>{`
        /* Smooth Grain Texture Overlay */
        .bg-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
        .animate-delay-2000 { animation-delay: 2s; }
        .animate-delay-4000 { animation-delay: 4s; }
      `}</style>

      {/* --- FIXED BACKGROUND LAYER --- 
          This is the "Wallpaper" of your app. 
      */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {/* Main Gradient: Lavender -> White -> Peach */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E4D4F4] via-[#FFFBF2] to-[#FFE4D6]"></div>

        {/* Grain Texture */}
        <div className="absolute inset-0 bg-grain opacity-50 mix-blend-multiply"></div>
        
        {/* Floating Blobs (Animation defined in index.html tailwind config now) */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-purple-300/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-orange-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] bg-yellow-100/50 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000" />
      </div>

      {/* --- PAGE CONTENT --- */}
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>

    </div>
  );
};

export default Layout;