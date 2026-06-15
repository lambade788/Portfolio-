import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    id: 'programming',
    label: 'Programming',
    color: '#3b82f6',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 85 },
      { name: 'Python', level: 65 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#06b6d4',
    skills: [
      { name: 'React', level: 88 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#8b5cf6',
    skills: [
      { name: 'Spring Boot', level: 88 },
      { name: 'Hibernate', level: 82 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    color: '#f59e0b',
    skills: [
      { name: 'MySQL', level: 87 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    color: '#ec4899',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman', level: 88 },
      { name: 'Maven', level: 82 },
      { name: 'IntelliJ IDEA', level: 92 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    color: '#22c55e',
    skills: [
      { name: 'OOP', level: 92 },
      { name: 'DSA', level: 80 },
      { name: 'MVC Pattern', level: 90 },
      { name: 'Authentication', level: 85 },
      { name: 'SDLC', level: 85 },
      { name: 'Database Design', level: 88 },
    ],
  },
]

// All skills for the cloud display
const allSkills = [
  'Java', 'Spring Boot', 'React', 'MySQL', 'Hibernate', 'REST APIs',
  'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap',
  'Git', 'GitHub', 'Postman', 'Maven', 'IntelliJ', 'VS Code',
  'OOP', 'DSA', 'MVC', 'Auth', 'SDLC', 'SQL', 'Python',
]

function SkillBar({ name, level, color, visible }: { name: string; level: number; color: string; visible: boolean }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>{name}</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>{level}%</span>
      </div>
      <div style={{
        height: 6,
        background: 'rgba(255,255,255,0.06)',
        borderRadius: 999,
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: visible ? `${level}%` : 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '100%',
            borderRadius: 999,
            background: `linear-gradient(90deg, ${color}aa, ${color})`,
            boxShadow: `0 0 10px ${color}60`,
          }}
        />
      </div>
    </div>
  )
}

function SkillCloud() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.6rem',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      {allSkills.map((skill, i) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.03, duration: 0.4 }}
          whileHover={{ scale: 1.15, y: -4 }}
          style={{
            padding: '0.45rem 1rem',
            borderRadius: 9999,
            background: `rgba(${Math.floor(Math.random()*60)+40}, ${Math.floor(Math.random()*60)+40}, ${Math.floor(Math.random()*80)+80}, 0.08)`,
            border: `1px solid rgba(139,92,246,${0.1 + (i % 5) * 0.05})`,
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--color-text-secondary)',
            fontFamily: 'JetBrains Mono, monospace',
            cursor: 'none',
            transition: 'all 0.2s',
          }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  )
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('programming')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  const activeCategory = skillCategories.find(c => c.id === activeTab)!

  return (
    <section id="skills" className="section-padding" ref={ref} aria-label="Skills section"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(139,92,246,0.03), transparent)' }}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-tag">Technical Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A curated set of technologies I use to build modern, scalable software solutions.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          {/* LEFT — Skill cloud */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              borderRadius: 24,
              background: 'var(--gradient-card)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--color-border-subtle)',
              padding: '1rem',
            }}
            className="card-glass"
          >
            <h3 style={{ textAlign: 'center', fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-secondary)', padding: '1rem', letterSpacing: '0.05em', fontFamily: 'JetBrains Mono, monospace' }}>
              SKILL CLOUD
            </h3>
            <SkillCloud />
          </motion.div>

          {/* RIGHT — Tabbed skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Tab buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '1.5rem',
              padding: '0.5rem',
              borderRadius: 16,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--color-border-subtle)',
            }} role="tablist" aria-label="Skill categories">
              {skillCategories.map(cat => (
                <motion.button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeTab === cat.id}
                  id={`skill-tab-${cat.id}`}
                  onClick={() => setActiveTab(cat.id)}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: 10,
                    border: 'none',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'none',
                    transition: 'all 0.2s',
                    background: activeTab === cat.id
                      ? `${cat.color}22`
                      : 'transparent',
                    color: activeTab === cat.id
                      ? cat.color
                      : 'var(--color-text-muted)',
                    boxShadow: activeTab === cat.id
                      ? `0 0 12px ${cat.color}30`
                      : 'none',
                    borderWidth: activeTab === cat.id ? 1 : 0,
                    borderStyle: 'solid',
                    borderColor: activeTab === cat.id ? `${cat.color}40` : 'transparent',
                  }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>

            {/* Skill bars */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                role="tabpanel"
                aria-labelledby={`skill-tab-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: '1.5rem',
                  borderRadius: 16,
                  background: 'var(--gradient-card)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--color-border-subtle)',
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: activeCategory.color, boxShadow: `0 0 10px ${activeCategory.color}` }} aria-hidden="true" />
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {activeCategory.label}
                  </h3>
                </div>
                {activeCategory.skills.map(skill => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={activeCategory.color}
                    visible={inView}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
