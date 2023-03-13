import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/login`, data);
      if(res.data.msg === "Admin login successfully"){
      navigate("/adminHome");
    }
    if(res.data.msg === "User Login successfully"){
        navigate("/boxStorage")
      }
      console.log(res.data.msg, "user Login");
      toast(res.data.msg, {
        position: "top-center"
      });
      
      localStorage.setItem("email", JSON.stringify(data.email));
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.msg, {});
    }
  };
  return (
    <div >
      <Navbar/>
      <div className="row mt-5">
        <div className="col-sm-2 mt-5" />
       
        <div className="col-sm-2" />
        <div className="col-sm-3">
          <div className="card border-danger mt-5 ">
            <h4 className="card-header text-danger">User Login</h4>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-danger"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="form-control text-danger"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label text-danger"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className="form-control text-danger"
                    id="exampleInputPassword1"
                  />
                </div>

                <button type="submit" className="btn btn-danger">
                  Submit
                </button>
              </form>
              
              <button type="submit" className="btn btn-danger mt-3" onClick={() => navigate(`/register`)}>
                  Register
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
