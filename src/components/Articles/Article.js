import React from 'react'

class Article extends React.Component {
  render() {
    return  <div className="article">
      <div className="article__image">
        <img src="" alt="" />
      </div>
      <div className="article__title">
        <h2>{ this.props.title }</h2>
      </div>
      <div className="article__date">
        <div>Date goes here</div>
      </div>
    </div>
  }
}

export default Article
