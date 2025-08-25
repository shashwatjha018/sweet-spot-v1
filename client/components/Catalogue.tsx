import { motion } from "framer-motion";
import { useState } from "react";
import { ProductCard, Product } from "./ProductCard";
import { Filters, Category } from "./Filters";

// Product data with real appealing images
const products: Product[] = [
  {
    id: "1",
    name: "Chocolate Truffle Cake",
    description:
      "Rich chocolate sponge layered with velvety truffle cream and topped with dark chocolate ganache.",
    price: 850,
    image:
      "https://images.pexels.com/photos/2955818/pexels-photo-2955818.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "cake",
  },
  {
    id: "2",
    name: "Strawberry Vanilla Cupcakes",
    description:
      "Fluffy vanilla cupcakes topped with fresh strawberry buttercream and a juicy strawberry.",
    price: 120,
    image:
      "https://images.pexels.com/photos/20677473/pexels-photo-20677473.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "cupcake",
  },
  {
    id: "3",
    name: "Classic Croissant",
    description:
      "Buttery, flaky French croissant baked to golden perfection. Perfect with coffee.",
    price: 80,
    image:
      "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "pastry",
  },
  {
    id: "4",
    name: "Red Velvet Delight",
    description:
      "Moist red velvet cake with cream cheese frosting and a hint of cocoa.",
    price: 950,
    image:
      "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "cake",
  },
  {
    id: "5",
    name: "Blueberry Muffins",
    description:
      "Fresh blueberry muffins with a tender crumb and bursts of juicy blueberries.",
    price: 100,
    image:
      "https://images.pexels.com/photos/979310/pexels-photo-979310.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "cupcake",
  },
  {
    id: "6",
    name: "Apple Cinnamon Danish",
    description:
      "Flaky pastry filled with spiced apple compote and topped with cinnamon sugar.",
    price: 140,
    image:
      "https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "pastry",
  },
  {
    id: "7",
    name: "Lemon Tart",
    description:
      "Crisp pastry shell filled with tangy lemon curd and topped with meringue.",
    price: 180,
    image:
      "https://images.pexels.com/photos/8879735/pexels-photo-8879735.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "pastry",
  },
  {
    id: "8",
    name: "Birthday Special",
    description:
      "Custom birthday cake with your choice of flavors, colors, and decorations.",
    price: 1200,
    image:
      "https://images.pexels.com/photos/32191357/pexels-photo-32191357.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "custom",
  },
  {
    id: "9",
    name: "Tiramisu Cake",
    description:
      "Italian-inspired coffee-soaked layers with mascarpone cream and cocoa dusting.",
    price: 1100,
    image:
      "https://images.pexels.com/photos/17558644/pexels-photo-17558644.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "cake",
  },
];

export function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section
      id="catalogue"
      className="py-20 bg-gradient-to-b from-cream-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl sm:text-6xl font-bold text-chocolate-700 mb-4">
            Our Sweet Collection
          </h2>
          <p className="text-chocolate-500 text-lg max-w-2xl mx-auto">
            Discover our handcrafted selection of cakes, cupcakes, and pastries,
            each made with love and the finest ingredients.
          </p>
        </motion.div>

        {/* Filters */}
        <Filters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                layout: { duration: 0.3 },
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-script text-3xl text-chocolate-600 mb-2">
              No items found
            </h3>
            <p className="text-chocolate-400">
              Try selecting a different category to see our delicious treats!
            </p>
          </motion.div>
        )}

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex justify-center space-x-4 text-4xl">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              🍰
            </motion.span>
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              🧁
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              🥐
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
