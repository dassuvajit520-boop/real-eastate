import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Properties', path: '/properties' },
  { name: 'Developers', path: '/developers' },
  { name: 'Locations', path: '/locations' },
  { name: 'About Us', path: '/about' },
  { name: 'Investment', path: '/investment' },
  { name: 'Contact Us', path: '/contact' }
];

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Always dark background for navbar on non-home pages, or scroll on home
  const isHome = location.pathname === '/';
  const navBgClass = isScrolled || !isHome ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-neutral-950 selection:bg-white/30 flex flex-col">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-2xl font-serif tracking-widest text-white uppercase flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              Shine Native
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <Link key={link.name} to={link.path} className="text-sm font-light tracking-wide text-white/70 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.slice(3).map((link) => (
              <Link key={link.name} to={link.path} className="text-sm font-light tracking-wide text-white/70 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-neutral-950 flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <span className="text-xl font-serif tracking-widest text-white uppercase">Shine Native</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-12 gap-8">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
              >
                <Link to="/" className="text-3xl font-serif text-white/80 hover:text-white transition-colors block">
                  Home
                </Link>
              </motion.div>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-3xl font-serif text-white/80 hover:text-white transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <Link to="/" className="text-2xl font-serif tracking-widest text-white uppercase flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                Shine Native
              </Link>
              <p className="text-white/50 font-light text-sm leading-relaxed mb-8">
                Redefining luxury real estate with unparalleled service and an exclusive portfolio of breathtaking properties.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {NAV_LINKS.slice(0, 5).map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-white/50 hover:text-white transition-colors text-sm font-light">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium uppercase tracking-widest mb-6">Services</h4>
              <ul className="space-y-4">
                {['Property Sales', 'Property Management', 'Investment Advisory', 'Corporate Leasing', 'Valuation'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium uppercase tracking-widest mb-6">Newsletter</h4>
              <p className="text-white/50 font-light text-sm leading-relaxed mb-4">
                Subscribe to receive updates on exclusive new properties and market insights.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors text-sm font-light w-full rounded-l-md"
                />
                <button className="bg-white text-black px-4 py-3 rounded-r-md hover:bg-neutral-200 transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs font-light">
              &copy; {new Date().getFullYear()} Shine Native Real Estate. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-light">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-light">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
