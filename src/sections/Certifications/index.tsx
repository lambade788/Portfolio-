import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, Shield } from 'lucide-react'

const certs = [
  {
    id: 'nsdc-webdev',
    title: 'Web Design & Development',
    issuer: 'NSDC',
    fullIssuer: 'National Skill Development Corporation',
    year: '2024',
    color: '#3b82f6',
    icon: '🌐',
    skills: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
  },
  {
    id: 'NSS-volunteer and Head of Social Media',
    title: 'National Service Scheme Volunteer & Head of Social Media',
    issuer: 'National Service Scheme',
    fullIssuer: 'NSS',
    year: '2024',
    color: '#f59e0b',
    icon: '🇮🇳',
    skills: ['volunteer', 'leadership', 'editing', 'social media'],
  },
]

const Certifications: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="certifications" className="section-padding" ref={ref} aria-label="Certifications section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-tag">
            <Award size={12} aria-hidden="true" />
            Certifications
          </span>
          <h2 className="section-title">
            Verified <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          maxWidth: 800,
          margin: '0 auto',
        }} role="list" aria-label="Certifications list">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                padding: '2rem',
                borderRadius: 24,
                background: 'var(--gradient-card)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${cert.color}25`,
                boxShadow: `0 4px 30px rgba(0,0,0,0.2)`,
                cursor: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s',
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute',
                top: -40,
                right: -40,
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: `${cert.color}15`,
                filter: 'blur(30px)',
              }} aria-hidden="true" />

              {/* Icon */}
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }} role="img" aria-label={cert.title}>
                {cert.icon}
              </div>

              {/* Verified badge */}
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.2rem 0.6rem',
                borderRadius: 9999,
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.25)',
              }}>
                <Shield size={10} style={{ color: '#22c55e' }} aria-hidden="true" />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#22c55e', fontFamily: 'JetBrains Mono, monospace' }}>VERIFIED</span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.3rem' }}>
                {cert.title}
              </h3>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: cert.color, marginBottom: '0.2rem' }}>
                {cert.issuer}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                {cert.fullIssuer} · {cert.year}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {cert.skills.map(s => (
                  <span key={s} style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: 6,
                    background: `${cert.color}10`,
                    border: `1px solid ${cert.color}20`,
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: cert.color,
                    fontFamily: 'JetBrains Mono, monospace',
                  }}>{s}</span>
                ))}
              </div>

              <motion.button
                id={`cert-verify-${cert.id}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label={`Verify ${cert.title} certificate`}
                style={{
                  width: '100%',
                  padding: '0.6rem',
                  borderRadius: 10,
                  border: `1px solid ${cert.color}30`,
                  background: `${cert.color}08`,
                  color: cert.color,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s',
                }}
              >
                <ExternalLink size={14} aria-hidden="true" />
                View Certificate
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
