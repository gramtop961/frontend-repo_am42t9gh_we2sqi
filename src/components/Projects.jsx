import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Mecha Dashboard',
    desc: 'A high-performance analytics dashboard with neon anime vibes and silky animations.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    url: '#',
    gradient: 'from-fuchsia-500 to-violet-500',
  },
  {
    title: 'Hologram Shop',
    desc: 'Micro-interactions and 3D touches for a sci-fi e-commerce concept.',
    tech: ['Next.js', 'Stripe', 'Spline'],
    url: '#',
    gradient: 'from-sky-500 to-cyan-400',
  },
  {
    title: 'Pixel Quest',
    desc: 'Retro-inspired mini game with modern web tech and crisp sprites.',
    tech: ['Canvas', 'Vite', 'Zustand'],
    url: '#',
    gradient: 'from-amber-400 to-rose-500',
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Work
          </h2>
          <p className="text-white/70 mt-2 max-w-2xl">
            A selection of projects blending performance, accessibility, and a playful anime aesthetic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              className="group relative rounded-2xl border border-white/15 bg-white/5 p-5 overflow-hidden hover:border-white/30 transition"
            >
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.gradient} blur-2xl opacity-40 group-hover:opacity-60 transition`} />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs rounded-md border border-white/15 bg-white/10 px-2 py-1 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-1 text-fuchsia-300 group-hover:text-fuchsia-200">
                  <span className="text-sm font-medium">Explore</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
