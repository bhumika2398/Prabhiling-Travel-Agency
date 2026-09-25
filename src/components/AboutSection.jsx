import React from 'react';
import { Link } from 'react-router-dom';
import TravelStamp from './scrapbook/TravelStamp';
import AnimatedCounter from './ui/AnimatedCounter';

export default function AboutSection({ onOpenBookingModal }) {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-paper-bg)',
        padding: '5rem 0',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Pinned Company Photo */}
          <div style={{ gridColumn: 'span 12 / span 12' }} className="about-left">
            <div style={{ position: 'relative', maxWidth: '460px', margin: '0 auto' }}>
              {/* Clean Photo Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '0.85rem 0.85rem 1.5rem 0.85rem',
                  borderRadius: '6px',
                  boxShadow: 'var(--shadow-photo)',
                  border: '1px solid var(--color-border)',
                  position: 'relative'
                }}
              >
                <img
                  src="/about.jfif"
                  alt="Prabhuling Travel Agency Fleet & Team"
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    display: 'block'
                  }}
                />

                <div style={{ marginTop: '1rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--color-terracotta)' }}>
                    "Our fleet & team on South India roads..."
                  </span>
                  <TravelStamp text="ESTABLISHED" color="var(--color-forest)" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Journal Story */}
          <div style={{ gridColumn: 'span 12 / span 12' }} className="about-right">
            <div
              style={{
                backgroundColor: 'var(--color-paper-sheet)',
                padding: '2.5rem 2.25rem',
                borderRadius: '6px',
                boxShadow: 'var(--shadow-paper)',
                position: 'relative',
                borderLeft: '4px solid var(--color-forest)',
                border: '1px solid var(--color-border)',
                borderLeftWidth: '4px'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '0.75rem',
                  color: 'var(--color-forest)',
                  letterSpacing: '0.12em',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}
              >
                OUR MANIFESTO & STORY
              </span>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: '800',
                  color: 'var(--color-ink)',
                  lineHeight: '1.15',
                  marginBottom: '1rem'
                }}
              >
                WE DON'T JUST PLAN TRIPS.<br />
                <span style={{ color: 'var(--color-terracotta)', fontStyle: 'italic' }}>WE COLLECT STORIES.</span>
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-muted)', lineHeight: '1.65', marginBottom: '1rem' }}>
                Prabhuling Travel Agency was founded with a single mission: to craft genuine, effortless, & memorable journeys across South India. With our dedicated fleet of 7 luxury sleeper & seater buses, custom train & flight ticketing, & tailored holiday packages, we look after every traveler as family.
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                Whether you're organizing a pilgrim bus charter for 40 passengers, a family mountain retreat to Coorg, or a flight booking across India, our human team manages every detail.
              </p>

              {/* Stats Timeline Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '1.25rem',
                  marginBottom: '1.75rem'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '800', color: 'var(--color-forest)' }}>
                    <AnimatedCounter target={7} suffix="+" />
                  </div>
                  <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', color: 'var(--color-ink-light)' }}>
                    OWNED BUS FLEET
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '800', color: 'var(--color-terracotta)' }}>
                    <AnimatedCounter target={50000} suffix="+" />
                  </div>
                  <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', color: 'var(--color-ink-light)' }}>
                    HAPPY TRAVELERS
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '800', color: 'var(--color-forest)' }}>
                    <AnimatedCounter target={100} suffix="%" />
                  </div>
                  <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', color: 'var(--color-ink-light)' }}>
                    HUMAN ASSISTANCE
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-primary">
                  Read Full Story →
                </Link>
                <button
                  onClick={() => onOpenBookingModal()}
                  className="btn btn-outline"
                >
                  Contact Desk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-left { grid-column: span 5 / span 5 !important; }
          .about-right { grid-column: span 7 / span 7 !important; }
        }
      `}</style>
    </section>
  );
}

