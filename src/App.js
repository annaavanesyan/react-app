import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { name: "Anna", age: 20 },
      { name: "Narek", age: 23 },
      { name: "Bobo", age: 1 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>probably</p>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}>
          Hobbies: Tennis
        </Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>
          Hobbies: Gym
        </Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
    );
  }
}

export default App;
