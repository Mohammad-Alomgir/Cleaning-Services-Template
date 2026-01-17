
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-[#0b1b36] py-20 text-white relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">Our Premium Services</h1>
          <p className="text-gray-400">Professional cleaning solutions for every need.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative h-60 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-lg text-spark-blue shadow-lg group-hover:bg-spark-blue group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-[#0b1b36] mb-4 group-hover:text-spark-blue transition-colors">{service.title}</h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {['24/7 Service', 'Expert Workers', 'Satisfaction Guaranteed'].map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-sm text-gray-600 font-medium">
                        <CheckCircle size={14} className="text-spark-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center space-x-2 font-bold text-spark-blue hover:text-spark-cyan transition-colors uppercase text-xs tracking-widest">
                    <a href="/contact">Service Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="How we work" title="Our Professional Process" centered />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Schedule Online', desc: 'Easily book your appointment through our website.' },
              { step: '02', title: 'Expert Team Arrives', desc: 'Our certified professionals arrive at your doorstep.' },
              { step: '03', title: 'Deep Cleaning', desc: 'We clean every corner with premium products.' },
              { step: '04', title: 'Relax & Enjoy', desc: 'Your space is spotless, safe, and sparkling.' },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-8 inline-block">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center text-3xl font-extrabold text-gray-200 group-hover:border-spark-blue group-hover:text-spark-blue transition-all">
                    {item.step}
                  </div>
                  {i < 3 && <div className="hidden lg:block absolute top-10 -right-20 w-16 bg-gray-100"></div>}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
