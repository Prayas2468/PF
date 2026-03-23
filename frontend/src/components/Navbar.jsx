import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-bg/90 backdrop-blur-lg py-4' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <span className="font-display text-2xl text-accent tracking-wider">
          P<span className="text-[#f0ede8]">.</span>
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l}
              to={l.toLowerCase()}
              smooth
              duration={600}
              offset={-80}
              className="font-mono text-xs tracking-[0.12em] uppercase text-soft hover:text-accent transition-colors cursor-pointer"
            >
              {l}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:prayas.punia.2205@gmail.com"
          className="hidden md:inline-flex items-center gap-2 border border-accent text-accent font-mono text-xs tracking-widest uppercase px-4 py-2 hover:bg-accent hover:text-black transition-all duration-200"
        >
          hello@prayas
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <span className={`block w-5 h-px bg-[#f0ede8] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-[#f0ede8] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#f0ede8] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l}
              to={l.toLowerCase()}
              smooth
              duration={600}
              offset={-80}
              className="font-mono text-sm tracking-widest uppercase text-soft hover:text-accent transition-colors cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {l}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
