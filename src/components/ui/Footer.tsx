import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 bg-background py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center z-10 relative">
        <div className="mb-6 md:mb-0">
          <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <span className="text-gradient">Portfolio._</span>
          </a>
          <p className="text-foreground/60 text-sm mt-2">
            Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a href="https://github.com/kulkarnidivit" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/divit-kulkarni-254067306" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Divit Kulkarni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
