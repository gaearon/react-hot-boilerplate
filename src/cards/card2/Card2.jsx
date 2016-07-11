import React from 'react';
import './card2.scss';

const Card2 = ({ cardType }) => {
  return (
    <div className="card2">
      <h2>
        { cardType }
      </h2>
    </div>
  )
}

export default Card2
