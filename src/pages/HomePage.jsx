import React from 'react';
import Hero from '../components/Hero';
import BookingPanel from '../components/BookingPanel';
import Destinations from '../components/Destinations';
import HowItWorks from '../components/HowItWorks';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import CtaSection from '../components/CtaSection';

export default function HomePage({ config, onOpenBookingModal }) {
  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', minHeight: '100vh' }}>
      {/* 1. Full-Screen Cinematic Adventure Hero (90-100vh) */}
      <Hero config={config} onOpenBookingModal={onOpenBookingModal} />

      {/* 2. Travel Search & Booking Gateway — Positioned directly below Hero */}
      <BookingPanel onOpenBookingModal={onOpenBookingModal} />

      {/* 3. Destination Discovery Section */}
      <div id="destinations-intro">
        <Destinations />
      </div>

      {/* 4. Workflow Steps */}
      <HowItWorks />

      {/* 6. Direct Fleet Operator Manifesto */}
      <WhyUs config={config} />

      {/* 7. Handwritten Customer Postcards */}
      <Testimonials />

      {/* 8. Booking Invitation Postcard */}
      <CtaSection onOpenBookingModal={onOpenBookingModal} />
    </div>
  );
}



