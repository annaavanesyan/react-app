import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { id: "a1", name: "Anna", age: 20 },
      { id: "a2", name: "Narek", age: 23 },
      { id: "a3", name: "Bobo", age: 1 }
    ],
    money: [
      { name: "Anna", money: "100$" },
      { name: "Narek", money: "10$" },
      { name: "Bobo", money: "1$" }
    ],
    showPersons: false
  };

  nameChangedHandler = event => {
    this.setState({
      people: [
        { name: "Anna", age: 20 },
        { name: "Narek", age: 24 },
        { name: event.target.value, age: 1 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({ showPersons: !doesShowPersons });
  };

  deletePersonHandler = personIndex => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people});
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
          {this.state.people.map((person, index) => {
            return (
              <Person
                delete={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
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
