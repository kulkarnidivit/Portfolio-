"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const education = [
  {
    role: "B.Tech in Computer Science Engineering",
    company: "Vidhyavardhini College of Engineering and Technology",
    duration: "2024 - 2028",
    description: "Focusing on algorithmic problem solving, software engineering, and artificial intelligence.",
  },
];

const experience = [
  {
    role: "Fresher",
    company: "Actively Seeking Opportunities",
    duration: "Present",
    description: "Eager to apply my technical skills and learn from experienced professionals in a real-world environment.",
  },
  {
    role: "Cyber Job Simulation",
    company: "Deloitte Australia (via Forage)",
    duration: "Jan 2026",
    description: "Credential ID: y8xEE7AYD7ShAG7Fb",
  },
  {
    role: "Data Analytics Job Simulation",
    company: "Deloitte Australia (via Forage)",
    duration: "Jan 2026",
    description: "Credential ID: Zt9JqGGDudmic3xn7",
  },
  {
    role: "Technology Job Simulation",
    company: "Deloitte Australia (via Forage)",
    duration: "Jan 2026",
    description: "Credential ID: 8rKEriZKsTuwmvizP",
  },
  {
    role: "Python workshop",
    company: "Be10x",
    duration: "Jan 2026",
    description: "Credential ID: 27431ebc-ac17-43c8-9713-f5b20ad95b99903532",
  },
  {
    role: "Project Manager Job Simulation",
    company: "Siemens Mobility (via Forage)",
    duration: "Jan 2026",
    description: "Credential ID: wvofFxyWTDzkC5XX9",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-neon-purple rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-neon-blue" size={28} />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="flex flex-col gap-8 border-l border-foreground/10 ml-3 pl-8 relative">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full glass border-2 border-neon-blue"></div>
                  <h4 className="text-xl font-semibold text-foreground">{item.role}</h4>
                  <div className="text-neon-blue text-sm mb-2">{item.company} | {item.duration}</div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-neon-purple" size={28} />
              <h3 className="text-2xl font-bold text-foreground">Experience / Certifications</h3>
            </div>
            
            <div className="flex flex-col gap-8 border-l border-foreground/10 ml-3 pl-8 relative">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full glass border-2 border-neon-purple"></div>
                  <h4 className="text-xl font-semibold text-foreground">{item.role}</h4>
                  <div className="text-neon-purple text-sm mb-2">{item.company} | {item.duration}</div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
