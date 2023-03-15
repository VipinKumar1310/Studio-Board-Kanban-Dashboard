import React from 'react'
import './style/Card.css'
import user from '../resources/avatar1.jpg'
import MessageIcon from '@mui/icons-material/Message';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Add from '@mui/icons-material/Add';
import Clear from '@mui/icons-material/Clear';

const Card = ({text, priortiy}) => {
    
  
    return (
        <div className='card' draggable='true'>
            <div className='card__header'>
          <div className='card-container-color card-color-low'>
              <div className='card__header-priority'>{priortiy}</div>
              </div>
              <div className='card__header-clear'>
                  <i className='material-icons'><Clear/></i>
              
          </div>
          </div>
          <div className='card__text'>{text}</div>
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