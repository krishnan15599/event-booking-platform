export default function CategorySection() {
  const categories = [
    { name: 'Music', icon: '🎵', color: 'bg-pink-500' },
    { name: 'Tech', icon: '💻', color: 'bg-blue-500' },
    { name: 'Sports', icon: '⚽', color: 'bg-green-500' },
    { name: 'Workshops', icon: '🎨', color: 'bg-orange-500' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Top Categories</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.name} 
              className="flex flex-col items-center p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-xl"
            >
              <div className={`${cat.color} w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                {cat.icon}
              </div>
              <span className="text-xl font-bold text-slate-900">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
