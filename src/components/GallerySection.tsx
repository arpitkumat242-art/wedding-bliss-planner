import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { X } from "lucide-react";

import venueStage from "@/assets/venue-stage.jpg";
import venueDining from "@/assets/venue-dining.jpg";
import venueGarden from "@/assets/venue-garden.jpg";
import venueLighting from "@/assets/venue-lighting.jpg";
import venue1 from "@/assets/venue-1.png";
import venue2 from "@/assets/venue-2.png";

const categories = ["All", "Wedding Setup", "Stage", "Lighting", "Dining"];

const images = [
  { src: venueStage, category: "Stage", alt: "Wedding stage decoration" },
  { src: venueDining, category: "Dining", alt: "Dining arrangements" },
  { src: venueGarden, category: "Wedding Setup", alt: "Garden wedding setup" },
  { src: venueLighting, category: "Lighting", alt: "Venue lighting" },
  { src: venue1, category: "Wedding Setup", alt: "Grand wedding celebration" },
  { src: venue2, category: "Wedding Setup", alt: "Colorful celebration" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-8">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-2">Our Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Gallery</h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all ${
                active === cat
                  ? "bg-gradient-gold text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <p className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-display text-lg">
                  {img.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-gold" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox}
              alt="Gallery full view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
