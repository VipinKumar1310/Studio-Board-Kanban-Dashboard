import React from 'react'
import {useState} from 'react'
import '../App.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Add from '@mui/icons-material/Add';
import avatar1 from '../resources/avatar1.jpg'
import avatar2 from '../resources/avatar2.jpg'
import avatar3 from '../resources/avatar3.jpg'
import avatar4 from '../resources/avatar4.jpg'

const NavBar = ({handleShowOnClick}) => {
    const [icon, setIcon] = useState('down');

    const handleArrowClick = (e) => {
        setIcon(icon === 'down' ? 'right' : 'down')
        handleShowOnClick();
      }

  return (
    <div className='kanban__nav'>
       <div className='kanban__nav-wrapper'>
        <div className='kanban__nav-name' >
          <div className='kanban-name'>Studio Board</div>
           <div className='kanban-arrow' onClick={handleArrowClick}>
        <i className='material-icons'>{icon === 'down' ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}</i>
           </div>
          </div>
          <div className='kanban__nav-avs'>
            <div className='kanban__nav-avs-img'><img src={avatar1}/></div>
            <div className='kanban__nav-avs-img'><img src={avatar2}/></div>
            <div className='kanban__nav-avs-img'><img src={avatar3}/></div>
            <div className='kanban__nav-avs-img'><img src={avatar4}/></div>
            <div className='kanban__nav-avs-add'>
              <div className='kanban__nav-avs-invite'>
                <form>
                  <input type='small' placeholder='invite email' className='invite-email' />
                    <button className='invite-btn'>Send</button>
                </form>
              </div>
                <i className='material-icons'><Add/></i>
            </div>
          </div>
         </div>  
        </div>
  )
}

export default NavBar