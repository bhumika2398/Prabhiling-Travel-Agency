import React from 'react';
import { SERVICES } from '../data/servicesData';
import PaperCard from './scrapbook/PaperCard';
import { Bus, Plane, Train, Compass, Car, Headphones, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onOpenBookingModal }) {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Bus': return <Bus size={22} />;
      case 'Plane': return <Plane size={22} />;
      case 'Train': return <Train size={22} />;
      case 'Compass': return <Compass size={22} />;
      case 'Car': return <Car size={22} />;
      case 'Headphones': return <Headphones size={22} />;
      default: return <Plane size={22} />;
    }
  };

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
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px', borderRadius: '18px' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'var(--color-forest)',
                      color: '#FFFFFF',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {renderIcon(srv.iconName)}
                  </div>

                  <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.675rem', color: 'var(--color-forest)', fontWeight: '700' }}>
                    DESK VERIFIED
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    color: 'var(--color-ink)',
                    marginBottom: '0.2rem'
                  }}
                >
                  {srv.title}
                </h3>

                <span style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-terracotta)', display: 'block', marginBottom: '0.6rem' }}>
                  "{srv.tagline}"
                </span>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                  {srv.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: '0.65rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '30px',
                    color: 'var(--color-terracotta)',
                    fontWeight: '700'
                  }}
                >
                  {srv.badge || 'AVAILABLE'}
                </span>

                <button
                  onClick={() => onOpenBookingModal({ service: srv.title })}
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: 'var(--color-forest)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    cursor: 'pointer'
                  }}
                >
                  Book Service <ArrowRight size={14} />
                </button>
              </div>
            </PaperCard>
          ))}
        </div>
      </div>
    </section>
  );
}
