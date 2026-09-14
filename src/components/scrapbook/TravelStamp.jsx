import React from 'react';

export default function TravelStamp({
  text = 'VERIFIED',
  subtext,
  color = 'var(--color-forest)',
  style = {}
}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.2rem 0.6rem',
        backgroundColor: 'var(--color-paper-cream)',
        color: color,
        border: `1px solid ${color}`,
        borderRadius: '3px',
        fontFamily: 'var(--font-typewriter)',
        fontSize: '0.675rem',
        fontWeight: '700',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        ...style
      }}
    >
      <span>✓</span>
      <span>{text}</span>
      {subtext && <span style={{ opacity: 0.8 }}>• {subtext}</span>}
    </span>
  );
}

