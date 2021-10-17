import React from "react";

class Test extends React.Component {
  nameChangeHandler = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
        <input type="text" onChange={this.nameChangeHandler} />
      </div>
    );
  }
}

export default Test;
