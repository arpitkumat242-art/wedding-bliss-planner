import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary border-t border-gold/10 py-6 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-primary-foreground/60 text-sm font-body">
        © {new Date().getFullYear()} Shri Ram Vatika. All rights reserved.
      </p>
      <p className="text-primary-foreground/40 text-xs font-body flex items-center gap-1">
        Made with <Heart size={12} className="text-rose fill-rose" /> for celebrations
      </p>
    </div>
  </footer>
);

export default Footer;
