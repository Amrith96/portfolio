import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

const ROWS = [
  {
    label: 'Email',
    value: 'amrithnambiar901@gmail.com',
    href: 'mailto:amrithnambiar901@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/amrith8948',
    href: 'https://github.com/amrith8948',
    target: '_blank',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/amrith-raj-m-v',
    href: 'https://www.linkedin.com/in/amrith-raj-m-v-b23196259/',
    target: '_blank',
  },
  {
    label: 'Location',
    value: 'Kochi, Kerala, India',
    href: null,
  },
]

const bezOuter: React.CSSProperties = { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 3 }
const bezInner: React.CSSProperties = { background: '#0c0c0c', borderRadius: 17, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }

function RowContent({ label, value }: { label: string; value: string }) {
  return (
    <>
      <div>
        <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-primary text-sm">{value}</p>
      </div>
      <ArrowRight size={16} className="text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="bg-transparent border-t border-white/5 py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <WordsPullUp
            text="Let's build"
            className="text-[8vw] sm:text-[6vw] font-medium leading-[0.9] tracking-[-0.04em] text-primary block"
          />
          <WordsPullUp
            text="something real."
            className="text-[8vw] sm:text-[6vw] font-medium leading-[0.9] tracking-[-0.04em] font-serif italic text-primary block"
          />
          <motion.p
            className="mt-6 text-gray-500 text-sm max-w-sm"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            Open to AI engineering roles, freelance automation projects, and interesting
            collaborations. Based in Kochi, Kerala.
          </motion.p>
        </div>

        {/* Right — double-bezel contact rows */}
        <div className="flex flex-col gap-3">
          {ROWS.map(({ label, value, href, target }) =>
            href ? (
              <a
                key={label}
                href={href}
                target={target}
                rel={target === '_blank' ? 'noreferrer' : undefined}
                className="group block hover:border-white/[0.13] transition-colors"
                style={bezOuter}
              >
                <div style={{ ...bezInner, transition: 'background 0.2s' }} className="px-6 py-4 flex items-center justify-between group-hover:bg-[#151515]">
                  <RowContent label={label} value={value} />
                </div>
              </a>
            ) : (
              <div
                key={label}
                className="cursor-default hover:border-white/[0.13] transition-colors"
                style={bezOuter}
              >
                <div style={bezInner} className="px-6 py-4 flex items-center justify-between group">
                  <RowContent label={label} value={value} />
                </div>
              </div>
            )
          )}
        </div>

      </div>

      {/* Full-width CTA block */}
      <div className="max-w-6xl mx-auto mt-16">
        <a
          href="mailto:amrithnambiar901@gmail.com"
          className="w-full bg-[#DEDBC8] rounded-2xl p-8 sm:p-10 flex items-center justify-between group hover:bg-[#ccc9b5] transition-colors duration-300 cursor-pointer"
        >
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: '#000', fontWeight: 500, lineHeight: 1.1 }}>
              Ready to build something real?
            </p>
            <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.5)', marginTop: 6 }}>
              amrithnambiar901@gmail.com
            </p>
          </div>
          <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
            <ArrowRight size={20} color="#DEDBC8" />
          </div>
        </a>
      </div>

      {/* Footer line */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
        <span className="text-gray-600 text-xs">Amrith Raj M V © 2026</span>
        <span className="text-gray-600 text-xs">AI Automation Engineer — Bluetik</span>
      </div>
    </section>
  )
}
