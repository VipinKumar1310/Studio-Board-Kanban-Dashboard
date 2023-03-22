import React, { useState } from 'react'
import '../components/style/SideBar.css'
import NavBar from './NavBar'
import KanbanBoard from './KanbanBoard'

const SideBar = ({ handleOnClick }) => {
    const [active, setActive] = useState(false);
  return (
   <section className="kanban__sidebar">
    <div className="kanban__sidebar-menu">
     <a href="#/manage">
      <div className="manage-area">
        <i className="material-icons">people</i>
         <span>Manage</span>
           </div>
             </a>
              <a className={active ? 'active-area' : ''} aria-current="page" href="#/StudioBoard" onClick={handleOnClick}>
               <div className="boards-area">
                <i className="material-icons">dns</i>
                  <span>Boards</span>
                   </div>
                    </a>
                     <a href="#/schedule">
                       <div className="schedule-area">
                         <i className="material-icons">event_note</i>
                           <span>Schedule</span>
                             </div>
                               </a>
                                 <a href="#/reports">
                                   <div className="reports-area">
                                     <i className="material-icons">assessment</i>
                                       <span>Reports</span>
                                       </div>
                                        </a>
                                        </div>
                                        <a href="#/settings">
                                          <div className="kanban__sidebar-settings">
                                            <i className="material-icons">settings</i>
                                              <span>Settings</span>
                                              </div>
                                               </a>
                                                 </section>
  )
}

export default SideBar