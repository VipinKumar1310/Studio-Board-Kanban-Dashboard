import React, {useState} from 'react'
import './style/Block.css'
import Card from './Card'
import AddForm from './AddForm'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'


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
  ])

  const handleDeleteCard = (index) => {
    const updatedTaskList = [...taskList]
    updatedTaskList.splice(index,1)
    setTaskList(updatedTaskList);
  }

 

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
          return <Card key={index} text={task.cardText} priortiy={task.priority} onDelete={handleDeleteCard}/>
         })}
         
          <div className='card-wrapper__footer'>     
            <AddForm setTaskList={setTaskList} taskList={taskList} />   
          </div>         
          </div>        
        )}   
        </div> 
  )
}

export default Backlog