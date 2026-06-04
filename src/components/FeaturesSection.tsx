import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, X } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const projects = [
  {
    id: 'bluai',
    number: '01',
    icon: 'B',
    title: 'BluAI — Content Platform.',
    tagline: 'AI-powered marketing content generation for Indian SMBs.',
    description:
      'BluAI is a full-stack SaaS platform built for Bluetik Marketing Agency that replaces manual content creation workflows. It generates branded social media content using 11 visual DNA styles, auto-selects style based on industry and objective, and delivers 3 forced style variants per batch.',
    bullets: [
      'AI content generation with 11 visual styles',
      'Atomic quota management with Redis rate limiting',
      'PostHog analytics & Sentry monitoring',
      'Razorpay subscription payments',
    ],
    stack: ['Next.js', 'Supabase', 'Claude AI', 'Redis', 'Sharp', 'PostHog', 'Sentry', 'Razorpay', 'Vercel'],
    status: 'Pre-launch',
    year: '2026',
    role: 'Solo Builder — Full Stack + AI Engineering',
  },
  {
    id: 'aria',
    number: '02',
    icon: 'A',
    title: 'Aria — WhatsApp AI CRM.',
    tagline: 'WhatsApp-first AI sales assistant and CRM built for Indian SMBs.',
    description:
      'Aria combines an autonomous AI agent that handles inbound WhatsApp conversations with a full sales CRM — web and Android. It qualifies leads, scores them 0–100, books demo slots autonomously, sends follow-ups, and escalates hot leads — all without human intervention. Built for Kerala SMBs where sales happen on WhatsApp.',
    bullets: [
      '24/7 AI agent — responds in under 5 seconds',
      '0–100 lead scoring + Hot/Warm/Cold classification',
      'Android CRM with real-time sync',
    ],
    modalBullets: [
      'AI agent handles inbound WhatsApp 24/7 — responds in <5 seconds',
      'Proprietary lead scoring algorithm (scoreLeadV3) — Hot / Warm / Cold classification',
      '12-stage autonomous sales pipeline with full audit trail',
      'Demo slot booking with atomic conflict prevention',
      'Bilingual: English + Malayalam (Manglish) natively',
      'Android CRM (React Native / Expo) with real-time Supabase sync',
      'Call recording + Malayalam Whisper STT fine-tuning (HuggingFace)',
      '3 automated cron jobs — demo, follow-up, and post-demo reminders',
      'Multi-tenant white-label architecture — workspace_id isolation on all tables',
    ],
    stack: ['Claude AI', 'Node.js', 'Railway', 'Supabase', 'WATI', 'Twilio', 'React Native', 'Expo SDK 54', 'Next.js', 'Vercel', 'Whisper STT'],
    status: 'Live in Production',
    year: '2026',
    role: 'Solo Developer & Product Architect',
  },
  {
    id: 'ops',
    number: '03',
    icon: 'O',
    title: 'Ops Platform — Internal Tools.',
    tagline: 'Full-stack agency management platform replacing scattered spreadsheets.',
    description:
      'A production-grade internal ops platform built to run Bluetik Marketing Agency end-to-end. Covers client management, a multi-stage content pipeline, staff performance scoring, HR payroll, billing, leave management, real-time team messaging, and a full audit trail — secured with row-level security.',
    bullets: [
      '11 role-specific dashboards',
      '20+ modules covering all agency ops',
      'HR payroll & GST invoicing',
      'Android CRM with call recording',
      'Real-time messaging between staff',
      'Row-level security (RLS) on all data',
    ],
    stack: ['Next.js 16', 'Supabase', 'PostgreSQL', 'React', 'Vercel', 'GitHub Actions'],
    status: 'Live',
    year: '2026',
    role: 'Solo Builder — Full Stack Engineering',
  },
]

type Project = typeof projects[0] & { modalBullets?: string[] }

