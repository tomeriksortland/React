import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person/Person";
import Input from './components/Input/Input';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Tom Erik", age: 27 },
      { id: '2', name: "Even", age: 24 },
      { id: '3', name: "Torfin", age: 30 },
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id ) => {
    const findIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[findIndex] }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[findIndex] = person;

    this.setState( { persons: persons } );
  };

  togglePersonsHandler = () => {
    const Show = this.state.showPersons;
    this.setState({ showPersons: !Show });
  };

  render() {
    const style = {
      font: "inherit",
      border: "1px solid white",
      backgroundColor: "grey",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={this.deletePersonHandler.bind(this, index)}
            name={person.name} 
            age={person.age}
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}

        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>

        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle persons!
        </button>

        {persons}
        <Input  />

      </div>
    );
  }
}

export default App;
