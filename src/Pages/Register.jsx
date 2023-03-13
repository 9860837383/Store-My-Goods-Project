import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import MainNav from "./AdminNav";
import logo from "../images/logo.jpg"
const Register = () => {
  const navigate=useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: 0,
    address: ""
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
      const res = await axios.post(
        `http://localhost:8080/api/v1/register`,
        data
      );
      toast(res.data.msg,{})
      navigate("/login")
      console.log(res.data, "regitser");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error,{})
    }
  };
  return (
    <div className=" bg-light">
      <MainNav/>
      <div className="row">
        <div className="col-sm-3" />
        <div className="col-sm-6">
          <div className="card border-danger mt-5 ">
          <img
              src={logo}
              alt="Logo"
              width="90"
              height="65"
              className="rounded-circle shadow-4-strong" 
            />
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h5 className="card-title">
                  Name<b className="text-danger">*</b>
                </h5>
                <div className="row">
                  <div className="col-sm-6">
                    {" "}<input
                      className="form-control form-control-md"
                      type="text"
                      name="firstName"
                      value={data.firstName}
                      required
                      onChange={handleChange}
                      placeholder="First name"
                      aria-label=".form-control-lg example"
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      className="form-control form-control-md"
                      type="text"
                      name="lastName"
                      value={data.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Last Name"
                      aria-label=".form-control-lg example"
                    />
                  </div>
                </div>
                <label
                  className="email mt-2"
                  type="email"
                  style={{ fontWeight: 700 }}
                >
                  Email<b className="text-danger">*</b>
                </label>
                <input
                  className="form-control form-control-md mt-2"
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Email"
                  aria-label=".form-control-lg example"
                />
                <label
                  className="email mt-2"
                  type="password"
                  style={{ fontWeight: 700 }}
                >
                  Password<b className="text-danger">*</b>
                </label>
                <input
                  className="form-control form-control-md mt-2"
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  // required
                  placeholder="Enter password"
                  aria-label=".form-control-lg example"
                />
                <label
                  className="contact mt-3"
                  type="tel"
                  style={{ fontWeight: 700 }}
                >
                  Contact Number<b className="text-danger">*</b>
                </label>
                <input
                  className="form-control form-control-md mt-3"
                  type="tel"
                  name="contactNumber"
                  value={data.contactNumber}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  title="enter ten numbers"
                  required
                  placeholder="contact Number"
                  aria-label=".form-control-lg example"
                />{" "}
                <label
                  className="address mt-2"
                  type="address"
                  style={{ fontWeight: 700 }}
                >
                  Address<b className="text-danger">*</b>
                </label>
                <input
                  className="form-control form-control-md mt-2"
                  type="address"
                  name="address"
                  value={data.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter address"
                  aria-label=".form-control-lg example"
                />
                
                <p className="mt-4">
                  <b className="text-danger mt-4">*</b>Indicates required field
                </p>
                <button className="btn btn-danger text-light">
                  <b>Get a Quote</b>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
