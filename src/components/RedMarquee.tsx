import { useState } from 'react'

const ITEMS = [
  'AI AUTOMATION ENGINEER',
  'FULL-STACK DEVELOPER',
  'WHATSAPP AI',
  'KERALA, INDIA',
  'BLUETIK',
  'CLAUDE AI',
  'NEXT.JS',
  'SUPABASE',
]

export default function RedMarquee() {
  const doubled = [...ITEMS, ...ITEMS]
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      style={{ background: '#E8000B', padding: '12px 0', overflow: 'hidden' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="animate-marquee" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
        {doubled.map((item, i) => (
          <span key={i} className="bebas" style={{
            fontSize: 14, letterSpacing: '0.15em', color: '#fff',
            display: 'inline-flex', alignItems: 'center', gap: 20,
            paddingRight: 20, whiteSpace: 'nowrap',
          }}>
            {item}
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
