import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, CheckCircle } from 'lucide-react'

const resumeFeatures = [
  'ATS-Optimized Format',
  'Full Stack Projects Listed',
  'Java & Spring Boot Skills',
  'Clean Professional Layout',
]

const Resume: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="resume" className="section-padding" ref={ref} aria-label="Resume section"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(139,92,246,0.04), transparent)' }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-tag">
            <FileText size={12} aria-hidden="true" />
            Resume
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            maxWidth: 680,
            margin: '0 auto',
            padding: '3rem',
            borderRadius: 28,
            background: 'var(--gradient-card)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(139,92,246,0.2)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="animate-glow"
        >
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(139,92,246,0.08)',
            filter: 'blur(40px)',
          }} aria-hidden="true" />
          <div style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(59,130,246,0.08)',
            filter: 'blur(40px)',
          }} aria-hidden="true" />

          {/* Icon */}
          <div style={{
            width: 80,
            height: 80,
            borderRadius: 22,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem',
            boxShadow: '0 0 40px rgba(139,92,246,0.4)',
          }}>
            <FileText size={36} style={{ color: 'white' }} aria-hidden="true" />
          </div>

          {/* ATS Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.3rem 0.9rem',
            borderRadius: 9999,
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.25)',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#22c55e',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.05em',
            marginBottom: '1.5rem',
          }}>
            <CheckCircle size={12} aria-hidden="true" />
            ATS Score: 95+
          </div>

          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
            Rahul Lambade — Resume
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Full Stack Software Engineer · Java · Spring Boot · React · MySQL
          </p>

          {/* Features */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {resumeFeatures.map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle size={13} style={{ color: '#3b82f6', flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{f}</span>
              </div>
            ))}
          </div>

          {/* Download button */}
          <motion.a
            href="/resume.pdf"
            download="Rahul_Lambade_Resume.pdf"
            id="resume-download-btn"
            className="btn-primary magnetic"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Download Rahul Lambade's resume as PDF"
            style={{ display: 'inline-flex', fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}
          >
            <Download size={18} aria-hidden="true" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
