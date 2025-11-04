import React from 'react';

export default function AnimalCard({ name, scientificName, weight, diet }) {
  return (
    <div style={{ border: '1px solid #aaa', padding: '10px', margin: '10px', width: '200px' }}>
      <h3>{name}</h3>
      <p><em>{scientificName}</em></p>
      <p>{weight}</p>
      <p>{diet}</p>
    </div>
  );
}
