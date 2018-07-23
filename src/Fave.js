import React from 'react';
import { FilmContext } from './FilmContext';


const Fave = props => {
  return (
    <FilmContext.Consumer>
      {
        ({toggleFavorite}) => {
          function handleClick(e) {
            e.stopPropagation();
            console.log('handling yer clickens...')
            toggleFavorite(props.film);
          }

          const isFave = props.isFave ? 'remove_from_queue' : 'add_to_queue'
          let classList = `film-row-fave ${isFave}`
          return(
            <div className={classList}
                  onClick={(e) => handleClick(e)}>
              <p className="material-icons">{isFave}</p>
            </div>
          )
        }
      }
    </FilmContext.Consumer>
  )
}

export default Fave;