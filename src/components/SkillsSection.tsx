import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export default function SkillsSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const eduRef = useRef(null)
  const eduInView = useInView(eduRef, { once: true, margin: '-60px' })
  const tagsRef = useRef(null)
  const tagsInView = useInView(tagsRef, { once: true, margin: '-60px' })

  return (
    <section id="skills" style={{ background: '#0a0a0a', padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ color: '#E8000B', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
            / Education &amp; Skills
          </p>
          <div className="bebas" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#F5F5F0', lineHeight: 0.9 }}>
            <div>TOOLS &amp;</div>
            <div>STACK.</div>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 64 }} className="lg:grid-cols-2">

          {/* Education */}
          <div ref={eduRef}>
            {EDUCATION.map((e, i) => (
              <motion.div
                key={e.institution}
                initial={{ opacity: 0, y: 20 }}
                animate={eduInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 0' }}
              >
                <div>
                  <p style={{ color: '#F5F5F0', fontWeight: 500, fontSize: 14 }}>{e.institution}</p>
                  <p style={{ color: '#888', fontSize: 13, marginTop: 4 }}>{e.degree}</p>
                </div>
                <p style={{ color: '#E8000B', fontSize: 11, letterSpacing: '0.1em', fontFamily: 'monospace', flexShrink: 0, marginLeft: 16 }}>{e.year}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills tags */}
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#E8000B', textTransform: 'uppercase', marginBottom: 16 }}>
              / Javascript &amp; Frameworks
            </p>
            <motion.div
              ref={tagsRef}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }}
              initial="hidden"
              animate={tagsInView ? 'visible' : 'hidden'}
              style={{ display: 'flex', flexWrap: 'wrap' }}
            >
              {SKILLS.map(skill => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  whileHover={{ scale: 1.05, borderColor: '#E8000B', color: '#E8000B' }}
                  transition={{ duration: 0.15 }}
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '6px 12px', margin: 4,
                    fontSize: 11, letterSpacing: '0.08em', color: '#666',
                    cursor: 'default', display: 'inline-block',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
