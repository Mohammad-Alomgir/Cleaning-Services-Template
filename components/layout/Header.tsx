
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full relative z-50">
      {/* Top Bar */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-600">
          <div className="flex space-x-6 items-center">
            <span className="font-medium text-spark-blue">Welcome to our Spark Cleaning Service!</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-spark-blue"><Facebook size={14} /></a>
              <a href="#" className="hover:text-spark-blue"><Twitter size={14} /></a>
              <a href="#" className="hover:text-spark-blue"><Instagram size={14} /></a>
              <a href="#" className="hover:text-spark-blue"><Linkedin size={14} /></a>
            </div>
          </div>
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-spark-blue" />
              <span>(+123) 5462 3257</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-spark-blue" />
              <span>hello@sparkcleaning.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-spark-blue" />
              <span>380 Albert St, Melbourne</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className={`${isScrolled ? 'fixed top-0 left-0 bg-white shadow-md py-3' : 'relative bg-white py-5'} w-full transition-all duration-300`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-spark-blue rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-spark-cyan transition-colors">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-spark-blue tracking-tight leading-none">SPARK</span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mt-0.5">Cleaning</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 font-semibold text-[15px] transition-colors hover:text-spark-blue ${
                  isActive(link.path) ? 'text-spark-blue' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="ml-6 bg-spark-blue hover:bg-spark-cyan text-white px-7 py-3 rounded-md font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-4 animate-in slide-in-from-top">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-semibold py-2 px-4 rounded-md ${
                    isActive(link.path) ? 'bg-blue-50 text-spark-blue' : 'text-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-spark-blue text-white text-center py-3 rounded-md font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
