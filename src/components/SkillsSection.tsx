import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GROUPS = [
  {
    label: 'AI & LLM',
    number: '01',
    featured: true,
    skills: ['Claude API', 'Prompt Engineering', 'Whisper Fine-tuning', 'NLP', 'TensorFlow'],
    colSpan: 'col-span-12 sm:col-span-6 md:col-span-7',
  },
  {
    label: 'Frontend',
    number: '02',
    featured: false,
    skills: ['Next.js 16', 'React', 'React Native', 'Expo SDK 54', 'Tailwind CSS', 'TypeScript'],
    colSpan: 'col-span-12 sm:col-span-6 md:col-span-5',
  },
  {
    label: 'Backend & DB',
    number: '03',
    featured: false,
    skills: ['Node.js', 'Supabase', 'PostgreSQL', 'Redis', 'Railway', 'Vercel'],
    colSpan: 'col-span-12 sm:col-span-6 md:col-span-5',
  },
  {
    label: 'Data & Analytics',
    number: '04',
    featured: true,
    skills: ['Python', 'Pandas', 'Power BI', 'SQL', 'EDA', 'MIS Reporting'],
    colSpan: 'col-span-12 sm:col-span-6 md:col-span-7',
  },
  {
    label: 'Integrations',
    number: '05',
    featured: false,
    skills: ['WATI', 'Twilio', 'Razorpay', 'PostHog', 'Sentry', 'Meta Ads'],
    colSpan: 'col-span-12 sm:col-span-6 md:col-span-6',
  },
  {
    label: 'Tools',
    number: '06',
    featured: false,
    skills: ['Claude Code', 'GitHub', 'VS Code', 'EAS Build', 'Sharp', 'Figma'],
    colSpan: 'col-span-12 sm:col-span-6 md:col-span-6',
  },
]

function GroupCard({ group, index }: { group: typeof GROUPS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className={group.colSpan}
    >
      {/* Double-bezel outer shell */}
      <div
        className="hover:border-white/[0.13] transition-colors h-full"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 3 }}
      >
        {/* Inner core */}
        <div
          style={{
            background: group.featured ? '#131313' : '#0c0c0c',
            borderRadius: 17,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
            borderTop: group.featured ? '1px solid rgba(222,219,200,0.12)' : undefined,
            position: 'relative',
            overflow: 'hidden',
          }}
          className="p-5 sm:p-6 h-full"
        >
          {group.featured && (
            <span style={{ position: 'absolute', top: 16, right: 20, fontSize: 48, fontWeight: 700, color: 'rgba(222,219,200,0.04)', fontFamily: 'monospace', lineHeight: 1, userSelect: 'none' }}>
              {group.number}
            </span>
          )}

          <p className={`text-primary/50 uppercase tracking-widest mb-3 ${group.featured ? 'text-[11px]' : 'text-[10px]'}`}>
            {group.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="border rounded-full px-3 py-1 text-primary/80 text-xs transition-all duration-200 cursor-default"
                style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.09)' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(222,219,200,0.1)'
                  el.style.borderColor = 'rgba(222,219,200,0.2)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(255,255,255,0.04)'
                  el.style.borderColor = 'rgba(255,255,255,0.09)'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-transparent py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-primary/50 text-xs uppercase tracking-widest text-center mb-8">
          Tools &amp; Stack
        </p>

        <div className="grid grid-cols-12 auto-rows-auto gap-3 grid-flow-dense">
          {GROUPS.map((group, i) => (
            <GroupCard key={group.label} group={group} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
