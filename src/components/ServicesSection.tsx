import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Gem, Cake, Building2, UtensilsCrossed, Music } from "lucide-react";

const services = [
  { icon: Heart, title: "Wedding Ceremonies", desc: "Grand and intimate wedding setups with beautiful mandap decorations and floral arrangements." },
  { icon: Gem, title: "Engagement Functions", desc: "Elegant engagement ceremony spaces with customizable décor themes and lighting." },
  { icon: Cake, title: "Birthday Parties", desc: "Fun and vibrant party setups for all ages with entertainment and catering options." },
  { icon: Building2, title: "Corporate Events", desc: "Professional event spaces with modern AV equipment and flexible seating arrangements." },
  { icon: UtensilsCrossed, title: "Catering Services", desc: "Exquisite multi-cuisine menus crafted by experienced chefs for every occasion." },
  { icon: Music, title: "Entertainment & DJ", desc: "Premium sound systems, DJ setups, and live entertainment arrangements available." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-card">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-2">What We Offer</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-background rounded-2xl p-6 border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
