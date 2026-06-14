import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/zawa/hero-image-BED3Zb5z.jpg";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Zawa Studio hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at top, rgba(43,0,54,0.7), rgba(18,0,24,0.95))" }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            Handmade Crochet with Love
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-gradient leading-tight"
          >
            ZAWA
            <br />
            STUDIO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-muted-foreground font-body mt-6 text-base sm:text-lg max-w-md mx-auto"
          >
            Artisan crochet pieces, thoughtfully crafted by hand. Every stitch tells a story.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wider px-8 py-6 text-sm">
              <Link to="/shop">
                Shop Now <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 font-body tracking-wider px-8 py-6 text-sm">
              <Link to="/contact">Custom Orders</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase mb-2">Curated Collection</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground">Featured Pieces</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary font-body tracking-wider">
            <Link to="/shop">View All Products <ArrowRight size={16} className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* About Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass-card rounded-2xl p-8 sm:p-12 md:p-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase mb-2">Our Story</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">Crafted by Hand, Made with Heart</h2>
            <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              Zawa Studio was born from a passion for the art of crochet. Every piece is meticulously handcrafted using premium yarns, blending timeless techniques with modern aesthetics. We believe in slow fashion — creating pieces that are meant to be treasured.
            </p>
            <Button asChild variant="link" className="text-primary font-body tracking-wider mt-6">
              <Link to="/about">Read Our Story <ArrowRight size={16} className="ml-1" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
