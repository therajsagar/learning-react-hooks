import React, { createContext, useReducer } from 'react';
import MovieReducer from './reducer';

export const MovieContext = createContext();

const initialState = [
  { name: 'MI 6', actor: 'Tom Cruise' },
  { name: 'AquaMan', actor: 'Jason Momoa' },
  { name: 'Venom', actor: 'Tom Hardy' }
];

export default function MovieProvider(props) {
  const [movies, dispatch] = useReducer(MovieReducer, initialState);
  return (
    <MovieContext.Provider value={{ movies, dispatch }}>
      {props.children}
    </MovieContext.Provider>
  );
}
