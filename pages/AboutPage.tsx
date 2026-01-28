import React from 'react';

const AboutPage: React.FC = () => {
  const values = [
    { 
      id: "01", 
      title: "Clarity First", 
      desc: "Complexity is the enemy of execution. We strive for absolute clarity in every spec generated." 
    },
    { 
      id: "02", 
      title: "AI for Good", 
      desc: "We believe AI should empower human creativity, not replace it. We build tools that assist product minds." 
    },
    { 
      id: "03", 
      title: "Privacy Obsessed", 
      desc: "Your product ideas are your IP. We treat your data with enterprise-grade security and isolation." 
    }
  ];

  return (
    <>
      {/* INJECTED FONTS (Same as Homepage) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Geist:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div className="min-h-screen text-slate-900 dark:text-slate-100 font-['Plus_Jakarta_Sans'] selection:bg-indigo-500/30 overflow-x-hidden relative">
        
        {/* --- GLOBAL BACKGROUND (Matches Homepage) --- */}
        <div className="fixed inset-0 -z-10 bg-[#f8fafc] dark:bg-[#0B0F19]">
            {/* Top Left Gradient */}
            <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-purple-300/40 dark:bg-purple-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-normal animate-pulse"></div>
            {/* Top Right Gradient */}
            <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-300/40 dark:bg-indigo-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-normal animate-pulse delay-75"></div>
            {/* Bottom Center Gradient */}
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-300/40 dark:bg-blue-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-normal animate-pulse delay-150"></div>
            
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <main className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pt-32 pb-32">
          
          {/* 1. HERO SECTION */}
          <section className="flex flex-col items-center text-center mb-32 lg:mb-48">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md mb-10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                <span className="text-[11px] font-['Geist'] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Our Mission</span>
              </div>
              
              {/* Heading - Inter Tight */}
              <h1 className="text-5xl md:text-7xl lg:text-[90px] leading-[0.95] font-['Inter+Tight'] font-black tracking-tighter mb-10 text-balance text-slate-900 dark:text-white">
                Building the bridge between <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-400">vision</span> and <span>reality.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium text-balance">
                We are a collective of product minds and engineers dedicated to eliminating the chaos of software development.
              </p>
          </section>

          {/* 2. THE STORY CARD */}
          <section className="mb-32 lg:mb-40">
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 lg:p-20 shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/60 dark:border-slate-700 relative overflow-hidden group">
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <div className="space-y-12 relative z-10 order-2 lg:order-1">
                    <div className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-['Inter+Tight'] font-bold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
                        It started with a <br/>
                        <span className="text-indigo-600 italic pr-2">simple</span> problem.
                      </h2>
                      <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        <p>
                          As product leaders at major tech firms, we saw thousands of hours wasted on misaligned requirements. Ideas were lost in translation, and developers were building the wrong features.
                        </p>
                        <p>
                          We built SpecFlow to solve this. Using advanced AI, we translate abstract business goals into precise blueprints that everyone can understand.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-row gap-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                       <div>
                          <div className="text-5xl font-['Inter+Tight'] font-black text-slate-900 dark:text-white mb-2">5k+</div>
                          <div className="text-[11px] font-['Geist'] font-bold uppercase tracking-widest text-slate-400">Teams Guided</div>
                       </div>
                       <div>
                          <div className="text-5xl font-['Inter+Tight'] font-black text-slate-900 dark:text-white mb-2">1M+</div>
                          <div className="text-[11px] font-['Geist'] font-bold uppercase tracking-widest text-slate-400">Specs Created</div>
                       </div>
                    </div>
                  </div>

                  <div className="relative order-1 lg:order-2">
                    <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 rounded-[2.5rem] rotate-3 scale-95 transform transition-transform duration-700 group-hover:rotate-6"></div>
                    <div className="aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl relative transform transition-transform duration-700 group-hover:-translate-y-2 border border-white/50 dark:border-slate-700">
                      <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600" 
                        alt="Team Collaboration" 
                        className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-700 ease-in-out" 
                      />
                      {/* Gradient Overlay for Text Visibility if needed, or just aesthetic */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                    </div>
                  </div>
               </div>
            </div>
          </section>

          {/* 3. VALUES LIST SECTION */}
          <section className="mb-32">
              <div className="flex flex-col md:flex-row items-end justify-between mb-20 px-4">
                 <h2 className="text-4xl md:text-6xl font-['Inter+Tight'] font-black tracking-tighter leading-none text-slate-900 dark:text-white">
                   Principles that <br/>
                   reflect our <span className="text-indigo-600 italic">drive.</span>
                 </h2>
                 <div className="hidden md:block mb-2">
                    <button className="text-xs font-['Geist'] font-bold uppercase tracking-widest border-b border-slate-300 dark:border-slate-700 pb-1 hover:text-indigo-600 transition-colors">
                      View Manifesto
                    </button>
                 </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800">
                  {values.map((item, index) => (
                     <div key={index} className="group py-16 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 md:items-start justify-between hover:bg-white/40 dark:hover:bg-slate-800/40 px-6 -mx-6 rounded-2xl transition-all duration-500 cursor-default">
                        <div className="w-full md:w-1/4">
                           <div className="flex items-center gap-4">
                              <span className="font-['Geist'] font-bold text-xs text-slate-400">{item.id}</span>
                              <h3 className="text-2xl md:text-3xl font-['Inter+Tight'] font-bold tracking-tight text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform duration-300">
                                {item.title}
                              </h3>
                           </div>
                        </div>
                        <div className="w-full md:w-1/2">
                           <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                             {item.desc}
                           </p>
                        </div>
                     </div>
                  ))}
              </div>
          </section>

          {/* 4. CTA / FOOTER SIMPLE */}
          <div className="text-center py-20">
              <h2 className="text-3xl md:text-5xl font-['Inter+Tight'] font-bold italic mb-8 text-slate-900 dark:text-white">Ready to build?</h2>
              
              <button className="group relative px-10 py-4 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-lg text-white shadow-xl hover:shadow-2xl overflow-hidden hover:-translate-y-1 transition-all">
                  {/* Button Background */}
                  <div className="absolute inset-0 bg-slate-900 dark:bg-white transition-colors"></div>
                  {/* Glassy Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <span className="relative z-10 flex items-center gap-2 text-white dark:text-slate-900">
                      Start your journey
                      <span className="material-icons-round text-sm">arrow_forward</span>
                  </span>
              </button>
          </div>

        </main>
      </div>
    </>
  );
};

export default AboutPage;