import React, { Component } from 'react';
import FilmRow from './FilmRow';

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
    const filteredFilms = this.state.filter === 'all' ? Array.from(this.props.films) : Array.from(this.props.faves)
    const filmList = filteredFilms.map( film => {
      return (
        <FilmRow film={film} 
                 key={film.id}
                 onDetailsClick={() => this.props.onDetailsClick(film)} 
                 onFaveToggle={() => this.props.onFaveToggle(film)}
                 isFave={ this.props.faves.indexOf(film) > -1 ? true : false }/>
      )
    })

    let filterAll = this.state.filter === 'all' ? 'film-list-filter is-active' : 'film-list-filter'
    let filterFaves = this.state.filter === 'faves' ? 'film-list-filter is-active' : 'film-list-filter'
    
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={filterAll}
               onClick={ () => {this.handleFilterClick('all')}}>
                ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={filterFaves}
               onClick={ () => {this.handleFilterClick('faves')}}>
                FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
        {filmList}
      </div>
    );
  }  
}

export default FilmListing;
