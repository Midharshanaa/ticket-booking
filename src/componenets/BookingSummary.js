import React, { useEffect, useState } from 'react';

const BookingSummary = ({ booking }) => {
  const [status, setStatus] = useState('Processing...');

  useEffect(() => {
    if (booking) {
      // Simulate delay for booking confirmation
      const timer = setTimeout(() => {
        setStatus('Booking Confirmed!');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [booking]);

  if (!booking) return null;

  return (
    <div>
      <h2>{status}</h2>
      <p><strong>Name:</strong> {booking.name}</p>
      <p><strong>Event:</strong> {booking.event}</p>
      <p><strong>Tickets:</strong> {booking.tickets}</p>
    </div>
  );
};

export default BookingSummary;
