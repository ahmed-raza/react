import React, { Component } from "react";
import CounterContext from "./counter-context";

class CounterProvider extends Component {
  state = { counter: 0 };

  countHandler = () => {
    this.setState((prevState) => prevState.counter++);
  };

  render() {
    return (
      <CounterContext.Provider
        value={{ counter: this.state.counter, onCount: this.countHandler }}
      >
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

export default CounterProvider;
