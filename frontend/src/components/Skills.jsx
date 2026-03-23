import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    label: 'Languages',
    color: '#c8ff3e',
    skills: [
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        level: 92,
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
        level: 88,
      },
      {
        name: 'C++',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        level: 80,
      },
      {
        name: 'C',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        level: 75,
      },
      {
        name: 'PHP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        level: 70,
      },
    ],
  },
  {
    label: 'Frameworks & Web',
    color: '#3ecfff',
    skills: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        level: 90,
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        level: 86,
      },
      {
        name: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        level: 95,
      },
      {
        name: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        level: 90,
      },
    ],
  },
  {
    label: 'Tools & Databases',
    color: '#ff6b35',
    skills: [
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        level: 85,
      },
      {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        level: 82,
      },
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        level: 88,
      },
      {
        name: 'Streamlit',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
        level: 77,
      },
    ],
  },
  {
    label: 'Soft Skills',
    color: '#888',
    skills: [
      { name: 'Problem-Solving', icon: '🧩', level: 90 },
      { name: 'Quick Learner', icon: '⚡', level: 92 },
      { name: 'Adaptability', icon: '🔄', level: 88 },
    ],
  },
]

const SkillPill = ({ name, icon, delay, color }) => {
  const isSvg = typeof icon === 'string' && (icon.startsWith('http') || icon.endsWith('.svg'))
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ borderColor: color, color: color }}
      className="flex items-center gap-2 px-4 py-2.5 border border-border text-soft font-body text-sm transition-colors duration-200 cursor-default"
    >
      {isSvg ? (
        <img src={icon} alt={name} className="h-4 w-4 object-contain" />
      ) : (
        <span className="font-mono text-xs">{icon}</span>
      )}
      {name}
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const leftCategories = categories.filter((cat) => cat.label === 'Languages' || cat.label === 'Frameworks & Web')
  const rightCategories = categories.filter((cat) => cat.label === 'Tools & Databases' || cat.label === 'Soft Skills')

  return (
    <section id="skills" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">02 — Skills</span>
          <div className="accent-line" />
          <h2 className="section-heading">
            My<br />
            <span style={{ WebkitTextStroke: '1px rgba(240,237,232,0.35)', color: 'transparent' }}>
              Toolkit
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-10">
            {leftCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.12 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                  <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: cat.color }}>
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, si) => (
                    <SkillPill
                      key={s.name}
                      {...s}
                      color={cat.color}
                      delay={ci * 0.05 + si * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-10">
            {rightCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.12 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                  <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: cat.color }}>
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, si) => (
                    <SkillPill
                      key={s.name}
                      {...s}
                      color={cat.color}
                      delay={ci * 0.05 + si * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
