// Image imports
import handbag2 from "@/assets/zawa/handbag2.jpeg";
import rufflehandbag2 from "@/assets/zawa/rufflehandbag2.jpg";
import teddypouch from "@/assets/zawa/teddypouch.jpeg";
import teddypouch2 from "@/assets/zawa/teddypouch2.jpg";
import wallet1 from "@/assets/zawa/wallet1.jpeg";
import bluewallet2 from "@/assets/zawa/bluewallet2.jpg";
import bouquet1 from "@/assets/zawa/bouquet1.jpeg";
import purpleboquet2 from "@/assets/zawa/purpleboquet2.png";
import snoopypouch1 from "@/assets/zawa/snoopypouch1.jpeg";
import snoopypouch2 from "@/assets/zawa/snoopypouch2.jpeg";
import pouch3 from "@/assets/zawa/pouch3.jpeg";
import phonecase1 from "@/assets/zawa/phonecase1.jpeg";
import redphonecase3 from "@/assets/zawa/redphonecase3.jpg";
import phonecase2 from "@/assets/zawa/phonecase2.jpeg";
import redphonecase2 from "@/assets/zawa/redphonecase2.jpg";
import bluephonecase3 from "@/assets/zawa/bluephonecase3.jpg";
import bluephonecase2 from "@/assets/zawa/bluephonecase2.png";
import phonecase3 from "@/assets/zawa/phonecase3.jpeg";
import keychain1 from "@/assets/zawa/keychain1.jpeg";
import bowkeychain2 from "@/assets/zawa/bowkeychain2.png";
import keychain2 from "@/assets/zawa/keychain2.jpeg";
import insta2 from "@/assets/zawa/insta2.jpeg";
import keychain3 from "@/assets/zawa/keychain3.jpeg";
import stawberrykeychain2 from "@/assets/zawa/stawberrykeychain2.jpg";
import stawberrykeychain3 from "@/assets/zawa/stawberrykeychain3.jpg";
import keychain4 from "@/assets/zawa/keychain4.jpeg";
import moon1 from "@/assets/zawa/moon1.jpg";
import star2 from "@/assets/zawa/star2.jpg";
import keychain5 from "@/assets/zawa/keychain5.jpeg";
import redmini1 from "@/assets/zawa/redmini1.jpg";
import brownmini2 from "@/assets/zawa/brownmini2.jpg";
import keychain6 from "@/assets/zawa/keychain6.jpeg";
import chickkeychain3 from "@/assets/zawa/chickkeychain3.jpg";
import chickkeychain2 from "@/assets/zawa/chickkeychain2.jpg";
import keychain7 from "@/assets/zawa/keychain7.jpeg";
import handbagPlain from "@/assets/zawa/handbag.jpeg";
import insta4 from "@/assets/zawa/insta4.jpeg";
import pearlwallet2 from "@/assets/zawa/pearlwallet2.jpg";
import pearlwallet3 from "@/assets/zawa/pearlwallet3.jpg";
import bouquet2 from "@/assets/zawa/bouquet2.jpeg";
import sunflowerbouquet2 from "@/assets/zawa/sunflowerbouquet2.jpg";
import tullip from "@/assets/zawa/tullip.jpeg";

export type ProductCategory = "Bags" | "Wallets" | "Pouches" | "Phone Cases" | "Keychains" | "Bouquets";

export type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  category: ProductCategory;
  images: string[];
};

