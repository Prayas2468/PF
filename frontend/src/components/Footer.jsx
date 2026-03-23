export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <span className="font-display text-xl text-accent tracking-wider">
          P<span className="text-[#f0ede8]">.</span>
        </span>
        <p className="font-mono text-[11px] tracking-widest uppercase text-muted">
          © {new Date().getFullYear()} Prayas Punia — Built with React + Tailwind
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Prayas2468" target="_blank" rel="noreferrer" className="font-mono text-[11px] uppercase tracking-widest text-muted hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/prayas4" target="_blank" rel="noreferrer" className="font-mono text-[11px] uppercase tracking-widest text-muted hover:text-accent transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
