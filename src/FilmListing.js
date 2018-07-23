import React, { Component } from 'react';
import FilmRow from './FilmRow';
import { FilmContext } from './FilmContext';

class FilmListing extends Component {
  constructor(props) {
    super(props)
    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick(filter) {
    this.setState({
      filter
    })
    console.log('Setting filter to ', filter, '...')
  }
  
  render() {
    return (
      <FilmContext.Consumer>
        {
          ({films, faves}) => {
            const filteredFilms = this.state.filter === 'all' ? Array.from(films) : Array.from(faves)
            const filmList = filteredFilms.map( film => <FilmRow film={film} 
                                                                key={film.id}
                                                                isFave={faves.indexOf(film) > -1 ? true : false}/>
            )
            let filterAll = this.state.filter === 'all' ? 'film-list-filter is-active' : 'film-list-filter'
            let filterFaves = this.state.filter === 'faves' ? 'film-list-filter is-active' : 'film-list-filter'
            
            return (
              <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                  <div className={filterAll}
                      onClick={ () => {this.handleFilterClick('all')}}>
                        ALL
                    <span className="section-count">{films.length}</span>
                  </div>
                  <div className={filterFaves}
                      onClick={ () => {this.handleFilterClick('faves')}}>
                        FAVES
                    <span className="section-count">{faves.length}</span>
                  </div>
                </div>
                {filmList}
              </div>
            );
          }
        }
      </FilmContext.Consumer>
    )
  }  
}

export default FilmListing;
