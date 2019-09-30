import React from 'react';
import Card from './Card';

const CardList = ({ countries }) => {
  return (
    <div className="country-list">
      {
        countries.map((countries, i) => {
          return (
            <Card
              key={i}
              name={countries.name}
              code={countries.code}
              emoji={countries.emoji}

              />
          );
        })
      }
    </div>
  );
}

export default CardList;