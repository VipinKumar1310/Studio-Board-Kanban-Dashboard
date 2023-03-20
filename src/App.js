import {useState} from 'react'
import React from 'react'
import './App.css'
import Backlog from './components/Backlog'
import InProgress from './components/InProgress'
import Review  from './components/Review'
import Complete from './components/Complete'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Add from '@mui/icons-material/Add';
import avatar1 from './resources/avatar1.jpg'
import avatar2 from './resources/avatar2.jpg'
import avatar3 from './resources/avatar3.jpg'
import avatar4 from './resources/avatar4.jpg'
import Board from './components/Board'
import AddButton from './components/AddButton'


const App = (props) => {
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

  
  const [boardList, setBoardList] = useState([
    {
      id: "101",
      cardText: "Backlog",
      style: "backlog-color",
    },
    {
      id: "102",
      cardText: "In Progress",
      style: "in-progress-color",
    },
    {
        id: "103",
        cardText: "Complete",
        style: "complete-color",
      },
      {
        id: "104",
        cardText: "Review",
        style: "review-color",
      },
  ])

  return (
    <div className='app'>
      <div className='kanban__nav'>
       <div className='kanban__nav-wrapper'>
        <div className='kanban__nav-name' >
          <div className='kanban-name'>StudioBoard</div>
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
        <div className='kanban__main'>
        {isActive && (
          <section>
          <div className='kanban__main-wrapper' onClick={handleMainClick}>
          {boardList.map((task, index) => {
          return <Board key={index} data={task} />
         })}
          </div>
          <AddButton/>
          </section>
        )}
          </div>
    </div>
  )
}

export default App