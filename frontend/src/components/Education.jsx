import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2023 — Present',
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Lovely Professional University',
    detail: 'CGPA: 6.8 · Jalandhar, Punjab',
    color: '#c8ff3e',
  },
  {
    year: '2020 - 2022',
    degree: 'Higher Secondary Education (12th)',
    institution: 'Senior Secondary School',
    detail: 'Science Stream · Mathematics, Physics, CS',
    color: '#3ecfff',
  },
  {
    year: '2019 - 2020',
    degree: 'Matriculation (10th)',
    institution: 'H.D Sr Sec School',
    detail: 'Jhajjar, Haryana · Percentage: 89%',
    color: '#ff6b35',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">06 — Education</span>
          <div className="accent-line" />
          <h2 className="section-heading">
            My<br />
            <span style={{ WebkitTextStroke: '1px rgba(240,237,232,0.35)', color: 'transparent' }}>
              Journey
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10 pl-14">
            {timeline.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute -left-[46px] top-2 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: item.color, background: '#080808' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                </div>

                <div className="glass-card p-6 hover:border-white/10 transition-colors duration-300">
                  <span className="font-mono text-[10px] tracking-widest uppercase mb-2 block" style={{ color: item.color }}>
                    {item.year}
                  </span>
                  <h3 className="font-body font-medium text-[#f0ede8] text-lg mb-1">{item.degree}</h3>
                  <p className="font-body text-soft text-sm mb-1">{item.institution}</p>
                  <p className="font-mono text-[11px] text-muted">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
