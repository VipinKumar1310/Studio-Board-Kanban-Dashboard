import React from 'react'
import './Card.css'
import user from '../resources/avatar1.jpg'

const Card = () => {
  return (
    <div className='card'>
        <div className='card__header'>
         <div className='card-container-color card-color-low'>
            <div className='card__header-priority'>Low Priority</div>
            <div className='card__header-clear'>
                <i className='material-icons'>clear</i>
            </div>
         </div>
        </div>
        <div className='card__text'>Company Website redesign</div>
        <div className='card__menu'>
        <div className='card__menu-left'>
            <div className='comments-wrapper'>
                <div className='comments-ico'>
                    <i className='material-ico'>comment</i>
                </div>
                <div className='comments-num'>1</div>
            </div>
            <div className='attach-wrapper'>
                <div className='attach-ico'>
                    <i className='material-icons'>attach_file</i>
                </div>
                <div className='attach-num'>2</div>

            </div>
        </div>
        <div className='card__menu-right'>
            <div className='add-peoples'>
                <i className='material-icons'>add</i>
            </div>
            <div className='img-avatar'>
            <img src={user} alt="avatar-1" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card