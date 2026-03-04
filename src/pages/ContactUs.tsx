import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="pt-32 pb-24 bg-neutral-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-white/50 mb-2 block">Connect</span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight">Contact Us</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
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
          
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl font-serif mb-8">Send a Message</h3>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors text-sm font-light rounded-md" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors text-sm font-light rounded-md" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors text-sm font-light rounded-md" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors text-sm font-light resize-none rounded-md"></textarea>
              </div>
              <button type="button" className="w-full bg-white text-black py-4 font-medium uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors mt-2 rounded-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
