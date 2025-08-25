import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Heart } from "lucide-react";

export function CustomOrder() {
  const handleCustomOrder = () => {
    const message = `Hi! I'd like to discuss a custom cake order. Can you help me create something special?`;
    const phoneNumber = "+919876543210"; // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-mint-100 via-blush-50 to-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blush-300 rounded-full"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-mint-300 rounded-full"></div>
            <div className="absolute bottom-10 left-20 w-24 h-24 bg-cream-400 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-18 h-18 bg-chocolate-300 rounded-full"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cream-100 to-blush-100 rounded-3xl p-8 text-center relative overflow-hidden">
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 left-4 text-2xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute top-4 right-4 text-2xl"
                >
                  💫
                </motion.div>
                <motion.div
                  animate={{ y: [-5, 15, -5], rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-4 left-6 text-2xl"
                >
                  🌟
                </motion.div>

                {/* Main custom cake image */}
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.01, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F74bb561d1e354028956de2bd0a89129e%2F32d8e1281532412f93134ae1e77edc99?format=webp&width=800"
                      alt="Beautiful custom three-tiered cake with colorful flowers, butterflies, and elegant decorations"
                      className="w-full h-auto object-contain rounded-2xl"
                    />

                    {/* Overlay text */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                      <p className="text-chocolate-600 font-semibold text-sm text-center">
                        Custom Design Example
                      </p>
                    </div>
                  </motion.div>

                  {/* Decorative elements around the image */}
                  <div className="flex justify-center space-x-2 text-2xl mt-6">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    >
                      💝
                    </motion.span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      🎈
                    </motion.span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      🎉
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="text-blush-500" size={24} />
                <span className="text-blush-500 font-semibold">
                  Custom Creations
                </span>
              </div>

              <h2 className="font-script text-4xl lg:text-5xl font-bold text-chocolate-700 leading-tight">
                Want a Custom Cake?
              </h2>

              <p className="text-chocolate-600 text-lg leading-relaxed">
                Let's create something magical together! Whether it's a
                birthday, anniversary, or any special celebration, we'll craft a
                one-of-a-kind cake that perfectly captures your vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mint-400 rounded-full"></div>
                  <span className="text-chocolate-600">
                    Custom flavors and designs
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blush-400 rounded-full"></div>
                  <span className="text-chocolate-600">
                    Personalized decorations
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cream-400 rounded-full"></div>
                  <span className="text-chocolate-600">
                    Made with premium ingredients
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCustomOrder}
                className="bg-gradient-to-r from-blush-400 to-blush-500 hover:from-blush-500 hover:to-blush-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
              >
                <MessageCircle size={20} />
                <span>Start Custom Order</span>
                <Heart size={18} />
              </motion.button>

              <p className="text-chocolate-400 text-sm flex items-center space-x-2">
                <MessageCircle size={16} />
                <span>
                  Connect with us on WhatsApp to discuss your dream cake!
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
