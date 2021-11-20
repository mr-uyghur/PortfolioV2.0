
import './App.css';
import React,{ Component } from 'react';
import {CardList} from './components/cardlist/card-list.component'


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


  render() {
    return (<div className="App">
      {/*component below is passing the mosters json data with props */}
      <CardList monsters = {this.state.monsters}/>
  
    </div>)
  }
}



export default App;
