'use client'
import { useState } from 'react'

const technologies = [
  {
    name: 'React',
    icon: '⚛️',
    category: 'Frontend',
    desc: 'Building dynamic, high-performance user interfaces.',
  },
  {
    name: 'Next.js',
    icon: '▲',
    category: 'Frontend',
    desc: 'Server-side rendering and static generation for blazing fast websites.',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    category: 'Backend',
    desc: 'Scalable, event-driven backend architecture.',
  },
  {
    name: 'Flutter',
    icon: '💙',
    category: 'Mobile',
    desc: 'Beautiful cross-platform mobile apps from a single codebase.',
  },
  {
    name: 'Laravel',
    icon: '🔴',
    category: 'Backend',
    desc: 'Elegant PHP framework for robust web applications.',
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    category: 'Database',
    desc: 'Flexible NoSQL database for modern applications.',
  },
  {
    name: 'TypeScript',
    icon: '🔷',
    category: 'Language',
    desc: 'Type-safe JavaScript for scalable codebases.',
  },
  {
    name: 'PostgreSQL',
    icon: '🐘',
    category: 'Database',
    desc: 'Powerful relational database for complex data needs.',
  },
]

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'Language']

export default function Technologies() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = active === 'All' ? technologies : technologies.filter(t => t.category === active)

  return (
    <section style={{ padding: '100px 0', background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>Our Stack</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>
              Technologies We Master
            </h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '14px', lineHeight: 1.7, maxWidth: '360px' }}>
            We use cutting-edge technologies to deliver fast, scalable, and beautiful digital products.
          </p>
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: '7px 18px', fontSize: '12px', borderRadius: '999px', cursor: 'pointer',
              transition: 'all 0.2s', fontWeight: active === cat ? 600 : 400,
              background: active === cat ? '#C9A24A' : 'transparent',
              color: active === cat ? '#0A0A0A' : 'rgba(255,255,255,0.55)',
              border: `1px solid ${active === cat ? '#C9A24A' : 'rgba(255,255,255,0.12)'}`,
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
          {filtered.map(tech => (
            <div key={tech.name}
              onMouseEnter={() => setHovered(tech.name)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === tech.name ? '#161616' : '#0A0A0A',
                border: `1px solid ${hovered === tech.name ? 'rgba(201,162,74,0.45)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '12px', padding: '28px 24px',
                transition: 'all 0.3s', cursor: 'default',
                transform: hovered === tech.name ? 'translateY(-4px)' : 'translateY(0)',
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  background: hovered === tech.name ? 'rgba(201,162,74,0.12)' : 'rgba(255,255,255,0.04)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', transition: 'all 0.3s',
                  border: `1px solid ${hovered === tech.name ? 'rgba(201,162,74,0.2)' : 'rgba(255,255,255,0.06)'}`,
                }}>
                  {tech.icon}
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600, marginBottom: '2px' }}>{tech.name}</h4>
                  <span style={{
                    fontSize: '11px', padding: '2px 8px', borderRadius: '999px',
                    background: 'rgba(201,162,74,0.1)', color: '#C9A24A',
                    border: '1px solid rgba(201,162,74,0.2)',
                  }}>{tech.category}</span>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '13px', lineHeight: 1.7 }}>{tech.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}