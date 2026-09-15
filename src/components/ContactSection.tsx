import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const LINKS = [
  { label: 'Email',    value: 'amrithnambiar901@gmail.com', href: 'mailto:amrithnambiar901@gmail.com' },
  { label: 'GitHub',   value: 'github.com/amrith8948',      href: 'https://github.com/amrith8948' },
  { label: 'LinkedIn', value: 'linkedin.com/in/amrith-raj', href: 'https://linkedin.com/in/amrith-raj' },
  { label: 'Location', value: 'Kochi, Kerala, India',        href: null },
]

export default function ContactSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const linksRef = useRef(null)
  const linksInView = useInView(linksRef, { once: true, margin: '-60px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  return (
    <section id="contact" style={{ background: '#0d0d0d', padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div ref={headerRef} style={{ marginBottom: 64 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            style={{ color: '#E8000B', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}
          >
            / Let's Work Together
          </motion.p>
          <div className="bebas" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 0.9, color: '#F5F5F0' }}>
            {["LET'S", 'WORK', <span key="tog">TOGETHER<span style={{ color: '#E8000B' }}>.</span></span>].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
              >
                {line}
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 64, alignItems: 'flex-start' }} className="lg:grid-cols-2">

          {/* LEFT */}
          <div ref={linksRef}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={linksInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              style={{ fontSize: 14, color: '#888', lineHeight: 1.7, maxWidth: 380, marginBottom: 40 }}
            >
              Open to AI engineering roles, freelance automation projects, and interesting collaborations. Based in Kochi, Kerala.
            </motion.p>

            {LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={linksInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'border-color 0.3s', cursor: link.href ? 'pointer' : 'default' }}
                onMouseEnter={e => {
                  if (!link.href) return
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = '#E8000B'
                  const val = (e.currentTarget as HTMLDivElement).querySelector('.link-val') as HTMLElement
                  const arrow = (e.currentTarget as HTMLDivElement).querySelector('.link-arrow') as HTMLElement
                  if (val) val.style.color = '#E8000B'
                  if (arrow) arrow.style.color = '#E8000B'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.05)'
                  const val = (e.currentTarget as HTMLDivElement).querySelector('.link-val') as HTMLElement
                  const arrow = (e.currentTarget as HTMLDivElement).querySelector('.link-arrow') as HTMLElement
                  if (val) val.style.color = '#F5F5F0'
                  if (arrow) arrow.style.color = '#555'
                }}
                onClick={() => link.href && window.open(link.href, '_blank')}
              >
                <p style={{ fontSize: 10, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', width: 80, flexShrink: 0 }}>{link.label}</p>
                <p className="link-val" style={{ fontSize: 14, color: '#F5F5F0', flex: 1, transition: 'color 0.3s' }}>{link.value}</p>
                {link.href && <span className="link-arrow" style={{ color: '#555', fontSize: 18, transition: 'color 0.3s' }}>↗</span>}
              </motion.div>
            ))}
          </div>

          {/* RIGHT */}
          <div ref={ctaRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.a
                href="mailto:amrithnambiar901@gmail.com?subject=Hiring Inquiry — Amrith Raj&body=Hi Amrith,%0D%0A%0D%0AI came across your portfolio and I'm interested in discussing a potential opportunity.%0D%0A%0D%0ACompany:%0D%0ARole:%0D%0ADetails:%0D%0A%0D%0ALooking forward to hearing from you."
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#E8000B', color: '#fff', padding: '32px 48px', textDecoration: 'none', transition: 'background 0.3s, color 0.3s', width: '100%' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#fff'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#000'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#E8000B'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
                }}
              >
                <span className="bebas" style={{ fontSize: 28, letterSpacing: '0.1em' }}>START A PROJECT</span>
                <motion.span
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{ fontSize: 36, lineHeight: 1 }}
                >→</motion.span>
              </motion.a>
            </motion.div>

            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              {['WhatsApp AI', 'Full-Stack Build', 'AI Automation', 'Freelance'].map(tag => (
                <span
                  key={tag}
                  style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '8px 16px', fontSize: 11, letterSpacing: '0.1em', color: '#666', textTransform: 'uppercase', cursor: 'default', transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.borderColor = '#E8000B'; (e.currentTarget as HTMLSpanElement).style.color = '#E8000B' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLSpanElement).style.color = '#666' }}
                >{tag}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer line */}
        <div style={{ marginTop: 96, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.15em', color: '#444', textTransform: 'uppercase' }}>Amrith Raj M V © 2026</p>
          <p style={{ fontSize: 11, letterSpacing: '0.15em', color: '#444', textTransform: 'uppercase' }}>AI Automation Engineer — Bluetik, Kochi</p>
        </div>

      </div>
    </section>
  )
}
