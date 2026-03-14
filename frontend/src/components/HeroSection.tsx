export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-white/5">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] bg-violet-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
          Discover & Book <br />
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Amazing Events
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
          Experience the best concerts, tech conferences, and workshops in your city. All in one place.
        </p>

        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative group">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search for events, concerts, or workshops..." 
              className="w-full pl-12 pr-6 py-4.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all backdrop-blur-sm"
            />
          </div>
          <button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-10 py-4.5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all active:scale-95">
            Explore Events
          </button>
        </div>
      </div>
    </section>
  );
}
