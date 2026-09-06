const LINKS = [
  { label: 'Email',    value: 'amrithnambiar901@gmail.com', href: 'mailto:amrithnambiar901@gmail.com' },
  { label: 'GitHub',   value: 'github.com/amrith8948',      href: 'https://github.com/amrith8948' },
  { label: 'LinkedIn', value: 'linkedin.com/in/amrith-raj', href: 'https://linkedin.com/in/amrith-raj' },
  { label: 'Location', value: 'Kochi, Kerala, India',        href: null },
]

export default function ContactSection() {
  return (
    <section id="contact" style={{ background: '#0d0d0d', padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ marginBottom: 64 }}>
          <p style={{ color: '#E8000B', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
            / Let's Work Together
          </p>
          <div className="bebas" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 0.9, color: '#F5F5F0' }}>
            <div>LET'S</div>
            <div>WORK</div>
            <div>TOGETHER<span style={{ color: '#E8000B' }}>.</span></div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 64, alignItems: 'flex-start' }} className="lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7, maxWidth: 380, marginBottom: 40 }}>
              Open to AI engineering roles, freelance automation projects, and interesting collaborations. Based in Kochi, Kerala.
            </p>

            {LINKS.map(link => (
              <div
                key={link.label}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'border-color 0.3s', cursor: link.href ? 'pointer' : 'default',
                }}
                onMouseEnter={e => {
                  if (!link.href) return
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#E8000B'
                  const val = (e.currentTarget as HTMLDivElement).querySelector('.link-val') as HTMLElement
                  const arrow = (e.currentTarget as HTMLDivElement).querySelector('.link-arrow') as HTMLElement
                  if (val) val.style.color = '#E8000B'
                  if (arrow) arrow.style.color = '#E8000B'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.05)'
                  const val = (e.currentTarget as HTMLDivElement).querySelector('.link-val') as HTMLElement
                  const arrow = (e.currentTarget as HTMLDivElement).querySelector('.link-arrow') as HTMLElement
                  if (val) val.style.color = '#F5F5F0'
                  if (arrow) arrow.style.color = '#555'
                }}
                onClick={() => link.href && window.open(link.href, '_blank')}
              >
                <p style={{ fontSize: 10, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', width: 80, flexShrink: 0 }}>
                  {link.label}
                </p>
                <p className="link-val" style={{ fontSize: 14, color: '#F5F5F0', flex: 1, transition: 'color 0.3s' }}>
                  {link.value}
                </p>
                {link.href && (
                  <span className="link-arrow" style={{ color: '#555', fontSize: 18, transition: 'color 0.3s' }}>↗</span>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            <a
              href="mailto:amrithnambiar901@gmail.com?subject=Hiring Inquiry — Amrith Raj&body=Hi Amrith,%0D%0A%0D%0AI came across your portfolio and I'm interested in discussing a potential opportunity.%0D%0A%0D%0ACompany:%0D%0ARole:%0D%0ADetails:%0D%0A%0D%0ALooking forward to hearing from you."
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: '#E8000B', color: '#fff', padding: '32px 48px',
                textDecoration: 'none', transition: 'background 0.3s, color 0.3s',
                width: '100%',
              }}
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
              <span style={{ fontSize: 36, lineHeight: 1 }}>→</span>
            </a>

            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              {['WhatsApp AI', 'Full-Stack Build', 'AI Automation', 'Freelance'].map(tag => (
                <span
                  key={tag}
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '8px 16px', fontSize: 11, letterSpacing: '0.1em',
                    color: '#666', textTransform: 'uppercase', cursor: 'default',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor = '#E8000B'
                    ;(e.currentTarget as HTMLSpanElement).style.color = '#E8000B'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(255,255,255,0.1)'
                    ;(e.currentTarget as HTMLSpanElement).style.color = '#666'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer line */}
        <div style={{
          marginTop: 96, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 11, letterSpacing: '0.15em', color: '#444', textTransform: 'uppercase' }}>
            Amrith Raj M V © 2026
          </p>
          <p style={{ fontSize: 11, letterSpacing: '0.15em', color: '#444', textTransform: 'uppercase' }}>
            AI Automation Engineer — Bluetik, Kochi
          </p>
        </div>

      </div>
    </section>
  )
}
