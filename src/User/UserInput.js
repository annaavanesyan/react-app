import React from "react";
import "./User.css";

const userInput = props => {
  return (
    <input
      className="input"
      onChange={props.changeUsername}
      type="text"
      placeholder="insert username"
    />
  );
};

export default userInput;
