import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends React.Component {

  constructor(props) {
    super()

    this.state={string:'Ali'}
    
  }
  
  handleIncrement = () => {
    this.setState({string: 'Imran' })
  }

  render() {
    return ( <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      {this.state.string}
      </p>
      <button onClick = {this.handleIncrement}
      >
       click me
      </button>
    </header>
  </div>)
  }
}



export default App;
