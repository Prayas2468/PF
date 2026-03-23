import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'luxe-home-ai-advisor',
    num: '01',
    title: 'Luxe — Home AI Advisor',
    description:
      'An AI-powered home improvement advisor that analyzes uploaded room images and generates personalised design suggestions. Features intelligent recommendation engine, high engagement UX, and real-time AI feedback loop.',
    tech: ['Python', 'React', 'TensorFlow', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Prayas2468',
    demo: 'https://silver-dolphin-d1b939.netlify.app/',
    accent: '#c8ff3e',
    tags: ['AI / ML', 'Full Stack', 'Image Processing'],
  },
  {
    id: 'bhagirathi-water-quality',
    num: '02',
    title: 'Bhagirathi — Water Quality',
    description:
      'Ganga River Water Quality Forecasting System with an interactive Streamlit dashboard, real-time environmental sensor data ingestion, and satellite imagery analytics to predict and monitor pollution levels.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Satellite API'],
    github: 'https://github.com/Prayas2468',
    demo: 'https://bhagirathi-namamiganga.streamlit.app/',
    accent: '#3ecfff',
    tags: ['Data Science', 'Environmental', 'Dashboard'],
  },
]

const ProjectCard = ({ project, index }) => (
  <Link to={`/project/${project.id}`}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: index * 0.15 }}
      className="glass-card group relative overflow-hidden hover:border-white/10 transition-all duration-500 cursor-pointer"
    >
      {/* Number watermark */}
      <span
        className="absolute -top-4 -right-2 font-display text-[8rem] leading-none select-none pointer-events-none transition-opacity duration-300 opacity-5 group-hover:opacity-10"
        style={{ color: project.accent }}
      >
        {project.num}
      </span>

      {/* Top accent bar */}
      <div className="h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: project.accent }} />

      <div className="p-8 md:p-10 relative z-10">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm"
              style={{ background: `${project.accent}15`, color: project.accent }}
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-display text-3xl md:text-4xl text-[#f0ede8] mb-4 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-soft text-sm leading-relaxed mb-8 max-w-xl">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <span
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-200"
            style={{ borderColor: project.accent, color: project.accent }}
          >
            View Details
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"/>
            </svg>
          </span>
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-soft hover:text-[#f0ede8] transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  </Link>
)

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">03 — Projects</span>
          <div className="accent-line" />
          <h2 className="section-heading">
            Selected<br />
            <span style={{ WebkitTextStroke: '1px rgba(240,237,232,0.35)', color: 'transparent' }}>
              Work
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
