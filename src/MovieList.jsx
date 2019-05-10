import React, { useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([
    { name: 'MI 6', actor: 'Tom Cruise', year: 2018 },
    { name: 'AquaMan', actor: 'Jason Momoa', year: 2018 },
    { name: 'Venom', actor: 'Tom Hardy', year: 2018 }
  ]);
  return (
    <>
      {movies.map(movie => (
        <li>{movie.name}</li>
      ))}
    </>
  );
};

export default MovieList;
