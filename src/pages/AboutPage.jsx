import React from 'react';
import AboutSection from '../components/AboutSection';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import CtaSection from '../components/CtaSection';
import MapFragment from '../components/scrapbook/MapFragment';

export default function AboutPage({ config, onOpenBookingModal }) {
  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '4.5rem', minHeight: '100vh' }}>
      <MapFragment opacity={0.06} />

      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--color-paper-sheet)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0 3rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <span className="section-tag">
              AGENCY HISTORY & MANIFESTO
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                fontWeight: '800',
                color: 'var(--color-ink)',
                marginTop: '0.75rem',
                marginBottom: '0.85rem'
              }}
            >
              ABOUT PRABHULING TRAVELS
            </h1>

            <p style={{ fontSize: '1.075rem', color: 'var(--color-ink-muted)', lineHeight: '1.65' }}>
              Building trust through direct bus ownership, transparent fare structures, & dedicated human assistance across South India.
            </p>
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
