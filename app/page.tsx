'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  { name: 'EKMARK', desc: 'An image watermarking tool for dev and normal user, built for speed.', status: 'ONLINE', color: 'cyan' },
]

function GlitchTitle() {
  return (
    <div className="title-wrap" aria-label="EkoliX Limited">
      <h1 className="glitch-title" data-text="EkoliX">EkoliX</h1>
      <span className="title-suffix">LIMITED</span>
    </div>
  )
}

function TerminalButton() {
  return (
    <a className="terminal-button" href="#projects">
      <span className="terminal-prompt">$</span>
      <span>explore_projects</span>
      <span className="terminal-cursor" aria-hidden="true">_</span>
    </a>
  )
}

function ProjectLine({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.2 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`project-line project-${project.color} ${visible ? 'is-visible' : ''}`} style={{ animationDelay: `${index * 180}ms` }}>
      <div className="project-name"><span className="prompt-symbol">$</span> <a href="https://ekmark.ekolix.com.ng/" target='_blank'>{project.name}</a></div>
      <div className="project-desc">{project.desc}</div>
      <div className="project-meta"><span className="status-dot" /> STATUS: {project.status}</div>
    </div>
  )
}

export default function Page() {
  return (
    <main id="top" className="site-shell">
      <div className="noise-layer" aria-hidden="true" />
      <header className="system-header">
        <a className="brand-mark" href="#top" aria-label="EkoliX Limited home">
          <img src="/ekolix-lockup-dark.png" alt="EkoliX Limited" />
        </a>
        <div className="system-status"><span className="status-dot" /> Last Updated <span className="status-divider">|</span>September 8 2026</div>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">// INDEPENDENT SOFTWARE RESEARCH & DEVELOPMENT COMPANY</p>
          <GlitchTitle />
          <p className="tagline">FROM TERMINAL<br /><span>TO PRODUCTION.</span></p>
          <p className="intro">EkoliX Limited is a CAC-registered software company researching
            and building tools, products, and systems at the edge of what's
            possible on the web.</p>
          <TerminalButton />
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-scanlines" aria-hidden="true" />
            <a className="portrait-link" href="https://example.com/developer-portfolio" target="_blank" rel="noreferrer" aria-label="Open the developer portfolio">
              <img src="/ekolix-mark.png" alt="EkoliX symbol" className="portrait-image" />
            </a>
            <div className="portrait-label">DEV/FOUNDER - <i>Bernard Ekoli</i> ONLINE</div>
          </div>
          <div className="developer-bubble" aria-hidden="true">
            <span className="bubble-tail bubble-tail-large" />
            <span className="bubble-tail bubble-tail-small" />
            Looking for me, the developer? Click here →
          </div>
          <div className="visual-cross cross-one" aria-hidden="true">+</div>
          <div className="visual-cross cross-two" aria-hidden="true">+</div>
          <div className="visual-caption">[ STACK ON THIS SITE: TypeScript, Nextjs/Reactjs]</div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-heading"><span>// PROJECT_LOG</span><span>SCROLL TO INITIALIZE</span></div>
        <div className="terminal-window">
          <div className="terminal-bar"><span className="terminal-light red" /><span className="terminal-light yellow" /><span className="terminal-light green" /><span className="terminal-path">ekolix@main: ~/projects</span></div>
          <div className="terminal-content">
            <p className="terminal-command"><span className="prompt-symbol">$</span> ls -la ./featured</p>
            {projects.map((project, index) => <ProjectLine key={project.name} project={project} index={index} />)}
            <p className="terminal-command final-command"><span className="prompt-symbol">$</span> <span className="blink">_</span></p>
          </div>
        </div>
      </section>

      <footer className="site-footer"><span>&copy; 2026 EKOLIX LIMITED</span><span>FROM TERMINAL TO PRODUCTION.</span></footer>

    </main>
  )
}
