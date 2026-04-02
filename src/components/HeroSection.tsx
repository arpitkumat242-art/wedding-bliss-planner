import { motion } from "framer-motion";
import { Users, MapPin, Sparkles, Car } from "lucide-react";
import heroImg from "@/assets/venue-1.png";

const highlights = [
  { icon: Users, label: "1000+ Guests" },
  { icon: MapPin, label: "Prime Location" },
  { icon: Sparkles, label: "AC Hall & Garden" },
  { icon: Car, label: "Ample Parking" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Shri Ram Vatika Wedding Venue"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Welcome to Shri Ram Vatika
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
            Make Your Special Day{" "}
            <span className="text-gradient-gold italic">Memorable</span>
          </h1>
          <p className="text-primary-foreground/70 font-body text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            The perfect venue for weddings, engagements, and celebrations. 
            Where dreams meet elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#enquiry"
              className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base tracking-wide hover:opacity-90 transition-opacity text-center"
            >
              Send Enquiry
            </a>
            <a
              href="#gallery"
              className="border border-gold/50 text-gold px-8 py-3.5 rounded-full font-semibold text-base tracking-wide hover:bg-gold/10 transition-colors text-center"
            >
              View Gallery
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3"
              >
                <h.icon className="text-gold shrink-0" size={20} />
                <span className="text-primary-foreground/90 text-sm font-body font-medium">
                  {h.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
