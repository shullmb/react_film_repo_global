import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const film = this.props.film
    const title = this.props.film.title;
    const year = new Date(this.props.film.release_date).getFullYear();
    return (
      <div className="film-row">
        <FilmPoster film={film} />
  
        <div className="film-summary">
          <h1>{title}</h1>
          <p>{year}</p>
        </div>
      </div>
    )
  }
}

export default FilmRow;