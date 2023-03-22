import React, { useState } from 'react';
import './style/Board.css';
import Card from './Card';
import AddForm from './AddForm';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ClassNames from 'classnames';

const Board = (props) => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [icon, setIcon] = useState('down');

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
    setIcon(icon === 'down' ? 'right' : 'down');
  };

  const onDragStart = (e, cid, bid) => {
    e.dataTransfer.setData('bid', bid);
    e.dataTransfer.setData('cid', cid);
  };

  const handleDeleteCard = (id) => {
    const updatedTaskList = [...props.taskList];
    for (let i = 0; i < updatedTaskList.length; i++) {
      let obj = updatedTaskList[i];
      if (obj.id === id) updatedTaskList.splice(i, 1);
    }
    props.setTaskList(updatedTaskList);
  };

  const style = ClassNames( props.data?.Style);
  const classes = ClassNames({
    'card-wrapper': true,
  });
  return (
 
    <div
      className={style + '' +classes}
      onDragOver={(e) => props.onDragOver(e)}
      onDrop={(e) => props.onDrop(e, props.data?.id)}
    >
      <div className='card-wrapper__header'>
        <div className='block-name'>{props.data?.cardText}</div>
        <div className='block-dots' onClick={handleDropdownClick}>
          <i className='material-icons'>
            {icon === 'down' ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </i>
        </div>
      </div>
      {showDropdown && (
        <div className='cards'>
          {props.taskList
            .filter((task) => task.boardId === props.data?.id)
            .map((task, index) => {
              return (
                <Card
                  key={index}
                  data={task}
                  cardId={task.id}
                  onDelete={handleDeleteCard}
                  onDragStart={onDragStart}
                  boardId={props.data?.id}
                />
              );
            })}

          <div className='card-wrapper__footer'>
            <AddForm
              setTaskList={props.setTaskList}
              taskList={props.taskList}
              boardId={props.data?.id}
            />
          </div>
        </div>
      )}
    </div>
  
  );
};

export default Board;
