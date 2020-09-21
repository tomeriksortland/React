import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
      persons: [
        { name: "Tom Erik", age: 27 },
        { name: "Torfin", age: 30 },
        { name: "Even", age: 24}
      ]
  }

  switchNameHandler = (newName) => {
      // DETTE ER IKKE RIKTIG MÅTE Å GJØRE DET PÅ!
      //this.state.persons[0].name = "Tom Erik Sortland"
      this.setState( {persons: [
        { name: newName, age: 27 },
        { name: "Torfin", age: 30 },
        { name: "Even", age: 24}
      ]})
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Tom Erik', age: 27 },
        { name: event.target.value, age: 30 },
        { name: 'Even', age: 24 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Hei, Jeg er en React applikasjon</h1>
          <p>This is a working component!! :D</p>
          <button onClick={this.switchNameHandler.bind(this, 'Tom Erik Sortland')}>Switch Name!</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Tom Erikdsfdg')}
            >Jeg liker programmering!</Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
            ></Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            ></Person>
      </div>
      );    
    }
  }


export default App;

