import { useState} from 'react'
import React from 'react'
import './style/AddForm.css'
import user from '../resources/avatar2.jpg'
import { AddCircleOutline } from '@mui/icons-material'
import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline';

const AddForm = ({setTaskList, taskList}) => {
    const [isAdding, setIsAdding ] = useState(false)
    const [cardText, setCardText] = useState('')
    const [icon, setIcon] = useState('add');

    const handleAdd = () => {
        setTaskList([...taskList, {'cardText': cardText}])
        setCardText('')
    }

    const handleAddClick = (e) => {
         e.stopPropagation();
        setIcon(icon === 'add' ? 'remove' : 'add')
      }
      const handleRemoveClick = (e) => {
        e.stopPropagation();
      }

  return (
    <div>
      <div onClick={handleAddClick}>
    <div className='card-wrapper__footer' onClick={() => { setIsAdding(!isAdding);}}>  
            <div className='add-task'>Add Task</div>
            <div className='add-task-ico'>
                <i className='material-icons'>{icon === 'add' ? <AddCircleOutline/> : <RemoveCircleOutline/>  }</i>
            </div>
        </div>
        </div>

        {
            isAdding &&
            <div onClick={handleRemoveClick}>
                <form className="add-card-form add-card-form-true">
            <div className="add-card-form__header">
              <div className="form__low-pr">
                <input 
                className="form__checkbox" 
                type="radio" 
                name="priority" 
                alt="Low Priority" 
                value="card-color-low"/>
                  <label className="form__label" for="Low Priority">Low Priority</label>
                  </div>
                  <div className="form__med-pr">
                    <input 
                    className="form__checkbox" 
                    type="radio" 
                    name="priority" 
                    alt="Med Priority" 
                    value="card-color-med"/>
                      <label className="form__label" for="Med Priority">Med Priority</label>
                      </div>
                      <div className="form__high-pr">
                        <input 
                        className="form__checkbox" 
                        type="radio" 
                        name="priority" 
                        alt="High Priority" 
                        value="card-color-high"/>
                          <label className="form__label" for="High Priority">High Priority</label>
                          </div>
                          </div>
                          <textarea 
                          minLength={5}
                          className="add-card-form__main-error add-card-form__main" 
                          type="text" 
                          placeholder="Write your task">
                          </textarea>
                          <div className="add-card-form__footer">
                            <div className="form__footer">
                              <div className="form__footer-av">
                                <img src={user}/>
                                  </div>
                                  <div className="attach-ico">
                                    <i className="material-icons">attach_file</i>
                                    </div>
                                    </div>
                                    <input 
                                    className="form-add-btn" 
                                    type="submit" 
                                    value="Add" 
                                    onClick={handleAdd}/>
                                      </div>
                                      </form>
            </div>
        }
 </div>                                 
  )
}

export default AddForm