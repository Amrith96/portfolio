import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'

interface ChapterProps {
  label: string
  range: [number, number]
  scrollYProgress: MotionValue<number>
}

function ChapterCaption({ label, range, scrollYProgress }: ChapterProps) {
  const opacity = useTransform(
    scrollYProgress,
    [range[0], range[0] + 0.03, range[1] - 0.03, range[1]],
    [0, 1, 1, 0]
  )
  return (
    <motion.span
      style={{
        opacity,
        position: 'absolute',
        bottom: 0,
        left: 0,
        color: 'rgba(222,219,200,0.35)',
        fontSize: '10px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase' as const,
        fontFamily: 'monospace',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </motion.span>
  )
}

const CHAPTERS: { label: string; range: [number, number] }[] = [
  { label: 'The beginning.', range: [0.0,  0.17] },
  { label: 'The story.',     range: [0.17, 0.34] },
  { label: 'The journey.',   range: [0.34, 0.50] },
  { label: 'The work.',      range: [0.50, 0.70] },
  { label: 'The tools.',     range: [0.70, 0.84] },
  { label: "What's next.",   range: [0.84, 1.0]  },
]

export default function NarrativeBackground() {
  const { scrollYProgress } = useScroll()

  // ── Video overlay & tint ──────────────────────────────────────────────────
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 1], [0, 0, 0.82, 0.92])
  const tintOpacity    = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0, 0.1, 0.15, 0.2, 0.25])
  const tintColor      = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['rgba(180,140,60,0)', 'rgba(60,100,160,0.15)', 'rgba(100,60,160,0.15)', 'rgba(200,160,60,0.2)']
  )

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Background photo — full screen */}
      <img
        src="/images/WhatsApp Image 2026-09-06 at 8.50.59 PM.jpeg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Progressive dark overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgb(0,0,0)', opacity: overlayOpacity }}
      />

      {/* Warm color tint */}
      <motion.div
        className="absolute inset-0"
        style={{ background: tintColor, opacity: tintOpacity }}
      />

      {/* Noise grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />

      {/* Chapter captions */}
      <div className="absolute bottom-8 left-8">
        {CHAPTERS.map((ch, i) => (
          <ChapterCaption
            key={i}
            label={ch.label}
            range={ch.range}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* Scroll progress line */}
      <div className="absolute right-6 top-1/4 bottom-1/4 w-px bg-white/10">
        <motion.div
          className="w-full bg-white/40 origin-top"
          style={{ scaleY: scrollYProgress }}
        />
      </div>

    </div>
  )
}
