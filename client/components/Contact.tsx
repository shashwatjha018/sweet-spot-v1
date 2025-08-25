import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";

export function Contact() {
  const handleWhatsAppContact = () => {
    const message = `Hi! I'd like to know more about Sweet Spot bakery and your delicious treats!`;
    const phoneNumber = "+919876543210"; // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSocialClick = (platform: string) => {
    // Replace with actual social media URLs
    const urls = {
      instagram: "https://instagram.com/sweetspot_bakery",
      facebook: "https://facebook.com/sweetspot.bakery",
    };
    window.open(urls[platform as keyof typeof urls], "_blank");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-cream-50 to-chocolate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl sm:text-6xl font-bold text-chocolate-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-chocolate-600 text-lg max-w-2xl mx-auto">
            Ready to order or have questions? We'd love to hear from you! Reach
            out and let's make your sweet dreams come true.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* WhatsApp */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-cream-200"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-mint-100 p-3 rounded-xl">
                    <MessageCircle className="text-mint-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-chocolate-700">
                      WhatsApp Orders
                    </h3>
                    <p className="text-chocolate-500">
                      Quick and easy ordering
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-mint-400 to-mint-500 hover:from-mint-500 hover:to-mint-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Chat with us on WhatsApp
                </motion.button>
              </motion.div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-blush-100 p-3 rounded-xl">
                    <MapPin className="text-blush-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-chocolate-700 mb-2">
                      Visit Our Bakery
                    </h3>
                    <p className="text-chocolate-500">
                      123 Sweet Street, Bakery Lane
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone & Hours */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-chocolate-100 p-2 rounded-lg">
                      <Phone className="text-chocolate-600" size={20} />
                    </div>
                    <h3 className="font-semibold text-chocolate-700">
                      Call Us
                    </h3>
                  </div>
                  <p className="text-chocolate-500">+91 98765 43210</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-cream-200 p-2 rounded-lg">
                      <Clock className="text-chocolate-600" size={20} />
                    </div>
                    <h3 className="font-semibold text-chocolate-700">Hours</h3>
                  </div>
                  <p className="text-chocolate-500 text-sm">
                    Mon-Sun
                    <br />
                    8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-cream-200"
            >
              <h3 className="font-semibold text-chocolate-700 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSocialClick("instagram")}
                  className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-3 rounded-xl shadow-lg"
                >
                  <Instagram size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSocialClick("facebook")}
                  className="bg-blue-500 text-white p-3 rounded-xl shadow-lg"
                >
                  <Facebook size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-chocolate-500 text-white p-3 rounded-xl shadow-lg"
                >
                  <Mail size={24} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-mint-100 to-cream-100 rounded-3xl p-8 text-center relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-blush-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-mint-200 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 right-8 w-12 h-12 bg-chocolate-200 rounded-full opacity-40"></div>

              <div className="relative z-10 space-y-6">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-7xl"
                >
                  📱
                </motion.div>

                <div className="text-5xl">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    💬
                  </motion.span>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="font-script text-2xl text-chocolate-700 mb-2">
                    Order in 3 Easy Steps
                  </h3>
                  <div className="space-y-3 text-chocolate-600 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="bg-mint-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                        1
                      </span>
                      <span>Browse our delicious menu</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-blush-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                        2
                      </span>
                      <span>Click "Order on WhatsApp"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-chocolate-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                        3
                      </span>
                      <span>Confirm & enjoy your treats!</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating emojis */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-4 text-2xl opacity-60"
              >
                🍰
              </motion.div>
              <motion.div
                animate={{ y: [8, -8, 8], rotate: [0, -5, 5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute bottom-4 left-4 text-2xl opacity-60"
              >
                🧁
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
