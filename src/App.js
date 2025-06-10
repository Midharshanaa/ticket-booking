import React, { useState } from 'react';
import TicketForm from './components/TicketForm';
import BookingSummary from './components/BookingSummary';

function App() {
  const [booking, setBooking] = useState(null);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🎟️ Ticket Booking System</h1>
      <TicketForm onBooking={setBooking} />
      <BookingSummary booking={booking} />
    </div>
  );
}

export default App;
