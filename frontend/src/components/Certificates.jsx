import { motion } from 'framer-motion'

const certs = [
  {
    title: 'Python toward ML and AI',
    issuer: 'Online Certification',
    year: '2023',
    color: '#c8ff3e',
    url: 'https://drive.google.com/file/d/1mhI3hV4YZpf5pFBPFB5LjOwo0Jocd4a5/view?pli=1<your-id>/badges/<badge-id>',
  },
  {
    title: 'Programming in Java',
    issuer: 'NPTEL / Coursera',
    year: '2022',
    color: '#3ecfff',
    url: 'https://drive.google.com/file/d/1FJ51sRzsxpdCSCQ2IRZWa88Ojyvx54DZ/view',
  },
  {
    title: 'DSA Mastery',
    issuer: 'Competitive Programming',
    year: '2023',
    color: '#ff6b35',
    url: 'https://drive.google.com/file/d/1Aj3tS5C8DFz0FOosTFaOLt9N_NtG1l2_/view',
  },
  {
    title: 'ChatGPT Prompt Engineering',
    issuer: 'DeepLearning.AI',
    year: '2024',
    color: '#c8ff3e',
    url: 'https://drive.google.com/file/d/1CZ6CdPs7ZGduVPlt5n8Li4U7xZTXong1/view',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">05 — Certificates</span>
          <div className="accent-line" />
          <h2 className="section-heading">
            Certified<br />
            <span style={{ WebkitTextStroke: '1px rgba(240,237,232,0.35)', color: 'transparent' }}>
              Skills
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 relative overflow-hidden group cursor-default"
            >
              {/* Accent corner */}
              <div
                className="absolute top-0 right-0 w-0 h-0 transition-all duration-300 group-hover:w-12 group-hover:h-12"
                style={{
                  borderTop: `48px solid ${c.color}20`,
                  borderLeft: '48px solid transparent',
                }}
              />
              {/* Icon */}
              <div
                className="w-10 h-10 mb-5 flex items-center justify-center border"
                style={{ borderColor: `${c.color}40` }}
              >
                <svg className="w-4 h-4" fill="none" stroke={c.color} strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 className="font-body font-medium text-[#f0ede8] text-sm mb-2 leading-snug">{c.title}</h3>
              <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-1">{c.issuer}</p>
              <span
                className="font-mono text-[10px] tracking-wider"
                style={{ color: c.color }}
              >
                {c.year}
              </span>
              <div className="mt-4">
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-[#f0ede8] border border-[#f0ede8] px-3 py-1 rounded hover:bg-[#f0ede8] hover:text-black transition-colors duration-200"
                  >
                    View Certificate
                  </a>
                ) : (
                  <span className="text-xs text-muted">Add Google Cloud link in data</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
