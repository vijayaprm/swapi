import React, { useState, useEffect } from 'react';
import Resident from './Resident';

function PlanetCard({ planet }) {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const promises = planet.residents.map(async (residentUrl) => {
        const response = await fetch(residentUrl);
        const residentData = await response.json();
        return residentData;
      });
      const residentData = await Promise.all(promises);
      setResidents(residentData);
    };

    fetchResidents();
  }, [planet]);

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <h3>Residents:</h3>
      <ul>
        {residents.map((resident, index) => (
          <Resident key={index} resident={resident} />
        ))}
      </ul>
    </div>
  );
}

export default PlanetCard;
