export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#0a0a0a', padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 64, alignItems: 'center' }} className="lg:grid-cols-2">

        {/* LEFT */}
        <div>
          <p style={{ color: '#E8000B', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24 }}>
            / About Me
          </p>

          <div className="bebas" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9, color: '#F5F5F0' }}>
            <div>I AM</div>
            <div>
              AMRITH RAJ<span style={{ color: '#E8000B' }}>,</span>
            </div>
            <div>AN AI AUTOMATION</div>
            <div>
              ENGINEER<span style={{ color: '#E8000B' }}>.</span>
            </div>
          </div>

          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 520 }}>
            <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>
              Since February 2026 at Bluetik Marketing Agency in Kochi, I have built and deployed 8 production systems.
            </p>
            <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>
              BluAI, Aria, Internal Ops Platform, Android CRM, Teena, Vani, Aureate Way, ForMix, and Craftline Institute — each built solo, end to end.
            </p>
          </div>

          {/* Photo row */}
          <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%', overflow: 'hidden',
              border: '2px solid rgba(232,0,11,0.4)', flexShrink: 0,
            }}>
              <img
                src="/images/WhatsApp Image 2026-09-06 at 8.50.58 PM.jpeg"
                alt="Amrith Raj"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div>
              <p style={{ color: '#F5F5F0', fontSize: 15, fontWeight: 600 }}>Amrith Raj M V</p>
              <p style={{ color: '#888', fontSize: 12, marginTop: 2 }}>AI Automation Engineer · Bluetik, Kochi</p>
            </div>
          </div>
        </div>

        {/* RIGHT — facts grid */}
        <div>
          {[
            { label: 'Currently',  value: 'AI Automation Engineer — Bluetik' },
            { label: 'Based In',   value: 'Kochi, Kerala, India' },
            { label: 'Education',  value: 'B.Tech EEE — Vimal Jyothi Engineering College' },
            { label: 'Certified',  value: 'NASSCOM Gold AIE · IABAC AI Expert · DataMites' },
          ].map(fact => (
            <div
              key={fact.label}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 24, marginBottom: 24 }}
            >
              <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#555', textTransform: 'uppercase', marginBottom: 8 }}>
                {fact.label}
              </p>
              <p style={{ color: '#F5F5F0', fontSize: 15, fontWeight: 500 }}>{fact.value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
