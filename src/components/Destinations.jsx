import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinationsData';

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Hill Stations', 'Coastal & Beaches', 'Heritage & Pilgrimage', 'Wildlife & Nature'];

  const filteredDestinations = activeCategory === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.category === activeCategory);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>MEMORIES & LANDSCAPES</span>
          </div>
          <h2 className="section-title">
            FEATURED DESTINATIONS
          </h2>
          <p className="section-desc">
            Hand-curated travel destinations across Karnataka & South India's finest sanctuaries.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              justify: 'center',
              gap: '0.65rem',
              flexWrap: 'wrap',
              marginTop: '1.75rem'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '0.775rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '4px',
                  border: activeCategory === cat ? '1px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                  backgroundColor: activeCategory === cat ? 'var(--color-terracotta)' : '#FDFBF7',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--color-ink)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Editorial Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '2rem 1.75rem'
          }}
        >
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              style={{
                backgroundColor: '#FDFBF7',
                borderRadius: '8px',
                border: '1px solid rgba(195, 180, 160, 0.45)',
                boxShadow: '0 4px 18px -2px rgba(34, 31, 29, 0.08)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px -4px rgba(34, 31, 29, 0.16)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px -2px rgba(34, 31, 29, 0.08)';
              }}
            >
              <div>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={dest.image}
                    alt={dest.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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
                      fontSize: '0.675rem',
                      fontWeight: '700',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '3px'
                    }}
                  >
                    {dest.duration || '2-4 Days'}
                  </div>
                </div>

                <div style={{ padding: '1.25rem 1.25rem 0.75rem 1.25rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: 'var(--color-ink)',
                      marginBottom: '0.2rem'
                    }}
                  >
                    {dest.name}
                  </h3>

                  <div style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.15rem', color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>
                    "{dest.subtitle || dest.tagline}"
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                    {dest.shortDesc || dest.description}
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: '0.85rem 1.25rem',
                  borderTop: '1px solid var(--color-border)',
                  backgroundColor: '#F5EFE3',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', color: 'var(--color-forest)' }}>
                  EST. FARE ₹{dest.startingPrice || '1,999'}
                </span>

                <Link
                  to={`/destinations/${dest.id}`}
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: 'var(--color-terracotta)',
                    textDecoration: 'none'
                  }}
                >
                  Explore Destination →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
