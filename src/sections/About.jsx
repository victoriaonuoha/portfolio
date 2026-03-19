// src/sections/About.jsx

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-2xl blur-2xl opacity-30"
               style={{ background: "var(--color-primary)" }}
          />
          <img
            src="/profile.jpg"
            alt="Profile"
            className="relative rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-font text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            I’m a frontend developer focused on building scalable, 
            performance-driven web applications that convert users into customers.
            I combine clean architecture with intentional UI design.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            My goal is simple — build products that look premium,
            feel intuitive, and deliver measurable business results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}