export const products: Product[] = [
  {
    id: "crochet-handbag",
    name: "Crochet Handbag",
    price: 2000,
    currency: "PKR",
    category: "Bags",
    images: [handbagPlain],
    description:
      "A handmade crochet handbag made with durable yarn in a rich maroon color. It features a simple, stylish design with a secure button closure and a comfortable strap. Lightweight and unique — perfect for everyday use and adds a charming handmade touch to any outfit.",
  },
  {
    id: "crochet-wallet-with-pearls",
    name: "Crochet Wallet with Pearls",
    price: 1200,
    currency: "PKR",
    category: "Wallets",
    images: [insta4, pearlwallet2, pearlwallet3],
    description:
      "An elegant and unique handmade crochet wallet featuring soft pastel shades of purple, pink, and cream with a beautiful ruffle flap design. Carefully crafted with fine yarn — perfect for carrying cash, cards, and small essentials securely. The attached pearl-style handle adds a classy, stylish touch for both everyday use and special occasions.",
  },
  {
    id: "crochet-sunflower-bouquet",
    name: "Crochet Sunflower Bouquet",
    price: 1500,
    currency: "PKR",
    category: "Bouquets",
    images: [bouquet2, sunflowerbouquet2],
    description:
      "A handmade crochet sunflower bouquet made with soft yellow and brown yarn. Each sunflower is carefully crocheted with a round brown center and bright yellow petals, attached to green yarn stems with small leaves. Arranged into a neat bouquet and wrapped in elegant beige paper with a green yarn bow — a beautiful, long-lasting gift for birthdays, graduations, or special occasions.",
  },
  {
    id: "crochet-tulips",
    name: "Crochet Tulips",
    price: 600,
    currency: "PKR",
    category: "Bouquets",
    images: [tullip],
    description:
      "Charming handcrafted yarn tulips that offer a beautiful, everlasting alternative to real blooms. Each tulip features a vibrant, textured petal head in shades of red or maroon, supported by a sturdy green stem and delicate leaves. Soft, durable creations perfect for home decor, thoughtful gifts, or adding a cozy handmade touch to any space.",
  },
  {
    id: "crochet-ruffle-handbag",
    name: "Crochet Ruffle Handbag",
    price: 2200,
    currency: "PKR",
    category: "Bags",
    images: [handbag2, rufflehandbag2],
    description:
      "A beautiful handmade crochet handbag in a rich red color with a soft beige ruffled border and matching handle. It features a small button closure on the front to keep your items secure. The bag has a cozy, textured design that gives it a charming and stylish look — perfect for casual outings, adding a warm and elegant touch to any outfit.",
  },
  {
    id: "crochet-wallet",
    name: "Crochet Wallet",
    price: 1200,
    currency: "PKR",
    category: "Wallets",
    images: [wallet1, bluewallet2],
    description:
      "This handmade crochet wallet is simple, stylish, and practical. Made with soft blue yarn and finished with a delicate cream ruffle trim, it features a neat flap design to keep your cash, cards, and small essentials secure. Lightweight and compact, it adds a cozy handmade touch to your everyday use.",
  },
  {
    id: "crochet-purple-rose-bouquet",
    name: "Crochet Purple Rose Bouquet",
    price: 1500,
    currency: "PKR",
    category: "Bouquets",
    images: [bouquet1, purpleboquet2],
    description:
      "A handmade crochet flower bouquet made using soft acrylic and milk cotton yarn in pastel lavender, white, pink, and green. Each flower is crocheted separately — roses, small buds, and round blooms — then mounted on floral wire stems wrapped in green yarn, arranged into a small bouquet, and wrapped in black bouquet paper tied with ribbon. A thoughtful handmade gift for birthdays, graduations, or special occasions.",
  },
  {
    id: "crochet-snoopy-pouch",
    name: "Crochet Snoopy Pouch",
    price: 600,
    currency: "PKR",
    category: "Pouches",
    images: [snoopypouch1, snoopypouch2],
    description:
      "An adorable handmade crochet mini pouch with a cute puppy-inspired design in soft white and blue yarn. It has tiny black ears, sweet embroidered details, and a drawstring closure to keep your small items secure. Compact and lightweight — perfect for carrying coins, earbuds, or little essentials while adding a playful touch to your style.",
  },
  {
    id: "crochet-teddy-pouch",
    name: "Crochet Teddy Pouch",
    price: 600,
    currency: "PKR",
    category: "Pouches",
    images: [teddypouch, teddypouch2],
    description:
      "An adorable handmade crochet teddy bear pouch — a cute and cozy accessory for your bag. Carefully crafted with soft yarn, it features sweet black eyes and a soft cream snout for a charming, lovable look. Lightweight and durable, it easily attaches to your handbag, backpack, or keys.",
  },
  {
    id: "crochet-hello-kitty-pouch",
    name: "Crochet Hello Kitty Pouch",
    price: 600,
    currency: "PKR",
    category: "Pouches",
    images: [pouch3],
    description:
      "A cute handmade crochet kitty pouch made with soft white yarn. It features adorable black eyes, tiny whiskers, a yellow nose, and a red bow for a sweet touch. Perfect for carrying small essentials like coins or keys, it includes a soft strap for easy hanging on your bag.",
  },
  {
    id: "crochet-phone-case-purple",
    name: "Crochet Phone Case Purple",
    price: 1000,
    currency: "PKR",
    category: "Phone Cases",
    images: [phonecase1],
    description:
      "A handmade crochet phone case in a beautiful purple design decorated with soft 3D flower details. Made with cozy yarn, it provides light protection while adding a unique and stylish touch — perfect for anyone who loves cute, handmade accessories.",
  },
  {
    id: "crochet-phone-case-red",
    name: "Crochet Phone Case Red",
    price: 1000,
    currency: "PKR",
    category: "Phone Cases",
    images: [redphonecase3, phonecase2, redphonecase2],
    description:
      "A handmade crochet phone case with a rich maroon base and a beautiful 3D rose at the center. The soft yarn provides light protection while adding a warm, elegant look. Includes a cute crochet charm strap for extra style.",
  },
  {
    id: "crochet-phone-case-blue",
    name: "Crochet Phone Case Blue",
    price: 1000,
    currency: "PKR",
    category: "Phone Cases",
    images: [bluephonecase3, bluephonecase2, phonecase3],
    description:
      "A handmade crochet phone case in a stylish blue design with a soft white bow detail on the back. Made with high-quality yarn for light protection and a cozy, unique look — perfect for anyone who loves simple yet elegant handmade accessories.",
  },
  {
    id: "crochet-purple-bow-keychain",
    name: "Crochet Purple Bow Keychain",
    price: 500,
    currency: "PKR",
    category: "Keychains",
    images: [keychain1, bowkeychain2],
    description:
      "A cute handmade crochet bow keychain in a soft purple color with white center details, attached to a sturdy metal key ring. The neat stitching and charming bow design give it a sweet, stylish look — a lovely small accessory for keys or bags.",
  },
  {
    id: "crochet-lilly-keychain",
    name: "Crochet Lilly Keychain",
    price: 500,
    currency: "PKR",
    category: "Keychains",
    images: [keychain2, insta2],
    description:
      "A beautiful handmade crochet flower keychain featuring pink and purple bell-shaped flowers with green leaves and stems, attached to a strong metal key ring. The soft yarn and detailed stitching give it a cute and elegant look.",
  },
  {
    id: "crochet-strawberry-daisy-keychain",
    name: "Crochet Strawberry With Daisy Keychain",
    price: 500,
    currency: "PKR",
    category: "Keychains",
    images: [keychain3, stawberrykeychain2, stawberrykeychain3],
    description:
      "A cute handmade crochet keychain featuring a bright red strawberry with white details and green leaves, paired with a small white daisy with a yellow center. Attached to a sturdy metal ring — a charming, playful accessory for keys or bags.",
  },
  {
    id: "couple-star-moon-keychain",
    name: "Couple Star and Moon Keychain",
    price: 500,
    currency: "PKR",
    category: "Keychains",
    images: [keychain4, moon1, star2],
    description:
      "A lovely handmade crochet keychain set featuring a bright yellow crescent moon and a soft blue star. Both pieces are carefully stitched with soft yarn and attached to strong metal key rings — perfect for couples or best friends who want a sweet, dreamy accessory.",
  },
  {
    id: "crochet-mini-flower-bouquet-keychain",
    name: "Crochet Mini Flower Bouquet Keychain",
    price: 500,
    currency: "PKR",
    category: "Keychains",
    images: [keychain5, redmini1, brownmini2],
    description:
      "A beautiful handmade crochet keychain set with two floral designs — one showing a red rose bouquet wrapped in white with a small red bow, and another featuring a blue flower with green leaves on a warm brown background. Carefully stitched and attached to sturdy metal rings.",
  },
  {
    id: "crochet-chick-keychain",
    name: "Crochet Chick Keychain",
    price: 500,
    currency: "PKR",
    category: "Keychains",
    images: [keychain6, chickkeychain3, chickkeychain2],
    description:
      "An adorable handmade crochet keychain featuring a cheerful yellow chick. Stitched with soft, vibrant yarn and detailed with glossy black safety eyes, a tiny orange beak, and a sweet pink bow. Attached to a sturdy metal ring — a playful, handcrafted charm for your keys or favorite bag.",
  },
  {
    id: "crochet-name-keychain",
    name: "Crochet Name Keychain",
    price: 500,
    currency: "PKR",
    category: "Keychains",
    images: [keychain7],
    description:
      "A cute handmade crochet keychain featuring a soft white character with shiny black eyes and a sweet smile, decorated with a pink bow and a matching pink crochet heart. Includes colorful letter beads for a personalized touch — lightweight and easy to attach to your bag or keys.",
  },
];

export const categories = ["All", "Bags", "Wallets", "Pouches", "Phone Cases", "Keychains", "Bouquets"] as const;
