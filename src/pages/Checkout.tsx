import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { getProductImage } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { z } from "zod";

const checkoutSchema = z.object({
  fullName: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  address: z.string().trim().min(1, "Required").max(300),
  city: z.string().trim().min(1, "Required").max(100),
  phone: z.string().trim().min(1, "Required").max(20),
});

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ fullName: "", email: "", address: "", city: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = checkoutSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (submitted) {
    return (
      <main className="pt-24 pb-20 container mx-auto px-4 text-center max-w-lg">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <CheckCircle size={64} className="text-primary mx-auto mb-6" />
          <h1 className="font-heading text-3xl text-foreground mb-4">Thank You!</h1>
          <p className="text-muted-foreground font-body mb-8">Your order has been placed. We'll reach out via email with details.</p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-body">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </motion.div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="pt-24 pb-20 container mx-auto px-4 text-center">
        <p className="text-muted-foreground font-body">Your cart is empty.</p>
        <Link to="/shop" className="text-primary font-body mt-4 inline-block">← Back to Shop</Link>
      </main>
    );
  }

  const field = (key: keyof typeof form, label: string, type = "text") => (
    <div>
      <label className="text-foreground font-body text-sm mb-1 block">{label}</label>
      <Input
        type={type}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className="bg-secondary border-border text-foreground font-body"
      />
      {errors[key] && <p className="text-destructive text-xs mt-1 font-body">{errors[key]}</p>}
    </div>
  );

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <h1 className="font-heading text-3xl sm:text-4xl text-foreground mb-8">Checkout</h1>

        <div className="grid md:grid-cols-5 gap-8">
          <form onSubmit={handleSubmit} className="md:col-span-3 glass-card rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="font-heading text-foreground text-lg mb-2">Shipping Info</h2>
            {field("fullName", "Full Name")}
            {field("email", "Email", "email")}
            {field("phone", "Phone")}
            {field("address", "Address")}
            {field("city", "City")}
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wider py-6 mt-4">
              Place Order — ${totalPrice.toFixed(2)}
            </Button>
          </form>

          <div className="md:col-span-2 glass-card rounded-2xl p-6 h-fit">
            <h2 className="font-heading text-foreground text-lg mb-4">Order Summary</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <img src={getProductImage(item.product.images[0])} alt={item.product.name} className="w-12 h-12 rounded object-cover" />
                  <div className="flex-1">
                    <p className="text-foreground font-body text-sm">{item.product.name}</p>
                    <p className="text-muted-foreground font-body text-xs">x{item.quantity}</p>
                  </div>
                  <p className="text-primary font-body text-sm">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-4 pt-4 flex justify-between">
              <span className="text-muted-foreground font-body">Total</span>
              <span className="text-foreground font-heading text-lg">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
