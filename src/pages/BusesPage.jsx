import React, { useState } from 'react';
import { FLEET } from '../data/fleetData';
import TicketStub from '../components/scrapbook/TicketStub';

export default function BusesPage({ onOpenBookingModal }) {
  const [filterType, setFilterType] = useState('All');

  const filteredBuses = FLEET.filter(bus => {
    if (filterType === 'Sleeper') return bus.type.includes('Sleeper');
    if (filterType === 'Seater') return bus.type.includes('Seater');
    if (filterType === 'AC') return bus.type.includes('AC');
    return true;
  });

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      {/* Hero Banner with Video Background & Centered Content */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '5.5rem 0 5rem 0',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: '#141E18',
          color: '#FFFFFF'
        }}
      >
        {/* Background Video (100% Full Opacity & Maximum HD Clarity) */}
        <video
          src="/bus.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 1.0
          }}
        />

        {/* Ultra-Light Transparent Overlay for 100% Clear Video */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.45) 100%)',
            zIndex: 1
          }}
        />

        {/* Centered Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.4rem 1.15rem',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#FDFBF7',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '30px',
                fontFamily: 'var(--font-typewriter)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                marginBottom: '1rem',
                backdropFilter: 'blur(6px)'
              }}
            >
              OFFICIAL FLEET DOSSIER • 7 OPERATED BUSES
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                marginTop: '0.5rem',
                marginBottom: '1rem',
                lineHeight: '1.1',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              OUR 7-BUS LUXURY FLEET
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'rgba(253, 251, 247, 0.92)',
                lineHeight: '1.7',
                marginBottom: '1.75rem',
                maxWidth: '740px',
                margin: '0 auto 1.75rem auto',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              Prabhuling Travel Agency directly operates <strong>7 modern AC & Non-AC sleeper & executive seater buses</strong>. Every coach is inspected daily, sanitised, & assigned to experienced long-distance highway drivers.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1.25rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#FDFBF7'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(0,0,0,0.4)', padding: '0.4rem 0.9rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}>🚌 7 Owned Luxury Coaches</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(0,0,0,0.4)', padding: '0.4rem 0.9rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}>🛡️ Daily Mechanical & Safety Check</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(0,0,0,0.4)', padding: '0.4rem 0.9rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}>⭐ AC Sleeper & Seater Berths</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Catalog */}
      <div className="container" style={{ marginTop: '3rem' }}>
        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ink)' }}>
              AVAILABLE BUS PASSES & CHARTERS
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
              Select any bus ticket pass below to reserve seat berths or book full private charter.
            </p>
          </div>

          <div style={{ display: 'inline-flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['All', 'Sleeper', 'Seater', 'AC'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterType(cat)}
                style={{
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '0.775rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '4px',
                  border: filterType === cat ? '1px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                  backgroundColor: filterType === cat ? 'var(--color-terracotta)' : 'var(--color-paper-sheet)',
                  color: filterType === cat ? '#FFFFFF' : 'var(--color-ink)',
                  cursor: 'pointer'
                }}
              >
                {cat === 'All' ? `All 7 Fleet Buses` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem 1.75rem' }}>
          {filteredBuses.map((bus, idx) => (
            <TicketStub
              key={bus.id}
              ticketType={`PASSENGER BUS PASS #${idx + 1}`}
              title={bus.name}
              subtitle={`${bus.type} (${bus.capacity} Seats)`}
              origin={bus.primaryRoute ? bus.primaryRoute.split('↔')[0].trim() : 'Bengaluru'}
              destination={bus.primaryRoute ? bus.primaryRoute.split('↔')[1]?.split('(')[0].trim() : 'South India'}
              price={bus.startingPrice ? `₹${bus.startingPrice}/seat` : 'Contact for rate'}
              details={bus.amenities || bus.features || ['AC Sleeper', 'Pushback Seats', 'Charging Ports', 'GPS Tracking']}
              stampText="OPERATED FLEET"
              status="OPERATIONAL"
              image={bus.image}
              onBook={() => onOpenBookingModal({ service: 'Bus Rental', busId: bus.id, busName: bus.name })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

