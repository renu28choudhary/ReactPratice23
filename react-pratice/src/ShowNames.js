import React, { Component } from "react";
const skills = [
  "Data Science",
  "Data Analysis",
  "Tableau",
  "Power BI",
  "React Native",
  "React",
  "Swift",
  "Excel",
  "SQL",
  "Big Data",
];
class ShowNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      isClicked: false,
    };
  }

  handleNameChange = (e) => {
    this.setState({
      names: e.target.value,
    });
  };

  handleAddition = () => {
    this.setState({
      isClicked: true,
      names: [...skills, ...this.state.names],
    });
  };

  render() {
    let showNamesList = skills
      .map((item, index) => <div key={index}>{item}</div>);
    return (
      <div>
        {!this.state.isClicked && <div>{showNamesList}</div>}
        {<div>{this.state.names}</div>}
        <button onClick={this.handleAddition}>Add</button>
        <input
          type="text"
          value={this.state.names}
          onChange={this.handleNameChange}
        ></input>
      </div>
    );
  }
}

export default ShowNames;
