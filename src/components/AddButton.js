import React, { useState } from 'react';
import './style/AddButton.css';
import Add from '@mui/icons-material/Add';
import Done from '@mui/icons-material/Done';

const AddButton = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [icon, setIcon] = useState('add');

  const handleArrowClick = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
    setIcon(icon === 'add' ? 'done' : 'add');
     props.onChangeOpacity();
  };

  const handleMainClick = (e) => {
    e.stopPropagation();
    
  };



  return (
    <div className='kanban-add-btn'>
      <div className='kanban__main-add-btn' onClick={handleArrowClick} >
        <i className='material-icons'>{icon === 'add' ? <Add/> : <Done/>}</i>
        </div>
      {isActive && (
        <section>
          <div className='kanban__main-select' onClick={handleMainClick}>
            <div className='main-select'>
              <div className='select-wrapper-main'>
                <div className='select-text-main'>Add Reports</div>
                <div className='select-event-note-main'>
                  <i className='material-icons'>dashboard</i>
                </div>
              </div>
              <div className='select-wrapper'>
                <div className='select-text'>Add Scheduled task</div>
                <div className='select-event-note'>
                  <i className='material-icons'>event_note</i>
                </div>
              </div>
            </div>
          </div>
         
        </section>
      )}
    </div>
  );
};

export default AddButton;
