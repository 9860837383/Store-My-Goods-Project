import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const handleLogout =() =>{
    localStorage.removeItem("email")
  }
  return (
    <div className="container-fluid">
      <nav className="navbar  navpadding">
        <div className="container">
          <Link className="navbar-brand text-light" to="/">
            <img
              src="https://storemygoods.in/images/RedLogo.jpeg"
              alt="Bootstrap"
              width="50"
              height="50"
            />
            
          </Link>
          <Link
                className="nav-link active mx-2 text-light"
                aria-current="page"
                to="/addPost"
              ><b>
              STORE MY GOODS</b>
              </Link>
          <div className=" mx-auto mb-4 d-flex mb-lg-0">
              <Link
                className="nav-link active mx-2 text-light"
                aria-current="page"
                to="/viewRequest"
              >
            View Request
              </Link>
              <Link
                className="nav-link active mx-2 text-light"
                aria-current="page"
                to="/viewBills"
              >
            View Bills
              </Link>
              <Link
                className="nav-link mx-4 active text-light"
                aria-current="page"
                to="/"
                onClick={() => handleLogout}
              >
                Logout
              </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNav;

// src="https://storemygoods.in/images/RedLogo.jpeg"