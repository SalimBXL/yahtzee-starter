import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const {score, name, doScore, description} = this.props;
    const isDisabled = (score !== undefined);
    const rulerow = isDisabled ? "RuleRow RuleRow-disabled" : "RuleRow RuleRow-active";
    return (
      <tr className={rulerow}
          onClick={isDisabled ? null : doScore}>
        <td className="RuleRow-name">{name}</td>
        {isDisabled ? 
          <td className="RuleRow-score">{score} point{score > 1 ? "s" : ""}</td> 
          : <td className="RuleRow-description">{description}</td>}
        
      </tr>
    )
  }
}

export default RuleRow;