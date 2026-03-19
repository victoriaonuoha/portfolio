// src/sections/Testimonials.jsx

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-[#111118]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading-font text-4xl font-bold mb-16">
          What Clients Say
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 rounded-2xl border border-gray-200 dark:border-gray-800"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            “Working with her was seamless. The UI quality and performance
            improvements exceeded expectations.”
          </p>

          <p
            className="font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            — Product Manager
          </p>
        </motion.div>
      </div>
    </section>
  );
}