import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Shri Ram Vatika" className="h-12 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            className="bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Send Enquiry
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-gold/20 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide text-center"
          >
            Send Enquiry
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
