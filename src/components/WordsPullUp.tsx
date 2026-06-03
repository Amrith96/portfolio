import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  text: string
  className?: string
  showAsterisk?: boolean
  style?: React.CSSProperties
}

export default function WordsPullUp({ text, className, showAsterisk, style }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <span key={i}>
            <span
              style={{
                overflow: 'hidden',
                display: 'inline-flex',
                position: isLast && showAsterisk ? 'relative' : undefined,
              }}
            >
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.08,
                }}
              >
                {word}
                {isLast && showAsterisk && (
                  <sup
                    style={{
                      position: 'absolute',
                      top: '0.65em',
                      right: '-0.3em',
                      fontSize: '0.31em',
                    }}
                  >
                    *
                  </sup>
                )}
              </motion.span>
            </span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        )
      })}
    </span>
  )
}
