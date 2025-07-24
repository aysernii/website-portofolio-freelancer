import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { ImageWithFallback } from './ImageWithFallback';

const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    description: 'Website toko online modern dengan fitur pembayaran terintegrasi',
    technologies: ['React', 'Next.js', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Mobile App UI Design',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    description: 'Desain aplikasi mobile untuk platform food delivery',
    technologies: ['Figma', 'Prototyping'],
    link: '#'
  },
  {
    id: 3,
    title: 'Brand Identity',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
    description: 'Paket lengkap brand identity untuk startup teknologi',
    technologies: ['Illustrator', 'Photoshop'],
    link: '#'
  },
  {
    id: 4,
    title: 'Corporate Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    description: 'Website perusahaan dengan CMS dan dashboard admin',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    link: '#'
  },
  {
    id: 5,
    title: 'Video Promosi',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
    description: 'Video promosi produk dengan motion graphics',
    technologies: ['After Effects', 'Premiere Pro'],
    link: '#'
  },
  {
    id: 6,
    title: 'Dashboard Analytics',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    description: 'Dashboard analytics dengan visualisasi data interaktif',
    technologies: ['Figma', 'Data Visualization'],
    link: '#'
  }
];

const categories = ['Semua', 'Web Development', 'UI/UX Design', 'Graphic Design', 'Video Editing'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === 'Semua' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Portfolio Saya
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Berikut adalah koleksi proyek-proyek yang telah saya kerjakan dengan berbagai klien dari berbagai industri.
          </motion.p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection direction="up" delay={0.3}>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            layout
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1,
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                onClick={() => setSelectedItem(item)}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <Eye className="h-8 w-8 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="p-6"
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <motion.span 
                      className="text-sm text-blue-600 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.category}
                    </motion.span>
                    <motion.div
                      whileHover={{ rotate: 45, scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </motion.div>
                  </div>
                  
                  <motion.h3 
                    className="text-lg font-semibold text-gray-900 mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {item.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                        whileHover={{ 
                          backgroundColor: "#e0e7ff",
                          color: "#3730a3",
                          scale: 1.1
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-64 object-cover"
                  />
                  <motion.button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ×
                  </motion.button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-blue-600 font-medium">{selectedItem.category}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedItem.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {selectedItem.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Teknologi yang Digunakan:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button 
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Lihat Project
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}