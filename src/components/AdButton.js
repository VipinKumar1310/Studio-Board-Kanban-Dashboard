import React, { useState } from 'react'
import { AddCircleOutline } from '@mui/icons-material'
import { TextField } from '@mui/material'

function AdButton({setTaskList, taskList}) {
    const [isAdding, setIsAdding ] = useState(false)
    const [cardText, setCardText] = useState('')
    const [priority, setPriority] = useState('Low priority')

    // onclick for add 
    // setTaskList([...taskList, {text: '', done: false}])
    const handleAdd = () => {
        console.log("the card text was");
        setTaskList([...taskList, {'cardText': cardText, priority: priority}])
        setCardText('')
    }

  return (
    <div >
        <div className='add-task-btn' onClick={() => setIsAdding(!isAdding)}>
            <div className='add-task'>Add Task</div>
            <div className='add-task-ico'>
                <i className='material-icons'><AddCircleOutline/></i>
            </div>
        </div>
        {
            isAdding &&
            <div>
                <div>
                    <p onClick={() => {setPriority('High Prority')}}>high</p>
                </div>
                <TextField
                    id="outlined-multiline-flexible"
                    label={false}
                    placeholder="Enter your task"
                    multiline
                    maxRows={24}
                    value={cardText}
                    onChange={(e) => setCardText(e.target.value)}
                />
                <p onClick={handleAdd}>add</p>
            </div>
        }
    </div>
  )
}

export default AdButton