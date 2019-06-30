import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>Hi I am Meowcheck</h1>
            <button onClick={props.clicked}>
                Toggle Person
            </button>
        </div>
        
    );
}

export default cockpit;