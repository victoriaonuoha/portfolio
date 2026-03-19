// src/sections/Skills.jsx

import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "REST APIs",
  "Git & GitHub"
];

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-[#111118]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="heading-font text-4xl font-bold mb-16">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:-translate-y-2 transition duration-300"
            >
              <p
                className="font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}