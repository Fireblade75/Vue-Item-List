import '../css/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { createStore } from 'redux'

const store = createStore(editorApp);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('react-container')
);