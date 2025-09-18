import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-[#F4F4F6]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 font-[Inter]">
            Let's Work Together
          </h2>
          <div className="w-16 h-1 bg-[#ff6b35] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-[Plus_Jakarta_Sans]">
            Have a cool project? Let's talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gray-900 font-[Inter]">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-[Plus_Jakarta_Sans]">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a startup looking to establish your digital presence or 
                an established company seeking to enhance your user experience, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#A8C5E6] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600 font-[Plus_Jakarta_Sans]">hilman.sulaeman@email.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D7C7E9] rounded-full flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 font-[Inter]">Location</div>
                  <div className="text-gray-600 font-[Plus_Jakarta_Sans]">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Follow me on</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-300 hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-300 hover:-translate-y-1"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-lg">🎨</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-300 hover:-translate-y-1"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-[Inter]">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full font-[Plus_Jakarta_Sans]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-[Inter]">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full font-[Plus_Jakarta_Sans]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="w-full resize-none font-[Plus_Jakarta_Sans]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#ff6b35] hover:bg-[#ff5722] text-white py-3 rounded-lg transition-all duration-300 hover:shadow-lg font-[Inter]"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}