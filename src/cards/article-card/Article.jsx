import React from 'react';

class NGArticleCard extends React.Component {
  render() {
    return (
      <div className="ng-article-card">
        <div className="ng-article-card__image">
          <a href="#"><img src=""></img></a>
        </div>

        <div className="ng-article-card__tags">
          <a href="#"><a1> {this.props.topic} </a1></a>
        </div>

        <div className="ng-article-card__text">
          <a href="#"><h2> {this.props.headerText} </h2></a>
        </div>
      </div>
      /* check D that is optional */
    )
  }
}

{ /*
  Article.propTypes = {
    headerImage : React.PropTypes.string.isRequired,
    topic: React.PropTypes.string.isRequired,
    headerText: React.PropTypes.string.isRequired
  }
*/ }

export default NGArticleCard
