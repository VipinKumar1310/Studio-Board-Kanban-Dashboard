import React from 'react'
import './style/Block.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Card from './Card'

const Backlog = () => {
  return (
    <div className='card-wrapper backlog-color'>
        <div className='card-wrapper__header'>
            <div className='backlog-name'>Backlog</div>
            <div className='backlog-dots'><i className='material-icons'><KeyboardArrowDownIcon/></i></div>
        </div>
        <div className='cards'>
          <Card/>
          
        </div>
    </div>
  )
}

export default Backlog