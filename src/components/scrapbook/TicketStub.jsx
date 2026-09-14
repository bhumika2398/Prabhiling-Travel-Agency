import React from 'react';

export default function TicketStub({
  ticketType = 'PASSENGER BUS PASS #01',
  title,
  subtitle,
  origin = 'Bengaluru',
  destination = 'South India',
  price,
  details = [],
  stampText = 'OPERATED FLEET',
  status = 'OPERATIONAL',
  image,
  onBook,
  onViewDetail,
  style = {}
}) {
  const visibleFeatures = details.slice(0, 3);
  const remainingCount = details.length > 3 ? details.length - 3 : 0;
  const defaultPlaceholder = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80";

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-paper-sheet)',
        border: '1px solid var(--color-border)',
        borderRadius: '10px',
        boxShadow: '0 4px 18px -2px rgba(34, 31, 29, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        justify: 'space-between',
        overflow: 'hidden',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 12px 28px -4px rgba(34, 31, 29, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 18px -2px rgba(34, 31, 29, 0.06)';
      }}
    >
      <div>
        {/* 1. Top Bus Picture Card (Photo Placeholder Container) */}
        <div style={{ position: 'relative', height: '185px', width: '100%', overflow: 'hidden', backgroundColor: 'var(--color-paper-cream)' }}>
          <img
            src={image || defaultPlaceholder}
            alt={title || "Luxury Bus Coach"}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />

          {/* Top Left Ticket Badge Overlay */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: 'rgba(27, 77, 62, 0.92)',
              backdropFilter: 'blur(4px)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-typewriter)',
              fontSize: '0.65rem',
              fontWeight: '700',
              padding: '0.25rem 0.65rem',
              borderRadius: '4px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            {ticketType}
          </div>

          {/* Top Right Operational Status Overlay */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'rgba(253, 251, 247, 0.94)',
              backdropFilter: 'blur(4px)',
              color: 'var(--color-forest)',
              fontFamily: 'var(--font-typewriter)',
              fontSize: '0.625rem',
              fontWeight: '700',
              padding: '0.25rem 0.65rem',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              letterSpacing: '0.06em',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                display: 'inline-block'
              }}
            />
            {status}
          </div>
        </div>

        {/* 2. Main Content Body */}
        <div style={{ padding: '1.25rem 1.25rem 0.75rem 1.25rem' }}>
          {/* Header Title & Fleet Tag */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  color: 'var(--color-ink)',
                  lineHeight: '1.25',
                  marginBottom: '0.25rem'
                }}
              >
                {title}
              </h3>

              {subtitle && (
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    color: 'var(--color-ink-muted)',
                    fontWeight: '500'
                  }}
                >
                  {subtitle}
                </div>
              )}
            </div>

            {stampText && (
              <span
                style={{
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '0.625rem',
                  fontWeight: '700',
                  color: 'var(--color-terracotta)',
                  border: '1px solid rgba(200, 90, 50, 0.3)',
                  backgroundColor: 'rgba(200, 90, 50, 0.05)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  letterSpacing: '0.06em',
                  whiteSpace: 'nowrap',
                  marginTop: '2px'
                }}
              >
                ✓ {stampText}
              </span>
            )}
          </div>

          {/* 3. Itinerary Route Container */}
          {(origin || destination) && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                backgroundColor: 'var(--color-paper-cream)',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                border: '1px solid rgba(195, 180, 160, 0.3)',
                marginBottom: '1rem'
              }}
            >
              <div>
                <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.6rem', color: 'var(--color-ink-light)', display: 'block', letterSpacing: '0.08em', marginBottom: '2px' }}>
                  FROM
                </span>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--color-ink)', fontWeight: '700' }}>
                  {origin}
                </strong>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-terracotta)', fontSize: '0.85rem' }}>
                <span style={{ borderBottom: '1.5px solid var(--color-terracotta)', width: '24px', opacity: 0.6 }} />
                <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>→</span>
                <span style={{ borderBottom: '1.5px solid var(--color-terracotta)', width: '24px', opacity: 0.6 }} />
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.6rem', color: 'var(--color-ink-light)', display: 'block', letterSpacing: '0.08em', marginBottom: '2px' }}>
                  TO
                </span>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--color-ink)', fontWeight: '700' }}>
                  {destination}
                </strong>
              </div>
            </div>
          )}

          {/* 4. Features Inline List */}
          {details.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.35rem 0.55rem',
                fontSize: '0.825rem',
                color: 'var(--color-ink-muted)',
                marginBottom: '1rem'
              }}
            >
              {visibleFeatures.map((item, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span style={{ color: 'var(--color-ink-light)', opacity: 0.5 }}>·</span>}
                  <span>✓ {item}</span>
                </React.Fragment>
              ))}

              {remainingCount > 0 && (
                <span style={{ fontSize: '0.775rem', color: 'var(--color-terracotta)', fontWeight: '600' }}>
                  +{remainingCount} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 5. Clean Footer Section */}
      <div style={{ padding: '0 1.25rem 1.25rem 1.25rem' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)', opacity: 0.6, marginBottom: '0.85rem' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.6rem', color: 'var(--color-ink-light)', display: 'block', letterSpacing: '0.08em' }}>
              FARE / RATE
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', color: 'var(--color-forest)' }}>
              {price || 'Contact for rate'}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {onViewDetail && (
              <button
                onClick={onViewDetail}
                className="btn btn-outline btn-sm"
                style={{
                  fontSize: '0.825rem',
                  padding: '0.45rem 0.85rem',
                  border: '1px solid var(--color-border-strong)',
                  backgroundColor: 'transparent',
                  boxShadow: 'none'
                }}
              >
                View Specs
              </button>
            )}

            {onBook && (
              <button
                onClick={onBook}
                className="btn btn-primary btn-sm"
                style={{
                  fontSize: '0.85rem',
                  padding: '0.45rem 1rem'
                }}
              >
                Book Pass →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


