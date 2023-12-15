import React from "react";
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";
import { useSelectedProjectsValue } from "../../context";
import { useState } from "react";

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectsValue;
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className="inbox">
          <span><FaInbox /></span>
          <span>Inbox</span>
          </li>
        <li data-testid="today" className="today">
          <span> <FaRegCalendar /></span>
          <span>Today</span>
          </li>
        <li data-testid="next_7" className="next_7">
          <span> <FaRegCalendarAlt /></span>
          <span>Next 7 Days</span>
          </li>
      </ul>

      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projecrts">Projects will be here</ul>
      Add Project Component Here!!

    </div>
  )
}

/* 
bem:
  b = block
  e = element
  m = modifier
*/