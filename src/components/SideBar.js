import React from "react";
import "../components/style/SideBar.css";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ handleOnClick }) => {
  const location = useLocation();

  const setNavigationState = (pathname) => {
    return location.pathname === pathname ? "active-area" : "";
  };

  return (
    <section className="kanban__sidebar">
      <div className="kanban__sidebar-menu">
        <Link to="/manage" className={setNavigationState("/manage")}>
          <div className="manage-area">
            <i className="material-icons">people</i>
            <span>Manage</span>
          </div>
        </Link>
        <Link
          aria-current="page"
          to="/"
          onClick={handleOnClick}
          className={setNavigationState("/")}
        >
          <div className="boards-area">
            <i className="material-icons">dns</i>
            <span>Boards</span>
          </div>
        </Link>
        <Link to="/schedule" className={setNavigationState("/schedule")}>
          <div className="schedule-area">
            <i className="material-icons">event_note</i>
            <span>Schedule</span>
          </div>
        </Link>
        <Link to="/reports" className={setNavigationState("/reports")}>
          <div className="reports-area">
            <i className="material-icons">assessment</i>
            <span>Reports</span>
          </div>
        </Link>
        <Link to="/settings" className={setNavigationState("/settings")}>
          <div className="kanban__sidebar-settings">
            <i className="material-icons">settings</i>
            <span>Settings</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SideBar;
