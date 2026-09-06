import { useState } from 'react'

const NAV_LINKS = [
  { label: 'About',      id: 'about' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Contact',    id: 'contact' },
]

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>

      {/* Ghost typography background */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
        justifyContent: 'center', overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
      }}>
        <span className="bebas" style={{
          fontSize: '25vw', color: 'rgba(255,255,255,0.02)', lineHeight: 1,
          userSelect: 'none', whiteSpace: 'nowrap',
        }}>
          PORTFOLIO
        </span>
      </div>

      {/* NAV */}
      <nav style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '24px 32px',
      }}>
        {/* Left identity */}
        <div>
          <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#888', textTransform: 'uppercase' }}>Web Designer</p>
          <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#888', textTransform: 'uppercase', marginTop: 2 }}>Digital Creator</p>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: 32 }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 11, letterSpacing: '0.15em', color: '#888',
                textTransform: 'uppercase', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#E8000B')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888')}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right — availability */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%', background: '#E8000B',
            flexShrink: 0, animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span style={{ fontSize: 10, letterSpacing: '0.2em', color: '#E8000B', textTransform: 'uppercase' }}>
            Available for Freelance
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          style={{
            position: 'absolute', top: 20, right: 24,
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8, width: 40, height: 40,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 5, cursor: 'pointer',
          }}
          aria-label="Open menu"
        >
          <span style={{ width: 18, height: 1.5, background: '#F5F5F0', display: 'block' }} />
          <span style={{ width: 18, height: 1.5, background: '#F5F5F0', display: 'block' }} />
          <span style={{ width: 12, height: 1.5, background: '#E8000B', display: 'block', alignSelf: 'flex-start', marginLeft: 3 }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 50, background: '#0a0a0a',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute', top: 24, right: 24, background: 'none', border: 'none',
              color: '#888', fontSize: 24, cursor: 'pointer',
            }}
          >✕</button>
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="bebas"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 48, color: '#F5F5F0', letterSpacing: '0.05em',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* HERO BODY — two column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        minHeight: '100vh',
      }} className="lg:grid-cols-2">

        {/* LEFT */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '96px 32px 40px',
        }}>
          {/* Top content */}
          <div>
            <p className="serif" style={{ fontStyle: 'italic', fontSize: 20, color: '#888', marginBottom: 8 }}>
              Hello, I'm
            </p>

            {/* Massive name */}
            <div>
              <div className="bebas fade-up" style={{
                fontSize: 'clamp(5rem, 18vw, 14rem)',
                lineHeight: 0.85,
                color: '#F5F5F0',
                letterSpacing: '-0.01em',
              }}>
                AMRITH
              </div>
              <div className="bebas fade-up-d1" style={{
                fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                lineHeight: 0.85,
                color: '#F5F5F0',
                letterSpacing: '-0.01em',
              }}>
                RAJ M V
              </div>
            </div>

            {/* Role line */}
            <div style={{ marginTop: 20 }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', color: '#E8000B', textTransform: 'uppercase' }}>
                AI Automation Engineer &amp;
              </p>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', color: '#F5F5F0', textTransform: 'uppercase' }}>
                Full-Stack Builder
              </p>
            </div>

            {/* Bio */}
            <p className="fade-up-d2" style={{
              marginTop: 24, maxWidth: 360, fontSize: 14, color: '#888', lineHeight: 1.7,
            }}>
              I design and build AI systems, full-stack platforms, and WhatsApp automation for real businesses. Passionate about clean code, fast ships, and details that make a difference.
            </p>

            {/* Status pill */}
            <div style={{
              marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9999, padding: '6px 16px',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
              <span style={{ fontSize: 10, letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase' }}>
                Available Worldwide
              </span>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="fade-up-d3" style={{ display: 'flex', gap: 40, marginTop: 48 }}>
            {[
              { value: '8+', label: 'Products Shipped' },
              { value: '3+', label: 'Years Experience' },
              { value: '5+', label: 'Happy Clients' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="bebas" style={{ fontSize: 48, color: '#E8000B', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 10, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — photo */}
        <div style={{ position: 'relative', height: '60vw', minHeight: 400 }} className="lg:h-auto">
          <img
            src="/images/hero-portrait.png"
            alt="Amrith Raj"
            className="ken-burns"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
              filter: 'contrast(1.05)',
            }}
          />
          {/* Dark gradient left edge to blend with left panel */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.3) 30%, transparent 60%)',
          }} />

          {/* Vertical text on right edge */}
          <div style={{
            position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, writingMode: 'vertical-rl', textOrientation: 'mixed',
          }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)',
              fontFamily: 'monospace', whiteSpace: 'nowrap',
            }}>
              AMRITH RAJ M V · AI AUTOMATION ENGINEER · KOCHI KERALA ·
            </span>
          </div>

          {/* Bottom right watermark */}
          <div style={{ position: 'absolute', bottom: 24, right: 24, zIndex: 10, textAlign: 'right' }}>
            <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em' }}>
              amrithraj.in
            </span>
          </div>
        </div>

      </div>

    </section>
  )
}
