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
    ]
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

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>probably</p>

        <button onClick={() => this.switchNameHandler("Anna the Great")}>
          click me to see the magic!
        </button>

        <Person name={this.state.people[0].name} age={this.state.people[0].age}>
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
        />
      </div>
    );
  }
}

export default App;
