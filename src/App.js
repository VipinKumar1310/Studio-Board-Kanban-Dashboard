import React, { useState } from 'react'
import SideBar from './components/SideBar'
import KanbanBoard from './components/KanbanBoard'
import './App.css'
import NavBar from './components/NavBar'

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showKanbanBoard, setShowKanbanBoard] = useState(true);

  const handleOnClick = () => {
    setShowNavbar(!showNavbar);
  }

  const handleShowOnClick = () => {
    setShowKanbanBoard(!showKanbanBoard);
  }
  return (
    <div className='kanban-wrapper'>
    <div className='kanban' >
    <SideBar handleOnClick={handleOnClick} />
      {showNavbar && (
        <>
          <NavBar handleShowOnClick={handleShowOnClick} />
          <>
          {showKanbanBoard && (
            <KanbanBoard/>
          )}
          </>
          
        </>
      )}
    </div>
    </div>
  )
}

export default App