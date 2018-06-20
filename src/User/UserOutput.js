import React from 'react'
import "./User.css"

const userOutput = (props) => {
  return (
    <div className="output">
      <p> name: {props.username} </p>
      <p> answer: yes </p>
    </div>
  )
}

export default userOutput;
