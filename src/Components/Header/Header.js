import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
 const Header = () =>{
    return(
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              Contact List
            </Link>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Add
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="row">
            <h2 className="text-center">
              <span>Contact list</span>Created with <i className="fa fa-heart"></i> for me
            </h2>
          </div>
        </React.Fragment>
    )
 }
 export default Header;
