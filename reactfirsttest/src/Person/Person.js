import React from 'react';

var testObj = {
    name: "Tom Erik",
    age: 27
};
const person = (props) => {
    return (
    <div>
        <p>Jeg heter {props.name} og jeg er {props.age} år gammel</p>
        <p>{props.children}</p>
    </div>
    )
};

export default person;