import React from "react";
import ArticleImg from "./ArticleImg";

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <div className="article__image">
          <ArticleImg image={this.props.image} />
        </div>
        <div className="article__title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="article__body">
          <div
            dangerouslySetInnerHTML={{ __html: this.props.body.processed }}
          ></div>
        </div>
        <div className="article__date">
          <div>Date goes here</div>
        </div>
      </div>
    );
  }
}

export default Article;
