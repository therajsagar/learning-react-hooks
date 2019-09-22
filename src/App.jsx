import React from 'react';
import MovieProvider from './Context/MovieContext';
import Nav from './Components/Nav';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';

import './App.css';

export default function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}
