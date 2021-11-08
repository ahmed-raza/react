import React, { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import Nav from "./components/Layout/Nav";
import CounterContext from "./store/counter-context";
class App extends Component {
  static contextType = CounterContext;

  render() {
    return (
      <Container>
        <Nav counter={this.context.counter} />
        <Button color="pink" content="Counter" onClick={this.context.onCount} />
      </Container>
    );
  }
}

export default App;
