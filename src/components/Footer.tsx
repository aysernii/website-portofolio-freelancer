import { motion } from 'framer-motion';
import { MessageCircle, Mail, Instagram, Linkedin, Github } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/+6282114028613?text=${encodeURIComponent('Halo! Saya tertarik dengan layanan Anda.')}`;
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    { 
      icon: MessageCircle, 
      color: 'bg-green-600 hover:bg-green-700', 
      onClick: handleWhatsApp,
      title: 'WhatsApp'
    },
    { 
      icon: Mail, 
      color: 'bg-blue-600 hover:bg-blue-700', 
      href: 'mailto:freelancer@example.com',
      title: 'Email'
    },
    { 
      icon: Instagram, 
      color: 'bg-pink-600 hover:bg-pink-700', 
      href: '#',
      title: 'Instagram'
    },
    { 
      icon: Linkedin, 
      color: 'bg-blue-700 hover:bg-blue-800', 
      href: '#',
      title: 'LinkedIn'
    },
    { 
      icon: Github, 
      color: 'bg-gray-700 hover:bg-gray-600', 
      href: '#',
      title: 'GitHub'
    }
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Layanan', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Kontak', id: 'contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <AnimatedSection direction="up" className="space-y-4">
            <motion.h3 
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Freelancer Portfolio
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Freelancer profesional yang siap membantu mewujudkan proyek digital impian Anda dengan kualitas terbaik dan harga yang kompetitif.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                const Component = social.href ? 'a' : 'button';
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98] 
                    }}
                  >
                    <Component
                      {...(social.href ? { href: social.href } : { onClick: social.onClick })}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                      title={social.title}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <IconComponent className="h-5 w-5" />
                      </motion.div>
                    </Component>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection direction="up" delay={0.2} className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98] 
                  }}
                  whileHover={{ x: 5, color: "#ffffff" }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="up" delay={0.4} className="space-y-4">
            <h4 className="text-lg font-semibold">Kontak</h4>
            <div className="space-y-2">
              {[
                { icon: MessageCircle, text: '+62 821-1402-8613' },
                { icon: Mail, text: 'freelancer@example.com' }
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.p 
                    key={index}
                    className="text-gray-400 flex items-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98] 
                    }}
                    whileHover={{ x: 5, color: "#ffffff" }}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{contact.text}</span>
                  </motion.p>
                );
              })}
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 5, color: "#ffffff" }}
              >
                Jakarta, Indonesia
              </motion.p>
            </div>
            
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-sm text-gray-500">
                Jam Kerja: Senin - Jumat (09:00 - 18:00)
              </p>
              <p className="text-sm text-gray-500">
                Sabtu (09:00 - 15:00)
              </p>
            </motion.div>
          </AnimatedSection>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              © {currentYear} Freelancer Portfolio. All rights reserved.
            </motion.p>
            <div className="flex space-x-6 text-sm text-gray-400">
              {['Privacy Policy', 'Terms of Service'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98] 
                  }}
                  whileHover={{ y: -2, color: "#ffffff" }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}