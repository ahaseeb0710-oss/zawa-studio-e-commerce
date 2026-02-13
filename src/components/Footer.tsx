import { Link } from "react-router-dom";
import { Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl text-foreground mb-3">ZAWA STUDIO</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Handmade crochet pieces crafted with love and care. Each item is unique, made to order with premium yarns.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/shop", label: "Shop" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-muted-foreground hover:text-foreground text-sm font-body transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-foreground mb-3">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@zawastudio.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-xs font-body flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-accent" /> by Zawa Studio © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
