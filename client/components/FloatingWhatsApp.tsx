import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = `Hi! I'd like to know more about Sweet Spot bakery and place an order!`;
    const phoneNumber = "+919876543210"; // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.7)",
            "0 0 0 10px rgba(34, 197, 94, 0)",
            "0 0 0 0 rgba(34, 197, 94, 0)",
          ],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity },
          scale: { duration: 0.2 },
        }}
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 3 }}
        className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-chocolate-700 text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap"
      >
        Chat with us!
        <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 border-4 border-transparent border-l-chocolate-700"></div>
      </motion.div>
    </motion.div>
  );
}
