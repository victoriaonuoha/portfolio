import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import useScrollSpy from "../../hooks/useScrollSpy";

const sections = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const active = useScrollSpy(sections);
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-[#0E0E14]/80 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="heading-font text-lg font-bold">DevToria</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 relative">
          {sections.map((section) => (
            <li key={section} className="relative">
              <a href={`#${section}`} className="capitalize text-sm tracking-wide">
                {section}
              </a>
              {active === section && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 h-[2px] w-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-3/4 h-full bg-[#0E0E14] shadow-xl z-40 flex flex-col p-8 gap-8"
        >
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setOpen(false)}
              className={`text-lg font-semibold ${
                active === section ? "text-[var(--color-primary)]" : "text-muted"
              }`}
            >
              {section}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}