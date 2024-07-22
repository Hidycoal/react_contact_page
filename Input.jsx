import React from 'react'
import './input.css'
const Input = ({text}) => {
  return (
    <div className='input'>
        <input type="text" className='input__class' placeholder={text}/>
    </div>
  )
}

export default Input