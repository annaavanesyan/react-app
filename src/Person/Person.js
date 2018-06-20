import React from "react";

const person = (props) => {
  return (
    <div className ="separate" onClick={props.changeName}>
      <p> My name is: {props.name}, age: {props.age} </p>
      <p> {props.children} </p>
    </div>
  );
};

export default person;
