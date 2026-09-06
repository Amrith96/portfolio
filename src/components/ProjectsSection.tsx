import { useState } from 'react'
import { projects } from '../data/projects'

type Project = typeof projects[0] & { results?: { value: string; label: string }[] }

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 50,
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)',
        }}
      />

      {/* Drawer */}
      <div style={{
        position: 'fixed', right: 0, top: 0, bottom: 0, zIndex: 51,
        width: '100%', maxWidth: 560,
        background: '#0d0d0d', borderLeft: '1px solid rgba(255,255,255,0.08)',
        overflowY: 'auto',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{ padding: '32px 32px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12, marginBottom: 16,
              background: 'rgba(232,0,11,0.1)', border: '1px solid rgba(232,0,11,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span className="bebas" style={{ color: '#E8000B', fontSize: 20 }}>{project.icon}</span>
            </div>
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: 20 }}
            >✕</button>
          </div>
          <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#E8000B', textTransform: 'uppercase', marginBottom: 4 }}>
            {project.number} — {project.type}
          </p>
          <h2 className="bebas" style={{ fontSize: 28, color: '#F5F5F0', lineHeight: 1.1 }}>{project.title}</h2>
          <p style={{ fontSize: 13, color: '#888', marginTop: 8, lineHeight: 1.6 }}>{project.tagline}</p>
        </div>

        <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* Meta */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[
              { label: 'Status', value: project.status },
              { label: 'Year',   value: project.year },
              { label: 'Role',   value: project.role },
            ].map(m => (
              <div key={m.label} style={{
                background: '#151515', borderRadius: 10, padding: 16,
                border: '1px solid rgba(255,255,255,0.05)',
              }}>
                <p style={{ fontSize: 9, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', marginBottom: 4 }}>{m.label}</p>
                <p style={{ fontSize: 11, color: '#F5F5F0', lineHeight: 1.4 }}>{m.value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.2em', color: '#555', textTransform: 'uppercase', marginBottom: 12 }}>Overview</p>
            <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.7 }}>{project.description}</p>
          </div>

          {/* Features */}
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.2em', color: '#555', textTransform: 'uppercase', marginBottom: 12 }}>Features</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {project.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#E8000B', flexShrink: 0, marginTop: 2 }}>▸</span>
                  <span style={{ fontSize: 13, color: '#aaa', lineHeight: 1.5 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results for Aria */}
          {project.results && (
            <div>
              <p style={{ fontSize: 9, letterSpacing: '0.2em', color: '#555', textTransform: 'uppercase', marginBottom: 12 }}>Results (First 3 Months)</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {project.results.map(r => (
                  <div key={r.value + r.label} style={{
                    background: '#151515', border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 10, padding: 16,
                  }}>
                    <p className="bebas" style={{ fontSize: 32, color: '#E8000B', lineHeight: 1 }}>{r.value}</p>
                    <p style={{ fontSize: 11, color: '#555', marginTop: 4 }}>{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack */}
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.2em', color: '#555', textTransform: 'uppercase', marginBottom: 12 }}>Tech Stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.stack.map(tech => (
                <span key={tech} style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 9999, padding: '4px 12px',
                  fontSize: 11, color: '#888', letterSpacing: '0.05em',
                }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: '24px 32px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 'auto' }}>
          <a
            href="mailto:amrithnambiar901@gmail.com"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: '#E8000B', color: '#fff', borderRadius: 4,
              padding: '16px 24px', textDecoration: 'none', transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.background = '#E8000B')}
          >
            <span className="bebas" style={{ fontSize: 18, letterSpacing: '0.1em' }}>Interested? Let's talk</span>
            <span style={{ fontSize: 20 }}>→</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" style={{ background: '#0a0a0a', padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <p style={{ color: '#E8000B', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
              / Selected Projects
            </p>
            <div className="bebas" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#F5F5F0', lineHeight: 0.9 }}>
              <div>PRODUCTS &amp;</div>
              <div>CLIENT WORK.</div>
            </div>
          </div>
          <p style={{ fontSize: 11, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', cursor: 'pointer' }}>
            8 Projects →
          </p>
        </div>

        {/* Project rows */}
        <div>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '24px 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
                cursor: 'pointer', transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#E8000B'
                const num = (e.currentTarget as HTMLDivElement).querySelector('.proj-num') as HTMLElement
                const title = (e.currentTarget as HTMLDivElement).querySelector('.proj-title') as HTMLElement
                const arrow = (e.currentTarget as HTMLDivElement).querySelector('.proj-arrow') as HTMLElement
                if (num) num.style.color = '#E8000B'
                if (title) title.style.color = '#E8000B'
                if (arrow) { arrow.style.color = '#E8000B'; arrow.style.transform = 'translate(4px,-4px)' }
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.05)'
                const num = (e.currentTarget as HTMLDivElement).querySelector('.proj-num') as HTMLElement
                const title = (e.currentTarget as HTMLDivElement).querySelector('.proj-title') as HTMLElement
                const arrow = (e.currentTarget as HTMLDivElement).querySelector('.proj-arrow') as HTMLElement
                if (num) num.style.color = 'rgba(255,255,255,0.1)'
                if (title) title.style.color = '#F5F5F0'
                if (arrow) { arrow.style.color = 'rgba(255,255,255,0.2)'; arrow.style.transform = 'translate(0,0)' }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                <span className="bebas proj-num" style={{
                  fontSize: 48, color: 'rgba(255,255,255,0.1)',
                  lineHeight: 1, width: 56, transition: 'color 0.3s',
                }}>
                  {project.number}
                </span>
                <div>
                  <p className="bebas proj-title" style={{
                    fontSize: 22, color: '#F5F5F0', transition: 'color 0.3s', lineHeight: 1.1,
                  }}>
                    {project.shortTitle}
                  </p>
                  <div style={{ display: 'flex', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: 10, letterSpacing: '0.1em', color: '#555',
                        border: '1px solid rgba(255,255,255,0.08)',
                        padding: '2px 8px', borderRadius: 2, textTransform: 'uppercase',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 }}>
                <span style={{ fontSize: 10, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase' }}>
                  {project.type}
                </span>
                <span className="proj-arrow" style={{
                  fontSize: 20, color: 'rgba(255,255,255,0.2)',
                  transition: 'color 0.3s, transform 0.3s',
                }}>
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
