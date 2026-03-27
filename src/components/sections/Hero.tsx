"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass border-foreground/10 text-xs font-semibold tracking-wider uppercase text-neon-blue"
        >
          🎓 CSE Student & Aspiring Software Engineer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Hi, I am <span className="text-gradient">Divit Kulkarni</span> <br className="hidden md:block" />
          Building Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 mb-10"
        >
          Passion for clean code, innovative design, and scalable architecture.
          Transforming complex problems into elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <div className="flex gap-4">
            <a href="https://github.com/kulkarnidivit" target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:border-neon-blue/50 hover:text-neon-blue transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/divit-kulkarni-254067306" target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:border-neon-blue/50 hover:text-neon-blue transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:kulkarnidivit@gmail.com" className="p-4 glass rounded-full hover:border-neon-blue/50 hover:text-neon-blue transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
