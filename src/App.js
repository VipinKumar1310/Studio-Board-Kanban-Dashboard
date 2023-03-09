import {useState} from 'react'
import React from 'react'
import Backlog from './components/Backlog'
import InProgress from './components/InProgress'
import Review  from './components/Review'
import Complete from './components/Complete'
import './App.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'


const App = () => {
  const [isActive, setIsActive] = useState(true)
  const [icon, setIcon] = useState('down');

  const handleArrowClick = (e) => {
    e.stopPropagation();
    setIsActive(!isActive)
    setIcon(icon === 'down' ? 'right' : 'down')
  }

  const handleMainClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div className='app'>
      <div className='nav'>
      <div className='nav-board' >
       <div className='nav-name'>StudioBoard</div>
       <div className='arrow-icon' onClick={handleArrowClick}>
        <i className='material-icons'>{icon === 'down' ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}</i>
        {isActive && (
          <div className='app-main' onClick={handleMainClick}>
            <Backlog/>
            <InProgress/>
            <Review/>
           <Complete/>
          </div>
        )}
      </div>
      </div>
     </div>
      
      <div className='app-main'>
      </div>
    </div>
  )
}

export default App