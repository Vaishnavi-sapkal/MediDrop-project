import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img src="media/Images/logo.jpg" alt="logo" className="logoimg" />

        <a className=" Brand nav-link active me-4" aria-current="page" href="#">
          MediDrop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Donate
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                My Donations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Rewards
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
            <div className="register">
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  SignUp/Login
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu ">
                  <li>
                    <a className="dropdown-item" href="#">
                      User Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Change Password
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
