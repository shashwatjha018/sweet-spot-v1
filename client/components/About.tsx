import { motion } from "framer-motion";
import { Heart, Award, Users, Clock } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-cream-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 mb-4"
              >
                <Heart className="text-blush-500" size={24} />
                <span className="text-blush-500 font-semibold">Our Story</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-script text-4xl lg:text-5xl font-bold text-chocolate-700 mb-6"
              >
                Baking Dreams Since 2019
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 text-chocolate-600 leading-relaxed"
            >
              <p className="text-lg">
                Sweet Spot began as a dream in our home kitchen, where the aroma
                of freshly baked goods filled the air and brought our family
                together. What started as a passion for creating delicious
                treats has blossomed into a beloved bakery that serves our
                community with love.
              </p>

              <p>
                Every cake, cupcake, and pastry that leaves our kitchen is
                crafted with the finest ingredients sourced locally. We believe
                that the best flavors come from the heart, and every bite should
                tell a story of craftsmanship and care.
              </p>

              <p>
                From traditional family recipes passed down through generations
                to innovative creations that surprise and delight, we're
                committed to making every celebration a little sweeter.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              <div className="text-center p-4 bg-cream-100 rounded-2xl">
                <div className="flex justify-center mb-2">
                  <Award className="text-blush-500" size={24} />
                </div>
                <div className="font-bold text-2xl text-chocolate-700">5+</div>
                <div className="text-chocolate-500 text-sm">
                  Years of Excellence
                </div>
              </div>

              <div className="text-center p-4 bg-mint-100 rounded-2xl">
                <div className="flex justify-center mb-2">
                  <Users className="text-mint-600" size={24} />
                </div>
                <div className="font-bold text-2xl text-chocolate-700">
                  2000+
                </div>
                <div className="text-chocolate-500 text-sm">
                  Happy Customers
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-cream-100 to-blush-100 rounded-3xl p-8 overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-mint-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-chocolate-200 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 right-8 w-12 h-12 bg-blush-200 rounded-full opacity-40"></div>

              {/* Main content */}
              <div className="relative z-10 space-y-6">
                {/* Chef/Baker Image */}
                <motion.div
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto w-24 h-24 rounded-full overflow-hidden shadow-xl border-4 border-white"
                >
                  <img
                    src="https://images.pexels.com/photos/29021744/pexels-photo-29021744.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Professional chef preparing baked goods"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Baking Process Images */}
                <div className="grid grid-cols-3 gap-4">
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    className="w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-mint-200 mx-auto"
                  >
                    <img
                      src="https://images.pexels.com/photos/2613471/pexels-photo-2613471.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Fresh baking ingredients"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-blush-200 mx-auto"
                  >
                    <img
                      src="https://images.pexels.com/photos/17486826/pexels-photo-17486826.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Delicious rolled cakes"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-cream-300 mx-auto"
                  >
                    <img
                      src="https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Perfect cupcake with frosting"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Featured Cake */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                  >
                    <img
                      src="https://images.pexels.com/photos/7552330/pexels-photo-7552330.jpeg?auto=compress&cs=tinysrgb&w=250"
                      alt="Elegant lemon cheesecake with flowers"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex items-center justify-center space-x-2 text-chocolate-600">
                    <Clock size={20} />
                    <span className="font-semibold">Fresh Daily</span>
                  </div>
                  <p className="text-sm text-chocolate-500 mt-2">
                    Baked with love every morning
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 right-8 text-2xl opacity-60"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-8 left-8 text-2xl opacity-60"
              >
                💫
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
