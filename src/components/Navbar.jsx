import { Rocket, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 grid place-items-center text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-white tracking-wide">AnimeFolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 text-white/80 hover:text-white transition">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 text-white/80 hover:text-white transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
