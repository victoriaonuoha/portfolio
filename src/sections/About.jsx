import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 lg:px-12 h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Subtle Glow */}
          <div
            className="absolute w-[95%] h-[95%] rounded-2xl blur-2xl opacity-20"
            style={{ background: "var(--color-primary)" }}
          />

          <img
            src="/me.jpeg"
            alt="Profile"
            className="relative rounded-2xl shadow-lg max-h-[75vh] w-[85%] object-cover"
          />
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="heading-font text-3xl lg:text-4xl font-bold mb-6">
            About Me
          </h2>

          <div className="space-y-5 text-muted leading-relaxed text-[15.5px] lg:text-base">
            <p>
              I am a Computer Science graduate passionate about building
              high-performance web applications that solve real-world problems
              with precision and scalability.
            </p>

            <p>
              Beyond development, I serve as a web instructor — helping aspiring
              developers master modern frontend technologies and build strong,
              production-ready foundations.
            </p>

            <p>
              My experience spans responsive landing pages to scalable
              application interfaces, always prioritizing performance,
              usability, and conversion-focused design systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}