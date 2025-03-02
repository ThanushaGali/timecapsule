import React from "react";

const Births = ({ births }) => (
  <section>
    <h2>🎂 Famous Birthdays</h2>
    {births.length ? births.map((person, index) => (
      <p key={index}>{person.year}: {person.text}</p>
    )) : <p>No famous birthdays found.</p>}
  </section>
);

export default Births;
