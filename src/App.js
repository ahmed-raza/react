import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Button from "./components/UI/Button";
import Content from "./components/Content/Content";
import Sidedraw from "./components/Sidedraw/Sidedraw";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { openSidedraw: false };

    this.openSidedraw = this.openSidedraw.bind(this);
  }

  openSidedraw = () => {
    this.setState((prevState) => {
      return { openSidedraw: !prevState.openSidedraw };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header title="Home Page">
          <Button onClick={this.openSidedraw}>Menu</Button>
        </Header>
        {ReactDOM.createPortal(
          <Sidedraw openSidedraw={this.state.openSidedraw} />,
          document.getElementById("sidedraw-root")
        )}
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
