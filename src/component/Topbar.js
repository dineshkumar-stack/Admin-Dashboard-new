import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Usercontext";
import { BiUserCircle } from 'react-icons/bi';
import { ImExit } from 'react-icons/im';



function Topbar() {
  const {user} = useContext(UserContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/")
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-dark topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a
            className="nav-link dropdown-toggle"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-search fa-fw"></i>
          </a>

          <div
            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <button onClick={handleLogout} className="btn">
        <ImExit style={{ marginBottom: "2px" }} />{" "}
        logout
        </button>
    
        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
       
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 medium">
            
            <BiUserCircle style={{ marginBottom: "2px" }} />{" "}

            {user.username}
            </span>
            
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;
