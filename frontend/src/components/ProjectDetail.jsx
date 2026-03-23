import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const projects = [
  {
    id: 'luxe-home-ai-advisor',
    num: '01',
    title: 'Luxe — Home AI Advisor',
    description:
      'An AI-powered home improvement advisor that analyzes uploaded room images and generates personalised design suggestions. Features intelligent recommendation engine, high engagement UX, and real-time AI feedback loop.',
    fullDescription: `
      Luxe is a comprehensive AI-powered home improvement platform that revolutionizes how homeowners approach interior design. The application uses advanced computer vision and machine learning algorithms to analyze room photographs and provide personalized design recommendations.

      Key Features:
      • Intelligent image analysis for room dimensions and style detection
      • AI-powered design suggestion engine with multiple style options
      • Real-time feedback loop for user preference learning
      • Integration with furniture and decor APIs for pricing and availability
      • Mobile-responsive design with offline capability
      • User dashboard with design history and favorites

      Technical Implementation:
      • Frontend: React with TypeScript for type safety
      • Backend: Node.js with Express and Python Flask microservices
      • AI/ML: TensorFlow for image processing and recommendation engine
      • Database: MongoDB for user data and design templates
      • Cloud: AWS S3 for image storage, Lambda for processing
    `,
    tech: ['Python', 'React', 'TensorFlow', 'Node.js', 'MongoDB', 'AWS'],
    github: 'https://github.com/Prayas2468',
    demo: 'https://silver-dolphin-d1b939.netlify.app/',
    accent: '#c8ff3e',
    tags: ['AI / ML', 'Full Stack', 'Image Processing'],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      img2,
    ],
    features: [
      'AI Image Analysis',
      'Personalized Recommendations',
      'Real-time Feedback',
      'Mobile Responsive',
      'Offline Mode',
      'User Dashboard'
    ],
    challenges: [
      'Complex image processing algorithms',
      'Real-time AI inference optimization',
      'Scalable architecture design',
      'User experience for non-technical users'
    ],
    duration: '1 month',
    team: 'Solo Project',
    status: 'Live'
  },
  {
    id: 'bhagirathi-water-quality',
    num: '02',
    title: 'Bhagirathi — Water Quality',
    description:
      'Ganga River Water Quality Forecasting System with an interactive Streamlit dashboard, real-time environmental sensor data ingestion, and satellite imagery analytics to predict and monitor pollution levels.',
    fullDescription: `
      Bhagirathi is an environmental monitoring and forecasting system specifically designed for the Ganga River basin. The platform integrates multiple data sources including satellite imagery, IoT sensors, and government environmental databases to provide accurate water quality predictions and pollution monitoring.

      Key Features:
      • Real-time water quality monitoring dashboard
      • Satellite imagery analysis for pollution detection
      • Machine learning models for pollution forecasting
      • Interactive data visualization with Streamlit
      • Automated alert system for pollution spikes
      • Historical data analysis and trend reporting

      Technical Implementation:
      • Frontend: Streamlit for rapid dashboard development
      • Backend: Python with FastAPI for data processing
      • ML: Scikit-learn and TensorFlow for forecasting models
      • Data Sources: NASA satellite APIs, government databases
      • Database: PostgreSQL with TimescaleDB for time-series data
      • Deployment: Streamlit Cloud with automated CI/CD
    `,
    tech: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/Prayas2468',
    demo: 'https://bhagirathi-namamiganga.streamlit.app/',
    accent: '#3ecfff',
    tags: ['Data Science', 'Environmental', 'Dashboard'],
    images: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
      img3,
    ],
    features: [
      'Real-time Monitoring',
      'Satellite Integration',
      'ML Forecasting',
      'Interactive Dashboard',
      'Alert System',
      'Historical Analysis'
    ],
    challenges: [
      'Integration of multiple data sources',
      'Complex time-series forecasting',
      'Real-time data processing pipeline',
      'User-friendly environmental data visualization'
    ],
    duration: '2 months',
    team: 'Team Project',
    status: 'Live'
  },
]

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-[#f0ede8] mb-4">Project Not Found</h1>
          <Link to="/" className="text-accent hover:underline">← Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl text-accent tracking-wider">
            P<span className="text-[#f0ede8]">.</span>
          </Link>
          <Link
            to="/"
            className="font-mono text-xs tracking-widest uppercase text-soft hover:text-accent transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: project.accent }}
              />
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-soft">
                Project {project.num}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-[#f0ede8] mb-6">
              {project.title}
            </h1>
            <p className="text-soft text-lg max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Project Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              View Source Code
            </a>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="font-display text-3xl text-[#f0ede8] mb-6">Project Overview</h2>
                <div className="prose prose-invert max-w-none">
                  {project.fullDescription.split('\n').map((paragraph, i) => (
                    <p key={i} className="text-soft leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h3 className="font-display text-2xl text-[#f0ede8] mb-6">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: project.accent }}
                      />
                      <span className="text-soft">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-display text-2xl text-[#f0ede8] mb-6">Technical Challenges</h3>
                <div className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: project.accent }}
                      />
                      <span className="text-soft">{challenge}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card p-6 sticky top-24"
              >
                <h3 className="font-display text-xl text-[#f0ede8] mb-6">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-xs tracking-widest uppercase text-muted block mb-1">
                      Status
                    </span>
                    <span
                      className="font-mono text-sm"
                      style={{ color: project.accent }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-xs tracking-widest uppercase text-muted block mb-1">
                      Duration
                    </span>
                    <span className="text-soft">{project.duration}</span>
                  </div>

                  <div>
                    <span className="font-mono text-xs tracking-widest uppercase text-muted block mb-1">
                      Team
                    </span>
                    <span className="text-soft">{project.team}</span>
                  </div>

                  <div>
                    <span className="font-mono text-xs tracking-widest uppercase text-muted block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tag text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-xs tracking-widest uppercase text-muted block mb-2">
                      Tags
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm"
                          style={{ background: `${project.accent}15`, color: project.accent }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}