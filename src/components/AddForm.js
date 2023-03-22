import { useState } from 'react';
import React from 'react';
import './style/AddForm.css';
import user from '../resources/avatar2.jpg';
import { AddCircleOutline } from '@mui/icons-material';
import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline';


const newId = () => {
  return Math.round(Math.random() * 36 ** 8).toString(36)
}

const AddForm = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const [cardText, setCardText] = useState('');
  const [priority, setPriority] = useState('');
  const [style, setStyle] = useState('');
  const [icon, setIcon] = useState('add');

  const handleAdd = e => {
    e.preventDefault();
    props.setTaskList([...props.taskList, { id:newId(), cardText: cardText, priority: priority, style: style, boardId: props.boardId }]);
    setIsAdding(false);
    setIcon('add');
    setPriority('');
    setCardText('');
  };

  const handleText = e => {
    setCardText(e.target.value);
  };

  const handlePriority = e => {
    setPriority(e.target.alt);
    setStyle(e.target.value)
  }
  const handleAddClick = e => {
    e.stopPropagation();
    setIcon(icon === 'add' ? 'remove' : 'add');
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
  };

  const Validity = () => {
    return priority.length > 0 && cardText.length >= 5
  }

  return (
    <div>
      <div onClick={handleAddClick}>
        <div
          className='card-wrapper__footer'
          onClick={() => {
            setIsAdding(!isAdding);
          }}
        >
          <div className='add-task'>Add Task</div>
          <div className='add-task-ico'>
            <i className='material-icons'>
              {icon === 'add' ? <AddCircleOutline /> : <RemoveCircleOutline />}
            </i>
          </div>
        </div>
      </div>

      {isAdding && (
        <div onClick={handleRemoveClick}>
          <form className='add-card-form add-card-form-true'>
            <div className='add-card-form__header' >
              <div className='form__low-pr' onClick={handlePriority}>
                <input
                  className='form__checkbox'
                  type='radio'
                  name='priority'
                  alt='Low Priority'
                  value='card-color-low'
                />
                <label className='form__label' for='Low Priority'>
                  Low Priority
                </label>
              </div>
              <div className='form__med-pr' onClick={handlePriority}>
                <input
                  className='form__checkbox'
                  type='radio'
                  name='priority'
                  alt='Med Priority'
                  value='card-color-mid'
                />
                <label className='form__label' for='Med Priority'>
                  Med Priority
                </label>
              </div>
              <div className='form__high-pr' onClick={handlePriority}>
                <input
                  className='form__checkbox'
                  type='radio'
                  name='priority'
                  alt='High Priority'
                  value='card-color-high'
                />
                <label className='form__label' for='High Priority'>
                  High Priority
                </label>
              </div>
            </div>
            <textarea
              className='add-card-form__main-error add-card-form__main'
              type='text'
              placeholder='Write your task'
              onChange = {handleText}
            ></textarea>
            <div className='add-card-form__footer'>
              <div className='form__footer'>
                <div className='form__footer-av'>
                  <img src={user} />
                </div>
                <div className='attach-ico'>
                  <i className='material-icons'>attach_file</i>
                </div>
              </div>
              <input
                className='form-add-btn'
                type='submit'
                value='Add'
                onClick={handleAdd}
                disabled={!Validity()}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddForm;
