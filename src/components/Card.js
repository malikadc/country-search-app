import React from 'react';

const Card = ({ name, code, emoji}) => {


  return (
      <div className="country">
        <h2>{name}</h2>
        <p>{code}</p>
        <h1>{emoji}</h1>

      </div>
  
  );
}

export default Card;