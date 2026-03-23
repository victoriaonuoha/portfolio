// src/sections/Contact.jsx

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/ui/Button";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mdawrbqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 hero-gradient">
      <div className="max-w-xl mx-auto">
        <h2 className="heading-font text-3xl md:text-4xl font-bold mb-10 text-center">
          Let’s Build Something Exceptional
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="w-full px-4 py-3 text-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:bg-transparent"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border  text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:bg-transparent"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="5"
              {...register("message", {
                required: "Message cannot be empty",
              })}
              placeholder="Message"
              className="w-full px-4 py-3 rounded-lg border  text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:bg-transparent"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Button */}
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {/* Status Messages */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-500 text-sm mt-4"
              >
                Your message has been sent successfully. I’ll get back to you soon.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-sm mt-4"
              >
                Something went wrong. Please try again later.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}