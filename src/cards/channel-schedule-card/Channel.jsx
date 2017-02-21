import React from 'react';

class NGChannelCard extends React.Component {
  render() {
    return (
      <div className="ng-channel-card">
        <div className="ng-channel-card__header">
          <a href="#"> {this.props.showTitle} </a>
        </div>

        <div className="ng-channel-card__content-title">
          {this.props.contentTitle}
        </div>

        <div className="ng-chanel-card__schedule-time">
          {this.props.time}
        </div>

        <div className="ng-chanel-card__schedule-link">
          <a href="#"></a>
        </div>

      </div>
    )
  }
}

NGChannelCard.propTypes = {
  showTitle: React.propTypes.string.isRequired,
  contentTitle: React.propTypes.string.isRequired,
  time: React.propTypes.string.isRequired,
}

export default NGChannelCard
