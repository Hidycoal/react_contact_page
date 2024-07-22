import React from 'react'
import './leftSection.css'
import Input from './Input'
const LeftSection = () => {
  return (
    <div className='left__section'>
        <Input text='Name'/>
        <Input text='Email Address'/>
        <Input text='Subject'/>
    </div>
  )
}

export default LeftSection