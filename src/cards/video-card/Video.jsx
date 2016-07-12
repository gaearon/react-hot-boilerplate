import React from 'react';

class NGVideoCard extends React.Component {
  render() {
    return (
      <div className="ng-video-card">
        <div className="ng-video-card__image">
          <img src=""></img>
        </div>

        <div className="ng-video-card__play-button">
        </div>

        <div className="ng-video-card__tags">
          <a><a1> { this.props.topic } </a1></a>
          <a1> {this.props.description } </a1>
          {/* TODO: look up C iii on annotations for video time length */}
        </div>

        <div className="ng-video-card__header">
          <div className="ng-vide-card__header-text">
            <h2> {this.props.headerText} </h2>
          </div>
        </div>
      </div>
    )
  }
}

// NGVideoCard.propTypes = {
//   image: React.propTypes.string.isRequired,
//   playButton: React.propTypes.string.isRequired,
//   headerText: React.propTypes.string.isRequired
// }

export default NGVideoCard
