import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends Component {

  constructor() {
    super()

    this.state={
      str:"Ali"
    }
  }

  render() {
    return ( <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      {this.state.str}
      </p>
      <button
      >
       click me
      </button>
    </header>
  </div>)
  }
}



export default App;
