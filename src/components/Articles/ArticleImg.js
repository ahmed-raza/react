import React from "react";
import dataApi from "../../api/data";

class ArtilceImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      alt: this.props.image.data.meta.alt,
      title: this.props.image.data.meta.title,
    };
    dataApi.get(this.props.image.links.related.href).then((res) => {
      this.setState({
        src: "http://local.drupal9.com" + res.data.data.attributes.uri.url,
      });
    });
  }

  render() {
    return (
      <img src={this.state.src} alt={this.state.alt} title={this.state.title} />
    );
  }
}

export default ArtilceImg;
