import { useScroll, motion } from 'framer-motion'
import './index.css'
import HeroSection from './components/HeroSection'
import RedMarquee from './components/RedMarquee'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  const { scrollYProgress } = useScroll()

  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: 2, background: '#E8000B',
          scaleX: scrollYProgress,
          transformOrigin: 'left',
          zIndex: 999,
        }}
      />
      <HeroSection />
      <RedMarquee />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
