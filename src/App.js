import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { name: "Anna", age: 20 },
      { name: "Narek", age: 23 },
      { name: "Bobo", age: 1 }
    ],
    money: [
      { name: "Anna", money: "100$" },
      { name: "Narek", money: "10$" },
      { name: "Bobo", money: "1$" }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      people: [
        { name: newName, age: 20 },
        { name: "Narek", age: 24 },
        { name: "Bobosik", age: 1 }
      ]
    });
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

  render() {
    const buttonStyle = {
      backgroundColor: "yellow",
      border: "1px solid grey",
      padding: "5px 10px",
      borderRadius: "30px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>probably</p>

        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          toggle persons
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.people[0].name}
              age={this.state.people[0].age}
            >
              Money: {this.state.money[0].money}
            </Person>
            <Person
              name={this.state.people[1].name}
              age={this.state.people[1].age}
              changeName={this.switchNameHandler.bind(this, "Anna!")}
            >
              Money: {this.state.money[1].money}
            </Person>
            <Person
              name={this.state.people[2].name}
              age={this.state.people[2].age}
              insertName={this.nameChangedHandler}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
