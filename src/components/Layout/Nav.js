import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home" };
    this.activeHandler = this.activeHandler.bind(this);
  }
  activeHandler(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    return (
      <Menu pointing>
        <Menu.Item
          name="home"
          active={this.state.activeItem === "home"}
          onClick={this.activeHandler}
        />
        <Menu.Item
          name="about"
          active={this.state.activeItem === "about"}
          onClick={this.activeHandler}
        />
        <Menu.Menu position="right">
          <Button
            style={{ marginRight: "0" }}
            color="blue"
            content="Cart"
            icon="cart"
            label={{
              basic: true,
              color: "blue",
              pointing: "left",
              content: this.props.counter,
            }}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Nav;
