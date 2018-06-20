import React, { Component } from "react";
import "./App.css";
import UserOutput from "./User/UserOutput";

class UserApp extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput username="empremto"/>
        <UserOutput username="ignite"/>
        <UserOutput username="super"/>
      </div>
    );
  }
}

export default UserApp;
