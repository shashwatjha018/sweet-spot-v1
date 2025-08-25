import { motion } from "framer-motion";
import { useState } from "react";
import {
  MessageCircle,
  Calendar,
  ChefHat,
  User,
  Phone,
  Cake,
} from "lucide-react";

interface FormData {
  fullName: string;
  phoneNumber: string;
  cakeType: string;
  flavorPreference: string;
  weightSize: string;
  occasion: string;
  deliveryDate: string;
  specialInstructions: string;
}

export function CustomCakeOrderForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    cakeType: "",
    flavorPreference: "",
    weightSize: "",
    occasion: "",
    deliveryDate: "",
    specialInstructions: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;

    const message = `��� Custom Cake Order Request

👤 Personal Information:
• Name: ${formData.fullName}
• Phone: ${formData.phoneNumber}

🎂 Cake Specifications:
• Type: ${formData.cakeType || "Not specified"}
• Flavor: ${formData.flavorPreference || "Not specified"}
• Weight/Size: ${formData.weightSize || "Not specified"}
• Occasion: ${formData.occasion || "Not specified"}
• Delivery Date: ${formData.deliveryDate || "Not specified"}

✨ Special Requests:
${formData.specialInstructions || "No special instructions"}

Please confirm the details and let me know the pricing. Thank you!`;

    const phoneNumber = "+919876543210"; // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="custom-cake-order"
      className="py-20 bg-gradient-to-br from-blush-50 via-cream-50 to-mint-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-blush-100 p-3 rounded-2xl">
              <ChefHat className="text-blush-600" size={32} />
            </div>
          </div>
          <h2 className="font-script text-5xl sm:text-6xl font-bold text-chocolate-700 mb-4">
            Custom Cake Order
          </h2>
          <p className="text-chocolate-600 text-lg max-w-2xl mx-auto">
            Let's create your perfect cake! Fill out the details below and we'll
            craft something truly special for your celebration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-cream-200"
        >
          <form className="space-y-10">
            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-mint-100 p-2 rounded-xl">
                  <User className="text-mint-600" size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-chocolate-700">
                  Personal Information
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-chocolate-600 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blush-400 ${
                      errors.fullName
                        ? "border-red-300 bg-red-50"
                        : "border-cream-200 bg-cream-50 focus:border-blush-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-chocolate-600 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blush-400 ${
                      errors.phoneNumber
                        ? "border-red-300 bg-red-50"
                        : "border-cream-200 bg-cream-50 focus:border-blush-300"
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Cake Specifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blush-100 p-2 rounded-xl">
                  <Cake className="text-blush-600" size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-chocolate-700">
                  Cake Specifications
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-chocolate-600 font-medium mb-2">
                    Cake Type
                  </label>
                  <select
                    value={formData.cakeType}
                    onChange={(e) =>
                      handleInputChange("cakeType", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-2xl border-2 border-cream-200 bg-cream-50 focus:border-blush-300 focus:outline-none focus:ring-2 focus:ring-blush-400 transition-all duration-300"
                  >
                    <option value="">Select cake type</option>
                    <option value="Cake">Cake</option>
                    <option value="Cupcake">Cupcake</option>
                    <option value="Pastry">Pastry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-chocolate-600 font-medium mb-2">
                    Flavor Preference
                  </label>
                  <input
                    type="text"
                    value={formData.flavorPreference}
                    onChange={(e) =>
                      handleInputChange("flavorPreference", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-2xl border-2 border-cream-200 bg-cream-50 focus:border-blush-300 focus:outline-none focus:ring-2 focus:ring-blush-400 transition-all duration-300"
                    placeholder="Chocolate, Vanilla, Mixed"
                  />
                </div>

                <div>
                  <label className="block text-chocolate-600 font-medium mb-2">
                    Weight/Size
                  </label>
                  <select
                    value={formData.weightSize}
                    onChange={(e) =>
                      handleInputChange("weightSize", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-2xl border-2 border-cream-200 bg-cream-50 focus:border-blush-300 focus:outline-none focus:ring-2 focus:ring-blush-400 transition-all duration-300"
                  >
                    <option value="">Select weight/size</option>
                    <option value="0.5kg">0.5kg</option>
                    <option value="1kg">1kg</option>
                    <option value="2kg">2kg</option>
                    <option value="3kg">3kg</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-chocolate-600 font-medium mb-2">
                    Occasion
                  </label>
                  <input
                    type="text"
                    value={formData.occasion}
                    onChange={(e) =>
                      handleInputChange("occasion", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-2xl border-2 border-cream-200 bg-cream-50 focus:border-blush-300 focus:outline-none focus:ring-2 focus:ring-blush-400 transition-all duration-300"
                    placeholder="Birthday, Anniversary, Wedding"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-chocolate-600 font-medium mb-2">
                    Delivery Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.deliveryDate}
                      onChange={(e) =>
                        handleInputChange("deliveryDate", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-2xl border-2 border-cream-200 bg-cream-50 focus:border-blush-300 focus:outline-none focus:ring-2 focus:ring-blush-400 transition-all duration-300"
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <Calendar
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-chocolate-400"
                      size={20}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Special Requests */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-chocolate-100 p-2 rounded-xl">
                  <MessageCircle className="text-chocolate-600" size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-chocolate-700">
                  Special Requests
                </h3>
              </div>

              <div>
                <label className="block text-chocolate-600 font-medium mb-2">
                  Design Ideas & Special Instructions
                </label>
                <textarea
                  value={formData.specialInstructions}
                  onChange={(e) =>
                    handleInputChange("specialInstructions", e.target.value)
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-cream-200 bg-cream-50 focus:border-blush-300 focus:outline-none focus:ring-2 focus:ring-blush-400 transition-all duration-300 resize-none"
                  placeholder="Describe your vision for the cake design, any specific decorations, colors, themes, or special requirements..."
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center pt-6"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppSubmit}
                className="bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 mx-auto"
              >
                <MessageCircle size={24} />
                <span>Send Order via WhatsApp</span>
                <span className="text-2xl">🍰</span>
              </motion.button>

              <p className="text-chocolate-400 text-sm mt-4">
                We'll get back to you within 2 hours with pricing and
                confirmation details!
              </p>
            </motion.div>
          </form>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blush-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-mint-200 rounded-full opacity-20 blur-xl"></div>
      </div>
    </section>
  );
}
