import React from 'react'
import './mainSection.css'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Button from './Button'
const MainSection = () => {
  return (
    <div className='main__section'>
        <div className="main__wrapper">
            <LeftSection />
            <RightSection />
        </div>
        <Button />
    </div>
  )
}

export default MainSection