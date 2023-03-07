import React from 'react'
import './style/StudioBoard.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




const StudioBoard = () => {
  return (
    <div className='nav-board'>
    <div className='nav-name'>StudioBoard</div>
    <div className='arrow-icon'>
      <i className='material-icons'><KeyboardArrowDownIcon/></i>
      </div>
    </div>
  )
}

export default StudioBoard