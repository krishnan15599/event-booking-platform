import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              EventHub
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Home</Link>
            <Link to="/events" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Events</Link>
            <Link to="/about" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">About</Link>
            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95">
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" className="block px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-xl">Home</Link>
            <Link to="/events" className="block px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-xl">Events</Link>
            <Link to="/about" className="block px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-xl">About</Link>
            <div className="pt-4">
              <button className="w-full bg-indigo-600 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-200">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
