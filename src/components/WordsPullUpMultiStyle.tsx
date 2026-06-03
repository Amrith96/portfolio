import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Segment {
  text: string
  className: string
}

interface Props {
  segments: Segment[]
  containerClassName?: string
}

export default function WordsPullUpMultiStyle({ segments, containerClassName }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const words: { word: string; className: string }[] = []
  for (const seg of segments) {
    for (const word of seg.text.split(' ').filter(Boolean)) {
      words.push({ word, className: seg.className })
    }
  }

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center gap-x-[0.25em] ${containerClassName ?? ''}`}
    >
      {words.map(({ word, className }, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-flex' }}>
          <motion.span
            className={className}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.08,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}
