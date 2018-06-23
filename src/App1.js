import React, { Component } from "react";
import "./App.css";
import UserOutput from "./User/UserOutput";
import UserInput from "./User/UserInput";

class UserApp extends Component {
  state = {
    user: {
      username: "empremto"
    }
  };

  changeUsernameHandler = event => {
    this.setState({
      user: {
        username: event.target.value
      }
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.user.username} changeUsername={this.changeUsernameHandler} />
        <UserOutput username={this.state.user.username} />
      </div>
    );
  }
}

export default UserApp;
