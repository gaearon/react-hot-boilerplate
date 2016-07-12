import React from 'react';

class NGPhotographyCard extends React.Component {
  render() {
    return (
      <div className="ng-photography-card">
        <div className="ng-photography__gallery-images">
          <a href="#"><img src="#"></img></a>
          <a href="#"><img src="#"></img></a>
        </div>

        {/*TODO: add hovers*/}
        {/*TODO: add image swap*/}

        <div className="ng-photography__tags">
          <a1><a href="#"> {this.props.topic} </a></a1>
          <a1> {this.props.description} </a1>
        </div>

        <div className="ng-photography__header">
          <a href="#"><h2> {this.props.headerText} </h2></a>
        </div>

        <div className="ng-photography__photo-gallery-plus">
          <a href="#"> /* gallery link /* </a>
        </div>

      </div>
    )
  }
}

//   NGPhotography.propTypes = {
//     topic: React.propTypes.string.isRequired,
//     headerText: React.propTypes.string.isRequired,
//     { TODO: */ gallery requirement /* }
// }

export default NGPhotographyCard
