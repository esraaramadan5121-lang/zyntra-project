'use client'
import { useState } from 'react'
import Link from 'next/link'

const cases = [
  {
    client: 'LuxeCo Fashion',
    category: 'Branding + Web',
    title: 'Rebranding a Luxury Fashion House',
    challenge: 'The brand had an outdated identity that no longer reflected its premium positioning in the market.',
    solution: 'We redesigned their entire brand identity and built a stunning e-commerce platform with a cinematic feel.',
    results: [
      { metric: '+340%', label: 'Online Revenue' },
      { metric: '+280%', label: 'Brand Recognition' },
      { metric: '2.1s', label: 'Load Time' },
    ],
    color: '#1a1505',
    tag: 'Branding',
  },
  {
    client: 'Nexora Tech',
    category: 'Web App + SEO',
    title: 'SaaS Platform from Zero to 50K Users',
    challenge: 'A startup needed a scalable web application and a strategy to acquire their first 50,000 users organically.',
    solution: 'We built a high-performance web app and implemented an aggressive SEO and content strategy.',
    results: [
      { metric: '50K+', label: 'Users in 6 Months' },
      { metric: '#1', label: 'Google Rankings' },
      { metric: '+520%', label: 'Organic Traffic' },
    ],
    color: '#050d1a',
    tag: 'Web Development',
  },
  {
    client: 'Avant Group',
    category: 'Mobile App',
    title: 'Mobile App with 4.9★ App Store Rating',
    challenge: 'The client needed a mobile app that could compete with top players in a saturated market.',
    solution: 'We focused on superior UX, buttery-smooth animations, and performance optimization that competitors lacked.',
    results: [
      { metric: '4.9★', label: 'App Store Rating' },
      { metric: '100K+', label: 'Downloads' },
      { metric: '92%', label: 'Retention Rate' },
    ],
    color: '#0d0514',
    tag: 'Mobile',
  },
]

export default function CaseStudies() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section style={{ padding: '100px 0', background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>Case Studies</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>
              Results That Speak
            </h2>
          </div>
          <Link href="/portfolio" style={{ color: '#C9A24A', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(201,162,74,0.3)', padding: '10px 20px', borderRadius: '6px' }}>
            View All Projects →
          </Link>
        </div>

        {/* Cases */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {cases.map((c, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? '#161616' : '#0A0A0A',
                border: `1px solid ${hovered === i ? 'rgba(201,162,74,0.3)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '16px', overflow: 'hidden',
                transition: 'all 0.3s', cursor: 'default',
              }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '0' }}>

                {/* Left — Visual */}
                <div style={{ background: c.color, padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <div>
                    <span style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '999px', background: 'rgba(201,162,74,0.15)', color: '#C9A24A', border: '1px solid rgba(201,162,74,0.3)' }}>{c.tag}</span>
                    <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '12px', marginTop: '16px' }}>{c.category}</p>
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.30)', fontSize: '11px', marginBottom: '6px' }}>Client</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>{c.client}</p>
                  </div>
                </div>

                {/* Middle — Content */}
                <div style={{ padding: '40px 36px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: '20px', lineHeight: 1.3 }}>{c.title}</h3>
                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ color: '#C9A24A', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px', fontWeight: 600 }}>Challenge</p>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.7 }}>{c.challenge}</p>
                  </div>
                  <div>
                    <p style={{ color: '#C9A24A', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px', fontWeight: 600 }}>Solution</p>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.7 }}>{c.solution}</p>
                  </div>
                </div>

                {/* Right — Results */}
                <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
                  {c.results.map(r => (
                    <div key={r.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.2rem', fontWeight: 700, color: '#C9A24A', lineHeight: 1 }}>{r.metric}</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px', marginTop: '4px' }}>{r.label}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}