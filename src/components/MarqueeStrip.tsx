import { useState } from 'react'

const ITEMS = [
  'Claude AI', 'Next.js 16', 'Supabase', 'React Native', 'Railway', 'WATI',
  'Razorpay', 'Expo SDK 54', 'Redis', 'PostHog', 'Sentry', 'Tailwind CSS',
  'TypeScript', 'PostgreSQL', 'Vercel', 'Power BI', 'Python', 'Node.js',
]

export default function MarqueeStrip() {
  const [paused, setPaused] = useState(false)

  return (
    <div className="py-6 overflow-hidden border-t border-b border-white/[0.06] relative">
      <div
        className="flex overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="animate-marquee"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 px-8 whitespace-nowrap"
              style={{ color: 'rgba(222,219,200,0.35)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'monospace' }}
            >
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(222,219,200,0.2)', display: 'inline-block', flexShrink: 0 }} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
