const EDUCATION = [
  { institution: 'Vimal Jyothi Engineering College', degree: 'B.Tech — Electrical & Electronics Engineering', year: '2020–2024' },
  { institution: 'DataMites, Bangalore',             degree: 'AI Engineer Program',                           year: '2024' },
  { institution: 'NASSCOM',                          degree: 'AI Engineer (Gold)',                            year: '2024' },
  { institution: 'IABAC',                            degree: 'AI Expert & Data Scientist',                   year: '2024' },
]

const SKILLS = [
  'Claude AI', 'Prompt Engineering', 'Next.js 16', 'React', 'React Native',
  'Expo SDK 54', 'Node.js', 'Supabase', 'PostgreSQL', 'Redis', 'Railway',
  'Vercel', 'TypeScript', 'Tailwind CSS', 'Python', 'Pandas', 'Power BI',
  'SQL', 'WATI', 'Twilio', 'Razorpay', 'PostHog', 'Sentry', 'EAS Build',
  'Sharp', 'Framer Motion',
]

export default function SkillsSection() {
  return (
    <section id="skills" style={{ background: '#0a0a0a', padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ marginBottom: 64 }}>
          <p style={{ color: '#E8000B', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
            / Education &amp; Skills
          </p>
          <div className="bebas" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#F5F5F0', lineHeight: 0.9 }}>
            <div>TOOLS &amp;</div>
            <div>STACK.</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 64 }} className="lg:grid-cols-2">

          {/* Education */}
          <div>
            {EDUCATION.map(e => (
              <div
                key={e.institution}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 0',
                }}
              >
                <div>
                  <p style={{ color: '#F5F5F0', fontWeight: 500, fontSize: 14 }}>{e.institution}</p>
                  <p style={{ color: '#888', fontSize: 13, marginTop: 4 }}>{e.degree}</p>
                </div>
                <p style={{ color: '#E8000B', fontSize: 11, letterSpacing: '0.1em', fontFamily: 'monospace', flexShrink: 0, marginLeft: 16 }}>
                  {e.year}
                </p>
              </div>
            ))}
          </div>

          {/* Skills tags */}
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#E8000B', textTransform: 'uppercase', marginBottom: 16 }}>
              / Javascript &amp; Frameworks
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {SKILLS.map(skill => (
                <span
                  key={skill}
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '6px 12px', margin: 4,
                    fontSize: 11, letterSpacing: '0.08em', color: '#666',
                    cursor: 'default', transition: 'border-color 0.2s, color 0.2s',
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
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
