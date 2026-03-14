import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Navbar />
      <main className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-black text-slate-900 mb-8 mt-10">About EventHub</h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
          EventHub is the world's most innovative platform for finding and hosting incredible experiences. 
          Founded in 2026, we empower community leaders, event organizers, and explorers to connect in person and online.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-bold text-xl mb-2">Global</h3>
            <p className="text-slate-500">Connecting people in over 190 countries.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-xl mb-2">Seamless</h3>
            <p className="text-slate-500">Booking an event takes just two clicks.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-bold text-xl mb-2">Trusted</h3>
            <p className="text-slate-500">Secure payments and verified organizers.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
