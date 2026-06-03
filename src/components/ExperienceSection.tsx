import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const ITEMS = [
  {
    date: 'Feb 2026 — Present',
    role: 'AI Automation Engineer',
    company: 'Bluetik Marketing Agency, Kochi',
    current: true,
    bullets: [
      'Built BluAI, Aria, Internal Ops Platform and Android CRM from scratch',
      'Claude AI · Next.js · Supabase · React Native · Railway · Vercel',
    ],
  },
  {
    date: 'Oct 2024 — Dec 2025',
    role: 'Data & MIS Analyst — Production & Marketing',
    company: 'SRA Foods, Kannur',
    current: false,
    bullets: [
      'Analysed production, sales, and operational data to identify process gaps',
      'Developed and tracked KPIs using Excel and Power BI across production, quality, and sales',
    ],
  },
  {
    date: 'Oct 2024 — Jun 2025',
    role: 'Data Analyst Intern',
    company: 'Rubixie AI, Bangalore',
    current: false,
    bullets: [
      'Cleaned and validated large datasets using Python (Pandas, NumPy) — reduced inconsistencies by 30%',
      'Designed interactive Power BI dashboards to visualise KPIs for stakeholders',
    ],
  },
  {
    date: 'Jun 2021 — Aug 2021',
    role: 'Student Partner',
    company: 'Inventrom Private Ltd (Bolt IoT), Bangalore',
    current: false,
    bullets: [
      'IoT and ML community outreach and brand awareness',
      'Business development and student partnership program',
    ],
  },
]

function TimelineItem({ item, index }: { item: typeof ITEMS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group relative grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-0 py-8 border-b border-white/[0.07] last:border-0 hover:bg-white/[0.015] transition-colors rounded-lg px-4 lg:px-6 cursor-default"
    >
      {/* Left: date (desktop only) */}
      <div className="hidden lg:block">
        <span style={{ color: 'rgba(222,219,200,0.35)', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.06em', paddingTop: 4, display: 'block' }}>
          {item.date}
        </span>
      </div>

      {/* Right: content */}
      <div className="lg:border-l lg:pl-8 group-hover:[border-left-color:rgba(222,219,200,0.2)]" style={{ borderLeftColor: 'rgba(222,219,200,0.07)', transition: 'border-color 0.3s' }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            {/* Date: mobile only — above role */}
            <p className="block lg:hidden text-primary/35 text-xs font-mono mb-1" style={{ letterSpacing: '0.06em' }}>
              {item.date}
            </p>
            <p style={{ color: '#E1E0CC', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 500, marginBottom: 6 }}>
              {item.role}
            </p>
            <p style={{ color: 'rgba(222,219,200,0.4)', fontSize: 14, marginBottom: 14 }}>
              {item.company}
            </p>
          </div>
          {item.current && (
            <div className="hidden lg:block flex-shrink-0">
              <span style={{ background: 'rgba(222,219,200,0.08)', borderRadius: 9999, padding: '4px 12px', fontSize: 11, color: 'rgba(222,219,200,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                Current
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-1">
          {item.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3">
              <div style={{ width: 4, height: 4, borderRadius: 9999, background: 'rgba(222,219,200,0.25)', marginTop: 8, flexShrink: 0 }} />
              <p style={{ color: 'rgba(222,219,200,0.45)', fontSize: 14, lineHeight: 1.7 }}>
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-transparent py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-16 sm:mb-20 flex-wrap gap-6">
          <div>
            <p style={{ color: 'rgba(222,219,200,0.4)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
              Career
            </p>
            <WordsPullUpMultiStyle
              segments={[
                { text: "Where I've", className: 'text-primary font-normal' },
                { text: 'built things.', className: 'font-serif italic text-primary' },
              ]}
              containerClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9]"
            />
          </div>
          <p style={{ color: 'rgba(222,219,200,0.45)', fontSize: 12, lineHeight: 1.6, maxWidth: 200, textAlign: 'right' }}>
            4 roles across AI engineering, data analysis, and product development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-4">
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-white/[0.07]" />
          {ITEMS.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
