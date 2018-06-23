import React from "react";
import "./Person.css"

const person = (props) => {
  return (
    <div className ="Person" onClick={props.delete}>
      <p> My name is: {props.name}, age: {props.age} </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.insertName} value={props.name}/>
    </div>
  );
};

export default person;
