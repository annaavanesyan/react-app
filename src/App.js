import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "a1", name: "Anna", age: 20 },
      { id: "a2", name: "Narek", age: 23 },
      { id: "a3", name: "Bobo", age: 1 }
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const peopleChanged = { ...this.state.persons };
    peopleChanged[personIndex] = person;

    this.setState({ persons: peopleChanged });
  };

  togglePersonsHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({ showPersons: !doesShowPersons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "yellow",
      border: "1px solid grey",
      padding: "5px 10px",
      borderRadius: "30px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              delete={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)}
            />;
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>probably</p>

        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          toggle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
