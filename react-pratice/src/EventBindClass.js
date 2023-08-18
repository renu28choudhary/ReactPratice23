import React, { Component } from "react";

class EventBindClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
  }

  handleClick = () => {
    this.setState({
      message: "GoodBye",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

export default EventBindClass;
