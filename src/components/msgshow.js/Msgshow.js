import React from 'react'
import './msg.css'

const Msgshow = (props) => {
  const { message, clearMsg } = props
  return (

        <div className="msg-notice">
            <span>{message}</span>
            <button onClick={clearMsg}>X</button>
        </div>
  )
}

export default Msgshow
