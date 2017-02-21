import React from 'react';

const Card1 = ({ cardType }) => {
  return (
    <div className="card1-container">
      <div className="card1">
        <h1>
          {cardType}
        </h1>
      </div>
    </div>
  )
}

Card1.propTypes = {
  cardType: React.PropTypes.string.isRequired
}

export default Card1
