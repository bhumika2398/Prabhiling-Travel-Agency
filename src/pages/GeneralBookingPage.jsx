import React, { useState } from 'react';
import { Bus, Plane, Train, Compass, Car, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import PaperCard from '../components/scrapbook/PaperCard';
import TicketCard from '../components/scrapbook/TicketCard';
import TravelStamp from '../components/scrapbook/TravelStamp';
import MapFragment from '../components/scrapbook/MapFragment';

export default function GeneralBookingPage({ config }) {
  const [selectedService, setSelectedService] = useState('Bus');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fromCity: '',
    toCity: '',
    travelDate: new Date().toISOString().split('T')[0],
    passengers: 1,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    { id: 'Bus', label: 'Bus Pass', icon: Bus },
    { id: 'Flight', label: 'Flight Ticket', icon: Plane },
    { id: 'Train', label: 'Railway Ticket', icon: Train },
    { id: 'TourPackage', label: 'Tour Package', icon: Compass },
    { id: 'VehicleRental', label: 'Bus Charter', icon: Car },
    { id: 'Other', label: 'Other Query', icon: Send },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <MapFragment opacity={0.06} />

      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--color-paper-sheet)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0 3rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <span className="section-tag">
              TRAVEL RESERVATION DESK
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                fontWeight: '800',
                color: 'var(--color-ink)',
                marginTop: '0.75rem',
                marginBottom: '0.85rem'
              }}
            >
              Booking Manifesto Form
            </h1>

            <p style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--color-terracotta)', marginBottom: '0.6rem' }}>
              One desk, every journey.
            </p>

            <p style={{ fontSize: '1.075rem', color: 'var(--color-ink-muted)', lineHeight: '1.65' }}>
              Submit your journey details below or connect directly on WhatsApp for human booking assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Container */}
      <div className="container" style={{ marginTop: '3rem', maxWidth: '840px' }}>
        <TicketCard
          ticketType="general"
          accentColor="var(--color-forest)"
          ticketNumber="PRB-MANIFEST-8050"
          badgeText="GENERAL TRAVEL MANIFESTO & RESERVATION PASS"
          notchBgColor="var(--color-paper-bg)"
          style={{ marginBottom: '3.5rem' }}
        >
          {/* Service Selector Tabs */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.5rem', letterSpacing: '0.08em' }}>
              SELECT SERVICE REQUIRED *
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.65rem' }}>
              {servicesList.map((item) => {
                const IconComponent = item.icon;
                const isSelected = selectedService === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedService(item.id)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.85rem 0.5rem',
                      borderRadius: '4px',
                      border: isSelected ? '1.5px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                      backgroundColor: isSelected ? 'var(--color-terracotta-soft)' : 'var(--color-paper-cream)',
                      color: isSelected ? 'var(--color-terracotta)' : 'var(--color-ink)',
                      fontWeight: '700',
                      fontSize: '0.825rem',
                      cursor: 'pointer'
                    }}
                  >
                    <IconComponent size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {isSubmitted ? (
            <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '2rem', borderRadius: '4px', border: '1px solid var(--color-forest)', textAlign: 'center' }}>
              <CheckCircle2 size={46} style={{ color: 'var(--color-forest)', margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)', fontSize: '1.5rem', marginBottom: '0.35rem' }}>
                Travel Reservation Submitted!
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', marginBottom: '1.5rem' }}>
                Thank you, <strong>{formData.name}</strong>. Our booking desk will contact you on <strong>{formData.phone}</strong> for <strong>{selectedService}</strong> arrangements.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>FULL NAME *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1.5px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>PHONE / WHATSAPP *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="10-digit mobile number" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1.5px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>FROM CITY</label>
                  <input type="text" value={formData.fromCity} onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })} placeholder="e.g. Bengaluru" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1.5px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>TO DESTINATION</label>
                  <input type="text" value={formData.toCity} onChange={(e) => setFormData({ ...formData, toCity: e.target.value })} placeholder="e.g. Gokarna" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1.5px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>TRAVEL DATE</label>
                  <input type="date" value={formData.travelDate} onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1.5px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>PASSENGERS</label>
                  <select value={formData.passengers} onChange={(e) => setFormData({ ...formData, passengers: Number(e.target.value) })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1.5px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }}>
                    {[1, 2, 3, 4, 5, 6, 8, 10, 15, 25, 40].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>ADDITIONAL NOTES</label>
                <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Berth choices, flight class, hotel requests..." style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1.5px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <Send size={18} /> SUBMIT RESERVATION DOSSIER →
              </button>
            </form>
          )}
        </TicketCard>
      </div>
    </div>
  );
}
