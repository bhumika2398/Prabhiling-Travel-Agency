import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinationsData';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedGallery, setSelectedGallery] = useState(null); // { name: string, photos: string[], activeIdx: number }

  const categories = ['All', 'Hill Stations', 'Coastal & Beaches', 'Heritage & Pilgrimage', 'Wildlife & Nature'];

  const filteredDestinations = activeCategory === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.category === activeCategory);

  const fallbackImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

  const openGallery = (dest, initialIdx = 0) => {
    const photos = (dest.gallery && dest.gallery.length > 0) 
      ? dest.gallery 
      : [dest.image || fallbackImage];
    setSelectedGallery({
      name: dest.name,
      photos,
      activeIdx: initialIdx
    });
  };

  const closeGallery = () => setSelectedGallery(null);

  const nextPhoto = (e) => {
    e?.stopPropagation();
    if (!selectedGallery) return;
    setSelectedGallery(prev => ({
      ...prev,
      activeIdx: (prev.activeIdx + 1) % prev.photos.length
    }));
  };

  const prevPhoto = (e) => {
    e?.stopPropagation();
    if (!selectedGallery) return;
    setSelectedGallery(prev => ({
      ...prev,
      activeIdx: (prev.activeIdx - 1 + prev.photos.length) % prev.photos.length
    }));
  };

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
                  padding: '0.45rem 1.1rem',
                  borderRadius: '4px',
                  border: activeCategory === cat ? '1px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                  backgroundColor: activeCategory === cat ? 'var(--color-terracotta)' : '#FDFBF7',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--color-ink)',
                  cursor: 'pointer',
                  fontWeight: '700',
                  transition: 'all 0.25s ease',
                  boxShadow: activeCategory === cat ? '0 3px 10px rgba(200, 90, 50, 0.25)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '2rem 1.75rem'
          }}
        >
          {filteredDestinations.map((dest) => {
            const photoList = (dest.gallery && dest.gallery.length > 0) ? dest.gallery : [dest.image || fallbackImage];
            return (
              <div
                key={dest.id}
                style={{
                  backgroundColor: '#FDFBF7',
                  borderRadius: '10px',
                  border: '1px solid rgba(195, 180, 160, 0.5)',
                  boxShadow: 'var(--shadow-paper)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
                }}
                className="card"
              >
                <div>
                  {/* Image Container with Zoom & Click to View Photo Gallery */}
                  <div 
                    onClick={() => openGallery(dest, 0)}
                    style={{ position: 'relative', height: '220px', overflow: 'hidden', backgroundColor: 'var(--color-paper-cream)', cursor: 'pointer' }}
                    title="Click to view destination photo gallery"
                  >
                    <img
                      src={dest.image || fallbackImage}
                      alt={dest.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallbackImage;
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease'
                      }}
                      loading="lazy"
                    />

                    {/* Duration Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'var(--color-forest)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.675rem',
                        fontWeight: '700',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '4px',
                        letterSpacing: '0.04em',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                      }}
                    >
                      {dest.duration || '2-4 Days'}
                    </div>

                    {/* Category Pill Tag */}
                    {dest.category && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          backgroundColor: 'rgba(253, 251, 247, 0.92)',
                          color: 'var(--color-ink)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.65rem',
                          fontWeight: '700',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(195, 180, 160, 0.6)',
                          backdropFilter: 'blur(2px)'
                        }}
                      >
                        {dest.category}
                      </div>
                    )}

                    {/* Photo Gallery Badge Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(15, 22, 18, 0.75)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '20px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}
                    >
                      <Camera size={13} style={{ color: '#E29578' }} />
                      <span>{photoList.length} Photos</span>
                    </div>
                  </div>

                  {/* Thumbnail Strip Preview */}
                  {photoList.length > 1 && (
                    <div 
                      style={{ 
                        display: 'flex', 
                        gap: '4px', 
                        padding: '6px 12px', 
                        backgroundColor: '#F5EFE3', 
                        borderBottom: '1px solid var(--color-border)',
                        overflowX: 'auto'
                      }}
                    >
                      {photoList.map((imgUrl, pIdx) => (
                        <img
                          key={pIdx}
                          src={imgUrl}
                          alt={`${dest.name} photo ${pIdx + 1}`}
                          onClick={() => openGallery(dest, pIdx)}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = fallbackImage;
                          }}
                          style={{
                            width: '44px',
                            height: '32px',
                            objectFit: 'cover',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            border: '1px solid rgba(0,0,0,0.15)',
                            transition: 'opacity 0.2s ease, transform 0.2s ease'
                          }}
                          title={`View photo ${pIdx + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Card Content Body */}
                  <div style={{ padding: '1.25rem 1.25rem 0.75rem 1.25rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.45rem',
                        fontWeight: '700',
                        color: 'var(--color-ink)',
                        marginBottom: '0.25rem',
                        lineHeight: '1.2'
                      }}
                    >
                      {dest.name}
                    </h3>

                    <div style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.15rem', color: 'var(--color-terracotta)', marginBottom: '0.55rem' }}>
                      "{dest.tagline || dest.subtitle}"
                    </div>

                    <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: '1.55', marginBottom: '0.75rem' }}>
                      {dest.description || dest.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
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
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.725rem', color: 'var(--color-forest)', fontWeight: '700' }}>
                    EST. FARE ₹{dest.startingPrice ? dest.startingPrice.toLocaleString() : '1,999'}
                  </span>

                  <Link
                    to={`/destinations/${dest.id}`}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: 'var(--color-terracotta)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    Explore Destination →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* High-Resolution Photo Gallery Lightbox Modal */}
      {selectedGallery && (
        <div
          onClick={closeGallery}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(10, 14, 12, 0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            alignItems: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          {/* Modal Top Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '1000px',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              color: '#FFFFFF'
            }}
          >
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#FFFFFF', margin: 0 }}>
                {selectedGallery.name}
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#A0B0A5' }}>
                Photo {selectedGallery.activeIdx + 1} of {selectedGallery.photos.length}
              </span>
            </div>

            <button
              onClick={closeGallery}
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#FFFFFF',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Close gallery"
            >
              <X size={22} />
            </button>
          </div>

          {/* Main Photo Viewing Stage */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '1000px',
              maxHeight: '70vh',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justify: 'center'
            }}
          >
            {selectedGallery.photos.length > 1 && (
              <button
                onClick={prevPhoto}
                style={{
                  position: 'absolute',
                  left: '10px',
                  zIndex: 10,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#FFFFFF',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={28} />
              </button>
            )}

            <img
              src={selectedGallery.photos[selectedGallery.activeIdx]}
              alt={`${selectedGallery.name} picture`}
              style={{
                maxHeight: '68vh',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
              }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = fallbackImage;
              }}
            />

            {selectedGallery.photos.length > 1 && (
              <button
                onClick={nextPhoto}
                style={{
                  position: 'absolute',
                  right: '10px',
                  zIndex: 10,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#FFFFFF',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>

          {/* Bottom Thumbnail Selector Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              gap: '10px',
              padding: '0.75rem 1rem',
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: '30px',
              maxWidth: '90vw',
              overflowX: 'auto'
            }}
          >
            {selectedGallery.photos.map((pUrl, idx) => (
              <img
                key={idx}
                src={pUrl}
                alt="thumbnail"
                onClick={() => setSelectedGallery(prev => ({ ...prev, activeIdx: idx }))}
                style={{
                  width: '60px',
                  height: '44px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  border: selectedGallery.activeIdx === idx ? '2px solid #E29578' : '2px solid transparent',
                  opacity: selectedGallery.activeIdx === idx ? 1 : 0.6,
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
