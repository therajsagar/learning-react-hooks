import React, { useContext, useRef, useReducer } from 'react';
import { MovieContext } from './MovieContext';
import MovieReducer from './reducer';

const AddMovie = () => {
  const name = useRef();
  const actor = useRef();
  const movies = useContext(MovieContext);
  const dispatch = useReducer(MovieReducer, movies)[1];

  const addMovie = e => {
    e.preventDefault();
    if (name.current.value !== '' && actor.current.value !== '') {
      dispatch({
        type: 'ADD',
        name: name.current.value,
        actor: actor.current.value
      });
      name.current.value = '';
      actor.current.value = '';
    }
  };

  return (
    <form onSubmit={addMovie}>
      <input type='text' name='name' ref={name} autoComplete='off' />
      <input type='text' name='actor' ref={actor} autoComplete='off' />
      <button className='add'>Add</button>
    </form>
  );
};

export default AddMovie;
