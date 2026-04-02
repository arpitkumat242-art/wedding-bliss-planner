import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Clock, Shield } from "lucide-react";
import venueImg from "@/assets/venue-about.png";

const usps = [
  { icon: Award, title: "Since 2009", desc: "Over 15 years of creating unforgettable celebrations" },
  { icon: Heart, title: "Personalized Service", desc: "Every event tailored to your unique vision" },
  { icon: Clock, title: "Hassle-Free Planning", desc: "Our team handles every detail seamlessly" },
  { icon: Shield, title: "Trusted by 500+ Families", desc: "Building lasting relationships through quality" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={venueImg}
                alt="Shri Ram Vatika celebrations"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                <p className="text-gold font-display text-2xl">Where Dreams Come Alive</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-2">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Your Dream Venue Awaits
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Shri Ram Vatika has been the premier wedding destination since 2009. 
              With over 15 years of experience in the industry, we have established ourselves 
              as a trusted name for grand celebrations. Nestled in a prime location with sprawling 
              grounds, we offer the perfect blend of traditional charm and modern amenities.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              From grand weddings to intimate engagements, our versatile spaces and dedicated 
              team ensure every celebration is nothing short of spectacular.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {usps.map((u) => (
                <div key={u.title} className="flex gap-3 p-4 rounded-xl bg-card border border-border">
                  <u.icon className="text-gold shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-display text-sm text-foreground font-semibold">{u.title}</p>
                    <p className="text-muted-foreground text-xs font-body mt-1">{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
