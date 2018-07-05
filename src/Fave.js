import React, { Component } from 'react';

class Fave extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    console.log('handling yer clickens...')
  }


  render() {
    return(
      <div className="film-row-fave add_to_queue"
           onClick={this.handleClick}
      >
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave;