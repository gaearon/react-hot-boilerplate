import React, { Component } from 'react';
import Card1 from './cards/card1/Card1.jsx';
import Card2 from './cards/card2/Card2.jsx';
import Nav from './cards/nav/Nav.jsx';
import NGArticleCard from './cards/article-card/Article.jsx';
import NGNotImageArticleCard from './cards/not-image-article-card/Not-image-article.jsx'
import './sass/main.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <NGArticleCard />
        <NGNotImageArticleCard />
      </div>
    );
  }
}

// <Card1 cardType="video" />
// <Card2 cardType="video2" />
