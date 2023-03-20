import React, {useState} from 'react'
import './style/Block.css'
import Card from './Card'
import AddForm from './AddForm'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import classNames from 'classnames'


const Board = (props) => {

    const [showDropdown, setShowDropdown] = useState(true);
  const [icon, setIcon] = useState('down');

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
    setIcon(icon === 'down' ? 'right' : 'down')
  };


    const [taskList, setTaskList] = useState([
        {
          id: "ab",
          cardText: "anything",
          priority: "High Priority",
          style: "card-color-high",
          comments: 10
        },
        {
          id: "cd",
          cardText: "anything",
          priority: "Low Priority",
          style: "card-color-low",
          comments: 5
        },
        {
            id: "ef",
            cardText: "anything",
            priority: "mid Priority",
            style: "card-color-mid",
            comments: 10
          },
      ])

      const handleDeleteCard = (id) => {
        const updatedTaskList = [...taskList]
        for(let i=0; i< updatedTaskList.length; i++){
          let obj = updatedTaskList[i];
          if(obj.id === id) updatedTaskList.splice(i, 1)
        }
        setTaskList(updatedTaskList);
      }

      const style = classNames('card-wrapper', props.data?.style);

  return (
    <div className={style}>
        <div className='card-wrapper__header'>
            <div className='block-name'>{props.data?.cardText}</div>
            <div className='block-dots' onClick={handleDropdownClick}>
              <i className='material-icons'>{icon === 'down' ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}</i>
            </div>
        </div>
        {showDropdown && (       
         <div className='cards' >
         {taskList.map((task, index) => {
          return <Card key={index} data={task} onDelete={handleDeleteCard}/>
         })}
         
          <div className='card-wrapper__footer'>     
            <AddForm setTaskList={setTaskList} taskList={taskList} />   
          </div>         
          </div>        
        )}   
        </div> 
  )
}

export default Board