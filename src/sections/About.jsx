import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 max-h-screen flex items-center"
      // style={{ minHeight: "100vh" }} // ensures full screen height
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center h-full">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center "
        >
          <div
            className="absolute -inset-1 rounded-2xl blur-2xl opacity-30"
            style={{ background: "var(--color-primary)" }}
          />
          <img
            src="/me.jpeg"
            alt="Profile"
            className="relative rounded-2xl shadow-xl max-h-[20%] "
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" flex flex-col justify-center"
        >
          <h2 className="heading-font text-4xl font-bold mb-6">About Me</h2>

          <p className="text-muted leading-relaxed mb-6">
            I am a graduate of Computer Science with a Bachelor of Science
            (B.Sc) degree, passionate about building high-performance web
            applications that solve real-world problems.
          </p>

          <p className="text-muted leading-relaxed mb-6">
            Beyond development, I am also a skilled web instructor, dedicated to
            teaching modern frontend technologies and helping aspiring
            developers build strong technical foundations.
          </p>

          <p className="text-muted leading-relaxed">
            I have hands-on experience building real-world products — from
            responsive landing pages to scalable application interfaces —
            focusing on performance, usability, and conversion-driven design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}