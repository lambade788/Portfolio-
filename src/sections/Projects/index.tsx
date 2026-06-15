import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Star, Zap } from 'lucide-react'
import { GithubIcon } from '../../components/SocialIcons'

const projects = [
  {
    id: 'sahyog-ai',
    title: 'SAHYOG AI',
    subtitle: 'Smart Society Management Platform',
    description:
      'An AI-powered platform designed for residents and administrators to manage society operations seamlessly — from complaint tracking to community events, all enhanced with AI assistance.',
    image: '/sahyog-ai.png',
    tech: ['React', 'Spring Boot', 'MySQL', 'Gemini API', 'REST APIs'],
    features: [
      'Complaint Management System',
      'Notices & Announcements',
      'Events Management',
      'Resident Communication Hub',
      'AI-Powered Assistance',
    ],
    github: 'https://github.com/lambade788',
    demo: 'https://sahyog-ai-rho.vercel.app/',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    tag: 'AI Platform',
  },
  {
    id: 'artha-ai',
    title: 'ARTHA AI',
    subtitle: 'Personal Finance Management Platform',
    description:
      'An AI-driven personal finance platform that provides deep spending analysis, intelligent budget recommendations, and financial insights powered by Google Gemini.',
    image: '/artha-ai.png',
    tech: ['React', 'Spring Boot', 'MySQL', 'Gemini API', 'Chart.js'],
    features: [
      'Spending Analysis & Visualization',
      'AI Financial Insights',
      'Smart Recommendations',
      'Budget Tracking',
      'Transaction Management',
    ],
    github: 'https://github.com/lambade788',
    demo: 'https://artha-ai-chi.vercel.app/',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    tag: 'FinTech + AI',
  },
  {
    id: 'merchantpay',
    title: 'MERCHANTPAY',
    subtitle: 'Full Stack Payment Management System',
    description:
      'A comprehensive payment processing platform enabling merchants to manage transactions, track analytics, and oversee their payment operations through a modern, secure dashboard.',
    image: '/merchantpay.png',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST APIs', 'JWT Auth'],
    features: [
      'Payment Processing Engine',
      'Transaction Tracking',
      'Merchant Management',
      'Analytics Dashboard',
      'Secure JWT Authentication',
    ],
    github: 'https://github.com/lambade788',
    demo: 'https://merchantpay-cyan.vercel.app/',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    tag: 'FinTech',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          borderRadius: 24,
          background: 'var(--gradient-card)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--color-border-subtle)',
          overflow: 'hidden',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
        whileHover={{
          borderColor: `${project.color}40`,
          boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${project.color}20`,
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
          <img
            src={project.image}
            alt={`${project.title} — ${project.subtitle}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
            loading="lazy"
          />
          {/* Image overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8))`,
          }} aria-hidden="true" />

          {/* Tag */}
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            padding: '0.3rem 0.8rem',
            borderRadius: 9999,
            background: `${project.color}25`,
            border: `1px solid ${project.color}50`,
            fontSize: '0.72rem',
            fontWeight: 700,
            color: project.color,
            backdropFilter: 'blur(8px)',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.05em',
          }}>
            {project.tag}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem' }}>
          {/* Title */}
          <div style={{ marginBottom: '0.75rem' }}>
            <h3 style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.02em',
              background: project.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.2rem',
            }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
              {project.subtitle}
            </p>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            {project.description}
          </p>

          {/* Features */}
          <div style={{ marginBottom: '1.25rem' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: '0.6rem' }}>
              Key Features
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              {project.features.slice(0, 3).map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Zap size={12} style={{ color: project.color, flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {project.tech.map(t => (
              <span key={t} style={{
                padding: '0.2rem 0.6rem',
                borderRadius: 6,
                background: `${project.color}10`,
                border: `1px solid ${project.color}25`,
                fontSize: '0.72rem',
                fontWeight: 600,
                color: project.color,
                fontFamily: 'JetBrains Mono, monospace',
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-github-${project.id}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label={`View ${project.title} on GitHub`}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                padding: '0.6rem',
                borderRadius: 10,
                border: '1px solid var(--color-border-subtle)',
                background: 'rgba(255,255,255,0.03)',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
            >
              <GithubIcon size={15} aria-hidden="true" />
              Code
            </motion.a>
            <motion.a
              href={project.demo}
              id={`project-demo-${project.id}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label={`View ${project.title} live demo`}
              style={{
                flex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                padding: '0.6rem',
                borderRadius: 10,
                background: project.gradient,
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 700,
                boxShadow: `0 4px 15px ${project.color}40`,
                transition: 'all 0.2s',
              }}
            >
              <ExternalLink size={15} aria-hidden="true" />
              Live Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="section-padding" ref={ref} aria-label="Projects section"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(59,130,246,0.02), transparent)' }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-tag">
            <Star size={12} aria-hidden="true" />
            Featured Work
          </span>
          <h2 className="section-title">
            Projects that <span className="gradient-text">Solve Problems</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From AI-powered society management to personal finance platforms — each project built with a focus on real-world impact.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }} role="list" aria-label="Project showcase">
          {projects.map((project, i) => (
            <div key={project.id} role="listitem">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <motion.a
            href="https://github.com/lambade788"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-view-all-github"
            className="btn-outline magnetic"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="View all projects on GitHub"
            style={{ display: 'inline-flex' }}
          >
            <GithubIcon size={18} aria-hidden="true" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
