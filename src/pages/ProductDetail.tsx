import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { getProductImage } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="pt-24 pb-20 container mx-auto px-4 text-center">
        <p className="text-muted-foreground font-body">Product not found.</p>
        <Link to="/shop" className="text-primary font-body mt-4 inline-block">
          ← Back to Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square rounded-xl overflow-hidden glass-card"
          >
            <img
              src={getProductImage(product.images[0])}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase mb-2">
              {product.category}
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">{product.name}</h1>
            <p className="text-primary font-heading text-2xl mb-6">${product.price}</p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">{product.description}</p>

            <Button
              onClick={() => addItem(product)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wider px-8 py-6 w-fit"
            >
              <ShoppingBag size={18} className="mr-2" /> Add to Cart
            </Button>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground font-body text-xs tracking-wider uppercase">
                ✦ Handmade to order &nbsp; ✦ Premium yarn &nbsp; ✦ Ships in 5-7 days
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
