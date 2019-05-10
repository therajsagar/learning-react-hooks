import React from 'react';

const Movie = ({ name, actor }) => {
  return (
    <div>
      <p>
        <span style={{ fontWeight: 'bold' }}>{name}</span>
        <sub> {actor}</sub>
      </p>
    </div>
  );
};

export default Movie;
