'use client'
import { useState } from 'react'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    desc: 'Perfect for startups and small businesses ready to establish their digital presence.',
    features: [
      '5-Page Website',
      'Mobile Responsive',
      'Basic SEO Setup',
      'Contact Form',
      'Google Analytics',
      '1 Month Support',
      'CMS Integration',
    ],
    notIncluded: ['Custom Animations', 'E-commerce', 'Mobile App'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$7,500',
    desc: 'For growing businesses that need a powerful, fully-featured digital platform.',
    features: [
      'Up to 15 Pages',
      'Custom Animations',
      'Advanced SEO',
      'E-commerce Ready',
      'Admin Dashboard',
      'API Integrations',
      '3 Months Support',
      'Brand Identity Kit',
    ],
    notIncluded: ['Mobile App'],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Tailored solutions for established brands with complex requirements.',
    features: [
      'Unlimited Pages',
      'Mobile App (iOS + Android)',
      'Full Brand Identity',
      'Custom Integrations',
      'Dedicated Team',
      'Priority Support',
      '12 Months Support',
      'Performance SLA',
    ],
    notIncluded: [],
    cta: 'Contact Us',
    highlighted: false,
  },
]

export default function Pricing() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section style={{ padding: '100px 0', background: '#0A0A0A' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>Pricing</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Transparent Pricing
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '15px', maxWidth: '440px', margin: '0 auto', lineHeight: 1.7 }}>
            No hidden fees. No surprises. Just exceptional work at fair prices.
          </p>
        </div>

        {/* Plans */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'start' }}>
          {plans.map((plan, i) => (
            <div key={plan.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: plan.highlighted ? 'linear-gradient(145deg, #1a1505, #111111)' : '#111111',
                border: `1px solid ${plan.highlighted ? 'rgba(201,162,74,0.5)' : hovered === i ? 'rgba(201,162,74,0.3)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '16px', padding: '40px 32px',
                position: 'relative', transition: 'all 0.3s',
                transform: plan.highlighted ? 'scale(1.03)' : hovered === i ? 'translateY(-4px)' : 'none',
              }}>

              {plan.highlighted && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#C9A24A', color: '#0A0A0A', fontSize: '11px', fontWeight: 700, padding: '4px 16px', borderRadius: '999px', whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>
                  MOST POPULAR
                </div>
              )}

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '12px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 700, color: '#C9A24A', lineHeight: 1 }}>{plan.price}</span>
                  {plan.price !== 'Custom' && <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>/ project</span>}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '13px', lineHeight: 1.7 }}>{plan.desc}</p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', marginBottom: '28px' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(201,162,74,0.15)', border: '1px solid rgba(201,162,74,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#C9A24A', flexShrink: 0 }}>✓</div>
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px' }}>{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', opacity: 0.35 }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}>✕</div>
                    <span style={{ color: 'rgba(255,255,255,0.40)', fontSize: '14px', textDecoration: 'line-through' }}>{f}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" style={{
                display: 'block', textAlign: 'center', padding: '14px',
                background: plan.highlighted ? '#C9A24A' : 'transparent',
                color: plan.highlighted ? '#0A0A0A' : '#fff',
                border: `1px solid ${plan.highlighted ? '#C9A24A' : 'rgba(255,255,255,0.2)'}`,
                borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 600,
                transition: 'all 0.2s',
              }}>
                {plan.cta} →
              </Link>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.30)', fontSize: '13px', marginTop: '32px' }}>
          All prices are starting points. Final pricing depends on project scope and requirements.
        </p>

      </div>
    </section>
  )
}