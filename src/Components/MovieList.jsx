import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from '../Context/MovieContext';

export default function MovieList() {
  const { movies } = useContext(MovieContext);
  return (
    <div className='Movie-list'>
      {movies.map((props, index) => (
        <Movie name={props.name} actor={props.actor} key={index} />
      ))}
    </div>
  );
}
