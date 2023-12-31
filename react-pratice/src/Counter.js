import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  changeCount() {
    this.setState({
      count: this.state.count + 5,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.changeCount()}>click Me</button>
      </div>
    );
  }
}
export default Counter;