function Card({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className="h-full"
    >
      {/* Double-bezel outer shell */}
      <div
        className="hover:border-white/[0.13] transition-colors h-full"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 3 }}
      >
        {/* Inner core */}
        <div
          style={{ background: '#111111', borderRadius: 17, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
          className="p-5 sm:p-6 flex flex-col h-full min-h-[400px]"
        >
          <div className="flex-1">
            {/* SVG monogram icon */}
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'linear-gradient(135deg, rgba(222,219,200,0.15) 0%, rgba(222,219,200,0.05) 100%)',
              border: '1px solid rgba(222,219,200,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
              boxShadow: 'inset 0 1px 0 rgba(222,219,200,0.1)',
            }}>
              <span style={{ color: '#DEDBC8', fontSize: 18, fontWeight: 700, fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
                {project.icon}
              </span>
            </div>

            <p className="text-gray-500 text-xs mb-1">{project.number}</p>
            <p className="text-[#E1E0CC] text-base sm:text-lg font-medium mb-4">{project.title}</p>
            <ul className="space-y-2">
              {project.bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check size={14} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <motion.button
              onClick={onOpen}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1 text-primary text-sm cursor-pointer"
            >
              Learn more
              <motion.span whileHover={{ x: 3 }} className="inline-flex">
                <ArrowRight size={14} className="-rotate-45" />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const [selected, setSelected] = useState<Project | null>(null)
  const isMobileSheet = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section id="projects" className="min-h-screen bg-transparent relative py-16 sm:py-20 md:py-28 px-4 sm:px-6">

      {/* Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16">
        <WordsPullUpMultiStyle
          segments={[
            { text: "Products I've shipped at Bluetik.", className: 'text-primary font-normal' },
            { text: 'Real systems. Real users. Real impact.', className: 'text-gray-500 font-normal' },
          ]}
          containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        />
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:h-[520px]">
        {projects.map((project, i) => (
          <Card
            key={project.id}
            project={project}
            index={i}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            <motion.div
              className="fixed z-50 bg-[#0c0c0c] overflow-y-auto md:inset-y-0 md:right-0 md:max-w-xl w-full bottom-0 left-0 right-0 h-[90vh] md:h-auto rounded-t-2xl md:rounded-none md:border-l md:border-white/10"
              initial={isMobileSheet ? { y: '100%' } : { x: '100%' }}
              animate={isMobileSheet ? { y: 0 } : { x: 0 }}
              exit={isMobileSheet ? { y: '100%' } : { x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-start justify-between p-8 border-b border-white/10">
                <div>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'linear-gradient(135deg, rgba(222,219,200,0.15) 0%, rgba(222,219,200,0.05) 100%)',
                    border: '1px solid rgba(222,219,200,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                    <span style={{ color: '#DEDBC8', fontSize: 20, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
                      {selected.icon}
                    </span>
                  </div>
                  <p className="text-primary/40 text-xs uppercase tracking-widest mb-1">{selected.number}</p>
                  <h2 className="text-primary text-2xl font-medium" style={{ fontFamily: "'Almarai', sans-serif" }}>
                    {selected.title}
                  </h2>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">{selected.tagline}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-white/40 hover:text-white transition-colors ml-4 mt-1 flex-shrink-0">
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 space-y-8">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Status', value: selected.status },
                    { label: 'Year',   value: selected.year },
                    { label: 'Role',   value: selected.role },
                  ].map(item => (
                    <div key={item.label} className="bg-[#151515] rounded-xl p-4 border border-white/5">
                      <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-primary text-xs leading-snug">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-wider mb-3">Overview</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{selected.description}</p>
                </div>

                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-wider mb-3">Features</p>
                  <ul className="space-y-3">
                    {(selected.modalBullets ?? selected.bullets).map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={14} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selected.id === 'aria' && (
                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider mb-3">Results (First 3 Months)</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: '261',   label: 'Leads captured automatically' },
                        { value: '<5s',   label: 'Average response time' },
                        { value: '90+',   label: 'Hours saved per month' },
                        { value: '100%',  label: 'Follow-up coverage' },
                      ].map(m => (
                        <div key={m.value + m.label} className="bg-[#151515] border border-white/5 rounded-xl p-4">
                          <p className="text-primary text-2xl font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>{m.value}</p>
                          <p className="text-gray-500 text-xs mt-1">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-wider mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map(tech => (
                      <span key={tech} className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-primary/80 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 border-t border-white/10">
                <a
                  href="mailto:amrithnambiar901@gmail.com"
                  className="flex items-center justify-between bg-[#DEDBC8] text-black rounded-2xl px-6 py-4 font-medium text-sm hover:bg-[#ccc9b5] transition-colors group"
                >
                  Interested in this project? Let's talk
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  )
}
