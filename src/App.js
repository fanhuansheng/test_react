import './App.css';

import React, { Component } from 'react'
import Hello from './components/test1/Hello';
import Welcome from './components/welcome/Welcome';
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}
