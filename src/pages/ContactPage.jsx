import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import PaperCard from '../components/scrapbook/PaperCard';
import TicketCard from '../components/scrapbook/TicketCard';
import TravelStamp from '../components/scrapbook/TravelStamp';
import MapFragment from '../components/scrapbook/MapFragment';

export default function ContactPage({ config }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    travelDate: '',
    travellers: '1',
    budget: '',
    requests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNum = '8050172818';
    
    let messageText = `*PRABHULING TRAVEL AGENCY — ENQUIRY*\n`;
    messageText += `--------------------------------------\n`;
    messageText += `👤 *FULL NAME*: ${formData.name}\n`;
    messageText += `📞 *MOBILE*: ${formData.phone}\n`;
    messageText += `📍 *DESTINATION*: ${formData.destination}\n`;
    messageText += `📅 *TRAVEL DATE*: ${formData.travelDate}\n`;
    messageText += `👥 *TRAVELLERS*: ${formData.travellers}\n`;
    if (formData.budget) messageText += `💰 *BUDGET*: ${formData.budget}\n`;
    if (formData.requests) messageText += `💬 *NOTES*: ${formData.requests}\n`;
    messageText += `--------------------------------------\n`;
    messageText += `*Sent via Website Contact Form*`;

    const waUrl = `https://wa.me/91${whatsappNum}?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');
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
              DIRECT WHATSAPP ENQUIRY DESK
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
              Contact Our Agency Desk
            </h1>

            <p style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--color-terracotta)', marginBottom: '0.6rem' }}>
              We're just a message away.
            </p>

            <p style={{ fontSize: '1.075rem', color: 'var(--color-ink-muted)', lineHeight: '1.65' }}>
              Fill in your travel details below to send an enquiry directly to our WhatsApp support (+91 80501 72818).
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Container */}
      <div className="container" style={{ marginTop: '3rem' }}>
        {/* Physical Booking Ticket Form */}
        <TicketCard
          ticketType="contact"
          accentColor="#16533A"
          ticketNumber="PRB-CONTACT-8050"
          badgeText="TRAVEL ENQUIRY & CONTACT DISPATCH TICKET"
          notchBgColor="var(--color-paper-bg)"
          style={{ marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', color: '#16533A', letterSpacing: '0.1em' }}>
                DIRECT WHATSAPP DISPATCH
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: '800', color: 'var(--color-ink)', lineHeight: '1.15' }}>
                SEND TRAVEL ENQUIRY
              </h2>
            </div>
            <TravelStamp text="WHATSAPP DESK" size="small" color="#16533A" rotation="-4deg" />
          </div>

          {isSubmitted ? (
            <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '2rem', borderRadius: '4px', border: '1px solid #16533A', textAlign: 'center' }}>
              <CheckCircle2 size={46} style={{ color: '#16533A', margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)', fontSize: '1.5rem', marginBottom: '0.35rem' }}>
                Enquiry Sent to WhatsApp!
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', marginBottom: '1.25rem' }}>
                Thank you, <strong>{formData.name}</strong>. WhatsApp has opened with your structured enquiry details for <strong>+91 80501 72818</strong>.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="btn btn-outline"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>FULL NAME *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Rahul Sharma" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>MOBILE NUMBER *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="10-digit phone" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>DESTINATION / ROUTE *</label>
                  <input type="text" required value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} placeholder="e.g. Coorg / Gokarna / Bus Charter" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>TRAVEL DATE *</label>
                  <input type="date" required value={formData.travelDate} onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>TRAVELLERS</label>
                  <select value={formData.travellers} onChange={(e) => setFormData({ ...formData, travellers: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }}>
                    <option value="1">1 Traveller</option>
                    <option value="2">2 Travellers</option>
                    <option value="3-5">3-5 Travellers</option>
                    <option value="Group Charter">Group / Bus Charter (10+)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>ESTIMATED BUDGET (OPTIONAL)</label>
                  <input type="text" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} placeholder="e.g. ₹5,000 - ₹15,000" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>SPECIAL REQUESTS / NOTES</label>
                <textarea rows={3} value={formData.requests} onChange={(e) => setFormData({ ...formData, requests: e.target.value })} placeholder="AC Sleeper berths, window seats, hotel preferences..." style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
              </div>

              <button
                type="submit"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', backgroundColor: '#1E6B4B', color: '#FFFFFF', fontWeight: '700' }}
              >
                <MessageSquare size={20} /> SEND ENQUIRY VIA WHATSAPP →
              </button>
            </form>
          )}
        </TicketCard>
      </div>
    </div>
  );
}
