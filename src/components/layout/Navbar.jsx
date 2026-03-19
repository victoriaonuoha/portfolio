import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";

const links = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-heading text-xl font-bold">DevToria</h1>

        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`capitalize relative ${
                  active === link ? "text-primary" : ""
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  );
}