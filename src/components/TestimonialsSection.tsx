import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding",
    rating: 5,
    text: "Shri Ram Vatika made our wedding absolutely magical. The decorations, food, and service were beyond our expectations. Truly a dream venue!",
  },
  {
    name: "Anita Verma",
    event: "Engagement",
    rating: 5,
    text: "We hosted our daughter's engagement here and everything was perfect. The staff went above and beyond to make our event special.",
  },
  {
    name: "Suresh Kumar",
    event: "Birthday Party",
    rating: 5,
    text: "Excellent venue with great amenities. The garden area is beautiful and the food was delicious. Highly recommended for any celebration!",
  },
  {
    name: "Meena & Rajesh Gupta",
    event: "Wedding",
    rating: 5,
    text: "From the first visit to the last guest leaving, everything was handled professionally. The stage decoration was stunning. Thank you, team!",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-primary">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-2">What Our Clients Say</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground">Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-teal-light/30 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 relative"
            >
              <Quote className="text-gold/30 absolute top-4 right-4" size={32} />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="text-gold fill-gold" size={16} />
                ))}
              </div>
              <p className="text-primary-foreground/80 font-body text-sm leading-relaxed mb-4">
                "{t.text}"
              </p>
              <div>
                <p className="text-primary-foreground font-display font-semibold">{t.name}</p>
                <p className="text-gold text-xs font-body">{t.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
