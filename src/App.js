
import './App.css';
import React,{ Component } from 'react';
import {CardList} from './components/cardlist/card-list.component'
import {SearchBox} from './components/searchBox/searchBox.component'


class App extends React.Component {

  constructor(props) {
    super()

    //use an array of objects to hold key and valye paid for data
    this.state = {
      //array of monsters with their names
      //add id for unique key, each id value must be unique
      'monsters': [],
      'searchField':''
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

    //code below is a filter used for the search field.
    const {monsters, searchField} = this.state
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )

    return (<div className="App">
      {/* <input type = 'search' placeholder = 'search field' onChange = { e  => this.setState({'searchField':e.target.value})  }/> */}
      <SearchBox
      placeholder = 'search field'
      handleChange = { e => this.setState({'searchField':e.target.value})}
      />
      {/*component below is passing the mosters json data with props */}
      <CardList monsters = {filterMonsters}/>
  
    </div>)
  }
}



export default App;
