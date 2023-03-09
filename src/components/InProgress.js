import {useState} from 'react'
import React from 'react'
import './style/Block.css'
import Card from './Card'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'


const InProgress = () => {

  const [showDropdown, setShowDropdown] = useState(true);
  const [icon, setIcon] = useState('down');

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
    setIcon(icon === 'down' ? 'right' : 'down')
  };

  return (
    <div className='card-wrapper in-progress-color'>
        <div className='card-wrapper__header'>
            <div className='backlog-name'>In Progess</div>
            <div className='backlog-dots' onClick={handleDropdownClick}>
              <i className='material-icons'>{icon === 'down' ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}</i></div>
        </div>
        {showDropdown && (
          
          <div className='cards' >
           <Card/>
           </div>
           
         )}
        
    </div>
  )
}

export default InProgress