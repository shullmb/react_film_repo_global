import React, { Component } from 'react';
import './App.css';
import FilmList from './FilmList';
import FilmDetails from './FilmDetails';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmList />
        <FilmDetails />
      </div>
    );
  }
}

export default App;