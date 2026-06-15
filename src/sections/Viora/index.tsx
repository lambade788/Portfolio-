import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, ShieldCheck, Navigation, Battery, Zap, Link as LinkIcon, FileText, BookOpen, Award, ChevronLeft, ChevronRight } from 'lucide-react'

const PROJECT_PHOTOS = [
  '/projectbelt.jpeg',
  '/certificateavishkar.jpg',
  '/projectposter.jpg',
  '/certificateposter.jpg'
]

const Viora: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [currentPhoto, setCurrentPhoto] = useState(0)

  const nextPhoto = () => setCurrentPhoto((p) => (p + 1) % PROJECT_PHOTOS.length)
  const prevPhoto = () => setCurrentPhoto((p) => (p - 1 + PROJECT_PHOTOS.length) % PROJECT_PHOTOS.length)

  return (
    <section id="viora" className="section-padding" ref={ref} aria-label="VIORA Project section"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(139,92,246,0.03), transparent)' }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-tag" style={{ color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.1)' }}>
            <Eye size={12} aria-hidden="true" />
            Final Year Project
          </span>
          <h2 className="section-title">
            VIORA – <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}>Smart Assistive Device</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>
            "Turning obstacles into opportunities with smart vision support"
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: 1000, margin: '0 auto' }}>

          {/* Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              padding: '2rem',
              borderRadius: 24,
              background: 'var(--gradient-card)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck style={{ color: '#8b5cf6' }} size={24} />
              Overview
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              VIORA is an IoT-based wearable device designed to enhance mobility and safety for visually impaired individuals. Using an <strong>ESP32 microcontroller</strong>, <strong>ultrasonic sensors</strong>, and a <strong>voice feedback module</strong>, it detects obstacles in multiple directions and provides instant audio alerts. The device can be worn as a <strong>belt or cap</strong>, ensuring comfort, affordability, and ease of use.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                padding: '2rem',
                borderRadius: 24,
                background: 'var(--gradient-card)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: Navigation, text: 'Multi-directional obstacle detection (left, front, right) up to 2–3 meters.' },
                  { icon: Zap, text: 'Real-time voice guidance for clear, intuitive navigation.' },
                  { icon: Eye, text: 'Lightweight and wearable design for daily use.' },
                  { icon: Award, text: 'Low-cost, reliable components making it accessible.' },
                  { icon: Battery, text: 'Battery-powered system with up to 10 hours of continuous operation.' },
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ marginTop: '0.2rem', padding: '0.3rem', borderRadius: 8, background: 'rgba(139,92,246,0.1)', color: '#8b5cf6' }}>
                      <item.icon size={16} />
                    </div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Impact & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              {/* Impact Card */}
              <div style={{
                padding: '2rem',
                borderRadius: 24,
                background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(236,72,153,0.05))',
                border: '1px solid rgba(139,92,246,0.2)',
                flex: 1,
              }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>Impact</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  VIORA bridges the gap between traditional aids like white canes and expensive electronic travel devices. By offering <strong>affordable, user-friendly, and robust navigation support</strong>, it empowers visually impaired individuals to move independently and confidently in diverse environments.
                </p>
              </div>

              {/* Quick Links */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <a href="/publishedpaper.pdf" target="_blank" className="btn-outline magnetic" style={{ padding: '0.8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', borderRadius: 16 }}>
                  <LinkIcon size={20} style={{ color: '#f59e0b' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Paper Published</span>
                </a>
                <a href="/certificatepaper.png" target="_blank" className="btn-outline magnetic" style={{ padding: '0.8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', borderRadius: 16 }}>
                  <Award size={20} style={{ color: '#8b5cf6' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Certificate</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Photo Gallery Placeholders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ marginTop: '1rem' }}
          >
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)', textAlign: 'center' }}>Project Gallery</h3>

            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              minHeight: '400px',
              borderRadius: 24,
              overflow: 'hidden',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)'
            }}>
              {/* Blurred background effect for a premium look */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={`bg-${currentPhoto}`}
                  src={PROJECT_PHOTOS[currentPhoto]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    inset: 0,
                    filter: 'blur(20px)',
                    zIndex: 0
                  }}
                  aria-hidden="true"
                />
              </AnimatePresence>

              {/* Main Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPhoto}
                  src={PROJECT_PHOTOS[currentPhoto]}
                  alt={`VIORA Device Photo ${currentPhoto + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1
                  }}
                />
              </AnimatePresence>

              {/* Navigation Controls */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', zIndex: 10, pointerEvents: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevPhoto}
                  style={{
                    pointerEvents: 'auto',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'none'
                  }}
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextPhoto}
                  style={{
                    pointerEvents: 'auto',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'none'
                  }}
                  aria-label="Next photo"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>

              {/* Indicators */}
              <div style={{ position: 'absolute', bottom: '1.5rem', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '0.5rem', zIndex: 10 }}>
                {PROJECT_PHOTOS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPhoto(idx)}
                    style={{
                      width: idx === currentPhoto ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: idx === currentPhoto ? '#8b5cf6' : 'rgba(255,255,255,0.4)',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      padding: 0,
                      cursor: 'none'
                    }}
                    aria-label={`Go to photo ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              Replace the URLs in the <code>PROJECT_PHOTOS</code> array at the top of the file with your own image links.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Viora
