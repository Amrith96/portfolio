const TIMELINE = [
  {
    number: '01',
    role: 'AI AUTOMATION ENGINEER',
    company: 'Bluetik Marketing Agency, Kochi',
    date: 'Feb 2026 — Present',
    bullets: [
      'Built 8 production systems including BluAI, Aria, Teena, Vani',
      'Deployed full-stack SaaS, WhatsApp AI bots, and internal ops platforms',
      'Stack: Claude AI, Next.js, Supabase, React Native, Railway',
    ],
  },
  {
    number: '02',
    role: 'AI ENGINEER TRAINEE',
    company: 'DataMites, Bangalore',
    date: '2024',
    bullets: [
      'Completed intensive AI Engineer program',
      'Practical ML, Python, and data science pipeline training',
      'Earned NASSCOM Gold AIE and IABAC certifications',
    ],
  },
  {
    number: '03',
    role: 'FREELANCE DEVELOPER',
    company: 'Independent',
    date: '2024 — 2026',
    bullets: [
      'Built websites and CRMs for Aureate Way, ForMix, Craftline Institute',
      'Full-stack builds from design to deployment',
      'Supabase, React, Vite, Vercel, GoDaddy DNS',
    ],
  },
  {
    number: '04',
    role: 'B.TECH — ELECTRICAL ENGINEERING',
    company: 'Vimal Jyothi Engineering College, Kerala',
    date: '2020 — 2024',
    bullets: [
      'Bachelor of Technology — Electrical & Electronics Engineering',
      'Built foundation in systems thinking and problem solving',
    ],
  },
]

const PROCESS = [
  { step: '01', title: 'DISCOVER', desc: 'Understanding goals, audience, and project requirements before touching any code.' },
  { step: '02', title: 'DESIGN',   desc: 'Architecting clean systems with a focus on user experience and scalability.' },
  { step: '03', title: 'BUILD',    desc: 'Writing quality code with focus on performance, security, and maintainability.' },
  { step: '04', title: 'DEPLOY',   desc: 'Testing, optimizing, and launching with obsessive attention to detail.' },
]

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ background: '#0d0d0d', padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ marginBottom: 64 }}>
          <p style={{ color: '#E8000B', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
            / Work Process &amp; Experience
          </p>
          <div className="bebas" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#F5F5F0', lineHeight: 0.9 }}>
            <div>WHERE I'VE</div>
            <div>BUILT THINGS.</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 64 }} className="lg:grid-cols-2">

          {/* Timeline */}
          <div>
            {TIMELINE.map(item => (
              <div
                key={item.number}
                style={{ display: 'flex', gap: 24, marginBottom: 40 }}
                onMouseEnter={e => {
                  const num = (e.currentTarget as HTMLDivElement).querySelector('.exp-num') as HTMLElement
                  if (num) num.style.color = '#E8000B'
                }}
                onMouseLeave={e => {
                  const num = (e.currentTarget as HTMLDivElement).querySelector('.exp-num') as HTMLElement
                  if (num) num.style.color = 'rgba(255,255,255,0.1)'
                }}
              >
                <span className="bebas exp-num" style={{ fontSize: 36, color: 'rgba(255,255,255,0.1)', lineHeight: 1, flexShrink: 0, transition: 'color 0.3s' }}>
                  {item.number}
                </span>
                <div>
                  <p className="bebas" style={{ fontSize: 18, color: '#F5F5F0', letterSpacing: '0.05em' }}>{item.role}</p>
                  <p style={{ fontSize: 13, color: '#888', marginBottom: 12 }}>{item.company}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {item.bullets.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <span style={{ color: '#E8000B', flexShrink: 0, fontSize: 12 }}>▸</span>
                        <span style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: 10, letterSpacing: '0.15em', color: '#E8000B', marginTop: 8, textTransform: 'uppercase' }}>
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Process */}
          <div>
            {PROCESS.map(p => (
              <div
                key={p.step}
                style={{ borderLeft: '2px solid rgba(255,255,255,0.05)', paddingLeft: 24, marginBottom: 32, transition: 'border-color 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#E8000B' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.05)' }}
              >
                <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#E8000B', textTransform: 'uppercase', marginBottom: 4 }}>{p.step}</p>
                <p className="bebas" style={{ fontSize: 20, color: '#F5F5F0', marginBottom: 8 }}>{p.title}</p>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
