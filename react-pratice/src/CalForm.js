// create a class componenet that renders and works for below task ..

import React, { Component } from "react";
import './CalForm.css'

export class CalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: "",
      result: "",
    };
  }

  handleNum1Change = (e) => {
    this.setState({
      num1: e.target.value,
    });
  };

  handleNum2Change = (e) => {
    this.setState({
      num2: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      result: parseInt(this.state.num1) * parseInt(this.state.num2),
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="column">
          <div className="top">
          <div className="topBorder">Multiplication Calculator</div>
          <div className="row">
          <label>Enter first number</label>
          <input
            type="number"
            value={this.state.num1}
            onChange={this.handleNum1Change}
          ></input>
          </div>
          <div className="row">
            <label>Enter second number</label>
            <input
              type="number"
              value={this.state.num2}
              onChange={this.handleNum2Change}
            ></input>
          </div>
          <div className="row">
            <label>Result is</label>
            <div className="resultBorder">{this.state.result}</div>
          </div>
          </div>
          <div className="columncenter" >
            <button>submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default CalForm;
