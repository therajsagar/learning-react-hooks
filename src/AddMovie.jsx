import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [actor, setActor] = useState('');
  const setMovies = useContext(MovieContext)[1];

  const addMovie = e => {
    e.preventDefault();
    if (e.target.name.value !== '' && e.target.actor.value) {
      setMovies(prevState => [...prevState, { name, actor }]);
      setName('');
      setActor('');
    }
  };

  return (
    <form onSubmit={addMovie}>
      <input
        type='text'
        value={name}
        name='name'
        onChange={e => setName(e.target.value)}
      />
      <input
        type='text'
        value={actor}
        name='actor'
        onChange={e => setActor(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddMovie;
