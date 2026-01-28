import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSpecView, setIsSpecView] = useState(false);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-24 px-6 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <section className="text-center mb-20 relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
          <span className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-primary px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Intelligence Features
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 dark:text-white leading-[1.1]">
            Magic <span className="text-primary">Transformation</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Witness how raw chaos evolves into precision engineering blueprints with SpecFlow's AI engine.
          </p>
        </section>

        {/* Interactive Preview Toggle */}
        <section className="mb-32">
          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-8 mb-10">
              <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${!isSpecView ? 'text-primary' : 'text-slate-400'}`}>Raw Idea</span>
              <button 
                onClick={() => setIsSpecView(!isSpecView)}
                className="relative w-24 h-12 bg-slate-200 dark:bg-slate-800 rounded-full p-1.5 transition-colors duration-300 border border-slate-200 dark:border-slate-700 shadow-inner"
              >
                <div className={`w-9 h-9 bg-white dark:bg-primary rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ${isSpecView ? 'translate-x-12' : 'translate-x-0'}`}>
                  <span className={`material-icons-round text-lg ${isSpecView ? 'text-white' : 'text-slate-400'}`}>{isSpecView ? 'description' : 'mic'}</span>
                </div>
              </button>
              <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${isSpecView ? 'text-primary' : 'text-slate-400'}`}>Ticket View</span>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10"></div>
              
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 min-h-[600px] relative overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
                <div className="absolute top-6 right-8 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                </div>

                {!isSpecView ? (
                  <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-secondary shadow-sm">
                        <span className="material-icons-round text-3xl">mic</span>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Input Source</h4>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">Voice Transcript & Notes</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 bg-orange-50/50 dark:bg-orange-900/10 border-l-4 border-secondary rounded-r-2xl">
                        <p className="text-base italic text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-serif">
                          "...so basically the user clicks the big button, then it should like, send them a code, but only if they're logged in. Oh! And we need to make sure the email doesn't look like spam..."
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                          <p className="text-[10px] text-slate-400 mb-1 font-black uppercase tracking-tighter">Scribble #1</p>
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Verify user session</p>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                          <p className="text-[10px] text-slate-400 mb-1 font-black uppercase tracking-tighter">Scribble #2</p>
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">2FA Flow??</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                     {/* Ticket Header Row */}
                     <div className="flex items-start justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex gap-4">
                             <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                  <span className="material-icons-round text-2xl">assignment</span>
                             </div>
                             <div>
                                 <div className="flex items-center gap-2 mb-1">
                                     <span className="text-xs font-mono font-bold text-slate-400">AUTH-2491</span>
                                     <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-700 uppercase tracking-wide">In Progress</span>
                                 </div>
                                 <h3 className="text-xl font-bold text-slate-900 dark:text-white">Implement 2FA Verification Flow</h3>
                             </div>
                        </div>
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-600">JD</div>
                            <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-600">AS</div>
                        </div>
                     </div>
                    
                    {/* Scrollable Container for Detail */}
                    <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                      
                      {/* User Story Card */}
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h5 className="text-[11px] font-black text-slate-400 uppercase mb-3 tracking-widest flex items-center gap-2">
                           <span className="material-icons-round text-sm">person</span>
                           User Story
                        </h5>
                        <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                          As a <span className="text-[#0284C7] font-bold">Secure User</span>, I want to <span className="text-[#0284C7] font-bold">receive a verification code</span> via email so that I can validate my session without using a permanent password.
                        </p>
                      </div>

                      {/* Acceptance Criteria Card */}
                      <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h5 className="text-[11px] font-black text-slate-400 uppercase mb-4 tracking-widest px-1 flex items-center gap-2">
                           <span className="material-icons-round text-sm text-[#0284C7]">fact_check</span>
                           Acceptance Criteria
                        </h5>
                        <ul className="space-y-3">
                          {[
                            "Trigger email only for active sessions.",
                            "Code expires in precisely 300 seconds.",
                            "Max 3 retry attempts before 15min lockout.",
                            "Log all failed attempts to audit_log.",
                            "Email template must support localization."
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group">
                                <div className="mt-0.5 w-4 h-4 rounded border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center group-hover:border-[#0284C7] transition-colors">
                                  <div className="w-2 h-2 bg-[#0284C7] rounded-[1px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                       {/* Ticket Metadata Grid (Replaces Black Schema) */}
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                             <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Priority</div>
                             <div className="flex items-center gap-1 text-red-600 font-bold text-xs">
                                <span className="material-icons-round text-sm">priority_high</span> Critical
                             </div>
                          </div>
                          <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                             <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Estimate</div>
                             <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-bold text-xs">
                                <span className="material-icons-round text-sm">timelapse</span> 5 Pts
                             </div>
                          </div>
                          <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                             <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Sprint</div>
                             <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-bold text-xs">
                                <span className="material-icons-round text-sm">repeat</span> Sprint 24
                             </div>
                          </div>
                          <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                             <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Labels</div>
                             <div className="flex items-center gap-1 text-purple-600 font-bold text-xs">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Backend
                             </div>
                          </div>
                       </div>

                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Steps - Vertical Timeline */}
        <section className="mb-32 relative">
          <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-4 block animate-pulse">Process</span>
              <h2 className="text-4xl md:text-5xl font-black dark:text-white">Transformation <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-600">Workflow</span></h2>
          </div>

          <div className="max-w-3xl mx-auto relative px-4 sm:px-6">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            {/* Vertical Line with Gradient */}
            <div className="absolute left-8 sm:left-10 top-6 bottom-6 w-0.5 bg-gradient-to-b from-orange-300 via-teal-400 to-blue-500 dark:from-orange-800 dark:via-teal-800 dark:to-blue-800 rounded-full"></div>

            <div className="space-y-12">
              
              {/* Step 1: Concept Capture */}
              <div className="relative pl-24 sm:pl-32 group">
                {/* Node */}
                <div className="absolute left-8 sm:left-10 top-10 -translate-x-1/2">
                   <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                     <div className="w-4 h-4 bg-white dark:bg-slate-900 border-2 border-orange-400 rounded-full z-10"></div>
                     <div className="absolute w-8 h-8 bg-orange-400/30 rounded-full blur-sm animate-pulse"></div>
                   </div>
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:-translate-y-1 duration-300 hover:shadow-2xl hover:shadow-orange-500/5">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 shrink-0">
                       <span className="material-icons-round text-2xl">lens_blur</span>
                    </div>
                    <div className="flex-1 w-full">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Concept Capture</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 text-sm">
                        Import transcripts, whiteboard photos, or voice memos.
                      </p>
                      
                      {/* Pro Tip */}
                      <div className="bg-[#FFF8F3] dark:bg-orange-950/10 border border-orange-100 dark:border-orange-900/20 rounded-2xl p-5 mb-4 relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-2 opacity-10">
                            <span className="material-icons-round text-6xl text-orange-500 -rotate-12">lightbulb</span>
                         </div>
                         <div className="flex items-center gap-2 mb-2 relative z-10">
                            <span className="material-icons-round text-orange-500 text-xs">tips_and_updates</span>
                            <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">PRO TIP</span>
                         </div>
                         <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-relaxed relative z-10">
                           "Use AI voice commands to dictate edge cases directly into the spec flow."
                         </p>
                      </div>

                      {/* Supported Formats */}
                      <div className="flex gap-2">
                        {['audio_file', 'image', 'description'].map((icon, i) => (
                           <div key={i} className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center gap-1.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                              <span className="material-icons-round text-[16px]">{icon}</span>
                              <span className="text-[10px] font-bold uppercase hidden sm:block">{['Audio', 'Image', 'Text'][i]}</span>
                           </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: AI Reasoning */}
              <div className="relative pl-24 sm:pl-32 group">
                {/* Node */}
                <div className="absolute left-8 sm:left-10 top-12 -translate-x-1/2">
                    <div className="w-4 h-4 bg-teal-400 rounded-full ring-4 ring-white dark:ring-slate-950 z-10 shadow-sm transition-transform duration-300 group-hover:scale-125"></div>
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:-translate-y-1 duration-300 hover:shadow-2xl hover:shadow-teal-500/5">
                   <div className="flex flex-col sm:flex-row gap-6 items-start">
                     <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-primary shrink-0">
                       <span className="material-icons-round text-2xl">query_stats</span>
                     </div>
                     <div className="flex-1 w-full">
                       <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">AI Reasoning</h3>
                       <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm mb-6">
                         Identifying logic gaps and mapping data flows.
                       </p>
                       <div className="flex flex-wrap gap-2">
                          {['Gap Analysis', 'Schema Mapping', 'Logic Check'].map((tag, i) => (
                             <span key={i} className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/10 text-teal-600 dark:text-teal-400 text-[10px] font-bold uppercase tracking-wider border border-teal-100 dark:border-teal-900/20">
                                {tag}
                             </span>
                          ))}
                       </div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Step 3: Dev Export */}
              <div className="relative pl-24 sm:pl-32 group">
                {/* Node */}
                <div className="absolute left-8 sm:left-10 top-12 -translate-x-1/2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full ring-4 ring-white dark:ring-slate-950 z-10 shadow-sm transition-transform duration-300 group-hover:scale-125"></div>
                </div>

                 {/* Card */}
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:-translate-y-1 duration-300 hover:shadow-2xl hover:shadow-blue-500/5">
                   <div className="flex flex-col sm:flex-row gap-6 items-start">
                     <div className="w-14 h-14 rounded-2xl bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                       <span className="material-icons-round text-2xl">developer_mode</span>
                     </div>
                     <div className="flex-1 w-full">
                       <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Dev Export</h3>
                       <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm mb-6">
                         Instant export to your favorite dev tools.
                       </p>
                       
                       <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Syncs with</span>
                          <div className="flex gap-3">
                             <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold shadow-sm" title="Jira">J</div>
                             <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold shadow-sm" title="Linear">L</div>
                             <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-white text-[10px] font-bold shadow-sm" title="GitHub">
                               <span className="material-icons-round text-[12px]">code</span>
                             </div>
                          </div>
                       </div>
                     </div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary to-teal-700 p-16 rounded-[3rem] text-center relative overflow-hidden shadow-2xl shadow-primary/30">
            {/* Background Effects */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                Start Building Now
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                Ready to automate your specs?
              </h2>
              <button 
                onClick={() => navigate('/generate')}
                className="px-10 py-5 bg-white text-teal-700 text-lg rounded-2xl font-black shadow-2xl shadow-black/10 active:scale-95 transition-all hover:bg-slate-50 hover:scale-105"
              >
                Get Started for Free
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorksPage;