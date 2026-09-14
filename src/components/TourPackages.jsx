import React from 'react';
import { PACKAGES } from '../data/packagesData';
import PaperCard from './scrapbook/PaperCard';

export default function TourPackages({ onOpenPackageModal, onOpenBookingModal }) {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-sheet)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>CURATED ITINERARIES</span>
          </div>
          <h2 className="section-title">
            SIGNATURE TOUR PACKAGES
          </h2>
          <p className="section-desc">
            Carefully structured itineraries including dedicated bus transport, premium hotel stays, & local guided experiences.
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem 1.75rem'
          }}
        >
          {PACKAGES.map((pkg) => (
            <div key={pkg.id}>
              <PaperCard
                paperType="cream"
                padding="0"
              >
                {/* Hero Package Image */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />

                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'var(--color-forest)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-typewriter)',
                      fontSize: '0.725rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px',
                      letterSpacing: '0.05em',
                      fontWeight: '700'
                    }}
                  >
                    {pkg.duration}
                  </div>
                </div>

                {/* Content Sheet */}
                <div style={{ padding: '1.35rem 1.25rem 1.25rem 1.25rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: '700',
                      color: 'var(--color-ink)',
                      lineHeight: '1.25',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {pkg.name}
                  </h3>

                  <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.15rem', color: 'var(--color-terracotta)', marginBottom: '0.75rem' }}>
                    "{pkg.tagline || pkg.subtitle}"
                  </p>

                  {/* Highlights List */}
                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div style={{ marginBottom: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
                      <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.675rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>
                        PACKAGE HIGHLIGHTS:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {pkg.highlights.slice(0, 3).map((hl, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '0.775rem',
                              backgroundColor: '#FFFFFF',
                              border: '1px solid var(--color-border)',
                              padding: '0.2rem 0.55rem',
                              borderRadius: '3px',
                              color: 'var(--color-ink-muted)'
                            }}
                          >
                            ✓ {hl}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer Metadata */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-border)',
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.625rem', color: 'var(--color-ink-light)', display: 'block' }}>STARTING FROM</span>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--color-forest)' }}>
                        ₹{pkg.price ? pkg.price.toLocaleString() : '4,999'}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <button
                        onClick={() => onOpenPackageModal(pkg)}
                        className="btn btn-outline btn-sm"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onOpenBookingModal({ service: 'Tour Package', tourName: pkg.name })}
                        className="btn btn-primary btn-sm"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              </PaperCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

