import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  constructor(props) {
    super(props);
    this.state = { randomNumber: 1 };
  }

  render() {
    return (
      <i
        className={`die fa-solid fa-dice-${this.props.face} ${
          this.props.rolling && "shaking"
        }`}
      ></i>
    );
  }
}
