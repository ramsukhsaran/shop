import React from 'react';
import './msg.css'

const Msgshow = (props) => {
    return (
        <div className="msg-notice container">
            <span>{props.message}</span>
            <button onClick={props.clearMsg}>X</button>
        </div>
    );
};

export default Msgshow;