import React from 'react';

const person = (props) => {
    return (
    <div>
        <p onClick={props.click}>Jeg heter {props.name} og jeg er {props.age} år gammel</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};

export default person;