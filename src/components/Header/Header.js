import React from "react";
import HeaderContent from "./HeaderContent";
import classes from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <div className={classes.header}>
        <h1>{this.props.title}</h1>
        {this.props.children && <HeaderContent content={this.props.children} />}
      </div>
    );
  }
}

export default Header;
