import React, { useState } from 'react';
import { PACKAGES } from '../data/packagesData';
import PaperCard from '../components/scrapbook/PaperCard';
import TravelStamp from '../components/scrapbook/TravelStamp';
import MapFragment from '../components/scrapbook/MapFragment';
import { Palmtree, Mountain, Bus } from 'lucide-react';

export default function ToursPage({ onOpenBookingModal }) {
  const [filterDest, setFilterDest] = useState('All');

  const filteredPackages = PACKAGES.filter(pkg => {
    if (filterDest === 'Heritage') return pkg.name.includes('Heritage') || pkg.name.includes('Temple') || pkg.name.includes('Pilgrimage');
    if (filterDest === 'Beach') return pkg.name.includes('Beach') || pkg.name.includes('Goa') || pkg.name.includes('Gokarna');
    if (filterDest === 'Hills') return pkg.name.includes('Coorg') || pkg.name.includes('Chikmagalur') || pkg.name.includes('Wayanad');
    return true;
  });

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <MapFragment opacity={0.06} />

      {/* Hero Banner with HD Background Image & Right-Aligned Content */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '5.5rem 0 5rem 0',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: '#0F1612',
          color: '#FFFFFF'
        }}
      >
        {/* Background Image (Full Bleed, 100% Crystal Clear & Bright) */}
        <img
          src="/tours-destinations.jfif"
          alt="Tours and Destinations Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            zIndex: 0,
            opacity: 1,
            filter: 'contrast(1.06) brightness(1.05)'
          }}
        />

        {/* Soft Feathered Right Overlay for Text Readability & Maximum Image Visibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(270deg, rgba(15, 22, 18, 0.72) 0%, rgba(15, 22, 18, 0.35) 45%, rgba(15, 22, 18, 0.02) 100%)',
            zIndex: 1
          }}
        />

        {/* Right-Aligned Hero Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              maxWidth: '820px',
              marginLeft: 'auto',
              marginRight: 0,
              textAlign: 'right',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
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
              HANDCRAFTED ITINERARIES • GROUP & FAMILY HOLIDAYS
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
              SIGNATURE TOURS & DESTINATIONS
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'rgba(253, 251, 247, 0.92)',
                lineHeight: '1.7',
                marginBottom: '1.75rem',
                maxWidth: '720px',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              All-inclusive holiday packages featuring luxury Prabhuling bus transfers, hotel stays, guided sightseeing, & dedicated human agency escorts across South India's top landscapes.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#FDFBF7'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(0,0,0,0.4)', padding: '0.45rem 1rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Palmtree size={18} style={{ color: '#38BDF8' }} /> Heritage & Coastal Tours
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(0,0,0,0.4)', padding: '0.45rem 1rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Mountain size={18} style={{ color: '#4ADE80' }} /> Coffee Hill Stations
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(0,0,0,0.4)', padding: '0.45rem 1rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Bus size={18} style={{ color: '#C9572E' }} /> Luxury Fleet Sightseeing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Folders Catalog */}
      <div className="container" style={{ marginTop: '3rem' }}>
        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ink)' }}>
              CURATED TOUR FOLDERS ({filteredPackages.length})
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
              Select any tour dossier to request custom dates or group fare breakdowns.
            </p>
          </div>

          <div style={{ display: 'inline-flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['All', 'Heritage', 'Beach', 'Hills'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterDest(type)}
                style={{
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '0.775rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '3px',
                  border: filterDest === type ? '1px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                  backgroundColor: filterDest === type ? 'var(--color-terracotta)' : 'var(--color-paper-sheet)',
                  color: filterDest === type ? '#FFFFFF' : 'var(--color-ink)',
                  cursor: 'pointer'
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Tour Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem 1.75rem' }}>
          {filteredPackages.map((pkg, idx) => {
            const rot = idx % 2 === 0 ? '-1deg' : '1deg';

            return (
              <PaperCard
                key={pkg.id}
                paperType="cream"
                torn="none"
                rotation={rot}
                tape={true}
                tapePosition="top-center"
                padding="0"
              >
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img src={pkg.image} alt={pkg.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                      borderRadius: '2px'
                    }}
                  >
                    {pkg.duration}
                  </div>
                  <div style={{ position: 'absolute', bottom: '12px', right: '12px' }}>
                    <TravelStamp text="APPROVED TOUR" size="small" color="#FFFFFF" rotation="-6deg" />
                  </div>
                </div>

                <div style={{ padding: '1.35rem 1.25rem 1.25rem 1.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.2rem' }}>
                    {pkg.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.15rem', color: 'var(--color-terracotta)', marginBottom: '0.65rem' }}>
                    "{pkg.tagline || pkg.subtitle}"
                  </p>

                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.625rem', color: 'var(--color-ink-light)', display: 'block' }}>STARTING FROM</span>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--color-forest)' }}>
                          ₹{pkg.price ? pkg.price.toLocaleString() : '4,999'}
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenBookingModal({ service: 'Tour Package', tourName: pkg.name })}
                        className="btn btn-primary btn-sm"
                      >
                        Enquire Package →
                      </button>
                    </div>
                  </div>
                </div>
              </PaperCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
