import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films}/>
        <FilmDetails details={TMDB.films}/>
      </div>
    );
  }
}

export default App;