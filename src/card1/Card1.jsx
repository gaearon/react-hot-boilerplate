import React from 'react';
import './card1.scss';

const Card1 = ({ cardType }) => {
  return (
    <div className="card1">
      <h1>
        {cardType}
      </h1>
    </div>
  )
}

Card1.propTypes = {
  cardType: React.PropTypes.string.isRequired
}

export default Card1
