import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      // Denne koden er et eksempel
      <div className="App">
          <h1>Hei, Jeg er en React applikasjon</h1>
          <p>This is a working component!! :D</p>
          <button>Swich Name!</button>
          <Person name="Tom Erik" age="27">Jeg liker programmering!</Person>
      </div>
      );
      


      // Denne koden er akkurat den samme som den over, bare at dette er JSX
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now??'))
    
  }
  }


export default App;

