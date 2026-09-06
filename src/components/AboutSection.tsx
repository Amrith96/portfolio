import { useRef } from 'react'
import { MotionValue, useScroll, useTransform } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const BIO =
  'Since February 2026 at Bluetik Marketing Agency in Kochi, I have built and deployed 8 production systems — BluAI (AI content platform), Aria (WhatsApp AI concierge), an internal ops platform with 11 role dashboards, an Android CRM, Teena (multi-branch retail bot), Vani (aviation admissions AI), and websites for Aureate Way, ForMix, and Craftline Institute. My stack spans Claude AI, Next.js, Supabase, React Native, Railway, and Vercel.'

interface LetterProps {
  char: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}

function Letter({ char, index, total, scrollYProgress }: LetterProps) {
  const charProgress = index / total
  const progress = useTransform(
    scrollYProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  )
  return <AnimatedLetter char={char} progress={progress} />
}

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = BIO.split('')

  return (
    <section id="about" className="bg-transparent py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div
        className="max-w-6xl mx-auto hover:border-white/[0.13] transition-colors"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: 3, borderRadius: 24 }}
      >
      <div style={{ background: '#0c0c0c', borderRadius: 21, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }} className="p-6 sm:p-10 md:p-16 lg:p-20 text-center">

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <div style={{
            width: 72, height: 72,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1.5px solid rgba(222,219,200,0.2)',
            flexShrink: 0,
          }}>
            <img
              src="/images/WhatsApp Image 2026-09-06 at 8.54.58 PM.jpeg"
              alt="Amrith Raj"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ color: '#DEDBC8', fontSize: 16, fontWeight: 500, fontFamily: "'Almarai', sans-serif" }}>Amrith Raj M V</p>
            <p style={{ color: 'rgba(222,219,200,0.4)', fontSize: 13, marginTop: 2 }}>AI Automation Engineer · Bluetik, Kochi</p>
          </div>
        </div>

        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-6 sm:mb-8">
          AI Automation Engineer
        </p>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'I am Amrith Raj,', className: 'font-normal text-primary' },
            { text: 'an AI Automation Engineer.', className: 'font-serif italic text-primary' },
            {
              text: 'I build AI systems that actually ship — for real businesses, real users, and real impact.',
              className: 'font-normal text-primary',
            },
          ]}
          containerClassName="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]"
        />

        <div ref={scrollRef} className="mt-8 sm:mt-12">
          <p className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed" style={{ maxWidth: 680, textAlign: 'left' }}>
            {chars.map((char, i) => (
              <Letter
                key={i}
                char={char}
                index={i}
                total={chars.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </p>
        </div>

      </div>
      </div>
    </section>
  )
}
