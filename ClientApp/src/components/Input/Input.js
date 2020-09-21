import React from 'react';

const input = (props) => {
    <div>
        <p>{props.name}</p>
        <input type="text" onChange={props.inputChanged} value={props.name} />
    </div>
}