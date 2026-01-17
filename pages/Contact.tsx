
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-[#0b1b36] py-20 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-gray-400">Get in touch for a custom quote or service inquiry.</p>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            <div className="bg-gray-50 p-10 rounded-2xl text-center group hover:bg-white hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 text-spark-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-spark-blue group-hover:text-white transition-all">
                <MapPin size={28} />
              </div>
              <h4 className="text-xl font-extrabold mb-4">Office Address</h4>
              <p className="text-gray-500">2 Holt Street, Surry Hills,<br/>Australia.</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl text-center group hover:bg-white hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 text-spark-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-spark-blue group-hover:text-white transition-all">
                <Phone size={28} />
              </div>
              <h4 className="text-xl font-extrabold mb-4">Telephone Number</h4>
              <p className="text-gray-500">1-888-452-1505<br/>(+123) 5462 3257</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl text-center group hover:bg-white hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 text-spark-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-spark-blue group-hover:text-white transition-all">
                <Mail size={28} />
              </div>
              <h4 className="text-xl font-extrabold mb-4">Mail Address</h4>
              <p className="text-gray-500">help@sparkcleaning.com<br/>info@mail.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                subtitle="Get a free estimate" 
                title="Send us a message for any inquiry." 
              />
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="First Name*" className="w-full bg-gray-50 border-none rounded py-4 px-5 focus:ring-2 focus:ring-spark-blue outline-none" required />
                  <input type="text" placeholder="Last Name*" className="w-full bg-gray-50 border-none rounded py-4 px-5 focus:ring-2 focus:ring-spark-blue outline-none" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="email" placeholder="Mail Address*" className="w-full bg-gray-50 border-none rounded py-4 px-5 focus:ring-2 focus:ring-spark-blue outline-none" required />
                  <input type="tel" placeholder="Phone Number*" className="w-full bg-gray-50 border-none rounded py-4 px-5 focus:ring-2 focus:ring-spark-blue outline-none" required />
                </div>
                <select className="w-full bg-gray-50 border-none rounded py-4 px-5 focus:ring-2 focus:ring-spark-blue outline-none text-gray-400">
                  <option>Choose Services</option>
                  <option>House Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Window Cleaning</option>
                </select>
                <textarea placeholder="Message..." rows={4} className="w-full bg-gray-50 border-none rounded py-4 px-5 focus:ring-2 focus:ring-spark-blue outline-none resize-none"></textarea>
                <button type="submit" className="bg-spark-blue hover:bg-spark-cyan text-white px-10 py-4 rounded font-bold transition-all shadow-lg flex items-center space-x-3">
                  <span>Send us message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
            <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                 <div className="text-center p-8 bg-white rounded-xl shadow-xl max-w-xs">
                    <MapPin className="text-spark-blue mx-auto mb-4" size={40} />
                    <h5 className="text-xl font-extrabold mb-2">Find Us Here</h5>
                    <p className="text-gray-500 text-sm">Visit our main headquarters in the heart of Melbourne.</p>
                 </div>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1575.4852924408616!2d144.96328!3d-37.808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b881efdf3d%3A0x6d97c0f1665a0c3b!2sAlbert%20St%2C%20East%20Melbourne%20VIC%203002!5e0!3m2!1sen!2sau!4v1654321234567!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0, opacity: 0.6 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
