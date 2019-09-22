import React, { useContext, useRef } from 'react';
import { MovieContext } from '../Context/MovieContext';

export default function AddMovie() {
  const name = useRef();
  const actor = useRef();
  const { dispatch } = useContext(MovieContext);

  const addMovie = e => {
    e.preventDefault();
    if (name.current.value.trim() && actor.current.value.trim()) {
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
}
