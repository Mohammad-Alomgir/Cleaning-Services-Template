
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
          <h1 className="text-5xl font-extrabold mb-4">About Our Company</h1>
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
             <img src="https://plus.unsplash.com/premium_photo-1679500354595-0feead204a28?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cleaning" className="rounded-2xl shadow-lg mt-12" />
             <img src="https://images.unsplash.com/photo-1713110824336-f78c320dcf8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cleaning" className="rounded-2xl shadow-lg" />
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

      
    </div>
  );
};

export default About;
