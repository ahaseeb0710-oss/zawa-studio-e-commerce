import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PER_PAGE = 10;

const Shop = () => {
  const [active, setActive] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  useEffect(() => {
    setPage(1);
  }, [active]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const start = (page - 1) * PER_PAGE;
  const paginated = filtered.slice(start, start + PER_PAGE);

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase mb-2">
            Browse Collection
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl text-foreground">Shop</h1>
          <p className="text-muted-foreground font-body text-sm mt-3">
            Showing {paginated.length} of {filtered.length} products
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-body tracking-wider transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {paginated.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-body">
              No products in this category yet. Check back soon!
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-14">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`min-w-[40px] h-10 px-3 rounded-full font-body text-sm transition-all duration-300 ${
                  page === n
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-primary"
                }`}
              >
                {n}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;
