import React from "react";
import "./User.css";

const userInput = props => {
  return (
    <div>
      <span>change username</span>
      <span><u>   {props.username}  </u></span>
      <span> to </span>
      <input
        className="input"
        onChange={props.changeUsername}
        type="text"
        placeholder="insert username"
      />
    </div>
  );
};

export default userInput;
