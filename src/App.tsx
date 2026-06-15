import React, { Suspense, lazy } from 'react'
import { ThemeProvider } from './lib/theme'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'

// Lazy load sections for code splitting / performance
const Hero = lazy(() => import('./sections/Hero'))
const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))
const Experience = lazy(() => import('./sections/Experience'))
const Education = lazy(() => import('./sections/Education'))
const Certifications = lazy(() => import('./sections/Certifications'))
const Achievements = lazy(() => import('./sections/Achievements'))
const Viora = lazy(() => import('./sections/Viora'))
const Contact = lazy(() => import('./sections/Contact'))
const Resume = lazy(() => import('./sections/Resume'))

// Animated gradient background blobs
const AnimatedBlobs = () => (
  <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
    <div
      className="blob"
      style={{
        width: 600,
        height: 600,
        background: 'rgba(59, 130, 246, 0.12)',
        top: '-10%',
        left: '-10%',
        animationDelay: '0s',
      }}
    />
    <div
      className="blob"
      style={{
        width: 500,
        height: 500,
        background: 'rgba(139, 92, 246, 0.1)',
        top: '40%',
        right: '-8%',
        animationDelay: '-5s',
        animationDuration: '12s',
      }}
    />
    <div
      className="blob"
      style={{
        width: 400,
        height: 400,
        background: 'rgba(6, 182, 212, 0.08)',
        bottom: '10%',
        left: '30%',
        animationDelay: '-10s',
        animationDuration: '15s',
      }}
    />
  </div>
)

// Section loading fallback
const SectionFallback = () => (
  <div style={{ height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: '2px solid rgba(139,92,246,0.2)',
      borderTopColor: '#8b5cf6',
      animation: 'spin-gradient 0.8s linear infinite',
    }} aria-hidden="true" />
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--color-bg)' }}>
        {/* Global UI elements */}
        <PageLoader />
        <CustomCursor />
        <ScrollProgress />
        <AnimatedBlobs />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main id="main-content" role="main">
          <Suspense fallback={<SectionFallback />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Education />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Certifications />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Achievements />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Viora />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Resume />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
