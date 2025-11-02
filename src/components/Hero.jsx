import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-28">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/20 via-violet-600/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 items-center gap-10">
        <div className="py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              Open to work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I’m <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Frontend engineer crafting playful, interactive experiences with a touch of anime magic. I build fast, accessible apps that feel alive.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#work" className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-5 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
                View my work
              </a>
              <a href="#contact" className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white font-medium backdrop-blur hover:bg-white/20 transition">
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          {/* Spline scene */}
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Top highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
