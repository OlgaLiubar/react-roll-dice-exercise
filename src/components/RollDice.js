import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { face1: "one", face2: "six", rolling: false };
  }

  roll = () => {
    const newFace1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newFace2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    this.setState({ face1: newFace1, face2: newFace2, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  handleClick = (e) => {
    this.roll();
  };

  render() {
    return (
      <div className="rollDice">
        <div className="rollDice-container">
          <Die face={this.state.face1} rolling={this.state.rolling} />
          <Die face={this.state.face2} rolling={this.state.rolling} />
        </div>
        <button className="rollDice-button" onClick={this.handleClick} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

RollDice.defaultProps = {
  sides: ["one", "two", "three", "four", "five", "six"],
};
