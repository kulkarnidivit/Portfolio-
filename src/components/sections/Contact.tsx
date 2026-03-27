"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-neon-purple/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lets <span className="text-gradient">Connect</span>
          </h2>
          <div className="h-1 w-20 bg-neon-blue rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/70 text-lg">
            Looking for an intern, a freelance developer, or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <a href="mailto:kulkarnidivit@gmail.com" className="glass p-6 rounded-2xl flex flex-col items-center sm:items-start sm:flex-row gap-4 hover:border-neon-blue/50 transition-colors group cursor-pointer text-center sm:text-left">
              <div className="p-4 bg-neon-blue/10 text-neon-blue rounded-full group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="overflow-hidden">
                <h4 className="text-foreground/70 text-sm mb-1">Email</h4>
                <p className="text-foreground font-medium hover:text-neon-blue transition-colors truncate w-full">kulkarnidivit@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/divit-kulkarni-254067306" target="_blank" rel="noreferrer" className="glass p-6 rounded-2xl flex flex-col items-center sm:items-start sm:flex-row gap-4 hover:border-neon-purple/50 transition-colors group cursor-pointer text-center sm:text-left">
              <div className="p-4 bg-neon-purple/10 text-neon-purple rounded-full group-hover:scale-110 transition-transform">
                <FaLinkedin size={24} />
              </div>
              <div className="overflow-hidden">
                <h4 className="text-foreground/70 text-sm mb-1">LinkedIn</h4>
                <p className="text-foreground font-medium hover:text-neon-purple transition-colors truncate w-full">Divit Kulkarni</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl lg:col-span-2"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-foreground/70 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-neon-blue/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-foreground/70 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-neon-blue/50 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-foreground/70 ml-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                  className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-neon-purple/50 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 w-full sm:w-auto self-end flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-background font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-transform"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
