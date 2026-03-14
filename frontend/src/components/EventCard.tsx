export type EventData = {
  id: number;
  title: string;
  date: string;
  location: string;
  price: string;
  image: string;
  category: string;
};

export default function EventCard({ event }: { event: EventData }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-indigo-200 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 uppercase tracking-wider shadow-sm">
            {event.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-slate-500 text-sm mb-2 space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">{event.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 truncate group-hover:text-indigo-600 transition-colors">
          {event.title}
        </h3>
        
        <div className="flex items-center text-slate-500 text-sm mb-6 space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="truncate">{event.location}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-2xl font-black text-indigo-600">
            {event.price === '0' ? 'Free' : `$${event.price}`}
          </span>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
