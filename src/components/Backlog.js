import React, {useState} from 'react'
import './style/Block.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Card from './Card'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { AddCircleOutline } from '@mui/icons-material'

const Backlog = () => {

  const [showDropdown, setShowDropdown] = useState(true);
  const [icon, setIcon] = useState('down');

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
    setIcon(icon === 'down' ? 'right' : 'down')
  };

  return (
    <div className='card-wrapper backlog-color'>
        <div className='card-wrapper__header'>
            <div className='block-name'>Backlog</div>
            <div className='block-dots' onClick={handleDropdownClick}>
              <i className='material-icons'>{icon === 'down' ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}</i>
            </div>
        </div>
        {showDropdown && (       
         <div className='cards' >
          <Card/>
          <Card/>
          <Card/>
          <div className='card-wrapper__footer'>     
            <div className='add-task'>Add Task</div>
            <div className='add-task-ico'>
                <i className='material-icons'><AddCircleOutline/></i>
            </div>     
          </div>
          </div>        
        )}   
        </div> 
  )
}

export default Backlog