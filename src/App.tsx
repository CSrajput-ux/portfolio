import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDownRight, ArrowUpRight, Copy, Download, Github, Linkedin, Phone } from 'lucide-react'
import { profile, projects, skillGroups, startupProject } from './data/profile'
import ChatWidget from './components/ChatWidget'

const ClusterScene = lazy(() => import('./components/ClusterScene'))
gsap.registerPlugin(ScrollTrigger)

function Header() {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="Go to top">
        <span>CR</span><b>/</b><small>portfolio</small>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#startup">Startup</a>
        <a href="#work">Work</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="scene" aria-hidden="true">
        <Suspense fallback={<div className="scene-fallback" />}><ClusterScene /></Suspense>
      </div>
      <Header />
      <div className="hero-copy">
        <p className="status"><span /> Open to SWE-1 / internship roles</p>
        <h1>
          <span className="hero-name-first">Chhotu</span>
          <span className="hero-name-last">Rajput<span className="hero-name-period">.</span></span>
        </h1>
        <div className="hero-meta">
          <p className="role">{profile.title}<br /><small>{profile.subtitle}</small></p>
          <p className="tagline">I build software and fix what breaks.</p>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View work <ArrowDownRight size={18} /></a>
          <a className="button button-secondary" href={profile.resume} download>Download résumé <Download size={17} /></a>
        </div>
      </div>
      <span className="hero-index">01 / CLUSTER</span>
    </section>
  )
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-label">02 / ABOUT</div>
      <div className="about-grid">
        <p className="about-lead">I like building software and fixing what breaks.</p>
        <div className="about-copy">
          <p>I’m a CS student who has shipped two live web apps and learned that deployment is part of the design. I work across Python, Java, JavaScript, and the systems they run on.</p>
          <p>My strongest toolchain is the one that gets code from a pull request to a running cluster: Docker, GitHub Actions, ECR, Helm, and EKS.</p>
          <a href="#contact" className="text-link">More on what I’m building <ArrowDownRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}

