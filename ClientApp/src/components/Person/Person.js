import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p>
        I'm {props.name} and i am {props.age}
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
      <br />
      <br/>
      <button onClick={props.click}>Delete this person!</button>
    </div>
  );
};

export default person;
