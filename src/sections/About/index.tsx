import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Code2, Calendar, Award } from 'lucide-react'

const stats = [
  { icon: Briefcase, label: 'Projects Completed', value: 10, suffix: '+' },
  { icon: Code2, label: 'Technologies Learned', value: 6, suffix: '+' },
  { icon: Calendar, label: 'Years of Learning', value: 4, suffix: '' },
  { icon: Award, label: 'Certificates Earned', value: 5, suffix: '+' },
]

function useCounter(target: number, trigger: boolean, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, target, duration])
  return count
}

function StatCard({ stat, trigger }: { stat: typeof stats[0]; trigger: boolean }) {
  const count = useCounter(stat.value, trigger)
  const Icon = stat.icon
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      style={{
        padding: '1.5rem',
        borderRadius: 16,
        background: 'var(--gradient-card)',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--color-border-subtle)',
        textAlign: 'center',
        transition: 'box-shadow 0.3s',
        flex: '1 1 140px',
        minWidth: 130,
      }}
      className="card-glass"
    >
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: 'rgba(139, 92, 246, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 0.75rem',
        color: 'var(--color-purple-light)',
      }}>
        <Icon size={20} aria-hidden="true" />
      </div>
      <div style={{
        fontSize: '2.2rem',
        fontWeight: 800,
        fontFamily: 'Space Grotesk, sans-serif',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
        marginBottom: '0.4rem',
      }}>
        {count}{stat.suffix}
      </div>
      <div style={{
        fontSize: '0.78rem',
        color: 'var(--color-text-muted)',
        fontWeight: 500,
        letterSpacing: '0.03em',
      }}>
        {stat.label}
      </div>
    </motion.div>
  )
}

const skills = ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'REST APIs', 'React']

const About: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="section-padding" ref={ref} aria-label="About section">
      <div className="container-custom">
        {/* Grid layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* LEFT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: 340, maxWidth: '100%' }}>
              {/* Glow ring */}
              <div style={{
                position: 'absolute',
                inset: -12,
                borderRadius: 32,
                background: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(139,92,246,0.25))',
                filter: 'blur(20px)',
                zIndex: 0,
              }} aria-hidden="true" />

              {/* Photo frame */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: 24,
                overflow: 'hidden',
                border: '2px solid rgba(139,92,246,0.25)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
              }}>
                <img
                  src="/rahul-photo.png"
                  alt="Rahul Lambade — Full Stack Software Engineer"
                  style={{ width: '100%', display: 'block', aspectRatio: '4/5', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  bottom: -20,
                  right: -20,
                  zIndex: 2,
                  padding: '0.75rem 1.1rem',
                  borderRadius: 14,
                  background: 'rgba(10,15,30,0.9)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(139,92,246,0.3)',
                  boxShadow: '0 0 30px rgba(139,92,246,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
                aria-hidden="true"
              >
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-primary)', fontFamily: 'JetBrains Mono, monospace' }}>
                  Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">
              About Me
            </span>

            <h2 className="section-title">
              Computer Engineering<br />
              <span className="gradient-text">Graduate & Developer</span>
            </h2>

            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Computer Engineering Graduate (2026) passionate about building scalable, full-stack software.
              I specialize in creating robust backend systems with Java & Spring Boot and modern,
              responsive frontends with React.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              My focus is on solving real-world problems through clean architecture, efficient database design,
              and seamless API integration. I thrive on building AI-powered applications that make a
              meaningful impact — from smart society platforms to personal finance tools.
            </p>

            {/* Skill tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
              {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>

            {/* Education quick-stat */}
            <div style={{
              padding: '1rem 1.25rem',
              borderRadius: 14,
              background: 'rgba(59,130,246,0.06)',
              border: '1px solid rgba(59,130,246,0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-blue-light)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                B.E. Computer Engineering
              </span>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                Mumbai University · 2023–2026
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                CGPA: 7.7 · SSC: 94%
              </span>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginTop: '4rem',
            justifyContent: 'center',
          }}
          role="list"
          aria-label="Key statistics"
        >
          {stats.map((stat) => (
            <div key={stat.label} role="listitem">
              <StatCard stat={stat} trigger={inView} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
