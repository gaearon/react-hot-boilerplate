import React from 'react';

class NGNotImageArticleCard extends React.Component {
  render() {
    return (
      <div className="ng-not-image-article-card">
        <div className="ng-not-image-article-card__tags">
          <a href="#"><a1> {this.props.topic} </a1></a>
        </div>

        <div className="ng-not-image-article-card__text">
          <a href="#"><h2> {this.props.headerText} </h2></a>
        </div>
      </div>
    )
  }
}

{ /*
NotImageArticle.propTypes = {
  topic: React.propTypes.string.isRequired,
  headerText: React.propTypes.string.isRequired
}
*/
}

export default NGNotImageArticleCard
