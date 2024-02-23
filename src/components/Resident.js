
import React from 'react';

function Resident({ resident }) {
  return (
    <li>
      <strong>Name:</strong> {resident.name} <br />
      <strong>Height:</strong> {resident.height} <br />
      <strong>Mass:</strong> {resident.mass} <br />
      <strong>Gender:</strong> {resident.gender} <br />
    </li>
  );
}

export default Resident;
