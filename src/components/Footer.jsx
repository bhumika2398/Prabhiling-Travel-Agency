import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, Compass } from 'lucide-react';
import TravelStamp from './scrapbook/TravelStamp';

export default function Footer({ config, onToggleConfigDrawer }) {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-paper-cream)',
        borderTop: '1px solid var(--color-border)',
        padding: '4.5rem 0 2rem 0',
        color: 'var(--color-ink)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Col 1: Brand & Handwritten Sign-off */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  backgroundColor: 'var(--color-forest)',
                  color: '#FFFFFF',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Compass size={22} style={{ color: 'var(--color-terracotta)' }} />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--color-ink)', lineHeight: '1' }}>
                  Prabhuling
                </div>
                <div className="font-handwriting" style={{ fontSize: '1.1rem', color: 'var(--color-terracotta)', lineHeight: '1' }}>
                  Travel Agency
                </div>
              </div>
            </Link>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Operating our 7 luxury bus fleet, train tickets, flight bookings, & curated South India vacation packages.
            </p>

            <div style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.45rem', color: 'var(--color-forest)' }}>
              "Until the next adventure..."
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.8rem', color: 'var(--color-terracotta)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              QUICK NAVIGATOR
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.9rem' }}>
              <li><Link to="/" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Home Journal</Link></li>
              <li><Link to="/buses" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Our Bus Fleet</Link></li>
              <li><Link to="/tours" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Curated Tour Packages</Link></li>
              <li><Link to="/destinations" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Featured Destinations</Link></li>
              <li><Link to="/flight-booking" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Flight Desk</Link></li>
              <li><Link to="/train-booking" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Railway Desk</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Destinations */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.8rem', color: 'var(--color-terracotta)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              POPULAR LANDSCAPES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.9rem' }}>
              <li><Link to="/destinations/coorg" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Coorg Coffee Hills</Link></li>
              <li><Link to="/destinations/gokarna" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Gokarna Sacred Coast</Link></li>
              <li><Link to="/destinations/hampi" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Hampi Heritage Ruins</Link></li>
              <li><Link to="/destinations/chikmagalur" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Chikmagalur Peaks</Link></li>
              <li><Link to="/destinations/mysore" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Mysore Royal Palace</Link></li>
              <li><Link to="/destinations/wayanad" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Wayanad Forests</Link></li>
            </ul>
          </div>

          {/* Col 4: Agency Desk Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.8rem', color: 'var(--color-terracotta)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              AGENCY CONTACT DESK
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--color-forest)', flexShrink: 0, marginTop: '2px' }} />
                <span>{config.address || 'Prabhuling Travel Agency, Karnataka, India'}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} style={{ color: 'var(--color-terracotta)', flexShrink: 0 }} />
                <a href={`tel:${config.phoneNumber}`} style={{ color: 'var(--color-ink)', fontWeight: '700', textDecoration: 'none' }}>
                  {config.phoneNumber}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageSquare size={16} style={{ color: '#16533A', flexShrink: 0 }} />
                <a
                  href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#16533A', fontWeight: '700', textDecoration: 'none' }}
                >
                  WhatsApp Booking Desk
                </a>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <TravelStamp text="VERIFIED AGENCY" size="small" color="var(--color-forest)" rotation="-4deg" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'var(--color-ink-light)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Prabhuling Travel Agency. All rights reserved. Registered Fleet Operator.
          </div>

          <button
            onClick={onToggleConfigDrawer}
            style={{
              fontFamily: 'var(--font-typewriter)',
              fontSize: '0.7rem',
              color: 'var(--color-ink-light)',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            [ Evaluator Business Config Drawer ]
          </button>
        </div>
      </div>
    </footer>
  );
}
