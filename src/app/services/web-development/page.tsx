'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/components/website/Navbar'
import Footer from '@/components/website/Footer'
import Link from 'next/link'

export default function WebDevelopment() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  const benefits = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized performance with 99+ PageSpeed scores.' },
    { icon: '📱', title: 'Fully Responsive', desc: 'Perfect experience on every device and screen size.' },
    { icon: '🔒', title: 'Secure & Reliable', desc: 'Enterprise-grade security built into every project.' },
    { icon: '🎯', title: 'SEO Optimized', desc: 'Built to rank higher and attract more organic traffic.' },
    { icon: '🔧', title: 'Easy to Manage', desc: 'Intuitive CMS so you can update content yourself.' },
    { icon: '📈', title: 'Scalable', desc: 'Architecture that grows with your business needs.' },
  ]

  const process = [
    { num: '01', title: 'Discovery', desc: 'Understanding your goals, audience, and requirements.' },
    { num: '02', title: 'Planning', desc: 'Sitemap, wireframes, and technical architecture.' },
    { num: '03', title: 'Design', desc: 'Pixel-perfect UI that matches your brand identity.' },
    { num: '04', title: 'Development', desc: 'Clean, scalable code with modern frameworks.' },
    { num: '05', title: 'Testing', desc: 'Thorough QA across all devices and browsers.' },
    { num: '06', title: 'Launch', desc: 'Deployment, monitoring, and ongoing support.' },
  ]

  const technologies = ['Next.js', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel']

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
              Web <span style={{ color: '#C9A24A' }}>Development</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: '16px', lineHeight: 1.8, maxWidth: '560px', marginBottom: '40px' }}>
              We build high-performance, scalable websites and web applications that deliver exceptional user experiences and drive real business results.
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
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>Why Choose Us</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>What You Get</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {benefits.map((b) => (
              <div key={b.title} style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '32px 24px', transition: 'border-color 0.3s, transform 0.3s', cursor: 'default' }}
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

      {/* Process */}
      <section style={{ padding: '100px 24px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>How We Work</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>Our Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0' }}>
            {process.map((step, i) => (
              <div key={step.num} style={{ padding: '32px 20px', textAlign: 'center', borderRight: i < process.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', position: 'relative' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1px solid rgba(201,162,74,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#C9A24A', fontSize: '13px', fontWeight: 600, background: 'rgba(201,162,74,0.05)' }}>{step.num}</div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{step.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '13px', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section style={{ padding: '80px 24px', background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>Tech Stack</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>Technologies We Use</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {technologies.map(tech => (
              <div key={tech} style={{ padding: '12px 24px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px', color: 'rgba(255,255,255,0.75)', fontSize: '14px', transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A24A'; e.currentTarget.style.color = '#C9A24A' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', background: '#0A0A0A', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Ready to Build<br /><span style={{ color: '#C9A24A' }}>Something Great?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.7, marginBottom: '36px' }}>
            Let's create a website that elevates your brand and drives real results.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 40px', background: '#C9A24A', color: '#0A0A0A', borderRadius: '6px', textDecoration: 'none', fontSize: '15px', fontWeight: 600 }}>
            Get a Free Consultation →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}