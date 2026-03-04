import React from 'react';
import { motion } from 'motion/react';

export default function Investment() {
  return (
    <div className="pt-32 pb-24 bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-gray-500 mb-2 block">Advisory</span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight">Investment Opportunities</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-serif mb-6">High-Yield Commercial</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Discover prime commercial real estate opportunities designed to deliver consistent returns and long-term capital appreciation. Our experts analyze market trends to identify the best assets for your portfolio.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors">
              Explore Commercial
            </button>
          </div>
          <div className="bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-serif mb-6">Luxury Residential</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Invest in exclusive residential properties in high-demand locations. From luxury villas to premium apartments, we offer access to off-market deals and high-growth potential developments.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors">
              Explore Residential
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
