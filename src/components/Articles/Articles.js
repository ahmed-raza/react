import React from "react";
import Article from "./Article";

class Articles extends React.Component {
  render() {
    if (this.props.articles.length === 0) {
      return <h2>No articles found.</h2>;
    }

    return (
      <div className="articles">
        {this.props.articles.map((article) => {
          return (
            <Article
              key={article.id}
              title={article.title}
              body={article.body}
              image={article.image}
            />
          );
        })}
      </div>
    );
  }
}

export default Articles;
