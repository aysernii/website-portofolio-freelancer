import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg'
          : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <h1 className="text-xl font-bold text-gray-900">Portfolio</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'Layanan', 'Portfolio', 'Kontak'].map((item, index) => {
                const sectionId = item === 'Home' ? 'home' : 
                                item === 'Layanan' ? 'services' : 
                                item === 'Portfolio' ? 'portfolio' : 'contact';
                
                return (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 relative group"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {item}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                );
              })}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="md:hidden overflow-hidden"
        >
          <motion.div 
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t"
            variants={{
              closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
            }}
            animate={isMenuOpen ? "open" : "closed"}
          >
            {['Home', 'Layanan', 'Portfolio', 'Kontak'].map((item) => {
              const sectionId = item === 'Home' ? 'home' : 
                              item === 'Layanan' ? 'services' : 
                              item === 'Portfolio' ? 'portfolio' : 'contact';
              
              return (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 w-full text-left"
                  variants={{
                    closed: { opacity: 0, x: -50 },
                    open: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}