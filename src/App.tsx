import './index.css'
import HeroSection from './components/HeroSection'
import RedMarquee from './components/RedMarquee'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>
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
