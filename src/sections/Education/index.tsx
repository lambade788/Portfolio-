import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, TrendingUp } from 'lucide-react'

const Education: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="education" className="section-padding" ref={ref} aria-label="Education section"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(6,182,212,0.02), transparent)' }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-tag">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Excellence</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: 720, margin: '0 auto' }}>
          {/* B.E. Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -4 }}
            style={{
              padding: '2rem',
              borderRadius: 24,
              background: 'var(--gradient-card)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(59,130,246,0.25)',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 0 24px rgba(59,130,246,0.4)',
            }}>
              <GraduationCap size={28} style={{ color: 'white' }} aria-hidden="true" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'inline-flex',
                padding: '0.2rem 0.7rem',
                borderRadius: 9999,
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.2)',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#60a5fa',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.05em',
                marginBottom: '0.6rem',
              }}>
                2023 — 2026
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.3rem' }}>
                Bachelor of Computer Engineering
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#60a5fa', marginBottom: '1rem' }}>
                Mumbai University
              </p>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: 12,
                  background: 'rgba(59,130,246,0.06)',
                  border: '1px solid rgba(59,130,246,0.12)',
                }}>
                  <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>CGPA</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3b82f6', fontFamily: 'Space Grotesk, sans-serif' }}>7.7</p>
                </div>
                <div style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: 12,
                  background: 'rgba(139,92,246,0.06)',
                  border: '1px solid rgba(139,92,246,0.12)',
                }}>
                  <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>SSC</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#8b5cf6', fontFamily: 'Space Grotesk, sans-serif' }}>94%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Focus areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              padding: '2rem',
              borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(6,182,212,0.06))',
              border: '1px solid rgba(139,92,246,0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <TrendingUp size={20} style={{ color: '#8b5cf6' }} aria-hidden="true" />
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Core Focus Areas</h4>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management', 'Software Engineering', 'Web Development', 'Computer Networks', 'Operating Systems', 'Machine Learning'].map(topic => (
                <span key={topic} className="skill-tag">{topic}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
