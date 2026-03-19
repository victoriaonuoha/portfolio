// src/sections/Testimonials.jsx

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Product Manager",
    text: "Working with her was seamless. The UI quality and performance improvements exceeded expectations."
  },
  {
    name: "Startup Founder",
    text: "Onuoha delivered a high-quality product under tight deadlines. Her attention to detail is unmatched."
  },
  {
    name: "CTO, Tech Company",
    text: "A skilled instructor and developer. She explained complex concepts clearly and helped our team grow."
  },
  {
    name: "Freelance Client",
    text: "Responsive, professional, and creative. The website she built elevated our online presence significantly."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="heading-font text-4xl font-bold mb-16">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-10 rounded-2xl border border-gray-800 dark:border-gray-700"
            >
              <p className="text-muted text-lg mb-6">{t.text}</p>
              <p className="font-semibold" style={{ color: "var(--color-primary)" }}>
                — {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}