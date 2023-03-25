import React, { useState } from 'react'
import '../components/style/SideBar.css'
import { Link } from 'react-router-dom';


const SideBar = ({ handleOnClick }) => {
    const [active, setActive] = useState(false);
  return (
   <section className="kanban__sidebar">
    <div className="kanban__sidebar-menu">
     <Link to="/manage" >
      <div className="manage-area">
        <i className="material-icons">people</i>
         <span>Manage</span>
           </div>
             </Link>
              <Link className={active ? 'active-area' : ''} aria-current="page" to="/" onClick={handleOnClick}>
               <div className="boards-area">
                <i className="material-icons">dns</i>
                  <span>Boards</span>
                   </div>
                    </Link>
                     <Link to="/schedule">
                       <div className="schedule-area">
                         <i className="material-icons">event_note</i>
                           <span>Schedule</span>
                             </div>
                               </Link>
                                 <Link to="/reports">
                                   <div className="reports-area">
                                     <i className="material-icons">assessment</i>
                                       <span>Reports</span>
                                       </div>
                                        </Link>
                                        </div>
                                        <Link to="/settings">
                                          <div className="kanban__sidebar-settings">
                                            <i className="material-icons">settings</i>
                                              <span>Settings</span>
                                              </div>
                                               </Link>
                                                 </section>
  )
}

export default SideBar