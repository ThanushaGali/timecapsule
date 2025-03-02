import React from "react";

const Deaths = ({ deaths }) => (
  <section>
    <h2>🕊️ Notable Deaths</h2>
    {deaths.length ? deaths.map((person, index) => (
      <p key={index}>{person.year}: {person.text}</p>
    )) : <p>No notable deaths found.</p>}
  </section>
);

export default Deaths;
