import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

export default function HeroSection() {
  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>

      {/* LAYER 0 — Full-bleed background photo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="/images/hero-portrait.png"
          alt="Amrith Raj"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% top', display: 'block' }}
        />
        {/* Left 60% fade */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to right, #0a0a0a 20%, rgba(10,10,10,0.4) 50%, transparent 100%)',
        }} />
        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 100%)',
        }} />
        {/* Right edge fade */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '20%', height: '100%', pointerEvents: 'none',
          background: 'linear-gradient(to left, #0a0a0a 0%, transparent 30%)',
        }} />
        {/* Subtle light overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 70% at 65% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }} />
      </div>

      {/* LAYER 1 — PORTFOLIO background text */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        pointerEvents: 'none', userSelect: 'none', overflow: 'hidden',
      }}>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(140px, 26vw, 360px)',
          color: '#E8000B',
          opacity: 0.7,
          lineHeight: 0.85,
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
          position: 'absolute',
          top: '50%',
          left: '-20px',
          transform: 'translateY(-60%)',
          display: 'block',
        }}>PORTFOLIO</span>
      </div>

      {/* LAYER 2 — Content */}
      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh' }}>

        {/* NAV — floating glass pill */}
        <nav style={{
          position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)',
          zIndex: 30,
          background: 'rgba(10,10,10,0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 9999,
          padding: '10px 10px 10px 28px',
          display: 'flex', alignItems: 'center', gap: 0,
          whiteSpace: 'nowrap',
        }}>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map(link => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  fontSize: 12, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  textTransform: 'uppercase', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >{link}</button>
            ))}
          </div>
          {/* Hire Me button */}
          <button style={{
            background: '#E8000B', borderRadius: 9999,
            paddingLeft: 20, paddingRight: 6, paddingTop: 6, paddingBottom: 6,
            display: 'flex', alignItems: 'center', gap: 12,
            marginLeft: 24, border: 'none', cursor: 'pointer',
          }}>
            <span style={{ color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em' }}>HIRE ME</span>
            <span style={{
              background: 'rgba(0,0,0,0.3)', borderRadius: '50%',
              width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#fff', fontSize: 14 }}>↗</span>
            </span>
          </button>
        </nav>

        {/* TOP LEFT labels */}
        <div style={{ position: 'absolute', top: 32, left: 32, zIndex: 20 }}>
          {['WEB DESIGNER', 'DIGITAL CREATOR'].map(label => (
            <p key={label} style={{
              fontSize: 10, letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.3)', lineHeight: 1.8, textTransform: 'uppercase', margin: 0,
            }}>{label}</p>
          ))}
        </div>

        {/* TOP RIGHT micro text */}
        <div style={{ position: 'absolute', top: 32, right: 32, zIndex: 20, textAlign: 'right' }}>
          {['Turning ideas into', 'powerful digital', 'experiences.'].map(line => (
            <p key={line} style={{
              fontSize: 9, letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.25)', lineHeight: 1.8, textTransform: 'uppercase', margin: 0,
            }}>{line}</p>
          ))}
        </div>

        {/* LEFT TEXT COLUMN */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0,
          padding: '0 0 48px 40px',
          maxWidth: 600, zIndex: 10,
        }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
              fontSize: 20, color: 'rgba(255,255,255,0.5)', marginBottom: 8,
            }}
          >Hello, I'm</motion.p>

          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 0.85, margin: 0 }}>
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.2 }}
              style={{ display: 'block', fontSize: 'clamp(72px, 14vw, 180px)', color: '#F5F5F0' }}
            >AMRITH</motion.span>
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.35 }}
              style={{ display: 'block', fontSize: 'clamp(52px, 10vw, 130px)', color: '#F5F5F0' }}
            >RAJ M V</motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ marginTop: 24 }}
          >
            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.15em', color: '#E8000B', textTransform: 'uppercase', margin: 0 }}>AI AUTOMATION ENGINEER &amp;</p>
            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.15em', color: '#F5F5F0', textTransform: 'uppercase', margin: 0 }}>FULL-STACK BUILDER</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{ marginTop: 16, maxWidth: 320, fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}
          >
            I design and build AI systems, full-stack platforms, and automation tools for real businesses. Clean code, fast ships, details that matter.
          </motion.p>
        </div>

        {/* STATS ROW — bottom right */}
        <div style={{
          position: 'absolute', bottom: 48, right: 40,
          zIndex: 10,
          display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-end',
        }}>
          {[
            { num: '8+', label: 'Products Shipped', delay: 0.7 },
            { num: '3+', label: 'Years Experience', delay: 0.8 },
            { num: '5+', label: 'Happy Clients', delay: 0.9 },
          ].map(stat => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: stat.delay }}
              style={{ textAlign: 'right' }}
            >
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 5vw, 64px)', color: '#E8000B', lineHeight: 1 }}>{stat.num}</div>
              <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', textAlign: 'right', marginTop: 2 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
