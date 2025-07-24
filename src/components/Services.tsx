import { motion } from 'framer-motion';
import { Code, Palette, Video, Smartphone, Globe, Camera } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Pembuatan website responsif dan modern menggunakan teknologi terkini seperti React, Next.js, dan Tailwind CSS.',
    price: 'Mulai dari Rp 2.500.000'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Desain antarmuka yang intuitif dan menarik untuk website dan aplikasi mobile dengan fokus pada user experience.',
    price: 'Mulai dari Rp 1.500.000'
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Editing video profesional untuk konten promosi, tutorial, atau keperluan bisnis dengan kualitas HD/4K.',
    price: 'Mulai dari Rp 500.000'
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Pengembangan aplikasi sesuai kebutuhan khusus Anda dengan fitur-fitur yang disesuaikan.',
    price: 'Negosiasi'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Design',
    description: 'Desain aplikasi mobile yang modern dan user-friendly untuk platform iOS dan Android.',
    price: 'Mulai dari Rp 2.000.000'
  },
  {
    icon: Camera,
    title: 'Photo Editing',
    description: 'Retouching dan editing foto profesional untuk kebutuhan produk, portrait, atau komersial.',
    price: 'Mulai dari Rp 200.000'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Layanan Yang Saya Tawarkan
          </motion.h2>
          <motion.p 
            className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Berbagai layanan kreatif dan teknis untuk membantu bisnis Anda berkembang dengan solusi digital yang tepat.
          </motion.p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <StaggerItem key={index} direction="up">
                <motion.div
                  className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-8 hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full"
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17,
                    duration: 0.3
                  }}
                >
                  <div className="mb-6">
                    <motion.div 
                      className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <IconComponent className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </div>
                  
                  <motion.h3 
                    className="text-xl font-semibold text-[var(--foreground)] mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <motion.div 
                    className="border-t border-[var(--border)] pt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.p 
                      className="text-[var(--primary)] font-semibold"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {service.price}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection direction="up" delay={0.6} className="text-center mt-12">
          <p className="text-[var(--muted-foreground)] mb-6">
            Butuh layanan khusus yang tidak ada di daftar? Jangan ragu untuk menghubungi saya!
          </p>
          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors font-medium"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Konsultasi Gratis
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
}
