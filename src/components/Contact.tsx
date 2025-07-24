import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const whatsappNumber = '+6282114028613';

  const handleWhatsApp = () => {
    const message = formData.name && formData.message 
      ? `Halo! Saya ${formData.name}. ${formData.message}`
      : 'Halo! Saya tertarik dengan layanan Anda.';
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Google Form submission (replace with your actual Google Form URL)
    const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    
    // You would typically submit to Google Forms here
    // For now, we'll show an alert and redirect to WhatsApp
    alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk komunikasi lebih lanjut.');
    handleWhatsApp();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactItems = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+62 821-1402-8613',
      action: 'Chat sekarang →',
      onClick: handleWhatsApp
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'freelancer@example.com',
      action: null,
      onClick: null
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      content: 'Jakarta, Indonesia',
      action: null,
      onClick: null
    },
    {
      icon: Clock,
      title: 'Jam Kerja',
      content: 'Senin - Jumat: 09:00 - 18:00',
      subtitle: 'Sabtu: 09:00 - 15:00',
      action: null,
      onClick: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Mari Bekerja Sama
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Siap membantu mewujudkan proyek impian Anda. Hubungi saya untuk konsultasi gratis dan diskusi lebih lanjut.
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection direction="left" className="space-y-8">
            <div>
              <motion.h3 
                className="text-2xl font-semibold text-gray-900 mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                Informasi Kontak
              </motion.h3>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: [0.21, 0.47, 0.32, 0.98] 
                      }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ 
                          backgroundColor: "#2563eb",
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.content}</p>
                        {item.subtitle && (
                          <p className="text-gray-600">{item.subtitle}</p>
                        )}
                        {item.action && item.onClick && (
                          <motion.button 
                            onClick={item.onClick}
                            className="text-blue-600 hover:text-blue-700 text-sm mt-1"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            {item.action}
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <motion.div 
              className="bg-green-50 border border-green-200 rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(34, 197, 94, 0.1)"
              }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Butuh Respon Cepat?</h4>
                  <p className="text-gray-600 text-sm">Chat langsung via WhatsApp untuk konsultasi gratis</p>
                </div>
                <motion.button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Chat Now
                </motion.button>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" className="bg-gray-50 rounded-2xl p-8">
            <motion.h3 
              className="text-2xl font-semibold text-gray-900 mb-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Kirim Pesan
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { 
                  name: 'name', 
                  label: 'Nama Lengkap *', 
                  type: 'text', 
                  placeholder: 'Masukkan nama lengkap Anda',
                  required: true
                },
                { 
                  name: 'email', 
                  label: 'Email *', 
                  type: 'email', 
                  placeholder: 'nama@email.com',
                  required: true
                }
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98] 
                  }}
                >
                  <label htmlFor={field.name} className="block text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={field.placeholder}
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="service" className="block text-gray-700 mb-2">
                  Layanan yang Diminati
                </label>
                <motion.select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
                  }}
                >
                  <option value="">Pilih layanan</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="custom-development">Custom Development</option>
                  <option value="mobile-app-design">Mobile App Design</option>
                  <option value="photo-editing">Photo Editing</option>
                </motion.select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Pesan *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                  placeholder="Ceritakan tentang proyek Anda..."
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5" />
                <span>Kirim Pesan</span>
              </motion.button>
            </form>

            <motion.p 
              className="text-sm text-gray-600 mt-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Dengan mengirim pesan, Anda akan diarahkan ke WhatsApp untuk komunikasi lebih lanjut.
            </motion.p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}