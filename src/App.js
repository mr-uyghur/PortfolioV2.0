
import './App.css';
import React,{ Component } from 'react';


class App extends React.Component {

  constructor(props) {
    super()

    //use an array of objects to hold key and valye paid for data
    this.state = {
      //array of monsters with their names
      //add id for unique key, each id value must be unique
      'monsters': []
    }
  }

  //this block of code fetch's data from an API endpoint
  //and sets the state with the json data
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    //users var gets the json data from response.json
    .then(users => this.setState({monsters: users}))
  }

  handleIncrement = () => {
    this.setState({ string: 'Imran' })
  }

  render() {
    return (<div className="App">
      {/* return the data in state with map method */}
      {
        this.state.monsters.map((m) => <h1 key={m.id}>{m.name} </h1>)
      }
    </div>)
  }
}



export default App;
