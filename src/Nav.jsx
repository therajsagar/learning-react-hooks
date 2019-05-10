import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
  const movies = useContext(MovieContext)[0];
  return (
    <div className='Nav'>
      <h2>Number of Movies: {movies.length}</h2>
    </div>
  );
};

export default Nav;
