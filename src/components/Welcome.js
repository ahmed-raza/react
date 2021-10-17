import React from "react";
import Tick from "./Tick";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome {this.props.name}!</h2>
        <Tick />
      </div>
    );
  }
}

export default Welcome;
