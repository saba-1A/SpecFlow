import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- SUB-COMPONENTS ---

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* GLOBAL BACKGROUND SHINES THROUGH */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="text-center px-4 max-w-5xl mx-auto">
        {/* Badge - Using 'Geist' for technical feel */}
        <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default">
           <span className="relative flex h-2.5 w-2.5">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
           </span>
           <span className="text-[13px] font-['Geist'] font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest">SpecFlow v2.0 is Live</span>
        </div>
        
        {/* Headline - Using 'Inter Tight' */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Inter+Tight'] font-black tracking-tighter mb-8 leading-[1.05] text-slate-900 dark:text-white drop-shadow-sm">
          The OS for <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-400 animate-gradient-x">
            Product Specs
          </span>
        </h1>
        
        {/* Subhead - 'Plus Jakarta Sans' */}
        <p className="font-['Plus_Jakarta_Sans'] text-slate-600 dark:text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium mb-12">
          Turn messy brain dumps, voice notes, and whiteboard photos into 
          <span className="text-slate-900 dark:text-white font-bold"> engineering-ready documentation</span>. 
          Synced instantly to Jira.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
           <button onClick={() => navigate('/generate')} className="group relative w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-lg shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_-10px_rgba(99,102,241,0.4)] hover:-translate-y-1 transition-all duration-300">
             Start Building Free
             <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
           </button>
           <button className="group w-full sm:w-auto px-8 py-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-lg hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors flex items-center justify-center gap-2">
             <span className="material-icons-round text-slate-400 group-hover:text-indigo-500 transition-colors">play_circle</span>
             Watch Demo
           </button>
        </div>
      </div>
    </section>
  );
};

