export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "Bags" | "Clothing" | "Accessories" | "Plushies" | "Custom";
  images: string[];
};

// We import images in the components that use them
export const products: Product[] = [
  {
    id: "crochet-tote-cream",
    name: "Cream Tote Bag",
    price: 85,
    description: "A beautifully handcrafted crochet tote bag in soft cream. Perfect for everyday use with a bohemian touch. Each stitch is carefully made with premium cotton yarn.",
    category: "Bags",
    images: ["product-bag-1"],
  },
  {
    id: "crossbody-terracotta",
    name: "Terracotta Crossbody",
    price: 72,
    description: "Handmade crochet crossbody bag in warm terracotta. Features intricate mandala pattern and braided strap. A statement piece for any outfit.",
    category: "Bags",
    images: ["product-bag-2"],
  },
  {
    id: "sage-crop-top",
    name: "Sage Crochet Top",
    price: 65,
    description: "Delicate sage green crochet crop top with intricate lace pattern. Lightweight and breathable, perfect for summer days.",
    category: "Clothing",
    images: ["product-top-1"],
  },
  {
    id: "rose-cardigan",
    name: "Rose Chunky Cardigan",
    price: 120,
    description: "Cozy chunky crochet cardigan in dusty rose pink. Open-stitch design with pockets. Handmade with love using premium soft yarn.",
    category: "Clothing",
    images: ["product-cardigan-1"],
  },
  {
    id: "lavender-bucket-hat",
    name: "Lavender Bucket Hat",
    price: 45,
    description: "Adorable crochet bucket hat in soft lavender purple. Lightweight and stylish, ideal for sunny days. One size fits most.",
    category: "Accessories",
    images: ["product-hat-1"],
  },
  {
    id: "cream-bear-plushie",
    name: "Cream Bear Plushie",
    price: 38,
    description: "Cute amigurumi bear plushie in cream. Handmade with hypoallergenic cotton yarn. A perfect gift for all ages.",
    category: "Plushies",
    images: ["product-plushie-1"],
  },
];

export const categories = ["All", "Bags", "Clothing", "Accessories", "Plushies", "Custom"] as const;
