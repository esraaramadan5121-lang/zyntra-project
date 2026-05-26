'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/components/website/Navbar'
import Footer from '@/components/website/Footer'
import Link from 'next/link'

export default function Branding() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  const benefits = [
    { icon: '✦', title: 'Memorable Identity', desc: 'A brand that sticks in the minds of your customers.' },
    { icon: '🎨', title: 'Visual Consistency', desc: 'Cohesive design across every touchpoint and platform.' },
    { icon: '💎', title: 'Premium Positioning', desc: 'Elevate your perceived value in the market.' },
    { icon: '🤝', title: 'Trust & Credibility', desc: 'Professional identity that builds instant trust.' },
    { icon: '🚀', title: 'Market Differentiation', desc: 'Stand out from competitors with a unique brand story.' },
    { icon: '📐', title: 'Brand Guidelines', desc: 'Complete rulebook for consistent brand usage.' },
  ]

  const deliverables = [
    'Logo Design (Primary + Variations)', 'Brand Color Palette', 'Typography System',
    'Brand Guidelines Document', 'Business Card Design', 'Social Media Kit',
    'Email Signature', 'Brand Patterns & Textures',
  ]

  const process = [
    { num: '01', title: 'Brand Discovery', desc: 'Deep dive into your vision, values, and target audience.' },
    { num: '02', title: 'Research', desc: 'Competitor analysis and market positioning strategy.' },
    { num: '03', title: 'Concept Creation', desc: 'Multiple creative directions and mood boards.' },
    { num: '04', title: 'Design Refinement', desc: 'Iteration and perfection of chosen direction.' },
    { num: '05', title: 'Brand Guidelines', desc: 'Comprehensive documentation for brand usage.' },
    { num: '06', title: 'Delivery', desc: 'All files in every format you will ever need.' },
  ]

  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 24px 80px' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '20%', right: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,162,74,0.08) 0%, transparent 70%)' }} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
              ← Back to Services
            </Link>
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 500 }}>Our Services</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: '24px' }}>
              Brand <span style={{ color: '#C9A24A' }}>Identity</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: '16px', lineHeight: 1.8, maxWidth: '560px', marginBottom: '40px' }}>
              We craft luxury brand identities that tell your story, connect with your audience, and position you as a leader in your market.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ padding: '14px 32px', background: '#C9A24A', color: '#0A0A0A', borderRadius: '6px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                Start Your Project →
              </Link>
              <Link href="/portfolio" style={{ padding: '14px 32px', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '100px 24px', background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>Why It Matters</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>The Power of Great Branding</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {benefits.map((b) => (
              <div key={b.title} style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '32px 24px', transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,162,74,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{b.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{b.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ padding: '100px 24px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>What's Included</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Complete Brand Package</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.8 }}>Every brand project comes with a comprehensive set of deliverables to ensure you have everything you need.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {deliverables.map(d => (
              <div key={d} style={{ padding: '16px 20px', background: '#111111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#C9A24A', fontSize: '14px' }}>✓</span>
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '100px 24px', background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>How We Work</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>Our Branding Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0' }}>
            {process.map((step, i) => (
              <div key={step.num} style={{ padding: '32px 20px', textAlign: 'center', borderRight: i < process.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1px solid rgba(201,162,74,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#C9A24A', fontSize: '13px', fontWeight: 600, background: 'rgba(201,162,74,0.05)' }}>{step.num}</div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{step.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '13px', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', background: '#0A0A0A', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Ready to Build Your<br /><span style={{ color: '#C9A24A' }}>Dream Brand?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.7, marginBottom: '36px' }}>Let's create a brand identity that sets you apart and drives growth.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 40px', background: '#C9A24A', color: '#0A0A0A', borderRadius: '6px', textDecoration: 'none', fontSize: '15px', fontWeight: 600 }}>
            Get a Free Consultation →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}