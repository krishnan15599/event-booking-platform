export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-black text-white mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent inline-block">
              EventHub
            </h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              Making it easier for everyone to find and host incredible events globally.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Platform</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Find Events</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Host Event</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-slate-400 mb-6 font-medium">Get the latest events in your inbox.</p>
            <div className="flex gap-2">
              <input type="text" placeholder="Email address" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
              <button className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            &copy; 2026 EventHub Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Social Icons Placeholders */}
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
