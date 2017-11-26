import '../css/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import storeFactory from './state/store-factory'

const store = storeFactory();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('react-container')
);