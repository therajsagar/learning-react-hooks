import React, { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';

export default function Nav() {
  const { movies } = useContext(MovieContext);
  return (
    <div className='Nav'>
      <h2>Number of Movies: {movies.length}</h2>
    </div>
  );
}
