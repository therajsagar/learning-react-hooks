import React, { useState, createContext } from 'react';
export const MovieContext = createContext();

const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { name: 'MI 6', actor: 'Tom Cruise' },
    { name: 'AquaMan', actor: 'Jason Momoa' },
    { name: 'Venom', actor: 'Tom Hardy' }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
