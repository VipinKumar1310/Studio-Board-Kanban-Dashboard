import React from 'react'
import './style/Card.css'
import user from '../resources/avatar1.jpg'
import MessageIcon from '@mui/icons-material/Message';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Add from '@mui/icons-material/Add';
import Clear from '@mui/icons-material/Clear';

const Card = () => {
    const handleDragStart = (event) => {
      // Set the data being dragged
      event.dataTransfer.setData('text/plain', 'card');
  
      // Add a class to the dragged element
      event.target.classList.add('dragging');
    };
  
    const handleDragEnd = (event) => {
      // Remove the class added in handleDragStart
      event.target.classList.remove('dragging');
    };
  
    return (
      <div className='card' draggable='true' onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
           <div className='card__header'>
         <div className='card-container-color card-color-low'>
            <div className='card__header-priority'>Low Priority</div>
            </div>
            <div className='card__header-clear'>
                <i className='material-icons'><Clear/></i>
            
         </div>
        </div>
        <div className='card__text'>Company Website redesign</div>
        <div className='card__menu'>
        <div className='card__menu-left'>
            <div className='comments-wrapper'>
                <div className='comments-ico'>
                    <i className='material-icons'><MessageIcon/></i>
                </div>
                <div className='comments-num'>1</div>
            </div>
            <div className='attach-wrapper'>
                <div className='attach-ico'>
                    <i className='material-icons'><AttachFileIcon/></i>
                </div>
                <div className='attach-num'>2</div>

            </div>
        </div>
        <div className='card__menu-right'>
            <div className='add-peoples'>
                <i className='material-icons'><Add/></i>
            </div>
            <div className='img-avatar'>
            <img src={user} alt="avatar-1" />
            </div>
        </div>
        </div>
          </div>
    );
  };

export default Card