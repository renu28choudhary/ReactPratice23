import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? <h1>Welcome Renu</h1> : <h1>Welcome Guest</h1>}
      </div>
    );
  }
}

export default UserGreeting;
