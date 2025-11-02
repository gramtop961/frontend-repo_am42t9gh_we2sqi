import { User } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-sky-500/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/15 bg-white/5 p-8">
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 grid place-items-center text-white shadow-lg">
                <User />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">About me</h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                I’m a frontend engineer focused on crafting delightful, interactive interfaces. I love blending clean code with anime-inspired motion and color to make products feel alive.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
                <li className="rounded-lg border border-white/15 bg-white/5 px-3 py-2">Performance-first</li>
                <li className="rounded-lg border border-white/15 bg-white/5 px-3 py-2">Accessibility minded</li>
                <li className="rounded-lg border border-white/15 bg-white/5 px-3 py-2">Micro-interactions</li>
                <li className="rounded-lg border border-white/15 bg-white/5 px-3 py-2">3D & motion</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Tech stack</h2>
            <p className="text-white/70 mt-3 max-w-xl">
              Years of experience building with modern tools. I pick stacks that balance developer velocity and long-term maintainability.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion', 'Spline', 'Node', 'FastAPI'].map((s) => (
                <span key={s} className="text-sm rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-white/80">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
