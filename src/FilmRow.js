import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

class FilmRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const film = this.props.film
    const title = this.props.film.title;
    const year = new Date(this.props.film.release_date).getFullYear();
    return (
      <div className="film-row"
           onClick={ () => this.handleDetailsClick({film})}>
        <FilmPoster film={film} />
  
        <div className="film-summary">
          <h1>{title}</h1>
          <p>{year}</p>
        </div>
        <Fave isFave={this.props.isFave} onFaveToggle={this.props.onFaveToggle}/>
      </div>
    )
  }
}

export default FilmRow;