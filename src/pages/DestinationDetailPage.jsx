import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinationsData';
import PaperCard from '../components/scrapbook/PaperCard';
import Polaroid from '../components/scrapbook/Polaroid';
import TravelStamp from '../components/scrapbook/TravelStamp';
import MapFragment from '../components/scrapbook/MapFragment';

export default function DestinationDetailPage({ onOpenBookingModal }) {
  const { id } = useParams();
  const dest = DESTINATIONS.find(d => d.id === id) || DESTINATIONS[0];

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <MapFragment opacity={0.06} />

      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--color-paper-sheet)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0 3rem 0', position: 'relative' }}>
        <div className="container">
          <Link to="/destinations" style={{ color: 'var(--color-terracotta)', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
            ← Back to All Destinations
          </Link>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="section-tag">
                DESTINATION DOSSIER • {dest.category || 'KARNATAKA'}
              </span>

              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  color: 'var(--color-ink)',
                  marginTop: '0.75rem',
                  marginBottom: '0.5rem'
                }}
              >
                {dest.name}
              </h1>

              <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.35rem', color: 'var(--color-forest)' }}>
                "{dest.subtitle || dest.tagline}"
              </p>
            </div>

            <TravelStamp text="VISITED" subtext={dest.state || 'SOUTH INDIA'} size="medium" color="var(--color-forest)" rotation="6deg" />
          </div>
        </div>
      </section>

      {/* Main Details */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          <div>
            <Polaroid
              image={dest.image}
              title={dest.name}
              location={`${dest.state}, India`}
              rotation="-1deg"
              tape={true}
              tapePosition="top-center"
            />

            <PaperCard paperType="sheet" rotation="1deg" padding="2rem" style={{ marginTop: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
                Journal Overview & Travel Guide
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                {dest.description || dest.overview}
              </p>

              <button
                className="btn btn-primary btn-lg"
                onClick={() => onOpenBookingModal({ service: 'Tour Package', destination: dest.name })}
              >
                Plan Trip to {dest.name} →
              </button>
            </PaperCard>
          </div>
        </div>
      </div>
    </div>
  );
}
