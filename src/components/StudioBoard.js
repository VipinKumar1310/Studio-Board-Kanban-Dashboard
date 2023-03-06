import React from 'react'
import down from '../resources/down-arrow.png'
import './StudioBoard.css'

const StudioBoard = () => {
  return (
    <div className='nav-board'>
    <div className='nav-name'>StudioBoard</div>
    <div className='arrow-icon'>
        <img src={down} alt="dow arrow" />
    </div>
    </div>
  )
}

export default StudioBoard