import React from 'react';

const Fave = props => {
  function handleClick(e) {
    e.stopPropagation();
    props.onFaveToggle();
    console.log('handling yer clickens...')
  }

  const isFave = props.isFave ? 'remove_from_queue' : 'add_to_queue'
  let classList = `film-row-fave ${isFave}`
  return(
    <div className={classList}
          onClick={handleClick}>
      <p className="material-icons">{isFave}</p>
    </div>
  )
}

export default Fave;