import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"
const Navbar = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navpadding">
        <div className="container">
          <a className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              width="90"
              height="65"
              className="rounded-circle shadow-4-strong" 
            />
          </a>
      
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light bg-light" />
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNav" style={{"marginTop": -20}}>
          <ul className="navbar-nav mr-auto w-100">
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" to="/" style={{"fontWeight":"bold"}}>HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light"to="/login" style={{"fontWeight":"bold"}}>USER</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/login" style={{"fontWeight":"bold"}}>ADMIN</Link>
                                </li>

                               

                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/" style={{"fontWeight":"bold"}}>CONTACT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/beOurPartner" style={{"fontWeight":"bold"}}>BE OUR PARTNER</Link>
                                </li>
                                
                            </ul>
                            <span className="navbar-text">
                                <small style={{"fontSize":15,"color":"#fff" ,"marginLeft":25,"fontWeight":"bold"}}>Follow us at</small>
                                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                    <li className="nav-item" style={{"display":"flex"}}>
                                        <Link className="nav-link" to="/" style={{"padding":10}}><i className="fa fa-instagram text-light" style={{"fontSize":24}} aria-hidden="true"></i></Link>
                                        <Link className="nav-link" to="/" style={{"padding":10}}><i className="fa fa-facebook-f text-light" style={{"fontSize":24}} aria-hidden="true"></i></Link>
                                        <Link className="nav-link" to="/" style={{"padding":10}}><i className="fa fa-google text-light" style={{"fontSize":24}} aria-hidden="true"></i></Link>
                                        <Link className="nav-link" to="/" style={{"padding":10}}><i className="fa fa-linkedin text-light"  style={{"fontSize":24}} aria-hidden="true"></i></Link>
                                    </li>
                                </ul>
                            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
