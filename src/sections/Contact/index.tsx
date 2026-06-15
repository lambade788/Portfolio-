import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../../components/SocialIcons'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rlambade325@gmail.com',
    href: 'mailto:rlambade325@gmail.com',
    color: '#3b82f6',
    id: 'contact-email',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9321795019',
    href: 'tel:+919321795019',
    color: '#22c55e',
    id: 'contact-phone',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'rahul-lambade-850a643a0',
    href: 'https://www.linkedin.com/in/rahul-lambade-850a643a0',
    color: '#0077b5',
    id: 'contact-linkedin',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: '@lambade788',
    href: 'https://github.com/lambade788',
    color: '#8b5cf6',
    id: 'contact-github',
  },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) { setErrors(v); return }
    setErrors({})
    setFormState('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '59b0a095-9778-4453-9588-746428038d61',
          name: form.name,
          email: form.email,
          subject: form.subject || 'New Contact from Portfolio',
          message: form.message,
        })
      })

      const result = await response.json()
      if (result.success) {
        setFormState('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setFormState('idle'), 5000)
      } else {
        setFormState('error')
        setTimeout(() => setFormState('idle'), 4000)
      }
    } catch (error) {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="section-padding" ref={ref} aria-label="Contact section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-tag">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Open to full-time roles, freelance projects, and collaborations. Reach out and let's build something great.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          maxWidth: 1000,
          margin: '0 auto',
        }}>
          {/* LEFT — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--color-text-primary)' }}>
              Get In Touch
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    id={item.id}
                    whileHover={{ x: 6, scale: 1.01 }}
                    aria-label={`${item.label}: ${item.value}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      borderRadius: 14,
                      background: 'var(--gradient-card)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid var(--color-border-subtle)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: `${item.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color,
                      flexShrink: 0,
                    }}>
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em', marginBottom: '0.1rem' }}>
                        {item.label.toUpperCase()}
                      </p>
                      <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Availability card */}
            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              borderRadius: 16,
              background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(59,130,246,0.06))',
              border: '1px solid rgba(34,197,94,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', flexShrink: 0, boxShadow: '0 0 10px #22c55e' }} aria-hidden="true" />
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Available for Opportunities</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Typically responds within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{
                    padding: '3rem 2rem',
                    borderRadius: 24,
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(59,130,246,0.06))',
                    border: '1px solid rgba(34,197,94,0.25)',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    minHeight: 400,
                  }}
                  aria-live="polite"
                >
                  <CheckCircle size={52} style={{ color: '#22c55e' }} aria-hidden="true" />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : formState === 'error' ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{
                    padding: '3rem 2rem',
                    borderRadius: 24,
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.08), rgba(245,158,11,0.06))',
                    border: '1px solid rgba(239,68,68,0.25)',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    minHeight: 400,
                  }}
                  aria-live="assertive"
                >
                  <AlertCircle size={52} style={{ color: '#ef4444' }} aria-hidden="true" />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>Oops! Something went wrong.</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    We couldn't send your message. Please make sure the Access Key is correct, or reach out to me directly at rlambade325@gmail.com.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  style={{
                    padding: '2rem',
                    borderRadius: 24,
                    background: 'var(--gradient-card)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--color-border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}
                  aria-label="Contact form"
                  noValidate
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="contact-form-name" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em' }}>
                        NAME *
                      </label>
                      <input
                        id="contact-form-name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="form-input"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && <p id="name-error" style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem' }} role="alert">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-form-email" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em' }}>
                        EMAIL *
                      </label>
                      <input
                        id="contact-form-email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="form-input"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && <p id="email-error" style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem' }} role="alert">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-form-subject" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em' }}>
                      SUBJECT
                    </label>
                    <input
                      id="contact-form-subject"
                      type="text"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-form-message" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em' }}>
                      MESSAGE *
                    </label>
                    <textarea
                      id="contact-form-message"
                      rows={5}
                      placeholder="Tell me about the opportunity or project..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="form-input"
                      style={{ resize: 'vertical' }}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && <p id="message-error" style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem' }} role="alert">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    id="contact-form-submit"
                    disabled={formState === 'loading'}
                    whileHover={{ scale: formState !== 'loading' ? 1.02 : 1 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary magnetic"
                    style={{ width: '100%', justifyContent: 'center', opacity: formState === 'loading' ? 0.8 : 1 }}
                    aria-label={formState === 'loading' ? 'Sending message...' : 'Send message'}
                  >
                    {formState === 'loading' ? (
                      <>
                        <div style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin-gradient 0.8s linear infinite' }} aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
