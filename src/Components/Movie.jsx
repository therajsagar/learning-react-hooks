import React, { useContext, useRef } from 'react';
import { MovieContext } from '../Context/MovieContext';

export default function Movie({ name, actor }) {
  const { dispatch } = useContext(MovieContext);
  const nameInput = useRef(name);

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
}
