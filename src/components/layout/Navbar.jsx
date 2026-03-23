import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import useScrollSpy from "../../hooks/useScrollSpy";

const sections = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const active = useScrollSpy(sections);
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0E0E14] border-b border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="heading-font text-lg font-bold">DevToria</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 relative">
          {sections.map((section) => (
            <li key={section} className="relative">
              <a
                href={`#${section}`}
                className="capitalize text-sm tracking-wide"
              >
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
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 w-[75%] h-full bg-[#0E0E14] z-50 flex flex-col p-8 gap-10 shadow-2xl"
            >
              <div className="flex justify-end">
                <button onClick={() => setOpen(false)}>
                  <FaTimes size={22} />
                </button>
              </div>

              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-semibold capitalize transition ${
                    active === section
                      ? "text-[var(--color-primary)]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}