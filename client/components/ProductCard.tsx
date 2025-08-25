import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "cake" | "cupcake" | "pastry" | "custom";
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppOrder = () => {
    const message = `Hi! I'd like to order the ${product.name} (₹${product.price}). ${product.description}`;
    const phoneNumber = "+919876543210"; // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-cream-200"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-cream-50 to-cream-100">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="aspect-square"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`
            px-3 py-1 rounded-full text-xs font-semibold capitalize
            ${
              product.category === "cake"
                ? "bg-blush-100 text-blush-600"
                : product.category === "cupcake"
                  ? "bg-mint-100 text-mint-600"
                  : product.category === "pastry"
                    ? "bg-cream-200 text-chocolate-600"
                    : "bg-chocolate-100 text-chocolate-700"
            }
          `}
          >
            {product.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-script text-2xl font-semibold text-chocolate-700 mb-2 group-hover:text-blush-600 transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-chocolate-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-chocolate-700">
              ₹{product.price}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppOrder}
            className="bg-gradient-to-r from-mint-400 to-mint-500 hover:from-mint-500 hover:to-mint-600 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <MessageCircle size={16} />
            <span>Order</span>
          </motion.button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blush-100 to-transparent rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    </motion.div>
  );
}

// Type export for use in other components
export type { Product };
