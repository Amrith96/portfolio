import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

export default function HeroSection() {
  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>

      {/* NAV */}
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '24px 32px' }}>
        <div>
          {['Web Designer', 'Digital Creator'].map((text, i) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{ fontSize: 10, letterSpacing: '0.2em', color: '#555', textTransform: 'uppercase' }}
            >{text}</motion.p>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((link, i) => (
            <motion.button
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              style={{ fontSize: 11, letterSpacing: '0.15em', color: '#888', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#888'}
            >{link}</motion.button>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#E8000B', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.15em', color: '#E8000B', textTransform: 'uppercase' }}>Available for Freelance</span>
        </motion.div>
      </nav>

      {/* GIANT RED BACKGROUND TEXT */}
      <div style={{
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        pointerEvents: 'none',
        userSelect: 'none',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(80px, 18vw, 240px)',
        color: '#E8000B',
        lineHeight: 0.85,
        whiteSpace: 'nowrap',
        letterSpacing: '-0.02em',
        opacity: 0.75,
      }}>PORTFOLIO</div>

      {/* PHOTO — centered, slightly right */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease }}
        style={{
          position: 'absolute',
          top: '5%',
          right: 0,
          left: 'auto',
          transform: 'none',
          width: '42%',
          height: '90%',
          zIndex: 1,
        }}
      >
        <img
          src="/images/hero-portrait.png"
          alt="Amrith Raj"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
        />
        {/* Left fade */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', background: 'linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.5) 60%, transparent 100%)', zIndex: 2 }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)', zIndex: 2 }} />
        {/* Right fade */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '30%', height: '100%', background: 'linear-gradient(to left, #0a0a0a 0%, transparent 100%)', zIndex: 2 }} />
      </motion.div>

      {/* SMALL TEXT top right */}
      <div style={{ position: 'absolute', top: 32, right: 32, zIndex: 20, textAlign: 'right', maxWidth: 140 }}>
        <p style={{ fontSize: 9, letterSpacing: '0.12em', color: '#555', textTransform: 'uppercase', lineHeight: 1.6 }}>
          Turning ideas into powerful digital experiences.
        </p>
      </div>

      {/* LEFT CONTENT */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh', padding: '140px 32px 40px', maxWidth: '55%' }}>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 22, color: '#888', marginBottom: 8 }}
          >Hello, I'm</motion.p>

          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 0.88, letterSpacing: '-0.01em', margin: 0 }}>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              style={{ display: 'block', fontSize: 'clamp(80px, 16vw, 200px)', color: '#F5F5F0' }}
            >AMRITH</motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
              style={{ display: 'block', fontSize: 'clamp(60px, 12vw, 160px)', color: '#F5F5F0' }}
            >RAJ M V</motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ marginTop: 24 }}
          >
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', color: '#E8000B', textTransform: 'uppercase' }}>AI Automation Engineer &amp;</p>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', color: '#F5F5F0', textTransform: 'uppercase' }}>Full-Stack Builder</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{ marginTop: 20, maxWidth: 380, fontSize: 14, color: '#666', lineHeight: 1.7 }}
          >
            I design and build AI systems, full-stack platforms, and WhatsApp automation for real businesses. Passionate about clean code, fast ships, and details that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9999, padding: '6px 16px' }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            <span style={{ fontSize: 10, letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase' }}>Available Worldwide</span>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <div style={{ display: 'flex', gap: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {[
            { num: '8+', label: 'Products Shipped', delay: 0.8 },
            { num: '3+', label: 'Years Experience', delay: 0.9 },
            { num: '5+', label: 'Happy Clients', delay: 1.0 },
          ].map(stat => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
            >
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, color: '#E8000B', lineHeight: 1 }}>{stat.num}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', marginTop: 4 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vertical text right edge */}
      <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%) rotate(90deg)', zIndex: 20, whiteSpace: 'nowrap', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', textTransform: 'uppercase' }}>
        Amrith Raj M V · AI Automation Engineer · Kochi Kerala ·
      </div>

      {/* Bottom right URL */}
      <div style={{ position: 'absolute', bottom: 24, right: 32, zIndex: 20, fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
        amrithraj.in
      </div>

    </section>
  )
}
