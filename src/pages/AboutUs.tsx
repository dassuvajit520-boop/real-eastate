import React from 'react';
import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <div className="pt-32 pb-24 bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-gray-500 mb-2 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight">About Shine Native</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-neutral-900 border border-white/10 p-8 hidden md:block max-w-xs z-10 shadow-2xl rounded-xl">
              <div className="text-4xl font-serif text-white mb-2">25+</div>
              <div className="text-sm text-white/60 font-light uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-black leading-tight">
              Redefining the Art of <br/>
              <span className="italic font-light text-gray-600">Luxury Living.</span>
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-6 text-lg">
              Since 1997, Shine Native has been at the forefront of premium real estate, connecting discerning clients with extraordinary properties. We believe that a home is more than just an address—it's a canvas for your lifestyle.
            </p>
            <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg">
              Our dedicated team of experts provides unparalleled service, ensuring a seamless journey whether you are acquiring a new estate, seeking lucrative investments, or finding the perfect commercial space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
