"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
  { category: "Tools & Version Control", items: ["Git", "GitHub"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <div className="h-1 w-20 bg-neon-blue rounded-full mb-4"></div>
            <p className="text-foreground/70 max-w-lg">
              Constantly learning and adapting to new technologies to build modern, efficient web applications.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-t border-foreground/5"
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">{skillGroup.category}</h3>
              <div className="flex flex-col gap-4">
                {skillGroup.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground/80">{item}</span>
                      <span className="text-neon-purple opacity-70">Expertise</span>
                    </div>
                    <div className="w-full h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
