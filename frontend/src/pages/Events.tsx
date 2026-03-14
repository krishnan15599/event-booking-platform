import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard, { type EventData } from '../components/EventCard';

const ALL_EVENTS: EventData[] = [
  {
    id: 1, title: "Summer Music Festival 2026", date: "July 12, 2026", location: "Central Park, NY", price: "45", category: "Music",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2, title: "Global Tech Summit", date: "Aug 05, 2026", location: "Convention Center, SF", price: "199", category: "Tech",
    image: "https://images.unsplash.com/photo-1540575861501-7c0f110f6f3b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3, title: "Photography Workshop", date: "Sept 15, 2026", location: "Art Studio, London", price: "0", category: "Workshops",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4, title: "Yoga & Wellness Retreat", date: "Oct 10, 2026", location: "Alps, Switzerland", price: "250", category: "Health",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5, title: "Art & Culture Expo", date: "Nov 20, 2026", location: "Grand Gallery, Paris", price: "30", category: "Culture",
    image: "https://images.unsplash.com/photo-1492033204854-44b3e390c279?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6, title: "Startup Pitch Night", date: "Dec 01, 2026", location: "Innovation Hub, Berlin", price: "15", category: "Tech",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Navbar />
      <main className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-slate-900 mb-8 mt-10">Discover Events</h1>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {['All', 'Music', 'Tech', 'Workshops', 'Sports', 'Culture'].map(cat => (
            <button key={cat} className="px-6 py-2 rounded-full border border-slate-200 bg-white font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_EVENTS.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
