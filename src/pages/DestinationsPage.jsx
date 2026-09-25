import React from 'react';
import Destinations from '../components/Destinations';
import MapFragment from '../components/scrapbook/MapFragment';

export default function DestinationsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', minHeight: '100vh' }}>
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
          alt="Featured Destinations Background"
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
              TRAVEL MEMORIES & LANDSCAPES
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
              Featured Destinations
            </h1>

            <p style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--color-terracotta)', marginBottom: '1.1rem' }}>
              Landscapes worth the detour.
            </p>

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
              Explore UNESCO World Heritage ruins, coastal sanctuaries, misty coffee estates, & sacred temple shrines connected by Prabhuling bus routes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Destinations Collage */}
      <Destinations />
    </div>
  );
}
