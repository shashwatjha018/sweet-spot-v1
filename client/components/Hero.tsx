import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-scrolling carousel images
  const carouselImages = [
    {
      src: "https://images.pexels.com/photos/32086078/pexels-photo-32086078.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Delicious strawberry and chocolate tart",
    },
    {
      src: "https://images.pexels.com/photos/5018894/pexels-photo-5018894.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Colorful cupcakes with vibrant frosting",
    },
    {
      src: "https://images.pexels.com/photos/16946897/pexels-photo-16946897.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Stack of colorful macarons",
    },
    {
      src: "https://images.pexels.com/photos/1038711/pexels-photo-1038711.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Elegant three-tier wedding cake",
    },
    {
      src: "https://images.pexels.com/photos/2801980/pexels-photo-2801980.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Vibrant donut with sprinkles",
    },
    {
      src: "https://images.pexels.com/photos/11124951/pexels-photo-11124951.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Pink sprinkled donut",
    },
    {
      src: "https://images.pexels.com/photos/9009965/pexels-photo-9009965.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Cheesecake slice with berries",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream-50 via-blush-50 to-mint-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blush-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-cream-300 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Side - Text Content */}
          <div className="flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-script text-5xl sm:text-6xl lg:text-7xl font-bold text-chocolate-700 leading-tight mb-8"
              >
                Sweet Spot
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl text-chocolate-600 mb-6 font-light leading-relaxed"
              >
                Handcrafted Happiness,
                <br />
                Baked with Love
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-chocolate-500 text-lg lg:text-xl mb-10 leading-relaxed"
              >
                Discover our collection of artisanal cakes, cupcakes, and
                pastries, each crafted with the finest ingredients and endless
                love.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("catalogue")}
                  className="bg-gradient-to-r from-blush-400 to-blush-500 hover:from-blush-500 hover:to-blush-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Our Catalogue
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("custom-cake-order")}
                  className="bg-transparent border-2 border-chocolate-600 text-chocolate-600 hover:bg-chocolate-600 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
                >
                  Order Custom Cake
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Auto-scrolling Carousel */}
          <div className="relative flex items-center justify-center bg-gradient-to-bl from-mint-100 to-cream-100">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-cream-50/50"></div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-8 lg:p-16"
            >
              {/* Main carousel container */}
              <div className="relative w-full max-w-md h-96 lg:h-[500px]">
                {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: index === currentImageIndex ? 1 : 0,
                      scale: index === currentImageIndex ? 1 : 0.8,
                      zIndex: index === currentImageIndex ? 10 : 1,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-white"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
                  </motion.div>
                ))}

                {/* Floating decorative elements */}
                <motion.div
                  animate={{ y: [-8, 8, -8], rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center text-2xl shadow-lg z-20"
                >
                  🧁
                </motion.div>

                <motion.div
                  animate={{ y: [8, -8, 8], rotate: [0, -5, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center text-2xl shadow-lg z-20"
                >
                  🍰
                </motion.div>

                {/* Carousel indicators */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {carouselImages.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-blush-400 w-6"
                          : "bg-cream-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => scrollToSection("catalogue")}
            className="text-chocolate-400 hover:text-chocolate-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
