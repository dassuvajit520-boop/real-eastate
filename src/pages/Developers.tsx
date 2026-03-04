import React from 'react';
import { motion } from 'motion/react';

export default function Developers() {
  return (
    <div className="pt-32 pb-24 bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-gray-500 mb-2 block">Partners</span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight">Our Developers</h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map(i => (
             <div key={i} className="aspect-[3/2] border border-gray-200 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors group cursor-pointer rounded-2xl">
                <span className="text-gray-400 font-serif italic text-xl group-hover:text-gray-600 transition-colors">Developer {i}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
