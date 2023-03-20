import React from 'react'
import './style/Card.css'
import user from '../resources/avatar1.jpg'
import MessageIcon from '@mui/icons-material/Message';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Add from '@mui/icons-material/Add';
import Clear from '@mui/icons-material/Clear';
import classNames from 'classnames';
// import drag from './drag';

const Card = (props) => {
    
    const style = classNames('card-container-color', props.data?.style);
    // const []
    const detectDrag = e => {
        // alert(e.target.className)
    }
    return (
        <div className='card' draggable='true' onDragStart={detectDrag}>
            <div className='card__header'>
          <div className={style}>
              <div className='card__header-priority'>{props.data?.priority}</div>
              </div>
              <div className='card__header-clear ' id={props.data?.id} onClick={() => props.onDelete(props.data.id)}>
                  <i className='material-icons'><Clear fontSize='small'/></i>
              
          </div>
          </div>
          <div className='card__text'>{props.data?.cardText}</div>
          <div className='card__menu'>
          <div className='card__menu-left'>
              <div className='comments-wrapper'>
                  <div className='comments-ico'>
                      <i className='material-icons'><MessageIcon fontSize='small'/></i>
                  </div>
                  <div className='comments-num'>{props.data?.comments}</div>
              </div>
              <div className='attach-wrapper'>
                  <div className='attach-ico'>
                      <i className='material-icons'><AttachFileIcon fontSize='small'/></i>
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