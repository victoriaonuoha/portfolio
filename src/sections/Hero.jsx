import { motion } from "framer-motion";
import Button from "../components/ui/Button";

const animatedText = "Web Experiences";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient px-6"
    >
      <div className="text-center max-w-4xl">
           {/* Name Intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-font text-2xl md:text-3xl font-bold mb-4"
        >
         
           Hello!
         
        </motion.h2>

        {/* Name Intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-font text-2xl md:text-3xl font-bold mb-4"
        >
          My name is <span style={{ color: "var(--color-primary)" }}>
            Onuoha Victoria
          </span>
        </motion.h2>

        {/* Main Heading */}
        <h1 className="heading-font text-4xl md:text-6xl font-bold leading-tight">
          I Build High-Performance{" "}
          
          {/* Animated Text */}
          <span className="inline-block overflow-hidden">
            {animatedText.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="inline-block"
                style={{ color: "var(--color-primary)" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-lg text-muted"
        >
          Frontend developer crafting scalable, conversion-driven digital products.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#projects">
            <Button>View My Work</Button>
          </a>

          <a href="#contact">
            <Button variant="secondary">Contact Me</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}