import React, {useState} from 'react'
import './style/Block.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Card from './Card'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { AddCircleOutline } from '@mui/icons-material'
import AdButton from './AdButton'

const Backlog = () => {

  const [showDropdown, setShowDropdown] = useState(true);
  const [icon, setIcon] = useState('down');

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
    setIcon(icon === 'down' ? 'right' : 'down')
  };

  const [taskList, setTaskList] = useState([
    {
      cardText: "anything",
      priority: "Low Priority"
    },
    {
      cardText: "anything",
      priority: "Low Priority"
    },
    {
      cardText: "anything",
      priority: "Low Priority"
    },
    {
      cardText: "anything",
      priority: "Low Priority"
    },
  ])

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
         {taskList.map((task, index) => {
          return <Card key={index} text={task.cardText} priortiy={task.priority} />
         })}
         
          <div className='card-wrapper__footer'>     
            <AdButton setTaskList={setTaskList} taskList={taskList} />   
          </div>
          </div>        
        )}   
        </div> 
  )
}

export default Backlog