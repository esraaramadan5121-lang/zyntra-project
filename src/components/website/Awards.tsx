'use client'
import { useState } from 'react'

const awards = [
  {
    name: 'Clutch',
    title: 'Top Digital Agency 2024',
    desc: 'Recognized as a top-rated digital agency with 5-star client reviews.',
    icon: '⭐',
    color: '#FF6B35',
  },
  {
    name: 'Behance',
    title: 'Featured Creative Studio',
    desc: 'Our design work has been featured and appreciated by the global design community.',
    icon: '🎨',
    color: '#1769FF',
  },
  {
    name: 'Dribbble',
    title: 'Top Shot of the Week',
    desc: 'Multiple UI/UX designs recognized as Top Shots by the Dribbble community.',
    icon: '🏀',
    color: '#EA4C89',
  },
  {
    name: 'Google Partner',
    title: 'Certified Google Partner',
    desc: 'Officially certified to deliver Google Ads, SEO, and digital marketing services.',
    icon: '🔵',
    color: '#4285F4',
  },
]

const stats = [
  { number: '150+', label: 'Happy Clients' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '5★', label: 'Average Rating' },
  { number: '7+', label: 'Industry Awards' },
]

export default function Awards() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section style={{ padding: '100px 0', background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>Recognition</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Awards & Certifications
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '15px', maxWidth: '440px', margin: '0 auto', lineHeight: 1.7 }}>
            Recognized by the world's leading platforms for excellence in design and development.
          </p>
        </div>

        {/* Awards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '64px' }}>
          {awards.map((award, i) => (
            <div key={award.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? '#161616' : '#0A0A0A',
                border: `1px solid ${hovered === i ? 'rgba(201,162,74,0.35)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '14px', padding: '32px 28px',
                transition: 'all 0.3s', cursor: 'default',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: `${award.color}15`,
                  border: `1px solid ${award.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px',
                }}>
                  {award.icon}
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>{award.name}</h4>
                  <p style={{ color: '#C9A24A', fontSize: '12px', marginTop: '2px' }}>{award.title}</p>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '13px', lineHeight: 1.7 }}>{award.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px' }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 700, color: '#C9A24A', lineHeight: 1, marginBottom: '8px' }}>{s.number}</div>
              <div style={{ color: 'rgba(255,255,255,0.50)', fontSize: '13px' }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}