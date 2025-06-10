import React, { useState } from 'react';

const TicketForm = ({ onBooking }) => {
  // useState hooks to store form input values
  const [name, setName] = useState('');
  const [event, setEvent] = useState('');
  const [tickets, setTickets] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sending form data to parent component (App.js)
    onBooking({ name, event, tickets });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Book Your Ticket</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br /><br />
      <input
        placeholder="Event"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
        required
      /><br /><br />
      <input
        type="number"
        value={tickets}
        onChange={(e) => setTickets(e.target.value)}
        min="1"
      /><br /><br />
      <button type="submit">Book</button>
    </form>
  );
};

export default TicketForm;