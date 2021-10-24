import React from "react";
import Article from "./Article";

class Articles extends React.Component {
  render() {
    if (this.props.articles.length === 0) {
      return <h2>No articles found.</h2>;
    }

    return (
      <div>
        {this.props.articles.map((article) => {
          <Article title={article.title} />;
        })}
      </div>
    );
  }
}

export default Articles;
