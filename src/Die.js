import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 6
  }
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const {numberWords, locked, val, disabled, rolling} = this.props;
    let diceIcon = "Die fas fa-dice-" + numberWords[val - 1] + " fa-5x";
    if (locked) diceIcon += " Die-locked";
    if (rolling) diceIcon += " Die-rolling";
    return <i className={diceIcon} onClick={this.handleClick} ></i>;
  }
}

export default Die;
