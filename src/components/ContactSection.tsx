import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-2">Reach Out</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground">Contact Us</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-3 bg-teal-light/30 border border-gold/20 rounded-2xl p-6 hover:border-gold/50 transition-colors text-center">
            <Phone className="text-gold" size={28} />
            <p className="text-primary-foreground font-display font-semibold">Call Us</p>
            <a href="tel:+919935294198" className="text-primary-foreground/70 text-sm font-body hover:text-gold transition-colors">+91 99352 94198</a>
            <a <a href="tel:+919336480827" className="text-primary-foreground/70 text-sm font-body hover:text-gold transition-colors">+91 93364 80827</a></a>
          </div>

          <a
            href="mailto:info@shriramvatika.com"
            className="flex flex-col items-center gap-3 bg-teal-light/30 border border-gold/20 rounded-2xl p-6 hover:border-gold/50 transition-colors text-center"
          >
            <Mail className="text-gold" size={28} />
            <p className="text-primary-foreground font-display font-semibold">Email Us</p>
            <p className="text-primary-foreground/70 text-sm font-body">info@shriramvatika.com</p>
          </a>

          <div className="flex flex-col items-center gap-3 bg-teal-light/30 border border-gold/20 rounded-2xl p-6 text-center">
            <MapPin className="text-gold" size={28} />
            <p className="text-primary-foreground font-display font-semibold">Visit Us</p>
            <p className="text-primary-foreground/70 text-sm font-body">Maruti Nagar Colony, Dafi, Sear Govardhan Dafi, UP 221011</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-10">
          {["Facebook", "Instagram", "YouTube"].map((s) => (
            <a
              key={s}
              href="#"
              className="px-5 py-2 rounded-full border border-gold/30 text-gold text-sm font-body hover:bg-gold/10 transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
