import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-fuchsia-600/20 via-violet-600/20 to-sky-600/20 p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(255,255,255,0.1),transparent_40%)]" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Let’s build something fun</h3>
              <p className="text-white/80 mt-3 max-w-lg">
                I’m available for freelance and full-time roles. Reach out and tell me about your idea, and let’s bring it to life.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 font-medium shadow">
                  <Mail size={18} /> Email me
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/20 transition">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/20 transition">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="md:justify-self-end">
              <div className="h-48 w-48 md:h-56 md:w-56 rounded-full bg-gradient-to-tr from-fuchsia-400 via-violet-400 to-sky-400 blur-2xl opacity-70" />
            </div>
          </div>
        </div>
        <p className="text-center text-white/60 text-sm mt-6">© {new Date().getFullYear()} AnimeFolio. All rights reserved.</p>
      </div>
    </section>
  )
}
