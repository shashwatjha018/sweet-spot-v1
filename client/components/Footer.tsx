import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    const message = `Hi! I'd like to know more about Sweet Spot bakery!`;
    const phoneNumber = "+919876543210"; // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-chocolate-700 to-chocolate-800 text-cream-50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden shadow-lg border-2 border-blush-300">
                <img
                  src="https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Sweet Spot Bakery Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-script text-2xl font-bold">Sweet Spot</h3>
            </div>
            <p className="text-cream-200 text-sm leading-relaxed">
              Handcrafted happiness, baked with love. Creating sweet memories
              one treat at a time since 2019.
            </p>
            <div className="flex items-center space-x-2 text-blush-300">
              <Heart size={16} />
              <span className="text-sm">Made with love in Mumbai</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-2">
              {["Home", "Catalogue", "About", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-cream-200 hover:text-blush-300 transition-colors duration-200 text-sm"
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm">
                <MapPin
                  size={16}
                  className="text-mint-300 mt-0.5 flex-shrink-0"
                />
                <div className="text-cream-200">
                  123 Sweet Street, Bakery Lane
                  <br />
                  Mumbai, Maharashtra 400001
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-mint-300" />
                <span className="text-cream-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-mint-300" />
                <span className="text-cream-200">hello@sweetspot.com</span>
              </div>
            </div>
          </motion.div>

          {/* Social & Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Connect & Order</h4>

            {/* WhatsApp CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppContact}
              className="w-full bg-gradient-to-r from-mint-500 to-mint-600 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>Order on WhatsApp</span>
            </motion.button>

            {/* Social Links */}
            <div>
              <p className="text-cream-200 text-sm mb-3">
                Follow us for sweet updates:
              </p>
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg"
                >
                  <Instagram size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 p-2 rounded-lg"
                >
                  <Facebook size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blush-500 p-2 rounded-lg"
                >
                  <Mail size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-chocolate-600 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-cream-300 text-sm">
              © {currentYear} Sweet Spot Bakery. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-cream-300 text-sm">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-blush-400"
              >
                ❤️
              </motion.span>
              <span>in Mumbai</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
