import React, { Component } from 'react';

class Fave extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    this.props.onFaveToggle();
    console.log('handling yer clickens...')
  }

  render() {
    const isFave = this.props.isFave ? 'remove_from_queue' : 'add_to_queue'
    let classList = `film-row-fave ${isFave}`
    return(
      <div className={classList}
           onClick={this.handleClick}>
        <p className="material-icons">{isFave}</p>
      </div>
    )
  }
}

export default Fave;