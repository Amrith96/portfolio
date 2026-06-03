import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const CERTS = [
  {
    icon: 'N',
    name: 'AI Engineer (AIE)',
    org: 'NASSCOM',
    year: '2024',
    badge: 'Gold',
  },
  {
    icon: 'I',
    name: 'Artificial Intelligence Expert',
    org: 'IABAC — International Association of Business Analytics Certifications',
    year: '2024',
    badge: null,
  },
  {
    icon: 'I',
    name: 'Certified Data Scientist',
    org: 'IABAC — International Association of Business Analytics Certifications',
    year: '2024',
    badge: null,
  },
]

const BEZEL_OUTER = { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 3 } as const
const BEZEL_INNER = { background: '#0c0c0c', borderRadius: 17, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' } as const

function CertCard({ cert, index }: { cert: typeof CERTS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      <div className="hover:border-white/[0.13] transition-colors" style={BEZEL_OUTER}>
        <div style={BEZEL_INNER} className="p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#DEDBC8] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
            {cert.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <p className="text-primary text-sm font-medium">{cert.name}</p>
              {cert.badge && (
                <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[10px] px-2 py-0.5 rounded-full flex-shrink-0">
                  {cert.badge}
                </span>
              )}
            </div>
            <p className="text-gray-500 text-xs mt-0.5 leading-snug">{cert.org}</p>
            <p className="text-gray-600 text-xs mt-1">{cert.year}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function EduCards() {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const inView1 = useInView(ref1, { once: true, margin: '-60px' })
  const inView2 = useInView(ref2, { once: true, margin: '-60px' })

  return (
    <div className="flex flex-col gap-3">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 20 }}
        animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hover:border-white/[0.13] transition-colors" style={BEZEL_OUTER}>
          <div style={BEZEL_INNER} className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-primary text-base font-medium mb-1">
                  B.Tech — Electrical &amp; Electronics Engineering
                </p>
                <p className="text-gray-400 text-sm mb-1">Vimal Jyothi Engineering College</p>
                <p className="text-gray-500 text-xs">APJ Abdul Kalam Technological University, Kerala</p>
              </div>
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-primary/50 text-xs font-mono flex-shrink-0">
                2020 — 2024
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 20 }}
        animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div className="hover:border-white/[0.13] transition-colors" style={BEZEL_OUTER}>
          <div style={BEZEL_INNER} className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-primary text-base font-medium mb-1">
                  AI Engineer Certification Program
                </p>
                <p className="text-gray-400 text-sm mb-1">DataMites — Institute of Data Science &amp; AI</p>
                <p className="text-gray-500 text-xs">Bangalore, India</p>
              </div>
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-primary/50 text-xs font-mono flex-shrink-0">
                2024
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function CredentialsSection() {
  return (
    <section id="credentials" className="bg-transparent py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <p style={{ color: 'rgba(222,219,200,0.4)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
          Credentials
        </p>
        <WordsPullUpMultiStyle
          segments={[
            { text: 'Education &', className: 'text-primary font-normal' },
            { text: 'Certifications.', className: 'font-serif italic text-primary' },
          ]}
          containerClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-4">Education</p>
            <EduCards />
          </div>

          <div>
            <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-4">Certifications</p>
            <div className="flex flex-col gap-3">
              {CERTS.map((cert, i) => (
                <CertCard key={cert.name} cert={cert} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
