import React from "react";
import dataApi from "./api/data";
import Articles from "./components/Articles/Articles";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], load: "none" };

    this.getArticles = this.getArticles.bind(this);
    this.getArticles();
  }

  getArticles = async () => {
    dataApi.get("/jsonapi/node/article").then((res) => {
      this.setState({ load: "block" });
      const articles = res.data.data.map((article) => ({
        id: article.id,
        title: article.attributes.title,
        body: article.attributes.body,
        image: article.relationships.field_image,
      }));
      this.setState({ articles: articles, load: "none" });
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: this.state.load }} className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
