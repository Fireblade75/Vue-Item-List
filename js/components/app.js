import React from 'react'
import Header from './header'

const store = {}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <provider store={store}>
        <Header />
      </provider>
    )
  }
}

export default App
