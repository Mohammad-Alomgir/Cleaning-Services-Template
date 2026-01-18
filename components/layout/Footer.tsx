
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1b36] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-spark-blue rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">SPARK</span>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Cleaning</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              We work with a passion of taking challenges and creating new ones in advertising sector.
            </p>
            <div className="space-y-2">
              <p className="font-bold">Open Hours:</p>
              <p className="text-gray-400">Mon - Sat: 8am - 5 pm,</p>
              <p className="text-gray-400">Sunday: CLOSED</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-spark-blue">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscribe our newsletter to get our latest update & news.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your mail address" 
                className="w-full bg-[#162a4a] border-none rounded py-4 px-5 focus:ring-2 focus:ring-spark-blue transition-all outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-spark-blue p-2.5 rounded hover:bg-spark-cyan transition-colors">
                <Send size={18} />
              </button>
            </form>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-spark-blue hover:border-spark-blue transition-all"><Facebook size={18} /></a>
             
            </div>
          </div>

          {/* Official Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-spark-blue">Official Info:</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="text-spark-blue mt-1 flex-shrink-0" size={18} />
                <span>30 Commercial Road Fratton, Australia</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="text-spark-blue flex-shrink-0" size={18} />
                <span>1-888-452-1505</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="text-spark-blue flex-shrink-0" size={18} />
                <span>envato@gmail.com info@mail.com</span>
              </li>
            </ul>
          </div>

          {/* Instagram Feed Placeholder */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-spark-blue">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/insta${i}/150/150`} 
                  alt="Insta" 
                  className="rounded hover:opacity-80 transition-opacity cursor-pointer w-full h-auto aspect-square object-cover" 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>2026 © All rights reserved by Spark Cleaning</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
