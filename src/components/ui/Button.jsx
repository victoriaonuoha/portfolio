import { motion } from "framer-motion";

export default function Button({ children, variant = "primary", ...props }) {
  const base =
    "px-6 py-3 rounded-full font-medium transition-all duration-300";

  const variants = {
    primary:
      "text-white hover:shadow-lg",
    secondary:
      "border hover:text-white"
  };

  const styleMap = {
    primary: {
      backgroundColor: "var(--color-primary)",
    },
    secondary: {
      borderColor: "var(--color-primary)",
      color: "var(--color-primary)"
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${base} ${variants[variant]}`}
      style={styleMap[variant]}
      {...props}
    >
      {children}
    </motion.button>
  );
}