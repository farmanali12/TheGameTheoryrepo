import React from 'react';

const BeerCard = ({ beer }) => {
  return (
    <div className="card">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
    </div>
  );
};

export default BeerCard;
