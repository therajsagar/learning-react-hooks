import React from 'react';
import Nav from './Nav';
import Movielist from './MovieList';
import AddMovie from './AddMovie';
import './App.css';
import MovieProvider from './MovieContext';

const App = () => {
return (
  <MovieProvider>
    <div className='App'>
      <Nav/>
      <AddMovie/>
      <Movielist/>
    </div>
  </MovieProvider>
)
}

export default App;
