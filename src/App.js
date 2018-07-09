import React, { Component } from 'react';
import axios from 'axios';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleFaveToggle(film) {
    console.log('toggling fave');
    const faves = Array.from(this.state.faves);
    const filmIndex = faves.indexOf(film)
    filmIndex < 0 ? faves.push(film) : faves.splice(filmIndex,1) 
    this.setState({faves})
  }

  handleDetailsClick(film) {
    // console.log('Getting details for', film, '...');
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios.get(url).then((response) => {
      console.log(response)
      this.setState({
        current: response.data
      })
    }).catch( (err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing films={this.state.films}
                     faves={this.state.faves}
                     onFaveToggle={this.handleFaveToggle}
                     onDetailsClick={this.handleDetailsClick}/>
        <FilmDetails film={this.state.current} />
      </div>
    );
  }
}

export default App;