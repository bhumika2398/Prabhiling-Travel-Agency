import React from 'react';
import { TESTIMONIALS } from '../data/testimonialsData';
import PaperCard from './scrapbook/PaperCard';

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-sheet)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>VERIFIED REVIEWS</span>
          </div>
          <h2 className="section-title">
            WORDS FROM OUR TRAVELERS
          </h2>
          <p className="section-desc">
            Authentic experiences shared by families, group bus charters, & holiday travelers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '2rem 1.75rem'
          }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <PaperCard
              key={t.id}
              paperType={idx % 2 === 0 ? 'cream' : 'sand'}
              padding="1.5rem"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <div style={{ color: '#EAB308', fontSize: '1.1rem', letterSpacing: '2px' }}>
                  {'★'.repeat(t.rating || 5)}
                </div>
                <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.675rem', color: 'var(--color-forest)', fontWeight: '700' }}>
                  VERIFIED TRAVELER
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.35rem',
                  color: 'var(--color-ink)',
                  lineHeight: '1.35',
                  marginBottom: '1.25rem'
                }}
              >
                "{t.comment}"
              </p>

              <div
                style={{
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '0.75rem',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-forest)', display: 'block' }}>
                    {t.name}
                  </strong>
                  <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.675rem', color: 'var(--color-ink-light)' }}>
                    {t.location || 'Bengaluru, KA'}
                  </span>
                </div>

                {t.tripType && (
                  <span
                    style={{
                      fontFamily: 'var(--font-typewriter)',
                      fontSize: '0.65rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-border)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      color: 'var(--color-terracotta)',
                      fontWeight: '700'
                    }}
                  >
                    {t.tripType}
                  </span>
                )}
              </div>
            </PaperCard>
          ))}
        </div>
      </div>
    </section>
  );
}

