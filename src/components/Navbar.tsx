import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../lib/theme'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'VIORA Project', href: '#viora' },
  { label: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
          }}
          aria-label="Rahul Lambade - Home"
        >
          <div style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
          }}>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '0.9rem', color: 'white' }}>RL</span>
          </div>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'var(--color-text-primary)',
          }}>
            Rahul<span style={{ color: 'var(--color-purple-light)' }}> Lambade</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          className="desktop-nav"
          role="menubar"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              role="menuitem"
              whileHover={{ y: -1 }}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 8,
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: activeSection === link.href.slice(1)
                  ? 'var(--color-purple-light)'
                  : 'var(--color-text-secondary)',
                background: activeSection === link.href.slice(1)
                  ? 'rgba(139, 92, 246, 0.08)'
                  : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            id="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              border: '1px solid var(--color-border-subtle)',
              background: 'var(--gradient-card)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-secondary)',
              cursor: 'none',
            }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          {/* Resume CTA */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="nav-resume-btn"
            className="btn-primary"
            style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
          >
            Resume
          </motion.a>

          {/* Mobile menu */}
          <motion.button
            onClick={() => setMobileOpen(o => !o)}
            whileTap={{ scale: 0.9 }}
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            style={{
              display: 'none',
              width: 38,
              height: 38,
              borderRadius: 10,
              border: '1px solid var(--color-border-subtle)',
              background: 'var(--gradient-card)',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-secondary)',
              cursor: 'none',
            }}
            className="mobile-menu-btn"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(10, 15, 30, 0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--color-border-subtle)',
              padding: '1rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
            role="menu"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                role="menuitem"
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 10,
                  fontSize: '1rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: 'var(--color-text-secondary)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'all 0.2s',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
