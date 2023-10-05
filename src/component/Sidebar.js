import React from "react";
import { Link } from "react-router-dom";
import { GiTeacher } from 'react-icons/gi';
import { PiStudentFill } from 'react-icons/pi';
import { LiaSchoolSolid } from 'react-icons/lia';




function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <LiaSchoolSolid style={{ marginBottom: "2px" }} />{" "}
        </div>
        <div className="sidebar-brand-text mx-3">
          class
        </div>
      </a>

      <div className="sidebar-heading"></div>

      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to={"/portal/teachers"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          
          <GiTeacher style={{ marginBottom: "2px" }} />{" "}
          <span>Teachers</span>
        </Link>
      
      </li>
      
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to={"/portal/students"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <PiStudentFill style={{ marginBottom: "2px" }} />{" "}
          <span>Students</span>
        </Link>
      
      </li>
 
    </ul>
  );
}

export default Sidebar;
