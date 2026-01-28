// pages/GeneratorPage.tsx
import React, { useState, useRef } from 'react';
// Import from the sibling services folder
import { generateSpecFromIdea, SpecResult } from '../services/groqService';

const GeneratorPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SpecResult | null>(null);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- HANDLERS ---

  const handleGenerate = async () => {
    if (!input.trim() && !selectedImage) return;
    setLoading(true);
    setResult(null); // Clear previous result while loading
    
    try {
      const data = await generateSpecFromIdea(input, selectedImage || undefined);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert('Error generating spec. Please check your API key in console.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleMicClick = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput((prev) => prev + (prev.length > 0 ? ' ' : '') + transcript);
      };

      recognition.start();
    } else {
      alert("Voice input is not supported in this browser.");
    }
  };

  return (
    // CHANGED: Added 'pb-40' here to create lots of space at the bottom
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden pt-28 pb-40 relative font-sans text-slate-900 dark:text-slate-100">
      
      {/* --- GLOBAL BACKGROUND --- */}
      <div className="fixed inset-0 -z-10 bg-[#f8fafc] dark:bg-[#0B0F19]">
          <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-purple-300/40 dark:bg-purple-900/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-300/40 dark:bg-indigo-900/20 rounded-full blur-[100px] animate-pulse delay-75"></div>
      </div>

      {/* Left Panel: Chat Interface */}
      <section className="flex-1 flex flex-col h-[calc(100vh-112px)] m-4 mb-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[40px] border border-white/80 dark:border-slate-700 shadow-xl overflow-hidden relative z-10">
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 dark:bg-white flex items-center justify-center flex-none shadow-lg">
              <span className="material-icons-round text-white dark:text-slate-900 text-xl">smart_toy</span>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-8 rounded-[30px] rounded-tl-none border border-white/50 dark:border-slate-700">
              <h3 className="font-extrabold text-slate-900 dark:text-white mb-2 text-lg">SpecFlow Agent</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Describe your idea. I'll handle the technical detailing.
              </p>
            </div>
          </div>
        </div>
        
        {/* Input Area */}
        <div className="p-6 bg-white/40 dark:bg-slate-900/40 border-t border-white/50 dark:border-slate-800 backdrop-blur-md">
           
           {selectedImage && (
             <div className="mb-4 relative inline-block animate-in fade-in zoom-in duration-300">
               <img src={selectedImage} alt="Context" className="h-24 rounded-2xl border border-white dark:border-slate-600 shadow-md" />
               <button 
                 onClick={removeImage}
                 className="absolute -top-2 -right-2 bg-slate-900 text-white rounded-full p-1 shadow-md hover:bg-red-500 transition-colors flex items-center justify-center w-6 h-6"
               >
                 <span className="material-icons-round text-[14px]">close</span>
               </button>
             </div>
           )}

           <div className={`bg-white dark:bg-slate-800 rounded-[30px] p-2 border border-slate-200 dark:border-slate-700 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all ${isListening ? 'ring-2 ring-red-500/50' : ''}`}>
             
             <textarea 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleGenerate(); }}}
               className="w-full bg-transparent border-none text-base focus:ring-0 placeholder:text-slate-400 text-slate-900 dark:text-white min-h-[80px] resize-none p-4 font-medium outline-none" 
               placeholder={isListening ? "Listening..." : "Describe your feature e.g., 'A user profile page with avatar upload'..."}
             />
             
             <div className="flex justify-between items-center px-2 pb-2">
                <div className="flex gap-1">
                   <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                   <button onClick={handleImageClick} className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-400 transition-colors">
                      <span className="material-icons-round text-xl">add_photo_alternate</span>
                   </button>
                   <button onClick={handleMicClick} className={`p-3 rounded-full transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400'}`}>
                      <span className="material-icons-round text-xl">{isListening ? 'mic_off' : 'mic'}</span>
                   </button>
                </div>
                <button 
                  onClick={handleGenerate}
                  disabled={loading || (!input.trim() && !selectedImage)}
                  className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Thinking...' : <>Generate <span className="material-icons-round text-lg">arrow_upward</span></>}
                </button>
             </div>
           </div>
        </div>
      </section>

      {/* Right Panel: Spec Preview */}
      <section className="flex-1 h-[calc(100vh-112px)] m-4 mb-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[40px] border border-white/80 dark:border-slate-700 shadow-xl overflow-y-auto relative hidden md:block">
        {!result && !loading && (
           <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 pointer-events-none">
             <span className="material-icons-round text-6xl mb-4 opacity-50">description</span>
             <p className="text-sm font-bold uppercase tracking-widest opacity-70">Spec Preview Area</p>
           </div>
        )}

        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm z-20 rounded-[40px]">
            <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
            <p className="text-xs font-bold text-indigo-500 animate-pulse tracking-widest">GENERATING TECHNICAL SPEC...</p>
          </div>
        )}

        {result && (
          <div className="p-10">
            <div className="bg-white dark:bg-slate-800 p-12 rounded-[30px] shadow-sm border border-slate-100 dark:border-slate-700 min-h-[800px]">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">{result.title}</h1>
              
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium mb-12">{result.summary}</p>

                {result.userStories && (
                  <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 mb-10 border border-slate-100 dark:border-slate-700">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                      <span className="material-icons-round text-indigo-500">person</span> User Stories
                    </h3>
                    <ul className="space-y-4 m-0 p-0 list-none">
                      {result.userStories.map((story, i) => (
                        <li key={i} className="flex gap-4 text-base font-medium text-slate-700 dark:text-slate-200">
                          <span className="text-indigo-500 font-black text-lg">•</span>{story}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.acceptanceCriteria && (
                   <div className="mb-14">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                      <span className="material-icons-round text-indigo-500">check_circle</span> Acceptance Criteria
                    </h3>
                    <div className="space-y-4">
                      {result.acceptanceCriteria.map((ac, i) => (
                        <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-sm">
                          <div className="w-5 h-5 rounded-md border-2 border-slate-200 dark:border-slate-600 flex-none mt-0.5"></div>
                          <span className="text-base font-medium text-slate-700 dark:text-slate-200">{ac}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {result.technicalNotes && (
                  <div className="bg-slate-900 dark:bg-black text-slate-300 rounded-3xl p-8 font-mono text-sm leading-relaxed overflow-x-auto shadow-inner border border-slate-800">
                     <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Technical Notes</h3>
                     <pre className="whitespace-pre-wrap">{result.technicalNotes}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default GeneratorPage;