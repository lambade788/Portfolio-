import React, { useEffect, useState, useCallback } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Download, ChevronDown, ExternalLink, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../../components/SocialIcons'
import HeroCanvas from '../../components/HeroCanvas'

const TYPING_STRINGS = [
  'Java Developer',
  'Spring Boot Expert',
  'Full Stack Developer',
  'Software Engineer',
  'React Developer',
]

const TypingEffect: React.FC = () => {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = TYPING_STRINGS[idx]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIdx))
        setCharIdx(c => c + 1)
      }, 80)
    } else if (isDeleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIdx))
        setCharIdx(c => c - 1)
      }, 40)
    } else if (!isDeleting && charIdx > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else {
      setIsDeleting(false)
      setIdx(i => (i + 1) % TYPING_STRINGS.length)
      setCharIdx(0)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, isDeleting, idx])

  return (
    <span style={{ color: 'var(--color-purple-light)' }}>
      {text}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  )
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const Hero: React.FC = () => {
  const handleScroll = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      aria-label="Hero section"
    >
      {/* 3D Background */}
      <HeroCanvas />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} aria-hidden="true" />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '30%',
        background: 'linear-gradient(to top, var(--color-bg), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} aria-hidden="true" />

      {/* Content */}
      <div className="container-custom hero-content" style={{ paddingTop: '6rem', position: 'relative', zIndex: 3 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 680 }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="section-tag" id="hero-badge">
              <Code2 size={12} aria-hidden="true" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)',
              marginBottom: '1rem',
            }}
          >
            RAHUL{' '}
            <span className="gradient-text">LAMBADE</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              marginBottom: '0.5rem',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            Full Stack Software Engineer
          </motion.div>

          {/* Tech stack line */}
          <motion.div
            variants={itemVariants}
            style={{
              fontSize: '1rem',
              color: 'var(--color-text-muted)',
              marginBottom: '1.5rem',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.05em',
            }}
          >
            Java · Spring Boot · React · MySQL
          </motion.div>

          {/* Typing */}
          <motion.div
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
              fontWeight: 600,
              marginBottom: '1.5rem',
              fontFamily: 'Space Grotesk, sans-serif',
              minHeight: '2rem',
            }}
            aria-label="Dynamic role description"
          >
            <TypingEffect />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: 540,
            }}
          >
            Building scalable, modern, and impactful software solutions with a focus on clean architecture and exceptional user experience.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}
          >
            <motion.button
              id="hero-view-projects"
              onClick={() => handleScroll('projects')}
              className="btn-primary magnetic"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label="View my projects"
            >
              View Projects
            </motion.button>

            <motion.a
              id="hero-download-resume"
              href="/resume.pdf"
              download
              className="btn-outline magnetic"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Download resume PDF"
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </motion.a>

            <motion.button
              id="hero-contact"
              onClick={() => handleScroll('contact')}
              className="btn-outline magnetic"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Contact me"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
          >
            <motion.a
              href="https://github.com/lambade788"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub profile"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                border: '1px solid var(--color-border-subtle)',
                background: 'var(--gradient-card)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-secondary)',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
            >
              <GithubIcon size={20} aria-hidden="true" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/rahul-lambade-850a643a0"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn profile"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                border: '1px solid var(--color-border-subtle)',
                background: 'var(--gradient-card)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0077b5',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
            >
              <LinkedinIcon size={20} aria-hidden="true" />
            </motion.a>

            <span style={{ height: 1, width: 30, background: 'var(--color-border-subtle)' }} aria-hidden="true" />
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
              Mumbai, India
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll('about')}
        aria-label="Scroll to About section"
        id="hero-scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          background: 'transparent',
          border: 'none',
          cursor: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--color-text-muted)',
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', fontFamily: 'JetBrains Mono, monospace' }}>SCROLL</span>
        <ChevronDown size={18} aria-hidden="true" />
      </motion.button>
    </section>
  )
}

export default Hero
