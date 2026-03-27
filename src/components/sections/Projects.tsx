"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "SnkrVerse",
    description: "A modern sneaker-focused web platform designed to deliver a seamless and immersive browsing experience. Built with scalable component-based architecture featuring dynamic listings, interactive UI components, and strong frontend development practices.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000",
    tech: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
    github: "https://github.com/kulkarnidivit/snkrverse",
    live: "https://snkrverse.vercel.app/"
  },
  {
    title: "Modern Developer Portfolio",
    description: "A high-performance, responsive personal portfolio designed to showcase software engineering projects and technical skills. Built with Next.js and Tailwind CSS featuring dynamic daylight/dark theming, smooth Framer Motion animations, and a sleek glassmorphism aesthetic.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/kulkarnidivit/Portfolio-",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-neon-purple rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-6 line-clamp-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-neon-purple">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors">
                    <ExternalLink size={18} /> Live Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
