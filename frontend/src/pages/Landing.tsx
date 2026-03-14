import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EventCard, { type EventData } from '../components/EventCard';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';

const FEATURED_EVENTS: EventData[] = [
  {
    id: 1,
    title: "Summer Music Festival 2026",
    date: "July 12, 2026",
    location: "Central Park, NY",
    price: "45",
    category: "Music",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Global Tech Summit",
    date: "Aug 05, 2026",
    location: "Convention Center, SF",
    price: "199",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1540575861501-7c0f110f6f3b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Photography Workshop",
    date: "Sept 15, 2026",
    location: "Art Studio, London",
    price: "0",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Yoga & Wellness Retreat",
    date: "Oct 10, 2026",
    location: "Alps, Switzerland",
    price: "250",
    category: "Health",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Navbar />
      
      <main>
        <HeroSection />

        {/* Featured Events Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-4">Featured Events</h2>
                <p className="text-slate-500 font-medium text-lg">Handpicked experiences you shouldn't miss.</p>
              </div>
              <button className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors flex items-center gap-2 group">
                See all events 
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURED_EVENTS.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        <CategorySection />

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[3rem] overflow-hidden bg-indigo-600 px-8 py-20 text-center shadow-2xl shadow-indigo-200">
              {/* Background patterns */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-400/20 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Ready to host your own event?
                </h2>
                <p className="text-indigo-100 text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join thousands of organizers and grow your community with EventHub's professional hosting tools.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl active:scale-95">
                    Start Hosting
                  </button>
                  <button className="bg-indigo-500 text-white border border-indigo-400 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-400 transition-all active:scale-95">
                    View Pricing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
