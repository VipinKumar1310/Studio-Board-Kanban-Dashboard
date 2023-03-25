import React, { useState } from 'react'
import SideBar from './components/SideBar'
import KanbanBoard from './components/KanbanBoard'
import './App.css'
import Manage from './components/Manage'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Schedule from './components/Schedule'
import Reports from './components/Reports'
import Settings from './components/Settings'


const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
 
  const handleOnClick = () => {
    setShowNavbar(!showNavbar); 
  }


  return (
    <div className='kanban-wrapper'>
    <div className='kanban' >
      <Routes>
        <Route exact path='/' Component={Main}/>
        <Route path='/manage' Component={Manage}/>
        <Route path='/schedule' Component={Schedule}/>
        <Route path='/reports' Component={Reports}/>
        <Route path='/settings' Component={Settings}/>
      </Routes>
    <SideBar handleOnClick={handleOnClick} />
    </div>
    </div>
  )
}

export default App