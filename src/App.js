import React from 'react'
import StudioBoard from './components/StudioBoard'
import Backlog from './components/Backlog'
import InProgress from './components/InProgress'
import Review  from './components/Review'
import Complete from './components/Complete'
import './App.css'
import AddButton from './components/AddButton'

const App = () => {
  return (
    <div className='app'>
      <div className='nav'><StudioBoard/></div>
      
      <div className='app-main'>
      <Backlog/>
      <InProgress/>
      <Review/>
      <Complete/>
      </div>
      <AddButton/>
    </div>
  )
}

export default App