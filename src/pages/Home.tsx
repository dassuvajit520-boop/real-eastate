import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Plus, Minus, Phone, Mail, MapPin } from 'lucide-react';

const RESIDENTIAL_PROPERTIES = [
  { id: 1, name: 'Shaligram Sky', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Maruti 360', image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Marina', image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Oeuvre Iconic', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const COMMERCIAL_PROPERTIES = [
  { id: 1, name: 'The Identity', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Palak Estrella', image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Trogon Twin Tower', image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Brillia', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "I've had the pleasure of working with Newedge, and I must say, their team of professional realtors is truly exceptional! I've personally worked with Founder Chetan Savalia since the company's early days, and our relationship has only grown stronger.",
    name: "Brijesh patel",
    title: "Founder, Challenge",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    text: "I recently concluded a deal through Newedge for residential property. I am stationed outside Ahmedabad but I didn't feel the need to be physically present for any activities right from negotiation to pre-signing of deed. This shows their commitment to their clients.",
    name: "Ketan Patel",
    title: "UAE",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    text: "Newedge Realty helped us find our dream home in Ahmedabad. Their team is highly professional and guided us through every step. Great experience working with Newedge Realty. They made the process of buying a home smooth and hassle-free. Highly recommended!",
    name: "Karan",
    title: "Private",
    image: "https://ui-avatars.com/api/?name=Karan&background=000&color=fff"
  },
  {
    id: 4,
    text: "We were looking for a 10,000 sq. ft. space for our corporate office at Retail Park, SG Highway, and throughout the transaction of such huge magnitude, they acted as a trustworthy mediator between the parties. We approached Mr. Chetan Savaliya from Newedge Realty and proposed to him our requirement.",
    name: "Jagat Vyas",
    title: "Vishwanath Builders",
    image: "https://ui-avatars.com/api/?name=Jagat+Vyas&background=000&color=fff"
  }
];

const BLOGS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "March 1",
    title: "Dholera Infrastructure Developments: A Gateway to Business Growth and Investment"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "March 13",
    title: "Introduction to Dholera Investment Opportunities"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "March 15",
    title: "Newedge Realty Property Consultant Expert"
  }
];

