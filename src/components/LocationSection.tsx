import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-2">Find Us</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Location</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.123!2d82.9955!3d25.2855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e0000000001%3A0x1!2sMaruti+Nagar+Colony%2C+Dafi%2C+Sear+Govardhan+Dafi%2C+Uttar+Pradesh+221011!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shri Ram Vatika Location"
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="flex gap-4 items-start">
              <MapPin className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  Shri Ram Vatika, Near Main Highway,<br />
                  City Center, Uttar Pradesh, India
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Navigation className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Nearby Landmarks</h3>
                <ul className="text-muted-foreground text-sm font-body space-y-1">
                  <li>• 2 km from Railway Station</li>
                  <li>• 5 km from Bus Stand</li>
                  <li>• Near City Mall</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
