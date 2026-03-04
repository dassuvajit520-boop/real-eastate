import React from 'react';
import { motion } from 'motion/react';

const LOCATIONS = [
  { name: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Mumbai', image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Delhi', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Pune', image: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

export default function Locations() {
  return (
    <div className="pt-32 pb-24 bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-gray-500 mb-2 block">Regions</span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight">Prime Locations</h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LOCATIONS.map((loc, i) => (
             <div key={i} className="group relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-serif tracking-widest uppercase">{loc.name}</h3>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
