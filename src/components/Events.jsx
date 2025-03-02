import React from "react";

const Events = ({ events }) => {
  return (
    <section>
      <h2>📜 Historical Events</h2>
      {events.length ? (
        events.map((event, index) => (
          <p key={index}>
            {event.year}: {event.text}
          </p>
        ))
      ) : (
        <p>No events found.</p>
      )}
    </section>
  );
};

export default Events;
