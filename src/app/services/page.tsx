'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/components/website/Navbar'
import Footer from '@/components/website/Footer'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Web Development',
    sub: 'Custom Websites · E-commerce · CMS',
    description: 'High-performance websites built with the latest technologies for perfect user experience and real business results.',
    href: '/services/web-development',
  },
  {
    num: '02',
    title: 'Mobile App Development',
    sub: 'iOS · Android · Cross-platform',
    description: 'Stunning mobile experiences that engage and convert your users across all devices and platforms.',
    href: '/services/mobile-app-development',
  },
  {
    num: '03',
    title: 'Brand Identity',
    sub: 'Logo Design · Brand Identity · Guidelines',
    description: 'We craft unique brand identities that tell your story and connect with your audience at every touchpoint.',
    href: '/services/branding',
  },
  {
    num: '04',
    title: 'SEO Services',
    sub: 'Technical SEO · Content · Link Building',
    description: 'Data-driven SEO strategies that help your brand rank higher, attract organic traffic, and dominate your market.',
    href: '/services/seo-services',
  },
  {
    num: '05',
    title: 'UI/UX Design',
    sub: 'User Research · UI Design · Prototyping',
    description: 'We design intuitive and beautiful interfaces that users love and that drive measurable business results.',
    href: '/services/ui-ux-design',
  },
]

export default function Services() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      <section style={{ padding: '140px 24px 80px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
          <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 500 }}>What We Do</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>
            Our <span style={{ color: '#C9A24A' }}>Services</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>
            We provide end-to-end digital solutions that help brands grow, engage, and succeed in the digital world.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 100px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {services.map((s, i) => (
            <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  background: '#111111',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '40px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '32px',
                  flexWrap: 'wrap',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,162,74,0.4)'
                  e.currentTarget.style.transform = 'translateX(8px)'
                  e.currentTarget.style.background = '#141414'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.background = '#111111'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', minWidth: '220px' }}>
                  <span style={{ color: 'rgba(201,162,74,0.4)', fontSize: '13px', fontWeight: 600, fontFamily: 'monospace' }}>{s.num}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{s.title}</h3>
                    <p style={{ color: 'rgba(201,162,74,0.7)', fontSize: '12px' }}>{s.sub}</p>
                  </div>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.8, maxWidth: '480px', flex: 1 }}>{s.description}</p>
                <span style={{ color: '#C9A24A', fontSize: '22px', flexShrink: 0 }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
          Ready to Get Started?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '14px', marginBottom: '32px' }}>
          Let us build something extraordinary for your brand.
        </p>
        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 36px', fontSize: '14px', fontWeight: 600, background: '#C9A24A', color: '#0A0A0A', borderRadius: '6px', textDecoration: 'none' }}>
          Start Your Project →
        </Link>
      </section>

      <Footer />
    </main>
  )
}