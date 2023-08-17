// state in class component

import React, { Component } from "react";
class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome visitor",
    };
  }

  changeMessage(){
    console.log("clicked")
    this.setState({
      message: "Thank you for visiting"
    })
  }

  render() {
    return(
    <div>
      <h1>{this.state.message}</h1>
      <button onClick={()=> this.changeMessage()}>click me</button>
    </div>
    )
  }
}

export default Message;
