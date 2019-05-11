import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  const movies = useContext(MovieContext);
  return (
    <div className='Movie-list'>
      {movies.map((props, index) => (
        <Movie name={props.name} actor={props.actor} key={index} />
      ))}
    </div>
  );
};

export default MovieList;
