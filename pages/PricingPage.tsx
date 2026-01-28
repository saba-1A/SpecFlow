import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); 
  const navigate = useNavigate();

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We specialize in AI solutions, including machine learning models, automation, chatbots, predictive analytics, and consulting tailored to your business needs."
    },
    {
      question: "How long does it take to develop an AI solution?",
      answer: "Timeline depends on complexity. Simple automations take 2-3 weeks, while custom ML models may take 2-4 months. We provide a timeline after the initial audit."
    },
    {
      question: "Do I need technical expertise to work with you?",
      answer: "No, you don't. We handle the technical heavy lifting. We just need your domain expertise to understand the problem we are solving."
    },
    {
      question: "Is my data safe when working with your agency?",
      answer: "Absolutely. We sign NDAs before starting and follow strict security protocols (SOC2 compliant) to ensure your proprietary data remains confidential."
    },
    {
      question: "Can AI really help my business grow?",
      answer: "Yes. By automating repetitive tasks and providing data-driven insights, our clients typically see a 30-50% increase in operational efficiency within the first year."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- Icons ---
  const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <>
      {/* INJECTED FONTS (Redundant safety check) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Geist:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div className="min-h-screen relative overflow-x-hidden pt-28 pb-32 font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-slate-100 selection:bg-indigo-500/20">
        
        {/* --- GLOBAL BACKGROUND AMBIENCE (Matched to Code 2) --- */}
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

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* --- Header & Toggle --- */}
          <section className="flex flex-col items-center text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-['Inter+Tight'] font-black tracking-tighter text-slate-900 dark:text-white mb-6 drop-shadow-sm">
              Pricing Plans
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-['Plus_Jakarta_Sans'] font-medium max-w-2xl mb-12">
              Choose the perfect plan for your product development lifecycle.
            </p>

            {/* Solid Toggle Switch */}
            <div className="p-1 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 inline-flex relative">
               <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-slate-900 dark:bg-indigo-600 rounded-full shadow transition-all duration-300 ease-out ${isAnnual ? 'translate-x-[100%] left-1' : 'translate-x-0 left-1'}`}></div>
               <button onClick={() => setIsAnnual(false)} className={`w-32 py-2.5 rounded-full text-sm font-['Plus_Jakarta_Sans'] font-bold relative z-10 transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'}`}>Monthly</button>
               <button onClick={() => setIsAnnual(true)} className={`w-32 py-2.5 rounded-full text-sm font-['Plus_Jakarta_Sans'] font-bold relative z-10 transition-colors ${isAnnual ? 'text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'}`}>
                  Yearly <span className={`text-[10px] font-['Geist'] ml-1 ${isAnnual ? 'text-green-300' : 'text-green-600'}`}>-20%</span>
               </button>
            </div>
          </section>

          {/* --- PRICING CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-40 items-stretch">
            
            {/* 1. Starter */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-['Inter+Tight'] font-bold text-slate-900 dark:text-white mb-2">Starter</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium font-['Plus_Jakarta_Sans'] mb-6">Essential tools for individuals.</p>
              <div className="mb-8">
                <span className="text-5xl font-['Inter+Tight'] font-black text-slate-900 dark:text-white tracking-tighter">$0</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['5 Specs per month', 'Basic AI Engine', 'PDF Export', 'Community Support'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 font-['Plus_Jakarta_Sans']">
                    <div className="mt-0.5 p-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"><CheckIcon /></div>
                    {item}
                  </li>
                ))}
              </ul>

              <button onClick={() => navigate('/generate')} className="w-full py-3.5 rounded-xl border-2 border-slate-100 dark:border-slate-800 font-['Plus_Jakarta_Sans'] font-bold text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                Start for Free
              </button>
            </div>

            {/* 2. Pro (UPDATED) */}
            <div className="flex flex-col relative md:-mt-6 z-10">
              <div className="absolute inset-0 rounded-[2rem] bg-indigo-50/60 dark:bg-slate-800/60 backdrop-blur-2xl border border-indigo-100 dark:border-slate-600 shadow-2xl shadow-indigo-500/10"></div>
              
              <div className="relative flex flex-col h-full p-8 rounded-[2rem]">
                  <div className="absolute top-0 right-0 p-6">
                      <span className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-[10px] font-['Geist'] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">Popular</span>
                  </div>
                  
                  <h3 className="text-xl font-['Inter+Tight'] font-bold text-slate-900 dark:text-white mb-2">Pro</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium font-['Plus_Jakarta_Sans'] mb-6">Power features for teams.</p>
                  
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-6xl font-['Inter+Tight'] font-black text-slate-900 dark:text-white tracking-tighter">${isAnnual ? '19' : '24'}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium font-['Plus_Jakarta_Sans']">/mo</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                  {['Unlimited Specs', 'Advanced AI Models', 'Jira & Linear Sync', 'Priority Support', 'Team Collaboration'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700 dark:text-slate-200 font-['Plus_Jakarta_Sans']">
                      <div className="mt-0.5 p-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400"><CheckIcon /></div>
                      {item}
                      </li>
                  ))}
                  </ul>

                  {/* --- UPDATE: GOES TO BILLING PAGE --- */}
                  <button 
                    onClick={() => navigate('/billing')} 
                    className="group relative w-full py-4 rounded-xl overflow-hidden shadow-xl shadow-slate-900/10 transition-all active:scale-95"
                  >
                    <div className="absolute inset-0 bg-slate-900 dark:bg-indigo-600 transition-colors"></div>
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 text-white font-['Plus_Jakarta_Sans'] font-bold flex items-center justify-center gap-2">
                        Get Started <span className="material-icons-round text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                  </button>
              </div>
            </div>

            {/* 3. Enterprise (UPDATED) */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-['Inter+Tight'] font-bold text-slate-900 dark:text-white mb-2">Enterprise</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium font-['Plus_Jakarta_Sans'] mb-6">Security & control for scale.</p>
              <div className="mb-8">
                <span className="text-4xl font-['Inter+Tight'] font-black text-slate-900 dark:text-white tracking-tighter">Custom</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['SSO & SCIM', 'Dedicated Support', 'Custom Contracts', 'SLA Guarantees', 'On-Premise Options'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 font-['Plus_Jakarta_Sans']">
                    <div className="mt-0.5 p-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"><CheckIcon /></div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* --- UPDATE: GOES TO CONTACT PAGE --- */}
              <button 
                onClick={() => navigate('/contact')} 
                className="w-full py-3.5 rounded-xl border-2 border-slate-100 dark:border-slate-800 font-['Plus_Jakarta_Sans'] font-bold text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>

          {/* --- FAQ SECTION --- */}
          <section className="max-w-7xl mx-auto mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32 text-left">
                  <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-[10px] font-['Geist'] font-extrabold tracking-widest text-indigo-500 uppercase mb-6">
                    Support
                  </span>
                  <h2 className="text-4xl md:text-5xl font-['Inter+Tight'] font-black text-slate-900 dark:text-white mb-6 leading-tight">
                    Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Questions</span>
                  </h2>
                  <p className="text-lg text-slate-500 dark:text-slate-400 font-['Plus_Jakarta_Sans'] font-medium mb-8 leading-relaxed">
                    Everything you need to know about the product and billing. Can't find the answer you're looking for?
                  </p>
                  
                  <a 
                    href="mailto:support@specflow.com"
                    className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-['Plus_Jakarta_Sans'] font-bold border-b-2 border-slate-200 dark:border-slate-700 pb-1 hover:border-indigo-500 hover:text-indigo-600 transition-all group"
                  >
                    Chat to our support team
                    <span className="material-icons-round text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {faqData.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div 
                      key={index} 
                      onClick={() => toggleFaq(index)}
                      className={`
                        group cursor-pointer rounded-2xl border transition-all duration-300 ease-in-out overflow-hidden
                        ${isOpen 
                          ? 'bg-white dark:bg-slate-800 border-indigo-500/30 ring-4 ring-indigo-500/5 shadow-xl shadow-indigo-500/10' 
                          : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-800'
                        }
                      `}
                    >
                      <div className="p-6 flex items-start gap-4">
                        <div className={`
                          mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300
                          ${isOpen ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600'}
                        `}>
                          {isOpen ? (
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M20 12H4"/></svg>
                          ) : (
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M12 4v16m8-8H4"/></svg>
                          )}
                        </div>

                        <div className="flex-1">
                          <h4 className={`text-lg font-['Inter+Tight'] font-bold transition-colors duration-300 ${isOpen ? 'text-indigo-900 dark:text-indigo-100' : 'text-slate-900 dark:text-white'}`}>
                            {faq.question}
                          </h4>
                          
                          <div 
                            className={`
                              grid transition-all duration-300 ease-in-out
                              ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}
                            `}
                          >
                            <div className="overflow-hidden">
                              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-['Plus_Jakarta_Sans'] font-medium">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default PricingPage;