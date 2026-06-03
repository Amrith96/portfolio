import { motion, MotionValue, useTransform } from 'framer-motion'

interface Props {
  char: string
  progress: MotionValue<number>
}

export default function AnimatedLetter({ char, progress }: Props) {
  const opacity = useTransform(progress, [0, 1], [0.2, 1])
  return <motion.span style={{ opacity }}>{char}</motion.span>
}