const FAQS = [
  {
    question: "What types of properties do you handle?",
    answer: "We specialize in premium residential and commercial properties, including luxury villas, penthouses, high-end apartments, and prime corporate office spaces."
  },
  {
    question: "Do you assist with property investments?",
    answer: "Yes, our expert consultants provide comprehensive investment advisory services, helping you identify high-yield opportunities in emerging and established markets."
  },
  {
    question: "How can I schedule a property viewing?",
    answer: "You can schedule a viewing by filling out the inquiry form on our website, or by contacting our dedicated sales team directly via phone or email."
  },
  {
    question: "Do you offer property management services?",
    answer: "Absolutely. We offer end-to-end property management services for our clients, ensuring your investment is well-maintained and yields optimal returns."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <h4 className="text-lg font-medium text-black group-hover:text-gray-600 transition-colors">{question}</h4>
        <div className="flex-shrink-0 ml-4 text-gray-400 group-hover:text-black transition-colors">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600 font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialsScrollRef.current) {
      const scrollAmount = 400; // Approximate width of one card + gap
      testimonialsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury home at golden hour"
            className="w-full h-full object-cover object-center animate-kenburns"
            referrerPolicy="no-referrer"
          />
          {/* Gradient Overlays for text legibility and mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 w-full max-w-2xl pt-10 lg:pt-0"
          >
            <span className="inline-block py-1.5 px-4 border border-white/20 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-white/90 mb-8 backdrop-blur-md bg-white/5">
              Your One-Stop Real Estate Consultancy
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-6">
              Trusted Solutions <br />
              <span className="italic font-light text-white/80">Since 1997.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-light max-w-xl leading-relaxed mb-10">
              Discover breathtaking properties and prime commercial spaces tailored to elevate your lifestyle and business.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="bg-white text-black px-8 py-3.5 rounded-lg font-medium text-[15px] hover:bg-gray-100 transition-colors shadow-lg">
                Search Property
              </button>
              <button className="px-8 py-3.5 border border-white/30 text-white hover:bg-white/10 transition-colors rounded-lg flex items-center gap-3 backdrop-blur-sm">
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">Learn More</span>
              </button>
            </div>
          </motion.div>

          {/* Right: Lead Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="w-full max-w-[420px] bg-white rounded-xl p-6 sm:p-8 shadow-2xl"
          >
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-black placeholder-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
                <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-black placeholder-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-black placeholder-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
                <input type="text" placeholder="Company" className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-black placeholder-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-colors">
                  <div className="flex items-center gap-1 px-2 bg-white border-r border-gray-300 cursor-pointer">
                    <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 h-3 object-cover" />
                    <ChevronDown size={12} className="text-gray-600" />
                  </div>
                  <input type="tel" placeholder="+91" defaultValue="+91 " className="w-full px-2 py-2.5 text-sm text-black focus:outline-none" />
                </div>
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-black appearance-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors bg-white">
                    <option value="" disabled selected>City</option>
                    <option value="ny">New York</option>
                    <option value="la">Los Angeles</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-black appearance-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors bg-white">
                    <option value="" disabled selected>Min. Budget</option>
                    <option value="5000000">50 Lac</option>
                    <option value="20000000">2 Cr</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-black appearance-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors bg-white">
                    <option value="" disabled selected>Max. Budget</option>
                    <option value="50000000">5 Cr</option>
                    <option value="150000000">15 Cr+</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>

              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-black appearance-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors bg-white">
                  <option value="" disabled selected>For</option>
                  <option value="Buy">Buy</option>
                  <option value="Rent">Rent</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
              </div>

              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-black appearance-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors bg-white">
                  <option value="" disabled selected>Type of Property</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Residential">Residential</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
              </div>

              {/* reCAPTCHA dummy */}
              <div className="border border-gray-300 rounded-md p-3 flex items-center justify-between bg-gray-50/30 mt-1">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-400 rounded-sm bg-white flex-shrink-0"></div>
                  <span className="text-sm text-black">I'm not a robot</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 object-contain" />
                  <span className="text-[8px] text-gray-500 mt-1">reCAPTCHA</span>
                  <span className="text-[8px] text-gray-500">Privacy - Terms</span>
                </div>
              </div>

              <button type="button" className="w-full bg-black text-white rounded-md py-3.5 font-medium mt-2 hover:bg-neutral-800 transition-colors text-sm">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 w-full">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Our Clients</h2>
              <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
                We've had the privilege of working with some of the most prestigious names in the industry, delivering exceptional real estate solutions that stand the test of time.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-white/80 border-b border-white/30 pb-1 hover:text-white hover:border-white transition-all">
                View All Partners <ArrowRight size={14} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
               {[1,2,3,4].map(i => (
                 <div key={i} className="aspect-[3/2] border border-white/5 flex items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] transition-colors group cursor-pointer">
                    <span className="text-white/30 font-serif italic text-xl group-hover:text-white/60 transition-colors">Client {i}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] overflow-hidden border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-neutral-900 border border-white/10 p-8 hidden md:block max-w-xs z-10 shadow-2xl">
              <div className="text-4xl font-serif text-white mb-2">25+</div>
              <div className="text-sm text-white/60 font-light uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block py-1.5 px-4 border border-white/20 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase text-white/60 mb-6">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
              Redefining the Art of <br/>
              <span className="italic font-light text-white/80">Luxury Living.</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-6 text-lg">
              Since 1997, Shine Native has been at the forefront of premium real estate, connecting discerning clients with extraordinary properties. We believe that a home is more than just an address—it's a canvas for your lifestyle.
            </p>
            <p className="text-white/60 font-light leading-relaxed mb-10 text-lg">
              Our dedicated team of experts provides unparalleled service, ensuring a seamless journey whether you are acquiring a new estate, seeking lucrative investments, or finding the perfect commercial space.
            </p>
            <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-neutral-200 transition-colors">
              Discover Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 w-full">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-white/50 mb-2 block">Our Advantage</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-tight">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-serif text-white">01</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Unrivaled Expertise</h3>
            <p className="text-white/60 font-light leading-relaxed">
              With over two decades of experience, our deep market knowledge ensures you make informed, strategic real estate decisions.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-serif text-white">02</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Exclusive Portfolio</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Gain access to a curated selection of off-market and premium properties that meet the highest standards of luxury.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-serif text-white">03</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Personalized Service</h3>
            <p className="text-white/60 font-light leading-relaxed">
              We offer bespoke advisory services tailored to your unique lifestyle and investment goals, ensuring a seamless experience.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-24 md:py-32 bg-white text-black w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Residential Properties */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-medium text-gray-500 mb-2 block">Discover</span>
                <h2 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight">Residential Properties</h2>
              </div>
              <a href="#" className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors">
                See More
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RESIDENTIAL_PROPERTIES.map((property) => (
                <div key={property.id} className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
                  <img 
                    src={property.image} 
                    alt={property.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-bold tracking-wide">{property.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Properties */}
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-medium text-gray-500 mb-2 block">Discover</span>
                <h2 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight">Commercial Properties</h2>
              </div>
              <a href="#" className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors">
                See More
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMMERCIAL_PROPERTIES.map((property) => (
                <div key={property.id} className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
                  <img 
                    src={property.image} 
                    alt={property.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-bold tracking-wide">{property.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white text-black overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-medium text-gray-500 mb-2 block">OUR CLIENTS</span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight">TESTIMONIALS</h2>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => scrollTestimonials('left')}
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scrollTestimonials('right')}
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div 
            ref={testimonialsScrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="min-w-[320px] md:min-w-[380px] max-w-[380px] flex-shrink-0 snap-start border border-gray-200 rounded-2xl p-8 flex flex-col justify-between bg-white"
              >
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-24 bg-white text-black w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-medium text-gray-500 mb-2 block">EXPLORE</span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight">BLOGS & ARTICLES</h2>
            </div>
            <a href="#" className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors">
              See More
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS.map((blog) => (
              <div key={blog.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 right-8 bg-white text-black px-6 py-2 rounded-t-xl font-medium text-sm">
                    {blog.date}
                  </div>
                </div>
                <h3 className="text-lg font-bold leading-snug group-hover:text-gray-600 transition-colors">
                  {blog.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 text-black w-full">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-medium text-gray-500 mb-2 block">SUPPORT</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="flex flex-col border-t border-gray-200">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-neutral-950 text-white border-t border-white/5 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block py-1.5 px-4 border border-white/20 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase text-white/60 mb-6">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white leading-tight">
                Let's find your <br/>
                <span className="italic font-light text-white/80">dream property.</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed mb-12 text-lg max-w-md">
                Whether you're looking to buy, sell, or invest, our team of experts is here to guide you every step of the way.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 bg-white/5">
                    <MapPin size={20} className="text-white/80" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest font-medium text-white/50 mb-1">Visit Us</h4>
                    <p className="text-white/90 font-light">123 Luxury Avenue, Suite 500<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 bg-white/5">
                    <Phone size={20} className="text-white/80" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest font-medium text-white/50 mb-1">Call Us</h4>
                    <p className="text-white/90 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 bg-white/5">
                    <Mail size={20} className="text-white/80" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest font-medium text-white/50 mb-1">Email Us</h4>
                    <p className="text-white/90 font-light">contact@shinenative.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12">
              <h3 className="text-2xl font-serif mb-8">Send a Message</h3>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">First Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors text-sm font-light" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Last Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors text-sm font-light" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors text-sm font-light" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors text-sm font-light resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-white text-black py-4 font-medium uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors mt-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
