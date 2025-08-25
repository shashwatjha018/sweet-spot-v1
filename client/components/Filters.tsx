import { motion } from "framer-motion";

type Category = "all" | "cake" | "cupcake" | "pastry" | "custom";

interface FiltersProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { value: Category; label: string; emoji: string }[] = [
  { value: "all", label: "All Items", emoji: "🍯" },
  { value: "cake", label: "Cakes", emoji: "🎂" },
  { value: "cupcake", label: "Cupcakes", emoji: "🧁" },
  { value: "pastry", label: "Pastries", emoji: "🥐" },
  { value: "custom", label: "Custom", emoji: "✨" },
];

export function Filters({ selectedCategory, onCategoryChange }: FiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <motion.button
          key={category.value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.value)}
          className={`
            flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg
            ${
              selectedCategory === category.value
                ? "bg-gradient-to-r from-blush-400 to-blush-500 text-white shadow-blush-200"
                : "bg-white text-chocolate-600 hover:bg-cream-50 border border-cream-200"
            }
          `}
        >
          <span className="text-lg">{category.emoji}</span>
          <span>{category.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

export type { Category };