// --- UPDATED INTEGRATIONS MARQUEE ---
const IntegrationsMarquee = () => (
  <section className="w-full overflow-hidden py-10 mb-24">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <p className="text-[13px] font-['Geist'] font-black uppercase tracking-widest text-slate-500/80 whitespace-nowrap">Trusted by teams at</p>
        <div className="flex-1 w-full overflow-hidden mask-linear-fade relative">
            <div className="flex gap-16 animate-scroll w-max grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 items-center">
                {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                        <span className="text-xl font-['Inter+Tight'] font-black text-slate-500 flex items-center gap-2"><span className="material-icons-round">view_kanban</span>Jira</span>
                        <span className="text-xl font-['Inter+Tight'] font-black text-slate-500 flex items-center gap-2"><span className="material-icons-round">polyline</span>Linear</span>
                        <span className="text-xl font-['Inter+Tight'] font-black text-slate-500 flex items-center gap-2"><span className="material-icons-round">code</span>GitHub</span>
                        <span className="text-xl font-['Inter+Tight'] font-black text-slate-500 flex items-center gap-2"><span className="material-icons-round">article</span>Notion</span>
                        <span className="text-xl font-['Inter+Tight'] font-black text-slate-500 flex items-center gap-2"><span className="material-icons-round">forum</span>Slack</span>
                        <span className="text-xl font-['Inter+Tight'] font-black text-slate-500 flex items-center gap-2"><span className="material-icons-round">cloud</span>Azure</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </div>
  </section>
);

const BentoGrid = () => (
  <section className="mb-32 max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
         <h2 className="text-3xl md:text-5xl font-['Inter+Tight'] font-black text-slate-900 dark:text-white mb-6">
            Input Chaos. <span className="text-indigo-600">Output Clarity.</span>
         </h2>
         <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg font-medium">
            Don't change how you think. Change how you document. We accept context in any format and structure it for you.
         </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        {/* Card 1: Voice (Large) */}
        <div className="md:col-span-2 row-span-1 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/60 dark:border-slate-700 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-6 right-6 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm z-10 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-indigo-500 text-2xl">mic</span>
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
                <div className="w-full max-w-[300px] space-y-2">
                    {/* Fake Audio Wave */}
                    <div className="flex items-center gap-1 h-8">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="w-1.5 bg-indigo-500/40 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 0.8 + 0.4}s` }}></div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-['Inter+Tight'] font-bold text-slate-900 dark:text-white mb-2">Voice-to-Spec</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-snug">Rant for 5 minutes about the new feature. We'll extract features, acceptance criteria, and edge cases automatically.</p>
                </div>
            </div>
        </div>

        {/* Card 2: Image OCR */}
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-400/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125"></div>
            {/* Changed generic serif to specific Inter Tight Serif feel */}
            <div className="absolute bottom-8 right-8 text-6xl text-slate-100 dark:text-slate-800 rotate-12 select-none pointer-events-none group-hover:rotate-0 transition-transform duration-500 font-['Inter+Tight'] font-black opacity-20">OCR</div>
            
            <div className="h-full flex flex-col justify-end relative z-10">
                <div className="mb-auto">
                    <span className="material-icons-round text-teal-500 text-3xl mb-4 bg-teal-50 dark:bg-teal-900/30 p-2 rounded-lg">image</span>
                </div>
                <h3 className="text-xl font-['Inter+Tight'] font-bold text-slate-900 dark:text-white mb-2">Whiteboard Logic</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Upload a photo of your scribbles. We convert boxes and arrows into flowcharts.</p>
            </div>
        </div>

        {/* Card 3: Slack/Text */}
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-400/50 transition-colors">
             <div className="absolute top-8 right-8 bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg z-10">
                <span className="material-icons-round text-purple-500 text-2xl">forum</span>
            </div>
             <div className="h-full flex flex-col justify-end relative z-10">
                <div className="space-y-2 mb-auto opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="w-3/4 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="w-1/2 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                </div>
                <h3 className="text-xl font-['Inter+Tight'] font-bold text-slate-900 dark:text-white mb-2">Slack Threads</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Paste a messy thread. We resolve the debate and document the conclusion.</p>
            </div>
        </div>

         {/* Card 4: API Integration */}
         <div className="md:col-span-2 bg-slate-900 dark:bg-white border border-slate-200 dark:border-slate-700 rounded-3xl p-8 relative overflow-hidden group flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-md">
                 <h3 className="text-2xl font-['Inter+Tight'] font-bold text-white dark:text-slate-900 mb-2">Instant Sync</h3>
                 <p className="text-slate-400 dark:text-slate-500 font-medium">Push to Linear, Jira, or Notion with one click. No more copy-pasting JSON objects.</p>
            </div>
            
            {/* Visual Connector Animation */}
            <div className="hidden md:flex items-center gap-2 relative">
                <div className="w-12 h-12 rounded-xl bg-slate-800 dark:bg-slate-100 flex items-center justify-center border border-white/10 dark:border-slate-300">
                    <span className="material-icons-round text-white dark:text-slate-900">description</span>
                </div>
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce delay-200"></div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                    <span className="material-icons-round text-white">sync_alt</span>
                </div>
            </div>
        </div>
    </div>
  </section>
);

const MagicTransformation = () => {
  const [isSpecView, setIsSpecView] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleToggle = () => {
    if (isSpecView) {
        setIsSpecView(false);
    } else {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsSpecView(true);
        }, 1200);
    }
  };

  return (
    <section className="mb-32 py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-['Inter+Tight'] font-black text-slate-900 dark:text-white mb-6">
                    Magic <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">Transformation</span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
                    See how raw chaos evolves into precision blueprints. <br/>
                    <span className="text-indigo-500 font-bold">Click the toggle to process.</span>
                </p>
            </div>

            {/* Enhanced Toggle Switch - Using 'Geist' for UI labels */}
            <button 
                onClick={handleToggle}
                className={`relative flex items-center w-64 h-16 rounded-full p-2 transition-all duration-500 shadow-inner ${isSpecView ? 'bg-indigo-900/10 dark:bg-indigo-900/30' : 'bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm'}`}
            >
                <div className="absolute inset-0 flex justify-between items-center px-6 pointer-events-none">
                    <span className={`text-[11px] font-['Geist'] font-bold uppercase tracking-widest ${!isSpecView ? 'text-slate-500' : 'text-slate-400'}`}>Raw Input</span>
                    <span className={`text-[11px] font-['Geist'] font-bold uppercase tracking-widest ${isSpecView ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`}>Spec View</span>
                </div>
                <div className={`
                    relative w-1/2 h-full rounded-full shadow-lg flex items-center justify-center gap-2 transition-all duration-500 transform
                    ${isSpecView ? 'translate-x-full bg-indigo-600 text-white' : 'translate-x-0 bg-white dark:bg-slate-700 text-slate-900 dark:text-white'}
                `}>
                    {isProcessing ? (
                        <span className="material-icons-round animate-spin text-lg">autorenew</span>
                    ) : (
                        <>
                            <span className="material-icons-round text-lg">{isSpecView ? 'assignment' : 'mic'}</span>
                            <span className="text-[11px] font-['Geist'] font-bold">{isSpecView ? 'Generated' : 'Original'}</span>
                        </>
                    )}
                </div>
            </button>
        </div>

        {/* Main Interactive Card */}
        <div className="relative group perspective-1000">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="bg-white/80 dark:bg-[#0F1420]/80 backdrop-blur-xl rounded-[2.5rem] min-h-[550px] relative overflow-hidden shadow-2xl border border-white/50 dark:border-slate-800 flex flex-col">
            
            {/* Mac Window Header - 'Geist' for file name */}
            <div className="flex items-center gap-4 px-8 py-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center opacity-40 text-xs font-['Geist']">
                {isSpecView ? 'generated_spec_v1.md' : 'meeting_recording_04.mp3'}
              </div>
              <div className="w-16"></div> 
            </div>

            <div className="relative p-8 md:p-12 flex-1 flex flex-col justify-center">
                
                {/* Processing Overlay */}
                <div className={`absolute inset-0 z-20 bg-white/90 dark:bg-[#0F1420]/95 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-300 ${isProcessing ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                    <p className="text-lg font-['Inter+Tight'] font-bold text-slate-800 dark:text-white animate-pulse">Analyzing context...</p>
                    <p className="text-sm text-slate-500">Extracting requirements • Generating acceptance criteria</p>
                </div>

                {!isSpecView ? (
                /* RAW INPUT VIEW */
                <div className="animate-in fade-in zoom-in-95 duration-500 grid md:grid-cols-2 gap-8 h-full">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400 material-icons-round text-sm">mic</span>
                            <label className="text-xs font-['Geist'] font-bold text-slate-400 uppercase tracking-wider">Transcript Segment</label>
                        </div>
                        <div className="p-8 bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 relative backdrop-blur-sm">
                            <span className="absolute top-4 left-4 text-6xl text-slate-200 dark:text-slate-800 font-serif leading-none -z-10">“</span>
                            {/* Replaced font-serif with modern italic */}
                            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-['Inter+Tight'] italic">
                            ...so basically the user clicks the big button, then it should like, send them a code, but only if they're logged in. Oh! And we need to make sure the email doesn't look like spam. Maybe add a timeout of 5 mins?
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                         <div className="flex items-center gap-3 mb-2">
                            <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 material-icons-round text-sm">image</span>
                            <label className="text-xs font-['Geist'] font-bold text-slate-400 uppercase tracking-wider">Context Image</label>
                        </div>
                        <div className="h-64 md:h-full bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30"></div>
                            <span className="material-icons-round text-5xl text-slate-300 mb-3 group-hover:scale-110 transition-transform">image</span>
                            <span className="text-sm font-['Geist'] font-bold text-slate-400">whiteboard_sketch.jpg</span>
                            
                            {/* Floating Tags */}
                            <div className="absolute top-1/4 left-1/4 px-3 py-1 bg-indigo-500 text-white text-[10px] font-bold rounded-full shadow-lg animate-float-slow">Login Flow</div>
                            <div className="absolute bottom-1/3 right-1/4 px-3 py-1 bg-teal-500 text-white text-[10px] font-bold rounded-full shadow-lg animate-float-delayed">2FA Logic</div>
                        </div>
                    </div>
                </div>
                ) : (
                /* SPEC VIEW */
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
                     <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                        <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/20">
                                  <span className="material-icons-round text-2xl">assignment</span>
                             </div>
                             <div>
                                 <div className="flex items-center gap-2 mb-1">
                                     <span className="text-xs font-['Geist'] font-bold text-slate-400">AUTH-2491</span>
                                     <span className="px-2 py-0.5 rounded text-[10px] font-['Geist'] font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 uppercase tracking-wide border border-amber-200 dark:border-amber-800">In Progress</span>
                                 </div>
                                 <h3 className="text-xl md:text-2xl font-['Inter+Tight'] font-bold text-slate-900 dark:text-white">Implement 2FA Verification Flow</h3>
                             </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Edit</button>
                            <button className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-bold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-colors flex items-center gap-2">
                                <span className="material-icons-round text-sm">send</span> Push to Jira
                            </button>
                        </div>
                     </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-slate-5 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <h5 className="text-[11px] font-['Geist'] font-bold text-indigo-500 uppercase mb-3 flex items-center gap-2">
                                    <span className="material-icons-round text-sm">auto_awesome</span> Summary
                                </h5>
                                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                    Implementation of time-based OTP (One Time Password) for user verification triggered post-login. Requires session validation middleware and spam-resistant email delivery protocols with a 5-minute hard timeout.
                                </p>
                            </div>

                            <div>
                                <h5 className="text-[11px] font-['Geist'] font-bold text-slate-400 uppercase mb-4 ml-1">Acceptance Criteria</h5>
                                <div className="space-y-3">
                                    {[
                                        "Verify active session token (Return 401 if invalid)",
                                        "Generate 6-digit integer OTP with 300s expiration",
                                        "Rate limit: 3 requests / minute / IP",
                                        "Frontend: Display 5:00 countdown timer"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-sm hover:border-indigo-500/30 transition-colors">
                                            <div className="mt-0.5 w-5 h-5 rounded border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center text-white bg-green-500">
                                                <span className="material-icons-round text-[12px]">check</span>
                                            </div>
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="space-y-4">
                            <div className="p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm">
                                <div className="text-[10px] font-['Geist'] font-bold text-slate-400 uppercase mb-2">Estimated Effort</div>
                                <div className="text-3xl font-black text-slate-900 dark:text-white flex items-baseline gap-2">
                                    5 <span className="text-sm font-medium text-slate-400">Story Points</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                                    <div className="bg-amber-400 h-full w-2/3"></div>
                                </div>
                            </div>

                            <div className="p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm">
                                <div className="text-[10px] font-['Geist'] font-bold text-slate-400 uppercase mb-3">Context Files</div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 text-xs font-['Geist'] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/30 p-2 rounded border border-slate-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                                        <span className="text-blue-500 material-icons-round text-sm">description</span> auth.controller.ts
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-['Geist'] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/30 p-2 rounded border border-slate-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                                        <span className="text-yellow-500 material-icons-round text-sm">description</span> otp.service.js
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pipeline = () => (
  <section className="mb-32 max-w-7xl mx-auto px-4">
     <div className="text-center mb-16">
         <h2 className="text-3xl font-['Inter+Tight'] font-bold text-slate-900 dark:text-white mb-4">The SpecFlow Pipeline</h2>
         <p className="text-slate-500 dark:text-slate-400">From brain dump to backlog in three steps.</p>
     </div>
     
     <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-all hover:-translate-y-1 shadow-lg">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black text-slate-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors shadow-inner font-['Inter+Tight']">1</div>
                <h4 className="text-xl font-['Inter+Tight'] font-bold mb-3 dark:text-white">Ingest Context</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Upload voice memos, images, Slack threads, or rough notes. We accept the messiness of creativity.
                </p>
            </div>
            
            {/* Step 2 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-indigo-500/10 dark:border-indigo-500/20 shadow-2xl shadow-indigo-500/5 hover:border-indigo-500/40 transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black text-indigo-600 dark:text-indigo-400 shadow-inner font-['Inter+Tight']">2</div>
                <h4 className="text-xl font-['Inter+Tight'] font-bold mb-3 dark:text-white">AI Structuring</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Our model identifies requirements, edge cases, and technical constraints, formatting them into standard user stories.
                </p>
            </div>

            {/* Step 3 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-all hover:-translate-y-1 shadow-lg">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black text-slate-400 group-hover:bg-teal-500 group-hover:text-white transition-colors shadow-inner font-['Inter+Tight']">3</div>
                <h4 className="text-xl font-['Inter+Tight'] font-bold mb-3 dark:text-white">Sync & Build</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Review the spec, make quick edits, and push directly to your project management tool of choice.
                </p>
            </div>
        </div>
     </div>
  </section>
);

const ContextBrain = () => (
  <section className="mb-32 max-w-7xl mx-auto px-4">
     <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
         <div>
             <div className="inline-block px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 text-[11px] font-['Geist'] font-black uppercase tracking-wider mb-6">
                Brain V1 Engine
             </div>
             <h2 className="text-4xl md:text-5xl font-['Inter+Tight'] font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.1]">
                It doesn't just listen.<br/>
                It <span className="text-indigo-500">remembers</span>.
             </h2>
             <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                SpecFlow connects to your codebase, existing Jira tickets, and Notion wiki. It knows your design system, your API structure, and your legacy debt.
             </p>
             <ul className="space-y-4">
                 {[
                     'Checks against existing API endpoints',
                     'Recommends reusable UI components',
                     'Flags conflicts with active sprints'
                 ].map((feat, i) => (
                     <li key={i} className="flex items-center gap-3">
                         <span className="material-icons-round text-green-500 text-xl">check_circle</span>
                         <span className="text-slate-700 dark:text-slate-300 font-medium">{feat}</span>
                     </li>
                 ))}
             </ul>
         </div>

         <div className="relative">
             <div className="aspect-square bg-gradient-to-br from-white/60 to-white/20 dark:from-slate-900 dark:to-[#0F1420] rounded-[3rem] p-10 relative overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px]"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <div className="w-32 h-32 bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-indigo-500/20 shadow-lg shadow-indigo-500/10 animate-pulse-slow">
                         <span className="material-icons-round text-5xl text-white drop-shadow-md">auto_awesome</span>
                     </div>
                 </div>
                 <div className="absolute top-12 left-12 p-3.5 bg-white dark:bg-[#1E293B] rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 animate-float-slow">
                     <span className="material-icons-round text-blue-500 text-2xl">code</span>
                 </div>
                 <div className="absolute top-1/2 -translate-y-1/2 right-8 p-3.5 bg-white dark:bg-[#1E293B] rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 animate-float-delayed">
                     <span className="material-icons-round text-green-500 text-2xl">dvr</span>
                 </div>
                 <div className="absolute bottom-16 right-16 p-3.5 bg-white dark:bg-[#1E293B] rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 animate-float">
                     <span className="material-icons-round text-purple-500 text-2xl">book</span>
                 </div>
             </div>
         </div>
     </div>
  </section>
);

const FinalCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="mb-24 px-4">
        {/* Main Crystal Container */}
        <div className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-white/80 dark:border-slate-700 
            bg-gradient-to-br from-white/80 via-white/60 to-slate-100/40 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-slate-900/40 backdrop-blur-2xl">
            
            {/* Background Layer (for dark mode support) */}
            <div className="absolute inset-0 bg-white/40 dark:bg-[#0F1420]/60 -z-10"></div>
            
            {/* Texture Layer */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] z-0"></div>
            
            {/* Shine/Reflections */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 via-transparent to-transparent dark:from-white/5 dark:to-transparent z-0"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-400/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-400/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-['Inter+Tight'] font-black text-slate-900 dark:text-white mb-8 tracking-tight drop-shadow-sm">
                   Stop writing specs.<br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-500 dark:from-white dark:to-slate-400">Start building product.</span>
                </h2>
                
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    
                    {/* Primary Crystal Button - Black/Dark Grey */}
                    <button onClick={() => navigate('/generate')} className="group relative px-10 py-5 rounded-full text-lg font-['Plus_Jakarta_Sans'] font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden">
                        {/* Button Background */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-700 via-slate-900 to-black"></div>
                        
                        {/* Glassy Overlay on Button */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
                        
                        {/* Content */}
                        <span className="relative flex items-center justify-center gap-2 text-white">
                            Start Generating Now
                            <span className="material-icons-round">arrow_forward</span>
                        </span>
                    </button>

                    {/* Secondary Glass Button */}
                    <button className="px-10 py-5 rounded-full text-lg font-['Plus_Jakarta_Sans'] font-bold transition-all duration-300
                        text-slate-700 dark:text-white
                        bg-white/40 dark:bg-slate-800/40 
                        backdrop-blur-md 
                        border border-slate-200/50 dark:border-white/10
                        hover:bg-white/60 dark:hover:bg-slate-800/60">
                        View Pricing
                    </button>
                </div>

                <p className="text-slate-500 dark:text-slate-400 mt-8 text-sm font-medium">
                    No credit card required • 14-day free trial
                </p>
            </div>
        </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---

const FeaturesPage: React.FC = () => {
  return (
    <>
      {/* INJECTED FONTS FROM CODE 1 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Geist:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Main Wrapper with Plus Jakarta Sans as default */}
      <div className="min-h-screen relative overflow-x-hidden selection:bg-indigo-500/30 font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-slate-100">
        
        {/* --- GLOBAL BACKGROUND AMBIENCE --- */}
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

        {/* Page Content */}
        <HeroSection />
        <IntegrationsMarquee />
        <BentoGrid />
        <MagicTransformation />
        <Pipeline />
        <ContextBrain />
        <FinalCTA />
        
        {/* CSS for animations & Utils */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .mask-linear-fade {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-slow { animation: float 6s ease-in-out infinite 1s; }
          .animate-float-delayed { animation: float 7s ease-in-out infinite 2s; }
          .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-move 5s ease infinite;
          }
          @keyframes gradient-move {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
          .perspective-1000 {
              perspective: 1000px;
          }
        `}</style>
      </div>
    </>
  );
};

export default FeaturesPage;