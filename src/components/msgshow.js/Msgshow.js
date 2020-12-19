import React from 'react';
import './msg.module.css'

const Msgshow = (props) => {
    return (
        <div className="msg-notice ">
            <span>{props.message}</span>
            <button onClick={props.clearMsg}>X</button>
        </div>
    );
};

export default Msgshow;