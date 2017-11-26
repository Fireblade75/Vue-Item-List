import React from 'react'

class Counter extends React.Component {
  
  render() {
    return (
      <div className="counter">
        <div className="score-row">
          <span>Team A</span>
          <span>{this.props.homeScore}</span>
          <button className="btn">Goal!</button>
        </div>
        <div className="score-row">
          <span>Team B</span>
          <span>{this.props.outScore}</span>
          <button className="btn">Goal!</button>
        </div>
        <div className="reset-row">
          <button className="btn">Reset Scores</button>
        </div>
      </div>
    )
  }
}

export default Counter