import React from 'react'
import './Backlog.css'
import down from '../resources/down-arrow.png'
import Card from './Card'

const Backlog = () => {
  return (
    <div className='card-wrapper backlog-color'>
        <div className='card-wrapper__header'>
            <div className='backlog-name'>Backlog</div>
            <div className='backlog-dots'><img src={down} alt="dow arrow" /></div>
        </div>
        <div className='cards'><Card/></div>
        
    </div>
  )
}

export default Backlog