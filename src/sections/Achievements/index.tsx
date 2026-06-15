import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Layers, Bot, Server } from 'lucide-react'

const achievements = [
  {
    icon: Heart,
    title: 'NSS Volunteer',
    period: '2 Years',
    description: 'Actively contributed to National Service Scheme activities, driving social impact and community development initiatives.',
    color: '#ec4899',
    stat: '2 Yrs',
  },
  {
    icon: Layers,
    title: 'Full Stack Applications',
    period: 'Multiple Projects',
    description: 'Built multiple production-grade full-stack applications using React, Spring Boot, and MySQL with clean architecture.',
    color: '#3b82f6',
    stat: '3+',
  },
  {
    icon: Bot,
    title: 'AI-Powered Development',
    period: '2024–Present',
    description: 'Integrated Google Gemini AI into real-world applications — society management and personal finance platforms.',
    color: '#8b5cf6',
    stat: 'AI',
  },
  {
    icon: Server,
    title: 'Backend Expertise',
    period: 'Core Competency',
    description: 'Strong backend development skills with Java, Spring Boot, Hibernate, REST APIs, and secure JWT-based authentication.',
    color: '#06b6d4',
    stat: 'Java',
  },
]

const Achievements: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="achievements" className="section-padding" ref={ref} aria-label="Achievements section"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(236,72,153,0.02), transparent)' }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">
            Key <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }} role="list" aria-label="Achievements list">
          {achievements.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                role="listitem"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  padding: '2rem',
                  borderRadius: 20,
                  background: 'var(--gradient-card)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${item.color}20`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s',
                }}
              >
                {/* Big stat in background */}
                <div style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '1rem',
                  fontSize: '4rem',
                  fontWeight: 900,
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: `${item.color}10`,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  lineHeight: 1,
                }} aria-hidden="true">
                  {item.stat}
                </div>

                <div style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  background: `${item.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  color: item.color,
                  boxShadow: `0 0 20px ${item.color}25`,
                }}>
                  <Icon size={24} aria-hidden="true" />
                </div>

                <div style={{
                  display: 'inline-flex',
                  padding: '0.15rem 0.6rem',
                  borderRadius: 9999,
                  background: `${item.color}10`,
                  border: `1px solid ${item.color}20`,
                  fontSize: '0.7rem',
                  color: item.color,
                  fontFamily: 'JetBrains Mono, monospace',
                  marginBottom: '0.6rem',
                }}>
                  {item.period}
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.6rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
