import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films}/>
        <FilmDetails film={TMDB.films[0]}/>
      </div>
    );
  }
}

export default App;