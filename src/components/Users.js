import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  constructor() {
    super();
    this.state = { showUsers: true };
  }

  toggleUsersHandler = () => {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers &&
          this.props.users.map((user) => (
            <User key={user.id} name={user.name} />
          ))}
      </div>
    );
  }
}

export default Users;
