import React from 'react';
import PaperCard from './scrapbook/PaperCard';

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding" style={{ backgroundColor: 'var(--color-paper-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>DIRECT FLEET OPERATOR</span>
          </div>
          <h2 className="section-title">
            WHY TRAVEL WITH PRABHULING?
          </h2>
          <p className="section-desc">
            Unlike pure ticket aggregator portals, Prabhuling Travel Agency owns & operates its own fleet of 7 luxury buses, giving you direct accountability, direct pricing, & human support.
          </p>
        </div>

        {/* Big Highlight Sheet */}
        <PaperCard
          paperType="sheet"
          padding="2.25rem"
          style={{ borderLeft: '4px solid var(--color-terracotta)', marginBottom: '2.5rem' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', color: 'var(--color-forest)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
                DIRECT FLEET OWNERSHIP
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: '800', color: 'var(--color-ink)', lineHeight: '1.2', marginBottom: '0.75rem' }}>
                We Own & Operate 7 Modern Luxury Buses
              </h3>
              <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.025rem', lineHeight: '1.6' }}>
                When you book a bus with Prabhuling, you deal directly with the fleet owner. Our buses undergo daily mechanical inspections, deep interior cleaning, & driver safety checks.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '1.25rem 1rem', borderRadius: '6px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: '800', color: 'var(--color-forest)' }}>7</div>
                <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.675rem', color: 'var(--color-ink-light)' }}>ACTIVE BUS FLEET</div>
              </div>

              <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '1.25rem 1rem', borderRadius: '6px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: '800', color: 'var(--color-terracotta)' }}>15+</div>
                <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.675rem', color: 'var(--color-ink-light)' }}>YEARS OF SERVICE</div>
              </div>

              <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '1.25rem 1rem', borderRadius: '6px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: '800', color: 'var(--color-forest)' }}>50,000+</div>
                <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.675rem', color: 'var(--color-ink-light)' }}>HAPPY PASSENGERS</div>
              </div>

              <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '1.25rem 1rem', borderRadius: '6px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: '800', color: 'var(--color-terracotta)' }}>100%</div>
                <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.675rem', color: 'var(--color-ink-light)' }}>HUMAN SUPPORT</div>
              </div>
            </div>
          </div>
        </PaperCard>

        {/* Feature Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.75rem' }}>
          <PaperCard paperType="cream" padding="1.5rem">
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
              Easy WhatsApp & Call Booking
            </h4>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
              Not comfortable navigating complex online payment traps? Message or call our agency desk directly for instant seat booking.
            </p>
          </PaperCard>

          <PaperCard paperType="sand" padding="1.5rem">
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
              All-In-One Travel Desk
            </h4>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
              One single agency handles bus charter, domestic flight bookings, train reservations, & custom group holiday itineraries.
            </p>
          </PaperCard>

          <PaperCard paperType="cream" padding="1.5rem">
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
              Real Human Support
            </h4>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
              No automated chatbots or endless call center hold queues. You speak directly to our local Karnataka agency team.
            </p>
          </PaperCard>
        </div>
      </div>
    </section>
  );
}

