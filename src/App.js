import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>probably</p>
        <Person name="Anna" age="20"> Hobbies: Tennis</Person>
        <Person name="Narek" age="23"> Hobbies: Gym</Person>
        <Person name="Bobo" age="1"/>
      </div>
    );
  }
}

export default App;
