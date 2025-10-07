"use client";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thanks for your message!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-white text-[#1A1A1A] min-h-screen flex flex-col">
      <NavigationBar />

      {/* Contact Section */}
      <section className="flex-grow flex flex-col items-center justify-center px-6 md:px-16 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Get in Touch
        </motion.h1>

        <p className="text-gray-600 mb-12 text-center max-w-lg">
        I'd love to hear from you! Fill out the form below or send an email to smr82computer@gmail.com, and I’ll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-[#f9f9f9] p-8 rounded-2xl shadow-md space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00636b]"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00636b]"
              placeholder="Your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00636b]"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-[#00636b] text-white font-semibold rounded-full transition-colors hover:bg-[#004f56]"
          >
            Send Message
          </motion.button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
