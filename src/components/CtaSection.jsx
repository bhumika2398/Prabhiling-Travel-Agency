import React from 'react';
import { Link } from 'react-router-dom';
import PaperCard from './scrapbook/PaperCard';
import TravelStamp from './scrapbook/TravelStamp';

export default function CtaSection({ onOpenBookingModal }) {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-bg)' }}>
      <div className="container">
        <PaperCard
          paperType="sheet"
          torn="both"
          rotation="0deg"
          tape={true}
          tapePosition="top-center"
          padding="3rem 2rem"
          style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto', borderLeft: '4px solid var(--color-terracotta)' }}
        >
          <div style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <TravelStamp text="POSTAL • INVITATION" size="medium" color="var(--color-terracotta)" rotation="-4deg" />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: '800',
              color: 'var(--color-ink)',
              lineHeight: '1.15',
              marginBottom: '1rem'
            }}
          >
            READY TO PLAN YOUR BESPOKE ESCAPE?
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.45rem',
              color: 'var(--color-forest)',
              maxWidth: '600px',
              margin: '0 auto 1.75rem auto'
            }}
          >
            "Leave the schedules, tickets, & routes to us. You just pack your bags & collect memories."
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/booking" className="btn btn-primary btn-lg">
              Start Bespoke Booking Form →
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Visit Agency Desk
            </Link>
          </div>
        </PaperCard>
      </div>
    </section>
  );
}
