
import React, { useState, useEffect } from 'react';
import { Settings, Play, CheckCircle2, Star } from 'lucide-react';
import { SERVICES, Feautured, TESTIMONIALS, PRICING_PLANS, TEAM_MEMBERS } from '../constants';
import SectionHeading from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  /* ===================== COUNTER ANIMATION ===================== */
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');

    const animateCounter = (el: Element) => {
      const targetText = el.textContent?.replace('+', '') || '0';
      const target = parseInt(targetText);
      if (isNaN(target)) return;

      let current = 0;
      const speed = 200;

      const update = () => {
        const increment = Math.ceil(target / speed);
        current += increment;

        if (current >= target) {
          el.textContent = target + '+';
        } else {
          el.textContent = current + '+';
          requestAnimationFrame(update);
        }
      };

      update();
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach(counter => observer.observe(counter));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-gray-50 pt-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-no-repeat hidden lg:block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?q=80&w=1171&auto=format&fit=crop')" }}></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>

        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-0.5 bg-spark-blue mr-3"></div>
              <span className="text-spark-blue font-bold uppercase tracking-widest text-sm">We are Spark!</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0b1b36] leading-[1.1] mb-8">
              Best cleaning service in town!
            </h1>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-md">
              As a leading cleaning expert, we help households and organizations maintain spotless environments with premium care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-spark-blue hover:bg-spark-cyan text-white px-8 py-4 rounded-md font-bold text-sm transition-all shadow-xl flex items-center space-x-2">
                <span>Our Services</span>
                <Settings size={18} />
              </Link>
<Link
to="/services"
className="flex items-center space-x-3 text-[#0b1b36] font-bold px-8 py-4 hover:text-spark-blue transition-colors"
>
<div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-spark-blue">
<Play size={16} fill="currentColor" />
</div>
<span>Watch Story</span>
</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-spark-cyan rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Service Cards */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Feautured.map((feautured) => (
              <div key={feautured.id} className="group p-10 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50 hover:border-spark-blue hover:-translate-y-2 transition-all duration-500">
                <div className="w-20 h-20 bg-blue-50 text-spark-blue rounded-full flex items-center justify-center mb-8 group-hover:bg-spark-blue group-hover:text-white transition-all duration-500">
                  {feautured.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0b1b36]">{feautured.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {feautured.description}
                </p>
                <Link to="/services" className="text-spark-blue font-extrabold uppercase text-xs tracking-[0.2em] inline-flex items-center group-hover:text-spark-cyan transition-colors">
                  Read More <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1580256081112-e49377338b7f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Why Choose Us" className="w-full h-auto" />
              <div className="absolute top-6 left-6 bg-spark-blue text-white p-6 rounded-xl shadow-xl">
                <span className="block text-sm font-bold opacity-80 uppercase tracking-widest mb-1">Established</span>
                <span className="block text-3xl font-extrabold">2020</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl p-4 text-center border-8 border-gray-50">
              <span className="text-4xl font-extrabold text-spark-blue">25+</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Services provided</span>
            </div>
          </div>
          <div>
            <SectionHeading
              subtitle="About Cleaning Agency"
              title="Why will you choose our services?"
              description="Spark Cleaning is a premier cleaning agency founded in Australia and expanded our services globally. We provide state-of-the-art cleaning solutions for modern homes and businesses."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {['Professional Team', 'Expert Cleaners', 'Affordable Price', '24/7 Support'].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-spark-blue">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-bold text-[#0b1b36]">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              <div className="p-4 bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <img src="https://picsum.photos/seed/ceo/60/60" alt="CEO" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-bold text-sm">Check how we clean!</h4>
                  <p className="text-xs text-gray-400">Watch our latest cleaning video</p>
                </div>
                <Link
to="/services"
className="flex items-center space-x-3 text-[#0b1b36] font-bold px-8 py-4 hover:text-spark-blue transition-colors"
>
<div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-spark-blue">
<Play size={16} fill="currentColor" />
</div>
</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="What we do" title="Services we provide" centered />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-12">
              {SERVICES.slice(0, 3).map(service => (
                <div key={service.id} className="flex items-start space-x-6 group">
                  <div className="flex-1">
                    <h4 className="text-xl font-extrabold text-[#0b1b36] mb-2 group-hover:text-spark-blue transition-colors">{service.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="w-14 h-14 bg-blue-50 text-spark-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-spark-blue group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1580256081112-e49377338b7f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cleaner" className="rounded-2xl mx-auto shadow-xl" />
              <div className="absolute inset-0 bg-spark-blue mix-blend-multiply opacity-20 rounded-2xl"></div>
            </div>
            <div className="space-y-12">
              {SERVICES.slice(3, 6).map(service => (
                <div key={service.id} className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-blue-50 text-spark-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-spark-blue group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-extrabold text-[#0b1b36] mb-2 group-hover:text-spark-blue transition-colors">{service.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="py-20 bg-spark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Satisfied Clients', count: '1542+' },
              { label: 'Expert Team', count: '182+' },
              { label: 'Active Projects', count: '285+' },
              { label: 'Awards Won', count: '27+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold mb-3 counter">
                  {stat.count}
                </div>
                <div className="text-sm font-bold opacity-60 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionHeading subtitle="Pricing Plan" title="We offering the best pricing to help you!" centered />
            <div className="flex items-center justify-center space-x-4 mt-8">
              <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-spark-blue' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="w-14 h-7 bg-gray-200 rounded-full relative p-1 transition-colors"
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-all ${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`}></div>
              </button>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-spark-blue' : 'text-gray-400'}`}>Yearly</span>
                <span className="bg-spark-cyan text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Save 20%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRICING_PLANS.map((plan) => (
              <div key={plan.id} className={`p-8 bg-white rounded-xl shadow-sm border ${plan.isPopular ? 'border-spark-blue ring-2 ring-spark-blue ring-opacity-10 scale-105 relative z-10' : 'border-transparent'} hover:shadow-xl transition-all flex flex-col`}>
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-spark-cyan text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Best Choice</div>
                )}
                <div className="text-center mb-8">
                  <h4 className="text-xl font-extrabold text-[#0b1b36] mb-2">{plan.name}</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{plan.employees}</p>
                  <div className="mt-6 flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-spark-blue">$</span>
                    <span className="text-5xl font-extrabold text-spark-blue">{billingCycle === 'monthly' ? plan.priceMonthly : Math.floor(plan.priceYearly / 12)}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-500 text-center leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center w-full py-4 rounded font-bold transition-all ${plan.isPopular
                      ? 'bg-spark-blue text-white hover:bg-spark-cyan shadow-lg'
                      : 'bg-blue-50 text-spark-blue hover:bg-spark-blue hover:text-white'
                    }`}
                >
                  Try now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-spark-blue rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border-8 border-spark-cyan rounded-full opacity-10"></div>

        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Client's Testimonials" title="We are very happy for client's reviews." centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="p-8 bg-gray-50 rounded-2xl relative">
                <div className="absolute -top-6 left-10 w-12 h-12 bg-spark-blue text-white rounded-full flex items-center justify-center text-3xl font-serif">“</div>
                <div className="flex space-x-1 mb-6 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 mb-8 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover shadow-md" />
                  <div>
                    <h5 className="font-extrabold text-[#0b1b36]">{testimonial.name}</h5>
                    <p className="text-xs text-gray-400 font-bold uppercase">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
