import React from 'react'

class Counter extends React.Component {
  
  render() {
    return (
      <header>
        {this.props.title}
      </header>
    )
  }
}

export default Counter