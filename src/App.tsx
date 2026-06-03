import './index.css'
import NarrativeBackground from './components/NarrativeBackground'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import FeaturesSection from './components/FeaturesSection'
import SkillsSection from './components/SkillsSection'
import MarqueeStrip from './components/MarqueeStrip'
import CredentialsSection from './components/CredentialsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <div className="relative bg-black min-h-screen">

      <NarrativeBackground />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <FeaturesSection />
        <MarqueeStrip />
        <SkillsSection />
        <CredentialsSection />
        <ContactSection />
      </div>

    </div>
  )
}
