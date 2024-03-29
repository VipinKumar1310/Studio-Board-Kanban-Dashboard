import { useState } from "react";
import React, { Component } from "react";
import "../App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Add from "@mui/icons-material/Add";
import avatar1 from "../resources/avatar1.jpg";
import avatar2 from "../resources/avatar2.jpg";
import avatar3 from "../resources/avatar3.jpg";
import avatar4 from "../resources/avatar4.jpg";
import Board from "../components/Board";
import AddButton from "../components/AddButton";
import { Draggable } from "react-drag-reorder";


const App = () => {
  const [isActive, setIsActive] = useState(true);
  const [icon, setIcon] = useState("down");
  const [opacity, setOpacity] = useState(1);

  const [taskList, setTaskList] = useState([
    {
      id: "ab",
      boardId: "101",
      cardText: "Company Website Redesign",
      priority: "Low Priority",
      style: "card-color-low",
      comments: 10,
    },
    {
      id: "cd",
      boardId: "101",
      cardText: "Mobile App Login process",
      priority: "Med Priority",
      style: "card-color-mid",
      comments: 10,
    },
    {
      id: "ef",
      boardId: "101",
      cardText: "Onboarding Design",
      priority: "High Priority",
      style: "card-color-high",
      comments: 10,
    },
    {
      id: "gh",
      boardId: "102",
      cardText: "Research and Strategy for upcoming projects",
      priority: "High Priority",
      style: "card-color-high",
      comments: 5,
    },
    {
      id: "ij",
      boardId: "102",
      cardText: "Account file profile diagram",
      priority: "Med Priority",
      style: "card-color-mid",
      comments: 5,
    },
    {
      id: "kl",
      boardId: "102",
      cardText: "Slide templates for client pitch project",
      priority: "Low Priority",
      style: "card-color-low",
      comments: 5,
    },
    {
      id: "mn",
      boardId: "103",
      cardText: "Dashboard layout design",
      priority: "Low Priority",
      style: "card-color-low",
      comments: 10,
    },
    {
      id: "op",
      boardId: "103",
      cardText: "Social Media Post",
      priority: "High Priority",
      style: "card-color-high",
      comments: 10,
    },
    {
      id: "qr",
      boardId: "103",
      cardText: "Shopping Cart and product catalog wireframes",
      priority: "Low Priority",
      style: "card-color-low",
      comments: 10,
    },
    {
      id: "st",
      boardId: "104",
      cardText: "Review clientspec and document and give feedback",
      priority: "Low Priority",
      style: "card-color-low",
      comments: 10,
    },
    {
      id: "uv",
      boardId: "104",
      cardText: "Navigation designs",
      priority: "Med Priority",
      style: "card-color-mid",
      comments: 10,
    },
    {
      id: "wx",
      boardId: "104",
      cardText: "user profile prototypes",
      priority: "Low Priority",
      style: "card-color-low",
      comments: 10,
    },
  ]);

  const boardList = [
    {
      id: "101",
      cardText: "Backlog",
      style: "backlog-color",
    },
    {
      id: "102",
      cardText: "In Progress",
      style: "in-progress-color",
    },
    {
      id: "103",
      cardText: "Complete",
      style: "complete-color",
    },
    {
      id: "104",
      cardText: "Review",
      style: "review-color",
    },
  ];

  const handleArrowClick = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
    setIcon(icon === "down" ? "right" : "down");
  };

  const handleMainClick = (e) => {
    e.stopPropagation();
  };

  const handleOpacityChange = (e) => {
    const newOpacity = opacity === 1 ? 0.3 : 1;
    // setOpacity(newOpacity);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, targetBoard) => {
    let sourceBoard = e.dataTransfer.getData("bid");
    let cardId = e.dataTransfer.getData("cid");
    const updatedTaskList = [];
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].boardId === sourceBoard && taskList[i].id === cardId) {
        taskList[i].boardId = targetBoard;
      }
      updatedTaskList.push(taskList[i]);
    }
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <div className="kanban__nav">
        <div className="kanban__nav-wrapper">
          <div className="kanban__nav-name">
            <div className="kanban-name">Studio Board</div>
            <div className="kanban-arrow" onClick={handleArrowClick}>
              <i className="material-icons">
                {icon === "down" ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowRightIcon />
                )}
              </i>
            </div>
          </div>
          <div className="kanban__nav-avs">
            <div className="kanban__nav-avs-img">
              <img src={avatar1} alt="" />
            </div>
            <div className="kanban__nav-avs-img">
              <img src={avatar2} alt="" />
            </div>
            <div className="kanban__nav-avs-img">
              <img src={avatar3} alt="" />
            </div>
            <div className="kanban__nav-avs-img">
              <img src={avatar4} alt="" />
            </div>
            <div className="kanban__nav-avs-add">
              <div className="kanban__nav-avs-invite">
                <form>
                  <input
                    type="small"
                    placeholder="invite email"
                    className="invite-email"
                  />
                  <button className="invite-btn">Send</button>
                </form>
              </div>
              <i className="material-icons">
                <Add />
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="kanban__main" style={{ opacity }}>
        {isActive && (
          <section>
            <div className="kanban__main-wrapper" onClick={handleMainClick}>
             
              {boardList.map((task, index) => {
                return (
                  <Board
                    key={index}
                    data={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                  />
                );
              })}
            
            </div>
            <AddButton onChangeOpacity={handleOpacityChange} />
          </section>
        )}
      </div>
    </>
  );
};

export default App;
