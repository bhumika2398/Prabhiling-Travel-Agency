import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '92vh',
        minHeight: '620px',
        maxHeight: '1000px',
        marginTop: '-72px', // Pull background up behind transparent header
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        overflow: 'hidden',
        backgroundColor: '#121914'
      }}
    >
      {/* 1. Cinematic Background Image */}
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85"
        alt="Traveler overlooking misty Western Ghats mountains in Karnataka"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 35%',
          filter: 'brightness(0.9) contrast(1.05)'
        }}
        loading="eager"
      />

      {/* 2. Subtle Soft Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(18, 25, 20, 0.45) 0%, rgba(18, 25, 20, 0.25) 45%, rgba(18, 25, 20, 0.85) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* 3. Minimal Coordinates / Location Tag (Top Right) */}
      <div
        style={{
          position: 'absolute',
          top: '100px',
          right: '5%',
          zIndex: 10,
          color: 'rgba(255, 255, 255, 0.85)',
          fontFamily: 'var(--font-typewriter)',
          fontSize: '0.725rem',
          letterSpacing: '0.15em',
          display: 'none',
          mdDisplay: 'block'
        }}
        className="hero-location-tag"
      >
        <MapPin size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px', color: 'var(--color-terracotta)' }} /> 12°25'N 75°44'E • WESTERN GHATS
      </div>

      {/* 4. Central Hero Copy & Actions */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '3.5rem',
          textAlign: 'center',
          maxWidth: '860px',
          color: '#FFFFFF'
        }}
      >
        {/* Subtle Brand Tagline */}
        <div
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-typewriter)',
            fontSize: '0.775rem',
            color: '#FDFBF7',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            padding: '0.35rem 1.15rem',
            borderRadius: '2px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(4px)'
          }}
        >
          PRABHULING TRAVELS • SOUTH INDIA
        </div>

        {/* Large Expressive Editorial Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            lineHeight: '1.05',
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.4)'
          }}
        >
          YOUR NEXT <br />
          <span style={{ fontStyle: 'italic', fontWeight: '400', color: '#FDFBF7' }}>ADVENTURE</span> AWAITS.
        </h1>

        {/* Short Concise Supporting Statement */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.92)',
            fontWeight: '400',
            lineHeight: '1.6',
            maxWidth: '680px',
            margin: '0 auto 2.25rem auto',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}
        >
          Curated journeys across Karnataka & South India, designed around the way you love to travel.
        </p>

        {/* Primary CTA & Secondary Action */}
        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/tours"
            className="btn"
            style={{
              backgroundColor: 'var(--color-terracotta)',
              color: '#FFFFFF',
              padding: '1rem 2.4rem',
              fontSize: '1rem',
              fontWeight: '700',
              letterSpacing: '0.05em',
              borderRadius: '4px',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 6px 20px rgba(200, 90, 50, 0.35)',
              textDecoration: 'none'
            }}
          >
            EXPLORE TOURS <ArrowRight size={18} />
          </Link>

          <a
            href="#destinations-intro"
            style={{
              color: 'rgba(255, 255, 255, 0.88)',
              fontFamily: 'var(--font-typewriter)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.8rem 1.25rem',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease'
            }}
          >
            DISCOVER DESTINATIONS <ArrowDown size={14} />
          </a>
        </div>
      </div>

      {/* 5. Scroll Indicator at Bottom */}
      <a
        href="#destinations-intro"
        style={{
          position: 'absolute',
          bottom: '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          color: 'rgba(255, 255, 255, 0.75)',
          fontFamily: 'var(--font-typewriter)',
          fontSize: '0.675rem',
          letterSpacing: '0.18em',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem'
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} style={{ animation: 'bounce 2s infinite' }} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-3px); }
        }
        @media (min-width: 768px) {
          .hero-location-tag { display: block !important; }
        }
      `}</style>
    </section>
  );
}
