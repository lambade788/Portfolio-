import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Footer: React.FC = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border-subtle)',
      padding: '3rem 0 2rem',
      marginTop: '4rem',
    }}
      role="contentinfo"
    >
      <div className="container-custom">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(139, 92, 246, 0.3)',
            }}>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '0.85rem', color: 'white' }}>RL</span>
            </div>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-primary)' }}>
              Rahul Lambade
            </span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
              {footerLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  style={{
                    padding: '0.3rem 0.7rem',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    borderRadius: 6,
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { icon: GithubIcon, href: 'https://github.com/lambade788', label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/rahul-lambade-850a643a0', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rlambade325@gmail.com', label: 'Email' },
            ].map(s => {
              const Icon = s.icon
              return (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.15, y: -2 }}
                  aria-label={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    border: '1px solid var(--color-border-subtle)',
                    background: 'rgba(255,255,255,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                >
                  <Icon size={16} aria-hidden="true" />
                </motion.a>
              )
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--color-border-subtle)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} Rahul Lambade. All rights reserved.
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Built with <Heart size={12} style={{ color: '#ec4899' }} aria-hidden="true" /> using React & Three.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
