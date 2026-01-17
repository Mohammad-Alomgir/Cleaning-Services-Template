
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { TEAM_MEMBERS } from '../constants';
import { Facebook, Twitter, Instagram, Share2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Page Title */}
      <section className="bg-[#0b1b36] py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-spark-blue opacity-10 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Our Agency</h1>
          <div className="flex items-center justify-center space-x-2 text-spark-cyan font-bold uppercase tracking-widest text-sm">
            <span>Home</span>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
             <img src="https://picsum.photos/seed/about1/400/500" alt="Cleaning" className="rounded-2xl shadow-lg mt-12" />
             <img src="https://picsum.photos/seed/about2/400/500" alt="Cleaning" className="rounded-2xl shadow-lg" />
          </div>
          <div>
            <SectionHeading 
              subtitle="25 Years of Experience" 
              title="We provide the best cleaning for your home!" 
              description="Since our founding, Spark Cleaning has been dedicated to providing top-notch cleaning solutions for residential and commercial spaces. Our journey started with a simple goal: to make professional cleaning accessible and high-quality."
            />
            <p className="text-gray-500 mb-10 leading-relaxed">
              Our team consists of certified professionals who are passionate about hygiene and detail. We use eco-friendly products and the latest technology to ensure your space is not just clean, but safe.
            </p>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-spark-blue font-extrabold text-2xl">
                  98%
                </div>
                <span className="font-bold text-[#0b1b36]">Satisfied<br/>Customers</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-spark-blue font-extrabold text-2xl">
                  25+
                </div>
                <span className="font-bold text-[#0b1b36]">Years in<br/>Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Team Members" 
            title="We have a expert team to serve you." 
            centered 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all relative">
                <div className="relative h-[350px] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-spark-blue bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                       <button className="w-10 h-10 bg-white text-spark-blue rounded-full flex items-center justify-center hover:bg-spark-cyan hover:text-white transition-all"><Facebook size={16} /></button>
                       <button className="w-10 h-10 bg-white text-spark-blue rounded-full flex items-center justify-center hover:bg-spark-cyan hover:text-white transition-all"><Twitter size={16} /></button>
                       <button className="w-10 h-10 bg-white text-spark-blue rounded-full flex items-center justify-center hover:bg-spark-cyan hover:text-white transition-all"><Instagram size={16} /></button>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-extrabold text-[#0b1b36] group-hover:text-spark-blue transition-colors">{member.name}</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">{member.role}</p>
                </div>
                <button className="absolute bottom-6 right-6 w-10 h-10 bg-spark-blue text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-spark-cyan">
                  <Share2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
