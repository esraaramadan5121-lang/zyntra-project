'use client'
import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We dive deep into your business, goals, target audience, and competitive landscape to understand what success looks like for you.',
    icon: '🔍',
    details: ['Business analysis', 'Competitor research', 'Audience definition', 'Goal setting'],
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'We craft a detailed roadmap — from information architecture to technology stack — tailored to your specific needs and budget.',
    icon: '🎯',
    details: ['Project roadmap', 'Tech stack selection', 'Timeline planning', 'Budget allocation'],
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Our designers create pixel-perfect visuals that reflect your brand identity and deliver an exceptional user experience.',
    icon: '✏️',
    details: ['Wireframing', 'UI/UX design', 'Brand alignment', 'Prototype review'],
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Our engineers bring the designs to life with clean, scalable code, following best practices and modern frameworks.',
    icon: '⚡',
    details: ['Frontend development', 'Backend architecture', 'API integrations', 'Code reviews'],
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'After thorough testing and quality assurance, we deploy your project and ensure everything runs flawlessly.',
    icon: '🚀',
    details: ['QA testing', 'Performance optimization', 'Deployment', 'Post-launch support'],
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ padding: '100px 0', background: '#0A0A0A' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
          <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>How We Work</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Our Proven Process
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            A structured approach that delivers exceptional results every time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>

          {/* Steps List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {steps.map((step, i) => (
              <div key={step.num}
                onClick={() => setActiveStep(i)}
                style={{
                  padding: '24px 28px', borderRadius: '12px', cursor: 'pointer',
                  transition: 'all 0.3s',
                  background: activeStep === i ? 'rgba(201,162,74,0.08)' : 'transparent',
                  border: `1px solid ${activeStep === i ? 'rgba(201,162,74,0.3)' : 'rgba(255,255,255,0.06)'}`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                    background: activeStep === i ? '#C9A24A' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${activeStep === i ? '#C9A24A' : 'rgba(255,255,255,0.1)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', fontWeight: 600,
                    color: activeStep === i ? '#0A0A0A' : 'rgba(255,255,255,0.4)',
                    transition: 'all 0.3s',
                  }}>{step.num}</div>
                  <div>
                    <h4 style={{ color: activeStep === i ? '#fff' : 'rgba(255,255,255,0.65)', fontSize: '16px', fontWeight: 600, transition: 'color 0.3s' }}>{step.title}</h4>
                  </div>
                  <span style={{ marginLeft: 'auto', color: activeStep === i ? '#C9A24A' : 'rgba(255,255,255,0.2)', fontSize: '18px', transition: 'all 0.3s' }}>→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Detail */}
          <div style={{
            background: '#111111', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px', padding: '40px',
            opacity: visible ? 1 : 0, transition: 'all 0.6s ease 0.3s',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>{steps[activeStep].icon}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ color: 'rgba(201,162,74,0.5)', fontSize: '13px', fontFamily: 'monospace', fontWeight: 600 }}>{steps[activeStep].num}</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', fontWeight: 700, color: '#fff' }}>{steps[activeStep].title}</h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>{steps[activeStep].desc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {steps[activeStep].details.map(d => (
                <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: 'rgba(201,162,74,0.05)', borderRadius: '8px', border: '1px solid rgba(201,162,74,0.1)' }}>
                  <span style={{ color: '#C9A24A', fontSize: '12px' }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.70)', fontSize: '13px' }}>{d}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}