import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, BookOpen, Users, Code2, Lightbulb } from 'lucide-react'

const experiences = [
  {
    id: 'robokart',
    role: 'Coding Instructor',
    company: 'RoboKart',
    location: 'Gujarat, India',
    period: '2024',
    type: 'Teaching & Mentorship',
    color: '#8b5cf6',
    highlights: [
      { icon: BookOpen, text: 'Taught coding fundamentals to students from diverse backgrounds' },
      { icon: Lightbulb, text: 'Guided students in logic building and computational thinking' },
      { icon: Code2, text: 'Assisted in programming concepts across multiple languages' },
      { icon: Users, text: 'Provided problem-solving mentorship to aspiring developers' },
    ],
    description:
      'Delivered hands-on coding education, focusing on building a strong foundation in programming logic and problem-solving. Inspired the next generation of developers through structured curriculum and one-on-one mentorship.',
  },
]

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="experience" className="section-padding" ref={ref} aria-label="Experience section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-tag">Experience</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Hands-on experience translating technical knowledge into real teaching and mentorship impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, transparent, var(--color-purple), var(--color-blue), transparent)',
            transform: 'translateX(-50%)',
          }} aria-hidden="true" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '3rem',
                position: 'relative',
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '2rem',
                transform: 'translate(-50%, 0)',
                width: 16,
                height: 16,
                borderRadius: '50%',
                background: exp.color,
                border: '3px solid var(--color-bg)',
                boxShadow: `0 0 20px ${exp.color}80`,
                zIndex: 1,
              }} aria-hidden="true" />

              {/* Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                style={{
                  width: 'calc(50% - 2.5rem)',
                  padding: '1.75rem',
                  borderRadius: 20,
                  background: 'var(--gradient-card)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${exp.color}25`,
                  boxShadow: `0 4px 30px rgba(0,0,0,0.2)`,
                  transition: 'all 0.3s',
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'inline-flex',
                    padding: '0.2rem 0.7rem',
                    borderRadius: 9999,
                    background: `${exp.color}15`,
                    border: `1px solid ${exp.color}30`,
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: exp.color,
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: '0.05em',
                    marginBottom: '0.6rem',
                  }}>
                    {exp.type}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.2rem' }}>
                    {exp.role}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: exp.color }}>{exp.company}</span>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>·</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      <MapPin size={12} aria-hidden="true" />{exp.location}
                    </span>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>·</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>{exp.period}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {exp.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.highlights.map((h, hi) => {
                    const Icon = h.icon
                    return (
                      <div key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <div style={{
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          background: `${exp.color}12`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: exp.color,
                        }}>
                          <Icon size={14} aria-hidden="true" />
                        </div>
                        <span style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', paddingTop: '0.3rem', lineHeight: 1.5 }}>
                          {h.text}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            maxWidth: 600,
            margin: '0 auto',
            padding: '1.5rem',
            borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))',
            border: '1px solid rgba(139,92,246,0.2)',
            textAlign: 'center',
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', margin: '0 auto 0.75rem', boxShadow: '0 0 10px #22c55e' }} aria-hidden="true" />
          <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
            Currently Building & Learning
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
            Focused on full-stack development, AI integration, and building production-ready applications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
