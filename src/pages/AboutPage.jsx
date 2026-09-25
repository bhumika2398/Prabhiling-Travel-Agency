import React from 'react';
import AboutSection from '../components/AboutSection';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import CtaSection from '../components/CtaSection';
import MapFragment from '../components/scrapbook/MapFragment';
import { Bus, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function AboutPage({ config, onOpenBookingModal }) {
  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '4.5rem', minHeight: '100vh' }}>
      <MapFragment opacity={0.06} />

      {/* Hero Banner Section with Full Background Picture (/about.jfif) */}
      <section
        style={{
          position: 'relative',
          padding: '5.5rem 0 4.5rem 0',
          overflow: 'hidden',
          backgroundImage: `linear-gradient(135deg, rgba(18, 55, 43, 0.88) 0%, rgba(34, 31, 29, 0.85) 100%), url('/about.jfif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderBottom: '1px solid var(--color-border)',
          color: '#FFFFFF'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px' }}>
            {/* Section Tag Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.775rem',
                fontWeight: '700',
                letterSpacing: '0.14em',
                padding: '0.4rem 1.15rem',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(6px)',
                marginBottom: '1.25rem'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)', display: 'inline-block' }} />
              AGENCY HISTORY & MANIFESTO
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                lineHeight: '1.1',
                marginBottom: '1.25rem',
                textShadow: '0 4px 18px rgba(0,0,0,0.4)'
              }}
            >
              About Prabhuling Travels
            </h1>

            <p style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--color-terracotta)', marginBottom: '1.1rem' }}>
              A decade of dependable journeys.
            </p>

            <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: '1.65', marginBottom: '2.25rem', maxWidth: '720px', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Building trust through direct bus fleet ownership, transparent fare structures, & dedicated 24/7 human assistance across South India for over a decade.
            </p>

            {/* Glassmorphism Key Trust Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bus size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: '700' }}>7+ Luxury Buses</strong>
                  <span style={{ fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.85)' }}>Direct Fleet Operators</span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--color-forest)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <HeartHandshake size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: '700' }}>100% Personal Care</strong>
                  <span style={{ fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.85)' }}>WhatsApp & Phone Support</span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.25)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: '700' }}>Guaranteed Berths</strong>
                  <span style={{ fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.85)' }}>No Third-Party Markup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & About Component */}
      <AboutSection config={config} onOpenBookingModal={onOpenBookingModal} />

      {/* Why Choose Us Engine */}
      <WhyUs config={config} />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CtaSection onOpenBookingModal={onOpenBookingModal} />
    </div>
  );
}
