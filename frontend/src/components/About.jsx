import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: '200+', label: 'DSA Problems Solved' },
  { value: '2+', label: 'Projects Shipped' },
  { value: '4+', label: 'Certificates Earned' },
  { value: '7.2', label: 'CGPA at LPU' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">01 — About</span>
            <div className="accent-line" />
            <h2 className="section-heading mb-6">
              Building<br />
              <span style={{ WebkitTextStroke: '1px rgba(240,237,232,0.35)', color: 'transparent' }}>
                things
              </span>
              <br />that matter
            </h2>
            <p className="text-soft leading-relaxed mb-4">
              Not every project needs to exist — but the right ones can make a difference.
              That’s what drives me.
            </p>
            <p className="text-soft leading-relaxed mb-8">
              Clean code, thoughtful architecture, and purpose-driven development define my approach — because good software isn’t just built, it’s designed to matter.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Prayas2468"
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-xs"
              >
                GitHub →
              </a>
              <a
                href="https://www.linkedin.com/in/prayas4"
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-xs"
              >
                LinkedIn →
              </a>
            </div>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card p-6 hover:border-accent/40 transition-colors duration-300"
              >
                <span className="font-display text-4xl text-accent block mb-1">{s.value}</span>
                <span className="font-mono text-[11px] tracking-widest uppercase text-soft">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
