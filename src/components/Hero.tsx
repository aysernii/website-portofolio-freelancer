import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import resyaPhoto from '../assets/resya.jpg';

export function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.2
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Freelancer
                </motion.span>
                <motion.span 
                  className="block text-blue-600"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Kreatif & Profesional
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl"
                variants={itemVariants}
              >
                Saya adalah freelancer berpengalaman dalam bidang desain grafis, web development, 
                dan editing video. Siap membantu mewujudkan proyek impian Anda dengan kualitas terbaik.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToServices}
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Lihat Layanan
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowDown className="ml-2 h-5 w-5" />
                </motion.div>
              </motion.button>
              
              <motion.button 
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#f9fafb",
                  borderColor: "#6366f1"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              variants={containerVariants}
            >
              {[
                { number: "50+", label: "Proyek Selesai" },
                { number: "3+", label: "Tahun Pengalaman" },
                { number: "100%", label: "Kepuasan Klien" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-gray-900"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div 
                className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-8"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ImageWithFallback
                    src={resyaPhoto}
                    alt="Developer Photo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </motion.div>
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-3"
                variants={floatingCardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  rotate: 6,
                  scale: 1.1,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                style={{
                  animation: 'floatingCard1 3s infinite ease-in-out'
                }}
              >
                <div className="text-sm font-medium text-gray-900">Web Developer</div>
                <div className="text-xs text-gray-600">React, Next.js</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-3"
                variants={floatingCardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  rotate: -6,
                  scale: 1.1,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                style={{
                  animation: 'floatingCard2 3s infinite ease-in-out'
                }}
              >
                <div className="text-sm font-medium text-gray-900">UI/UX Designer</div>
                <div className="text-xs text-gray-600">Figma, Adobe XD</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}