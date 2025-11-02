import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] text-white">
      {/* subtle starry pattern */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(255,255,255,0.07),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.08),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(236,72,153,0.08),transparent_35%)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
