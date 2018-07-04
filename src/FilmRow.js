import React from 'react';

const FilmRow = props => {
  let posterUrl = props.film.poster_path;
  let title = props.film.title;
  let year = props.film.release_date.split('-')[0];
  return (
    <div className="film-row">
      <img src={posterUrl} alt="" />

      <div className="film-summary">
        <h1>{title}</h1>
        <p>{year}</p>
      </div>
    </div>
  )
}

export default FilmRow;