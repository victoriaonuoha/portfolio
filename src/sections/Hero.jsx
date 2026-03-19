import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient px-6"
    >
      <div className="text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading-font text-4xl md:text-6xl font-bold leading-tight"
        >
          I Build High-Performance{" "}
          <span style={{ color: "var(--color-primary)" }}>Web Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-400"
        >
          Frontend developer crafting beautiful, scalable and conversion-focused
          digital products.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
            <a href="#projects" className="cursor-pointer">
              <Button>View My Work</Button>
          </a>

          <a href="#contact" className="cursor-pointer">
            <Button variant="secondary">Contact Me</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
