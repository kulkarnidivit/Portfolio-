"use client";

import { motion } from "framer-motion";
import { BookOpen, Code2, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Behind the <span className="text-gradient">Code</span>
            </h2>
            <div className="h-1 w-20 bg-neon-purple rounded-full mb-8"></div>
            
            <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
              I am a Computer Science Engineering student with a deep passion for software architecture
              and modern web technologies. My journey started with a simple "Hello World" and evolved
              into building scalable, full-stack applications that solve real-world problems.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              When Im not coding, you can find me exploring the latest tech trends, contributing to
              open-source, or optimizing my development workflow. Im always eager to learn and ready
              for the next challenge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            <div className="glass p-6 rounded-2xl hover:border-neon-blue/50 transition-colors">
              <Terminal className="text-neon-blue mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Clean Code</h3>
              <p className="text-foreground/70 text-sm">Writing maintainable, scalable, and efficient solutions.</p>
            </div>
            <div className="glass p-6 rounded-2xl hover:border-neon-purple/50 transition-colors">
              <Code2 className="text-neon-purple mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Modern Stack</h3>
              <p className="text-foreground/70 text-sm">Using the latest technologies to build robust applications.</p>
            </div>
            <div className="glass p-6 rounded-2xl sm:col-span-2 hover:border-foreground/50 transition-colors">
              <BookOpen className="text-foreground mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-foreground/70 text-sm">Always adapting to new paradigms in computer science and software engineering.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
