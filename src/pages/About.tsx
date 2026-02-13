import { motion } from "framer-motion";
import { Heart, Scissors, Package } from "lucide-react";

const steps = [
  { icon: Heart, title: "Designed with Love", desc: "Every piece begins as a sketch, inspired by nature, art, and the beauty of handmade craft." },
  { icon: Scissors, title: "Handcrafted Carefully", desc: "Using premium cotton and bamboo yarns, each item is crocheted stitch by stitch with precision." },
  { icon: Package, title: "Delivered to You", desc: "Carefully packaged and shipped to your door, ready to be treasured for years to come." },
];

const About = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase mb-2">Our Story</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-foreground">About Zawa Studio</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 sm:p-12 mb-16"
        >
          <p className="text-muted-foreground font-body leading-relaxed text-base sm:text-lg mb-6">
            Zawa Studio was born from a deep love for the timeless art of crochet. What started as a personal hobby quickly became a passion for creating beautiful, wearable art that brings joy to people's lives.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-base sm:text-lg mb-6">
            Every piece in our collection is handmade with intention — from selecting the finest yarns to perfecting each stitch pattern. We believe that handmade items carry a special energy, a warmth that mass-produced items simply cannot replicate.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-base sm:text-lg">
            Our mission is simple: to create beautiful crochet pieces that celebrate slow fashion, sustainability, and the beauty of handcraft. Each item is made to order, ensuring it's crafted specifically for you.
          </p>
        </motion.div>

        <div>
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground text-center mb-10">Our Process</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-xl p-6 text-center hover-glow"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mx-auto mb-4">
                  <step.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
