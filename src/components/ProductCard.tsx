import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

type Props = {
  product: Product;
  index?: number;
};

const ProductCard = ({ product, index = 0 }: Props) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square rounded-lg overflow-hidden glass-card hover-glow">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-heading text-foreground text-sm sm:text-base truncate">{product.name}</h3>
          <p className="text-primary font-body text-sm">
            {product.currency} {product.price.toLocaleString()}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-300 flex-shrink-0"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
