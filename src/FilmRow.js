import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

const FilmRow = (props) => {
  const film = props.film
  const title = props.film.title;
  const year = new Date(props.film.release_date).getFullYear();
  return (
    <div className="film-row"
          onClick={props.onDetailsClick}>
      <FilmPoster film={film} />

      <div className="film-summary">
        <h1>{title}</h1>
        <p>{year}</p>
      </div>
      <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle}/>
    </div>
  )
}

export default FilmRow;