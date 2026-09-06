export default function HeroSection() {
  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>

      {/* NAV */}
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '24px 32px' }}>
        <div>
          <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#555', textTransform: 'uppercase' }}>Web Designer</p>
          <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#555', textTransform: 'uppercase' }}>Digital Creator</p>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {['About','Projects','Experience','Skills','Contact'].map(link => (
            <button key={link} onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({behavior:'smooth'})}
              style={{ fontSize: 11, letterSpacing: '0.15em', color: '#888', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#888'}
            >{link}</button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#E8000B', display: 'inline-block', animation: 'pulse 2s infinite' }}/>
          <span style={{ fontSize: 10, letterSpacing: '0.15em', color: '#E8000B', textTransform: 'uppercase' }}>Available for Freelance</span>
        </div>
      </nav>

      {/* PHOTO — right half, absolute, fills full height */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '52%', height: '100%', zIndex: 1 }}>
        <img
          src="/images/hero-portrait.png"
          alt="Amrith Raj"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
        {/* Gradient fade to left so text blends */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '60%', height: '100%',
          background: 'linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.7) 60%, transparent 100%)',
          zIndex: 2,
        }}/>
        {/* Gradient fade bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
          background: 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)',
          zIndex: 2,
        }}/>
      </div>

      {/* BIG BACKGROUND TEXT — PORTFOLIO watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0, pointerEvents: 'none', userSelect: 'none',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(80px, 20vw, 280px)',
        color: 'rgba(255,255,255,0.02)',
        lineHeight: 1, whiteSpace: 'nowrap',
      }}>PORTFOLIO</div>

      {/* LEFT CONTENT — text overlays */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        minHeight: '100vh',
        padding: '140px 32px 40px',
        maxWidth: '55%',
      }}>

        {/* Top content */}
        <div>
          <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 22, color: '#888', marginBottom: 8 }}>Hello, I'm</p>

          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 0.88, letterSpacing: '-0.01em', margin: 0 }}>
            <span style={{ display: 'block', fontSize: 'clamp(80px, 16vw, 200px)', color: '#F5F5F0' }}>AMRITH</span>
            <span style={{ display: 'block', fontSize: 'clamp(60px, 12vw, 160px)', color: '#F5F5F0' }}>RAJ M V</span>
          </h1>

          <div style={{ marginTop: 24 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', color: '#E8000B', textTransform: 'uppercase' }}>AI Automation Engineer &amp;</p>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', color: '#F5F5F0', textTransform: 'uppercase' }}>Full-Stack Builder</p>
          </div>

          <p style={{ marginTop: 20, maxWidth: 380, fontSize: 14, color: '#666', lineHeight: 1.7 }}>
            I design and build AI systems, full-stack platforms, and WhatsApp automation for real businesses. Passionate about clean code, fast ships, and details that make a difference.
          </p>

          <div style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9999, padding: '6px 16px' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}/>
            <span style={{ fontSize: 10, letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase' }}>Available Worldwide</span>
          </div>
        </div>

        {/* Bottom stats */}
        <div style={{ display: 'flex', gap: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {[
            { num: '8+', label: 'Products Shipped' },
            { num: '3+', label: 'Years Experience' },
            { num: '5+', label: 'Happy Clients' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, color: '#E8000B', lineHeight: 1 }}>{stat.num}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical text right edge */}
      <div style={{
        position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%) rotate(90deg)',
        zIndex: 20, whiteSpace: 'nowrap',
        fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)',
        fontFamily: 'monospace', textTransform: 'uppercase',
      }}>
        Amrith Raj M V · AI Automation Engineer · Kochi Kerala ·
      </div>

      {/* Bottom right URL */}
      <div style={{ position: 'absolute', bottom: 24, right: 32, zIndex: 20, fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
        amrithraj.in
      </div>

    </section>
  )
}
