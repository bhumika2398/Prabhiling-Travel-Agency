import React from 'react';
import { FLEET } from '../data/fleetData';
import TicketStub from './scrapbook/TicketStub';

export default function FleetShowcase({ onOpenBusDetailModal, onOpenBookingModal }) {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>OFFICIAL TRANSPORTATION</span>
          </div>
          <h2 className="section-title">
            OUR 7-BUS LUXURY FLEET
          </h2>
          <p className="section-desc">
            Directly operated by Prabhuling Travel Agency. Verified luxury Sleeper & Seater coaches with pushback seats, air conditioning, charging ports, & experienced drivers.
          </p>
        </div>

        {/* Fleet Ticket Stubs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem 1.75rem'
          }}
        >
          {FLEET.map((bus, idx) => (
            <TicketStub
              key={bus.id}
              ticketType={`PASSENGER BUS PASS #${idx + 1}`}
              title={bus.name}
              subtitle={`${bus.type} (${bus.capacity} Seats)`}
              origin={bus.primaryRoute ? bus.primaryRoute.split('↔')[0].trim() : 'Bengaluru'}
              destination={bus.primaryRoute ? bus.primaryRoute.split('↔')[1]?.split('(')[0].trim() : 'South India'}
              price={bus.startingPrice ? `₹${bus.startingPrice}/seat` : 'Contact for rate'}
              details={bus.amenities || bus.features || ['AC Sleeper', 'Pushback Seats', 'Charging Ports', 'GPS Tracking']}
              stampText="OPERATED FLEET"
              status="OPERATIONAL"
              image={bus.image}
              onViewDetail={() => onOpenBusDetailModal(bus)}
              onBook={() => onOpenBookingModal({ service: 'Bus Rental', busId: bus.id, busName: bus.name })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

