import { useState } from "react";
import React from "react";
import "./style/KanbanBoard.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Add from "@mui/icons-material/Add";
import avatar1 from "../resources/avatar1.jpg";
import avatar2 from "../resources/avatar2.jpg";
import avatar3 from "../resources/avatar3.jpg";
import avatar4 from "../resources/avatar4.jpg";
import Board from "../components/Board";
import AddButton from "../components/AddButton";

const KanbanBoard = () => {
  const [isActive, setIsActive] = useState(true);
  const [icon, setIcon] = useState("down");
  const [opacity, setOpacity] = useState(1);

  const [taskList, setTaskList] = useState([
    {
      id: "ab",
      boardId: "101",
      cardText: "anything",
      priority: "High Priority",
      style: "card-color-high",
      comments: 10,
    },
    {
      id: "cd",
      boardId: "101",
      cardText: "anything",
      priority: "High Priority",
      style: "card-color-high",
      comments: 10,
    },
    {
      id: "ef",
      boardId: "101",
      cardText: "anything",
      priority: "High Priority",
      style: "card-color-high",
      comments: 10,
    },
    {
      id: "gh",
      boardId: "102",
      cardText: "anything",
      priority: "Low Priority",
      style: "card-color-low",
      comments: 5,
    },
    {
      id: "ij",
      boardId: "102",
      cardText: "anything",
      priority: "Low Priority",
      style: "card-color-low",
      comments: 5,
    },
    {
      id: "kl",
      boardId: "102",
      cardText: "anything",
      priority: "Low Priority",
      style: "card-color-low",
      comments: 5,
    },
    {
      id: "mn",
      boardId: "103",
      cardText: "anything",
      priority: "mid Priority",
      style: "card-color-mid",
      comments: 10,
    },
    {
      id: "op",
      boardId: "103",
      cardText: "anything",
      priority: "mid Priority",
      style: "card-color-mid",
      comments: 10,
    },
    {
      id: "qr",
      boardId: "103",
      cardText: "anything",
      priority: "mid Priority",
      style: "card-color-mid",
      comments: 10,
    },
    {
      id: "st",
      boardId: "104",
      cardText: "anything",
      priority: "mid Priority",
      style: "card-color-mid",
      comments: 10,
    },
    {
      id: "uv",
      boardId: "104",
      cardText: "anything",
      priority: "mid Priority",
      style: "card-color-mid",
      comments: 10,
    },
    {
      id: "wx",
      boardId: "104",
      cardText: "anything",
      priority: "mid Priority",
      style: "card-color-mid",
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
    setOpacity(newOpacity);
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
    <div className="app ">
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
    </div>
  );
};

export default KanbanBoard;
