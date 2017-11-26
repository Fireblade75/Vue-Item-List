import React from 'react'

class Counter extends React.Component {
  
  render() {
    return (
      <div className="counter">
        <div className="row">
          <span>Team A</span>
          <span>{this.props.homeScore}</span>
          <button className="btn">Goal!</button>
        </div>
        <div className="row">
          <span>Team B</span>
          <span>{this.props.outScore}</span>
          <button className="btn">Goal!</button>
        </div>
      </div>
    )
  }
}

export default Counter