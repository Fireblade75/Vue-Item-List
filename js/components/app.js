import React from 'react'
import Header from './header'
import {Provider} from 'react-redux'

const store = {}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Header title='Footbal Counter' />
          <main>

          </main>
        </div>
      </Provider>
    )
  }
}

export default App