function Startup() {
  return (
    <section className="startup section" id="startup">
      <div className="section-label">03 / STARTUP</div>
      <div className="startup-grid">
        <div className="startup-copy">
          <p className="startup-kicker"><span /> PRODUCT / COLLEGE ECOSYSTEM</p>
          <h2>{startupProject.name}<span>.</span></h2>
          <p className="startup-pitch">{startupProject.pitch}</p>
          <div className="tags startup-tags">
            {startupProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="startup-actions">
            <a className="button button-primary" href={startupProject.live} target="_blank" rel="noreferrer">Visit live site <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href={startupProject.github} target="_blank" rel="noreferrer">GitHub source <Github size={16} /></a>
          </div>
          <a className="startup-design-link" href={startupProject.design} target="_blank" rel="noreferrer">View the corporate design file <ArrowUpRight size={14} /></a>
        </div>
        <div className="startup-visual" aria-label="CSrexus college ecosystem concept">
          <p className="startup-visual-label">A PLATFORM FOR THE COLLEGE ECOSYSTEM</p>
          <div className="startup-orbit">
            <span className="orbit-line orbit-line-one" />
            <span className="orbit-line orbit-line-two" />
            <div className="orbit-center"><b>CS</b><span>CSrexus</span></div>
            <div className="orbit-node orbit-node-one">Connect</div>
            <div className="orbit-node orbit-node-two">Empower</div>
            <div className="orbit-node orbit-node-three">Streamline</div>
          </div>
          <div className="startup-domain"><span>LIVE ON VERCEL</span><b>c-srexus.vercel.app</b></div>
        </div>
      </div>
    </section>
  )
}

function Architecture() {
  const execution = ['Student', 'API', 'Redis', 'Judge0', 'Socket.IO', 'UI']
  const pipeline = ['PR', 'Actions', 'Docker', 'ECR', 'Helm', 'EKS']
  return (
    <div className="architecture">
      <div className="diagram">
        <p className="diagram-title">Submission path</p>
        <div className="flow">
          {execution.map((item, i) => (
            <div className="flow-step" key={item}>
              <span>{String(i + 1).padStart(2, '0')}</span><b>{item}</b>{i < execution.length - 1 && <i />}
            </div>
          ))}
        </div>
      </div>
      <div className="diagram">
        <p className="diagram-title">Release path</p>
        <div className="pipeline">
          {pipeline.map((item, i) => (
            <div key={item} className={i === pipeline.length - 1 ? 'accent-step' : ''}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectVisual({ index }: { index: number }) {
  if (index === 0) return (
    <div className="mujcode-project-visual">
      <figure className="mujcode-screen">
        <img src="/images/mujcode-home.png" alt="MUJCODE homepage showing its coding practice, assessments, placement preparation, and platform statistics." />
        <figcaption>
          <span>MUJCODE / PRODUCT SCREEN</span>
          <a href="https://mujcode.in" target="_blank" rel="noreferrer">Open live site <ArrowUpRight size={14} /></a>
        </figcaption>
      </figure>
      <Architecture />
    </div>
  )
  if (index === 1) return (
    <div className="market-card">
      <div className="market-head"><b>JOBPILOT</b><span>Application workspace</span></div>
      <div className="market-grid">
        {[['01', 'Discover'], ['02', 'Match'], ['03', 'Apply'], ['04', 'Follow up']].map(([n, label]) => (
          <div key={n}><span>{n}</span><b>{label}</b></div>
        ))}
      </div>
      <div className="market-placeholder">[ REAL JOBPILOT SCREENSHOT ]</div>
    </div>
  )
  if (index === 2) return (
    <div className="phone-stage">
      <div className="phone">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <small>HEALTH HELPIX</small>
          <h4>Good morning.</h4>
          <div className="vital"><span>Vitals</span><b>72 bpm</b></div>
          <div className="phone-row"><span>Next appointment</span><span>Diet plan</span></div>
        </div>
      </div>
      <small className="placeholder-tag">[ PHONE SCREENSHOT PLACEHOLDER ]</small>
    </div>
  )
  return (
    <div className="heatmap-stage">
      <div className="heatmap">
        {Array.from({ length: 64 }).map((_, i) => <i key={i} style={{ opacity: 0.12 + ((i * 7) % 11) / 12 }} />)}
      </div>
      <div className="heatmap-copy"><b>Grad-CAM</b><span>External validation<br />PAD-UFES-20</span></div>
    </div>
  )
}

function Work() {
  return (
    <section className="work section" id="work">
      <div className="section-label">04 / WORK</div>
      {projects.map((project, i) => (
        <article className={`project project-${i + 1}`} key={project.id}>
          <div className="project-info">
            <div className="project-kicker"><span>{project.id}</span>{project.note ? <b>{project.note}</b> : <b>{i < 2 ? 'Live system' : 'Selected build'}</b>}</div>
            <h3>{project.name}</h3>
            <p className="pitch">{project.pitch}</p>
            <div className="story">
              {project.story.map((part, j) => (
                <p key={part}><span>{['Problem', 'Built', 'Runs'][j]}</span>{part}</p>
              ))}
            </div>
            <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            {project.live && <a className="live-link" href={project.live} target="_blank" rel="noreferrer"><i /> LIVE <ArrowUpRight size={16} /></a>}
            {!project.live && project.github && <a className="live-link" href={project.github} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={16} /></a>}
          </div>
          <div className="project-visual"><ProjectVisual index={i} /></div>
        </article>
      ))}
    </section>
  )
}

function Stack() {
  return (
    <section className="stack section" id="stack">
      <div className="section-label">05 / STACK</div>
      <div className="stack-heading">
        <h2>Tools become useful<br />where I put them.</h2>
        <p>Hover a node. The edge case is usually the interesting part.</p>
      </div>
      <div className="skill-map">
        {skillGroups.map((group, i) => (
          <div className="skill-group" key={group.name}>
            <div className="skill-orbit"><span>{String(i + 1).padStart(2, '0')}</span><b>{group.name}</b></div>
            <div className="skill-items">
              {group.items.map((item) => (
                <button key={item} title={item === 'Redis' ? 'Job queue for code execution in MUJCODE' : `Used in ${group.name.toLowerCase()} work`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Proof() {
  const stats = [
    ['150+', 'problems solved'],
    ['6', 'hackathons'],
    ['2', 'live apps'],
    ['2', 'hackathon finals'],
  ]
  return (
    <section className="proof section" id="proof">
      <div className="section-label">06 / PROOF</div>
      <div className="stats">
        {stats.map(([number, label]) => (
          <div key={label}><strong>{number}</strong><span>{label}</span></div>
        ))}
      </div>
      <div className="education">
        <p>Education</p>
        <h3>{profile.education}</h3>
        <div><span>{profile.cgpa} CGPA</span><span>{profile.graduation}</span></div>
      </div>
    </section>
  )
}

function Terminal() {
  const [value, setValue] = useState('')
  const [lines, setLines] = useState([{ text: 'Type “help” to inspect my stack.', kind: 'muted' }])
  const run = (event: React.FormEvent) => {
    event.preventDefault()
    const command = value.trim().toLowerCase()
    const responses: Record<string, string> = {
      help: 'projects · skills · contact · resume',
      projects: 'MUJCODE, JobPilot, Health Helpix, HELPix, CSrexus',
      skills: 'Full-stack, backend, cloud, ML, mobile',
      contact: `${profile.email} · ${profile.phone}`,
      resume: 'Resume PDF placeholder: add /public/Chhotu-Rajput-Resume.pdf',
    }
    setLines(prev => [...prev, { text: `~ $ ${value}`, kind: 'command' }, { text: responses[command] || `command not found: ${command}`, kind: '' }])
    setValue('')
  }
  return (
    <div className="terminal">
      <div className="terminal-bar"><span /><span /><span /><b>visitor@cluster</b></div>
      <div className="terminal-body" aria-live="polite">
        {lines.map((line, i) => <p className={line.kind} key={i}>{line.text}</p>)}
        <form onSubmit={run}><label htmlFor="terminal-input">~ $</label><input id="terminal-input" value={value} onChange={e => setValue(e.target.value)} autoComplete="off" /></form>
      </div>
    </div>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  return (
    <footer className="contact section" id="contact">
      <div className="section-label">07 / CONTACT</div>
      <div className="contact-grid">
        <div>
          <p className="status"><span /> Available for SWE-1 / internships</p>
          <h2>Let’s build something<br />that stays up.</h2>
          <button className="email" onClick={copyEmail}><span>{profile.email}</span><Copy size={18} /><small>{copied ? 'Copied' : 'Copy'}</small></button>
          <div className="socials">
            <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}><Phone size={17} /> {profile.phone}</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
        </div>
        <Terminal />
      </div>
      <div className="footer-line"><span>Agra, India / {new Date().getFullYear()}</span><code>kubectl get pods — all systems nominal</code></div>
    </footer>
  )
}

function CursorEffect() {
  const dot = useRef<HTMLSpanElement>(null)
  const ring = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return

    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      const position = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      document.body.style.setProperty('--pointer-x', `${event.clientX}px`)
      document.body.style.setProperty('--pointer-y', `${event.clientY}px`)
      if (dot.current) dot.current.style.transform = position
      if (ring.current) ring.current.style.transform = position
      document.body.classList.add('cursor-visible')
    }
    const hover = (event: PointerEvent) => {
      const target = event.type === 'pointerout' ? event.relatedTarget : event.target
      if (!(target instanceof Element)) {
        document.body.classList.remove('cursor-hover')
        return
      }
      document.body.classList.toggle('cursor-hover', Boolean(target.closest('a, button, input, [role="button"]')))
    }
    const leave = () => document.body.classList.remove('cursor-visible', 'cursor-hover')

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', hover)
    window.addEventListener('pointerout', hover)
    window.addEventListener('pointerleave', leave)
    window.addEventListener('blur', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', hover)
      window.removeEventListener('pointerout', hover)
      window.removeEventListener('pointerleave', leave)
      window.removeEventListener('blur', leave)
      document.body.classList.remove('cursor-visible', 'cursor-hover')
    }
  }, [])

  return <div className="cursor-effect" aria-hidden="true"><span ref={ring} className="cursor-ring" /><span ref={dot} className="cursor-dot" /></div>
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let frame = 0
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {
        gsap.from(section, { opacity: 0, y: 32, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 82%', once: true } })
      })
    })
    const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
    let sequence = 0
    const onKey = (event: KeyboardEvent) => {
      sequence = event.key === konami[sequence] ? sequence + 1 : (event.key === konami[0] ? 1 : 0)
      if (sequence === konami.length) {
        document.documentElement.classList.toggle('orange-mode')
        sequence = 0
      }
    }
    window.addEventListener('keydown', onKey)
    console.log('%c cluster:// visitor detected — try `kubectl get pods`', 'color:#d9825b;background:#11100f;padding:8px')
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      ctx.revert()
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <main>
      <Hero /><About /><Startup /><Work /><Stack /><Proof /><Contact />
      <ChatWidget />
      <CursorEffect />
    </main>
  )
}
