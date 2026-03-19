// src/components/layout/Footer.jsx

import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-800 py-12 px-6 section-alt">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand & Contact Info */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="heading-font text-xl font-semibold">
            Onuoha Victoria
          </h3>
          <p className="text-muted text-sm">
            Building high-performance web experiences
          </p>

          {/* Phone */}
          <p className="text-muted text-sm mt-2">
            📞 +234 7081977409 
          </p>

          {/* WhatsApp link */}
          <a
            href="https://wa.me/2347081977409"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-secondary)] hover:underline text-sm"
          >
            Chat with me on WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/victoriaonuoha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition"
          >
            <FaTwitter />
          </a>

          <a
            href="https://wa.me/2347081977409"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-muted mt-8">
        © {new Date().getFullYear()} Onuoha Victoria. All rights reserved.
      </div>
    </footer>
  );
}