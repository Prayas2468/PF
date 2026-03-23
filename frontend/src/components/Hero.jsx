import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

// Use your actual photo by placing it at `frontend/src/assets/profile.jpg`.
// Then let Vite resolve the path dynamically:
const heroImage = new URL('../assets/profile.jpg', import.meta.url).href

const ROLES = ['Full Stack Developer', 'Competitive Programmer', 'AI Enthusiast']

export default function Hero() {
  const canvasRef = useRef(null)

  // Animated dot grid
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let frame
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const dots = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach((d) => {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(200,255,62,0.25)'
        ctx.fill()
      })
      frame = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Canvas bg */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid gap-10 lg:grid-cols-[1fr_340px] items-center">
        <div>
          {/* Top tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
          <span className="w-2 h-2 rounded-full bg-accent animate-blink" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-soft">
            Available for opportunities
          </span>
        </motion.div>

        {/* MASSIVE name / role typography — Bazil-style */}
        <div className="relative">
          {/* Ghost outline text behind */}
          <div
            className="absolute inset-0 font-display text-[clamp(5rem,18vw,18rem)] leading-none select-none pointer-events-none"
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.04)',
              color: 'transparent',
              top: '0.15em',
            }}
            aria-hidden
          >
            PRAYAS
          </div>

          {/* Intro line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-soft text-sm md:text-base mb-2 ml-1"
          >
            👋 hi, my name is <span className="text-[#f0ede8]">Prayas</span> and I am a
          </motion.p>

          {/* BIG role */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-display text-[clamp(4.5rem,14vw,14rem)] leading-none text-[#f0ede8] relative z-10"
          >
            Full Stack
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="font-display text-[clamp(4.5rem,14vw,14rem)] leading-none relative z-10"
            style={{ WebkitTextStroke: '1px rgba(240,237,232,0.4)', color: 'transparent' }}
          >
            Developer
          </motion.h1>
        </div>

        {/* Sub info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center gap-6 mt-8 mb-10"
        >
          <span className="font-body text-soft text-sm">based in Jalandhar, India.</span>
          <div className="flex items-center gap-3">
            {['Python', 'React', 'Node.js', 'MongoDB'].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link to="projects" smooth duration={600} offset={-80}>
            <button className="btn-primary">View my work</button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-80}>
            <button className="btn-outline">Let's talk</button>
          </Link>
          <a href="/PrayasCV.pdf" download="Prayas_CV.pdf" className="btn-primary">
            Download CV
          </a>
          <a
            href="https://github.com/Prayas2468"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-soft hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
        </motion.div>
      </div>

      <div className="relative w-full max-w-[340px] mx-auto lg:mx-0">
        {/* Subtle glow effects */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-accent/12 blur-xl scale-105" />
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tl from-accent/10 via-transparent to-blue-500/8 blur-lg" />

        <div className="relative rounded-[2rem] overflow-hidden border-2 border-white/30 shadow-[0_25px_100px_rgba(0,0,0,0.4)] bg-[#090909] backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-blue-500/5" />
          <img
            src={heroImage}
            alt="Prayas profile"
            className="w-full h-[420px] object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="font-mono text-xs text-white/90 drop-shadow-lg">Prayas</p>
            <h3 className="font-body text-white text-lg font-semibold drop-shadow-lg">Full Stack Developer</h3>
          </div>
        </div>
      </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-scroll-line" />
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">scroll</span>
      </motion.div>
    </section>
  )
}
