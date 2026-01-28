
import React, { useState } from 'react';

const BlogPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const posts = [
    {
      title: 'How AI is Redefining the PRD in 2024',
      category: 'Product',
      date: 'March 15, 2024',
      author: 'Alex Rivera',
      img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
      desc: 'The traditional product requirement document is dying. Here is how generative AI is replacing static docs with dynamic blueprints.'
    },
    {
      title: 'Bridging the Gap: Designers vs Engineers',
      category: 'Culture',
      date: 'March 10, 2024',
      author: 'Elena Vance',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      desc: 'Tips and tricks on how to use SpecFlow to ensure your UI/UX intent is perfectly translated into technical acceptance criteria.'
    },
    {
      title: 'Building a Scalable Microservices Architecture',
      category: 'Engineering',
      date: 'March 05, 2024',
      author: 'Sarah Chen',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      desc: 'A deep dive into using AI-driven specs to map out complex backend dependencies across distributed systems.'
    },
    {
      title: 'Why Voice-to-Spec is the Future of PM',
      category: 'AI',
      date: 'Feb 28, 2024',
      author: 'Marcus Bell',
      img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
      desc: 'Stop typing, start talking. How we trained our multi-speaker model to handle messy boardroom brainstorms.'
    }
  ];

  const categories = ['All', 'Product', 'Engineering', 'Culture', 'AI'];
  const filteredPosts = activeTab === 'All' ? posts : posts.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 animate-in fade-in duration-700">
          <h4 className="text-accent-teal text-[11px] font-black uppercase tracking-[0.2em] mb-4">The Journal</h4>
          <h1 className="text-5xl md:text-7xl font-black mb-8 dark:text-white tracking-tight">Insights on AI <br/>and Product.</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
            Explore articles about product management, artificial intelligence, and building better software together.
          </p>
        </div>

        {/* Featured Post */}
        <section className="mb-24 relative group cursor-pointer">
          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900">
            <img src={posts[0].img} alt="Featured" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
               <div className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6 w-fit">
                 Featured Article
               </div>
               <h2 className="text-white text-3xl md:text-5xl font-black mb-4 max-w-3xl leading-tight">{posts[0].title}</h2>
               <p className="text-white/80 text-lg max-w-2xl font-medium mb-8 hidden md:block">{posts[0].desc}</p>
               <div className="flex items-center gap-4 text-white font-bold">
                 <span className="material-symbols-outlined">arrow_forward_circle</span>
                 Read Featured Article
               </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-black transition-all border ${
                activeTab === cat 
                ? 'bg-accent-teal text-white border-accent-teal shadow-lg shadow-accent-teal/20' 
                : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-500 hover:border-accent-teal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, i) => (
            <div key={i} className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all bg-slate-100 dark:bg-slate-800">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent-teal text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                <span className="size-1 rounded-full bg-slate-300"></span>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
              </div>
              <h3 className="text-2xl font-black mb-4 dark:text-white leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                {post.desc}
              </p>
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} />
                </div>
                <span className="text-xs font-black dark:text-white">{post.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter In-Feed */}
        <div className="mt-32 p-12 md:p-20 bg-primary rounded-[3.5rem] text-white text-center shadow-2xl overflow-hidden relative">
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
           <div className="relative z-10 max-w-xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-black mb-6">Stay ahead of the curve.</h2>
             <p className="text-white/80 font-medium mb-10">Get the latest AI insights and product management blueprints delivered to your inbox every Tuesday.</p>
             <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
               <input type="email" placeholder="Email address" className="flex-1 h-14 bg-white/10 border border-white/20 rounded-2xl px-6 placeholder:text-white/50 focus:ring-2 focus:ring-white outline-none" required />
               <button className="bg-white text-primary px-10 h-14 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-xl">
                 Subscribe
               </button>
             </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
