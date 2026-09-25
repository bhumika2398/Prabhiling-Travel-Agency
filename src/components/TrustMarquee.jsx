import React from 'react';
import { Bus, ShieldCheck, Users, Clock, BadgeCheck, MapPin, MessageCircle, Star } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Bus, label: '7+ Luxury Buses' },
  { icon: ShieldCheck, label: '10+ Years of Trust' },
  { icon: Users, label: '5,000+ Happy Travelers' },
  { icon: Clock, label: '24/7 Human Support' },
  { icon: BadgeCheck, label: '100% Transparent Pricing' },
  { icon: MapPin, label: 'South India Coverage' },
  { icon: MessageCircle, label: 'WhatsApp Booking Desk' },
  { icon: Star, label: '4.9/5 Rated Service' },
];

function MarqueeTrack() {
  return (
    <div className="trust-marquee-track">
      {TRUST_ITEMS.map((item, idx) => (
        <span className="trust-marquee-item" key={idx}>
          <item.icon size={16} style={{ color: 'var(--color-terracotta)', flexShrink: 0 }} />
          {item.label}
          <span className="trust-marquee-dot" />
        </span>
      ))}
    </div>
  );
}

export default function TrustMarquee() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-ink)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        position: 'relative'
      }}
      aria-label="Why travelers trust Prabhuling Travels"
    >
      <div className="trust-marquee-viewport">
        <MarqueeTrack />
        <MarqueeTrack aria-hidden="true" />
      </div>

      {/* Soft edge fades so items don't hard-cut at the viewport edge */}
      <div className="trust-marquee-fade trust-marquee-fade-left" />
      <div className="trust-marquee-fade trust-marquee-fade-right" />

      <style>{`
        .trust-marquee-viewport {
          display: flex;
          width: max-content;
          animation: trust-marquee-scroll 32s linear infinite;
        }
        .trust-marquee-viewport:hover {
          animation-play-state: paused;
        }
        .trust-marquee-track {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .trust-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.88);
          white-space: nowrap;
          padding: 0.95rem 1.75rem;
        }
        .trust-marquee-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.25);
          margin-left: 1.75rem;
        }
        .trust-marquee-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 90px;
          pointer-events: none;
          z-index: 2;
        }
        .trust-marquee-fade-left {
          left: 0;
          background: linear-gradient(90deg, var(--color-ink) 0%, transparent 100%);
        }
        .trust-marquee-fade-right {
          right: 0;
          background: linear-gradient(270deg, var(--color-ink) 0%, transparent 100%);
        }
        @keyframes trust-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-marquee-viewport {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
