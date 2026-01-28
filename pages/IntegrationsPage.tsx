import React, { useState } from 'react';

const IntegrationsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Management', 'Development', 'Communication', 'Documentation'];
  
  const tools = [
    { name: 'Jira', icon: 'view_kanban', category: 'Management', desc: 'Sync stories and subtasks.' },
    { name: 'Linear', icon: 'list_alt', category: 'Management', desc: 'Streamlined issue tracking.' },
    { name: 'GitHub', icon: 'code', category: 'Development', desc: 'Convert specs to issues.' },
    { name: 'GitLab', icon: 'source', category: 'Development', desc: 'Pipelines and issues sync.' },
    { name: 'Slack', icon: 'chat_bubble_outline', category: 'Communication', desc: 'Instant notifications.' },
    { name: 'Notion', icon: 'description', category: 'Documentation', desc: 'Beautiful spec pages.' },
    { name: 'Confluence', icon: 'library_books', category: 'Documentation', desc: 'Enterprise knowledge base.' },
    { name: 'Figma', icon: 'brush', category: 'Development', desc: 'Embed design contexts.' },
  ];

  const filteredTools = activeCategory === 'All' ? tools : tools.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <section className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">Integrations</span>
          <h1 className="text-5xl md:text-7xl font-black text-text-dark dark:text-white mb-6 leading-tight">
            Connect your<br/><span className="text-primary">entire stack.</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            SpecFlow works where you work. We bridge the gap between abstract ideas and the tools your team uses daily.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar py-2 justify-center flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat 
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg' 
                  : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-slate-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24 animate-in fade-in duration-500">
          {filteredTools.map((tool, i) => (
            <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="flex justify-between items-start mb-6">
                 <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                   <span className="material-icons-round text-slate-700 dark:text-slate-300 text-3xl">{tool.icon}</span>
                 </div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{tool.category}</span>
              </div>
              <h3 className="text-xl font-black mb-2 dark:text-white">{tool.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{tool.desc}</p>
            </div>
          ))}
          
          <div className="p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2rem] flex flex-col items-center justify-center text-center group cursor-pointer active:scale-95 transition-transform hover:bg-slate-50 dark:hover:bg-slate-800/50">
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons-round text-slate-400 group-hover:text-primary transition-colors text-2xl">add</span>
            </div>
            <p className="text-slate-400 font-bold group-hover:text-primary transition-colors text-sm">Request Integration</p>
          </div>
        </section>

        <section className="mt-12">
          <div className="bg-gradient-to-br from-primary to-teal-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Developing your own tools?</h2>
              <p className="text-white/90 text-lg mb-10 leading-relaxed max-w-lg font-medium">
                Our robust API allows you to build custom ingest and export pipelines directly into SpecFlow.
              </p>
              <button className="bg-white text-primary px-10 py-4 rounded-2xl font-black text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                View API Documentation
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntegrationsPage;