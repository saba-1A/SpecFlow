import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Google Fonts - Trendy 2026 Stack */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Geist:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen overflow-x-hidden pt-32 pb-20 relative selection:bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-teal-400/30 font-['Plus_Jakarta_Sans'] text-slate-900 tracking-tight">
        
        {/* --- INJECT CSS FOR TEXT ANIMATION (Taken from Code 1) --- */}
        <style>{`
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-move 5s ease infinite;
          }
          @keyframes gradient-move {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
        `}</style>

        {/* --- BACKGROUND AMBIENCE --- 
            NOTE: -z-10 ensures this stays behind your Footer
        */}
        <div className="fixed inset-0 -z-10 bg-[#f8fafc]">
          {/* Top Left Gradient */}
          <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-purple-300/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse"></div>
          {/* Top Right Gradient */}
          <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-300/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse delay-75"></div>
          {/* Bottom Center Gradient */}
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-300/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse delay-150"></div>
          
          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
        </div>

        <div className="relative z-10">
          
          {/* Hero Section */}
          <section className="px-6 text-center mb-32 max-w-5xl mx-auto flex flex-col items-center">
            
            {/* Crystal Badge - Geist Mono for tech vibe */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                bg-white/30 backdrop-blur-md border border-white/60 shadow-lg shadow-indigo-500/10
                text-slate-600 text-[13px] font-['Geist'] font-black uppercase tracking-[0.1em] mb-8 cursor-default">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              AI Product Architect
            </div>
            
            {/* H1 Heading - Inter Tight for headlines */}
            <h1 className="text-6xl md:text-8xl font-['Inter+Tight'] font-black tracking-[-0.05em] mb-8 leading-[1.05] text-slate-900 drop-shadow-sm">
              Idea to Spec <br/>
              {/* UPDATED: Applied the 'animate-gradient-x' and the indigo-purple-teal colors */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-400 animate-gradient-x pb-2">
                in seconds.
              </span>
            </h1>
            
            {/* Subtitle - Plus Jakarta for body */}
            <p className="font-['Plus_Jakarta_Sans'] text-slate-600 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 font-500">
              Stop writing documentation from scratch. SpecFlow transforms messy notes into developer-ready PRDs using advanced AI.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => navigate('/generate')}
                className="group relative px-10 py-4 rounded-full font-['Plus_Jakarta_Sans'] font-600 text-lg text-white shadow-[0_20px_40px_-15px_rgba(79,70,229,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 overflow-hidden"
              >
                {/* Button Gradient - Matched to the text for consistency */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-400 animate-gradient-x"></div>
                {/* Glass Shine on Button */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                <span className="relative z-10 flex items-center gap-2">Start Generating <span className="material-icons-round text-sm">arrow_forward</span></span>
              </button>
              
              <button 
                onClick={() => navigate('/features')}
                className="px-10 py-4 rounded-full font-['Plus_Jakarta_Sans'] font-600 text-lg text-slate-700 transition-all active:scale-95 shadow-lg hover:shadow-xl
                bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white/60"
              >
                See Examples
              </button>
            </div>

            {/* --- HERO VISUAL: 3D GLASS CARD --- */}
            <div className="mt-24 w-full max-w-4xl perspective-[2000px]">
                <div className="relative rounded-[40px] p-1 
                    bg-gradient-to-b from-white/80 to-white/20 shadow-2xl shadow-indigo-500/20
                    transform rotate-x-6 hover:rotate-x-0 transition-transform duration-700 ease-out">
                  
                  {/* The Actual Glass Panel */}
                  <div className="rounded-[38px] bg-white/40 backdrop-blur-xl p-4 h-full w-full">
                      <div className="bg-white/40 rounded-[30px] aspect-[16/9] overflow-hidden relative flex items-center justify-center border border-white/50">
                          {/* Reflection Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                          
                          <div className="relative z-10 text-center">
                              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-white flex items-center justify-center mx-auto mb-6">
                                   <span className="material-icons-round text-5xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-600">auto_awesome</span>
                              </div>
                              <h3 className="font-['Inter+Tight'] text-3xl font-black text-slate-800 mb-3">Processing Context...</h3>
                              <div className="flex items-center gap-3 justify-center mt-6">
                                   <div className="h-3 w-3 bg-indigo-500 rounded-full animate-bounce"></div>
                                   <div className="h-3 w-3 bg-purple-500 rounded-full animate-bounce delay-100"></div>
                                   <div className="h-3 w-3 bg-pink-500 rounded-full animate-bounce delay-200"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </section>

          {/* Bento Grid Features - TRUE GLASSMORPHISM */}
          <section className="px-6 mb-32">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                 <h4 className="font-['Geist'] text-indigo-600 text-[13px] font-black uppercase tracking-[0.2em] mb-4">Features</h4>
                 <h2 className="font-['Inter+Tight'] text-4xl md:text-6xl font-black text-slate-900 mb-6">Built for Speed</h2>
                 <p className="font-['Plus_Jakarta_Sans'] text-slate-500 text-xl max-w-2xl mx-auto font-500">Core capabilities that save you 20 hours a week.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Large Card */}
                  <div className="md:col-span-2 p-12 rounded-[40px] relative overflow-hidden group transition-all duration-300 hover:-translate-y-1
                      bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-indigo-500/10">
                      
                      <div className="relative z-10">
                          <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mb-8 border border-white shadow-sm">
                              <span className="material-icons-round text-3xl text-indigo-600">psychology</span>
                          </div>
                          <h3 className="font-['Inter+Tight'] text-3xl font-black mb-4 text-slate-900">Context Awareness</h3>
                          <p className="font-['Plus_Jakarta_Sans'] text-slate-600 font-500 leading-relaxed max-w-md text-lg">
                              The AI understands your tech stack. It won't suggest MongoDB if you're using SQL. It writes specs that are technically feasible.
                          </p>
                      </div>
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Tall Dark Glass Card */}
                  <div className="md:row-span-2 p-12 rounded-[40px] relative overflow-hidden group transition-all duration-300 hover:-translate-y-1
                       bg-slate-900/90 backdrop-blur-xl border border-white/20 shadow-2xl shadow-indigo-500/20">
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                      <div className="relative z-10 h-full flex flex-col justify-between text-white">
                          <div>
                              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/10">
                                  <span className="material-icons-round text-3xl">mic</span>
                              </div>
                              <h3 className="font-['Inter+Tight'] text-3xl font-black mb-4">Voice to Spec</h3>
                              <p className="font-['Plus_Jakarta_Sans'] text-slate-300 font-500 leading-relaxed text-lg">
                                  Ramble about your idea for 2 minutes. We'll turn it into a structured document.
                              </p>
                          </div>
                          <div className="mt-12 flex justify-center relative">
                              <div className="absolute inset-0 bg-indigo-500/40 blur-[60px] rounded-full"></div>
                              <button className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group-hover:bg-white/20">
                                  <span className="material-icons-round text-5xl">graphic_eq</span>
                              </button>
                          </div>
                      </div>
                  </div>

                  {/* Standard Glass Card 1 */}
                  <div className="p-10 rounded-[40px] transition-all duration-300 hover:-translate-y-1
                       bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <div className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white">
                          <span className="material-icons-round text-2xl text-slate-700">receipt_long</span>
                      </div>
                      <h3 className="font-['Inter+Tight'] text-2xl font-black mb-3 text-slate-900">User Stories</h3>
                      <p className="font-['Plus_Jakarta_Sans'] text-slate-600 font-500 leading-relaxed">
                          Auto-generated acceptance criteria in Gherkin syntax.
                      </p>
                  </div>
                  
                   {/* Standard Glass Card 2 */}
                  <div className="p-10 rounded-[40px] transition-all duration-300 hover:-translate-y-1
                       bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <div className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white">
                          <span className="material-icons-round text-2xl text-slate-700">dataset</span>
                      </div>
                      <h3 className="font-['Inter+Tight'] text-2xl font-black mb-3 text-slate-900">Schema Mapping</h3>
                      <p className="font-['Plus_Jakarta_Sans'] text-slate-600 font-500 leading-relaxed">
                          Suggested database schemas based on your feature requirements.
                      </p>
                  </div>
              </div>
          </div>
          </section>

          {/* 
              --- BIG CTA: GREY/WHITE CRYSTAL SHADE ---
              Changed to light crystal background with black text.
              Button remains the premium black/grey style.
          */}
          <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto rounded-[50px] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-slate-200 border border-white/80
               bg-gradient-to-br from-white/80 via-white/60 to-slate-100/40 backdrop-blur-2xl">
               
               {/* Internal Glossy Gradient */}
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
               
               <div className="relative z-10 max-w-3xl mx-auto">
                   <h2 className="font-['Inter+Tight'] text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-900 drop-shadow-sm">
                        Ready to build the future?
                   </h2>
                   <p className="font-['Plus_Jakarta_Sans'] text-slate-500 text-xl font-500 mb-12">
                     Join thousands of product managers and developers shipping faster with SpecFlow.
                   </p>
                   
                   {/* BUTTON: Premium Black/Grey Crystal Style */}
                   <button 
                     onClick={() => navigate('/generate')}
                     className="group relative px-12 py-6 rounded-full font-['Plus_Jakarta_Sans'] font-600 text-xl text-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/20 overflow-hidden"
                   >
                     {/* 1. Base Dark Gradient */}
                     <div className="absolute inset-0 bg-gradient-to-b from-slate-700 via-slate-900 to-black"></div>
                     
                     {/* 2. Top Glass Shine (White Gradient) */}
                     <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
                     
                     {/* 3. Subtle Border Effect */}
                     <div className="absolute inset-0 rounded-full border border-white/10"></div>
                     
                     {/* Content */}
                     <span className="relative z-10 flex items-center justify-center gap-3">
                        Get Started for Free 
                        <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
                     </span>
                   </button>
               </div>
          </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
