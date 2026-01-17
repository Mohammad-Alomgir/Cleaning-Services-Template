
import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Residential', 'Commercial', 'Plumbing', 'Windows'];
  
  const galleryItems = [
    { id: 1, category: 'Residential', image: 'https://picsum.photos/seed/gal1/600/600' },
    { id: 2, category: 'Commercial', image: 'https://picsum.photos/seed/gal2/600/600' },
    { id: 3, category: 'Plumbing', image: 'https://picsum.photos/seed/gal3/600/600' },
    { id: 4, category: 'Windows', image: 'https://picsum.photos/seed/gal4/600/600' },
    { id: 5, category: 'Residential', image: 'https://picsum.photos/seed/gal5/600/600' },
    { id: 6, category: 'Commercial', image: 'https://picsum.photos/seed/gal6/600/600' },
    { id: 7, category: 'Plumbing', image: 'https://picsum.photos/seed/gal7/600/600' },
    { id: 8, category: 'Windows', image: 'https://picsum.photos/seed/gal8/600/600' },
  ];

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="w-full">
      <section className="bg-[#0b1b36] py-20 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">Our Portfolio</h1>
        <p className="text-gray-400">See the sparkling results of our professional work.</p>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all text-sm uppercase tracking-widest ${
                  filter === cat 
                    ? 'bg-spark-blue text-white shadow-lg' 
                    : 'bg-gray-50 text-gray-500 hover:bg-spark-blue hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
                <img src={item.image} alt={item.category} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-spark-blue bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <span className="font-bold uppercase tracking-widest text-sm mb-2">{item.category}</span>
                  <div className="w-10 h-0.5 bg-white mb-2"></div>
                  <h4 className="text-lg font-bold">Sparkling Result</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
