
import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Residential', 'Commercial', 'Plumbing', 'Windows'];
  
  const galleryItems = [
    { id: 1, category: 'Residential', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJcc-CJmmOPtlkTMudR76iL9tZAWArOaGMw&s' },
    { id: 2, category: 'Commercial', image: 'https://img.freepik.com/free-photo/full-shot-men-cleaning-office_23-2149345516.jpg?semt=ais_hybrid&w=740&q=80' },
    { id: 3, category: 'Plumbing', image: 'https://procrewschedule.com/wp-content/uploads/2020/06/plumber-at-work-in-a-bathroom-1024x683-1.jpg' },
    { id: 4, category: 'Windows', image: 'https://www.bondcleaningincanberra.com.au/wp-content/uploads/2019/12/windowcleaningservices-main_orig-1.jpg' },
    { id: 5, category: 'Residential', image: 'https://www.gracehomecleaning.com/wp-content/uploads/2017/10/Not-All-Residential-Cleaning-Professionals-are-Created-Equal-Grace-Home-Cleaning-1.jpg' },
    { id: 6, category: 'Commercial', image: 'https://cdn.prod.website-files.com/60ff934f6ded2d17563ab9dd/61392d65ed61542d1d11f13b_commercial-cleaning-business.jpeg' },
    { id: 7, category: 'Plumbing', image: 'https://lirp.cdn-website.com/2914e64f/dms3rep/multi/opt/5+Important+Plumbing+Services+You+Should+Know+About-1920w.jpg' },
    { id: 8, category: 'Windows', image: 'https://skbuildingservices.com/wp-content/uploads/2023/02/What-kind-of-soap-do-professional-window-washers-use_-scaled-1.jpeg' },
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
