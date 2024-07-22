import React from 'react'
import './message.css'
const Message = ({text}) => {
  return (
    <div className='message'>
        <div className="text__message">
            <input type='text' name="" className="text__area" placeholder={text}/>

            
        </div>
    </div>
  )
}

export default Message