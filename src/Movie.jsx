import React, { useContext, useReducer, useRef } from 'react';
import MovieReducer from './reducer';
import { MovieContext } from './MovieContext';

const Movie = ({ name, actor }) => {
  const movies = useContext(MovieContext);
  const nameInput = useRef(name);
  const dispatch = useReducer(MovieReducer, movies)[1];

  const removeMovie = () => {
    const name = nameInput.current.innerText;
    dispatch({ type: 'REMOVE', name });
  };
  return (
    <div>
      <p>
        <span style={{ fontWeight: 'bold', fontSize: 20 }} ref={nameInput}>
          {name}
        </span>
        <span> ({actor}) </span>
        <button className='remove' onClick={removeMovie}>
          Remove
        </button>
      </p>
    </div>
  );
};

export default Movie;
