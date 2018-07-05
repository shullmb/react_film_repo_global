import React, { Component } from 'react';

class Fave extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isFave: false
    }
  }

  handleClick(e) {
    e.stopPropagation();
    const isFave = this.state.isFave
    this.setState({
      isFave: !isFave
    })
    console.log('handling yer clickens...', isFave)
  }

  render() {
    const isFave = this.state.isFave ? 'remove_from_queue' : 'add_to_queue'
    let classList = `film-row-fave ${isFave}`
    return(
      <div className={classList}
           onClick={this.handleClick}
      >
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave;