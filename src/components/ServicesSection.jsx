import React from 'react';
import { SERVICES } from '../data/servicesData';
import PaperCard from './scrapbook/PaperCard';

export default function ServicesSection({ onOpenBookingModal }) {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-sheet)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>FULL SERVICE DESK</span>
          </div>
          <h2 className="section-title">
            TRAVEL DOSSIERS & BOOKING SERVICES
          </h2>
          <p className="section-desc">
            Personalized human assistance for flights, train tickets, vehicle charter rentals, & customized vacation packages.
          </p>
        </div>

        {/* Services Dossier Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {SERVICES.map((srv) => (
            <PaperCard
              key={srv.id}
              paperType="sand"
              padding="1.5rem"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'var(--color-forest)',
                      color: '#FFFFFF',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      fontSize: '1.25rem'
                    }}
                  >
                    {srv.icon || '✈'}
                  </div>

                  <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.675rem', color: 'var(--color-forest)', fontWeight: '700' }}>
                    DESK VERIFIED
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: 'var(--color-ink)',
                    marginBottom: '0.35rem'
                  }}
                >
                  {srv.title}
                </h3>

                <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.15rem', color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>
                  "{srv.tagline || 'Reliable booking support'}"
                </p>

                <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>
                  {srv.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.85rem' }}>
                <button
                  onClick={() => onOpenBookingModal({ service: srv.title })}
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  Request Booking Dossier →
                </button>
              </div>
            </PaperCard>
          ))}
        </div>
      </div>
    </section>
  );
}

