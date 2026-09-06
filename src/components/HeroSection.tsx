import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About',      id: 'about' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Contact',    id: 'contact' },
]

const META = [
  { label: 'Role',     value: 'AI Automation Engineer' },
  { label: 'Based in', value: 'Kochi, Kerala' },
  { label: 'Stack',    value: 'Claude · Next.js · Supabase · React Native' },
]

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="h-screen relative overflow-hidden">

      {/* Background photo */}
      <img
        src="/images/WhatsApp Image 2026-09-06 at 8.50.59 PM.jpeg"
        alt="Amrith Raj"
        className="hero-img"
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

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%)',
          zIndex: 1,
        }}
      />

      {/* Navbar — floating pill (desktop only) */}
      <div className="absolute top-0 left-0 right-0 z-20 hidden md:flex justify-center pt-5">
        <div
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 9999,
            padding: '10px 10px 10px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            boxShadow: '0 4px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => {
                const el = document.getElementById(id)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              style={{ color: 'rgba(222,219,200,0.65)', fontSize: 13, fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s', padding: '0 16px', whiteSpace: 'nowrap' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#DEDBC8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(222,219,200,0.65)')}
            >
              {label}
            </button>
          ))}

          {/* Hire Me CTA */}
          <a
            href="mailto:amrithnambiar901@gmail.com?subject=Hiring Inquiry — Amrith Raj&body=Hi Amrith,%0D%0A%0D%0AI came across your portfolio and I'm interested in discussing a potential opportunity.%0D%0A%0D%0ACompany:%0D%0ARole:%0D%0ADetails:%0D%0A%0D%0ALooking forward to hearing from you."
            style={{ background: '#DEDBC8', borderRadius: 9999, paddingLeft: 20, paddingRight: 6, paddingTop: 6, paddingBottom: 6, display: 'flex', alignItems: 'center', gap: 10, marginLeft: 16, textDecoration: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#ccc9b5')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#DEDBC8')}
          >
            <span style={{ color: '#000', fontWeight: 600, fontSize: 13, whiteSpace: 'nowrap' }}>Hire Me</span>
            <span style={{ background: '#000', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s', flexShrink: 0 }}>
              <ArrowRight size={13} color="#DEDBC8" />
            </span>
          </a>
        </div>
      </div>

      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden absolute top-5 right-5 z-30 w-10 h-10 flex items-center justify-center rounded-full"
        style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={18} color="#DEDBC8" />
      </button>

      {/* Mobile fullscreen nav overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ background: 'rgba(12,12,12,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} color="#DEDBC8" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => {
                    setMenuOpen(false)
                    setTimeout(() => {
                      const el = document.getElementById(id)
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }, 200)
                  }}
                  style={{ color: 'rgba(222,219,200,0.8)', fontSize: 28, fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.01em' }}
                >
                  {label}
                </button>
              ))}
            </nav>

            <a
              href="mailto:amrithnambiar901@gmail.com?subject=Hiring Inquiry — Amrith Raj&body=Hi Amrith,%0D%0A%0D%0AI came across your portfolio and I'm interested in discussing a potential opportunity.%0D%0A%0D%0ACompany:%0D%0ARole:%0D%0ADetails:%0D%0A%0D%0ALooking forward to hearing from you."
              className="mt-12 flex items-center"
              style={{ background: '#DEDBC8', borderRadius: 9999, paddingLeft: 20, paddingRight: 8, paddingTop: 8, paddingBottom: 8, gap: 12, textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
              <span style={{ color: '#000', fontWeight: 600, fontSize: 14 }}>Hire Me</span>
              <span style={{ background: '#000', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowRight size={14} color="#DEDBC8" />
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AREA 1 — Top left: pill + name + bio + CTA */}
      <div
        className="absolute top-0 left-0 z-20 p-6 sm:p-10 md:p-14 flex flex-col items-start justify-start"
        style={{ paddingTop: 80 }}
      >
        {/* Availability pill */}
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(222,219,200,0.08)', border: '1px solid rgba(222,219,200,0.15)', borderRadius: 9999, padding: '6px 16px' }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', flexShrink: 0, animation: 'pulse-slow 2s ease-in-out infinite' }} />
          <span className="text-[11px] sm:text-[12px]" style={{ color: 'rgba(222,219,200,0.8)', letterSpacing: '0.04em' }}>
            Open to AI Engineering &amp; Full-Stack roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.8rem, 15vw, 11rem)',
            fontWeight: 500,
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            color: '#E1E0CC',
            maxWidth: '90vw',
            marginTop: 16,
          }}
        >
          Amrith
        </motion.div>

        {/* Bio */}
        <motion.p
          className="w-full sm:max-w-[320px]"
          style={{ color: 'rgba(222,219,200,0.6)', fontSize: 14, lineHeight: 1.5, marginTop: 16 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Building WhatsApp AI and full-stack platforms for Indian businesses.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full sm:w-fit"
          style={{ marginTop: 20 }}
        >
          <a
            href="mailto:amrithnambiar901@gmail.com"
            className="group flex items-center gap-2 hover:gap-3 transition-all duration-300 w-full sm:w-fit"
          >
            <div
              className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start"
              style={{ background: '#DEDBC8', borderRadius: 9999, padding: '8px 8px 8px 20px' }}
            >
              <span style={{ color: '#000', fontWeight: 600, fontSize: 13, letterSpacing: '0.01em' }}>
                Get in touch
              </span>
              <div
                style={{ background: '#000', borderRadius: 9999, width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                className="group-hover:scale-110 transition-transform"
              >
                <ArrowRight size={15} color="#DEDBC8" />
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* AREA 2 — Bottom bar: photo + metadata */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-10 md:px-14 pb-5 flex flex-col items-start"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 64, height: 64,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1.5px solid rgba(222,219,200,0.25)',
            marginBottom: 16,
            flexShrink: 0,
          }}
        >
          <img
            src="/images/WhatsApp Image 2026-09-06 at 8.50.58 PM.jpeg"
            alt="Amrith Raj"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </motion.div>
        <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
        {META.map(({ label, value }, i) => (
          <div key={label} className="flex items-center gap-3 sm:gap-6">
            {i > 0 && (
              <div style={{ width: 1, height: 14, background: 'rgba(225,224,204,0.15)', flexShrink: 0 }} />
            )}
            <div className="flex items-center">
              <span style={{ color: 'rgba(225,224,204,0.4)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {label}
              </span>
              <span style={{ color: 'rgba(225,224,204,0.75)', fontSize: 12, marginLeft: 8 }}>
                {value}
              </span>
            </div>
          </div>
        ))}
        </div>
      </motion.div>

    </section>
  )
}
