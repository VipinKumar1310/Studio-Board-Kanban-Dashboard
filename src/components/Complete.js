import React from 'react'
import './Block.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Card from './Card'

const Backlog = () => {
  return (
    <div className='card-wrapper complete-color'>
        <div className='card-wrapper__header'>
            <div className='backlog-name'>Complete</div>
            <div className='backlog-dots'><i className='material-icons'><KeyboardArrowDownIcon/></i></div>
        </div>
        <div className='cards'>
        <Card/>
        <Card/>
        <Card/>
        </div>
        
    </div>
  )
}

export default Backlog