// src/sections/Contact.jsx

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="heading-font text-4xl font-bold mb-8">
          Let’s Build Something Exceptional
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 text-left"
        >
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border dark:bg-transparent"
          />

          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border dark:bg-transparent"
          />

          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg border dark:bg-transparent"
          />

          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </section>
  );
}