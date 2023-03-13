import React from 'react'
import MainNav from './MainNav';
import { useState } from 'react';
import { toast } from 'react-toastify';
const email=JSON.parse(localStorage.getItem("email"));
const InsurancePage = () => {
  const [data, setData] = useState({
    name: "",
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
  const handleSubmit =(e) => {
    e.preventDefault();
    toast("Insurance Applied successfully",{});
    setData({
      name: "",
    email: "",
    password: "",
    contactNumber: 0,
    address: ""
    })
  }
  return (
    <div>
      <MainNav/>
      <div className='row'>
        <div className='col-sm-4'>
          </div>    
          <div className='col-sm-4'>
            <div className='card mt-5'>
              <div className='card-header text-danger text-center fs-2 '>Apply For Insurance</div>
              <div className='card-body'>
                <form onSubmit={handleSubmit}>
              <label
                  className="name mt-2"
                  type="text"
                  style={{ fontWeight: 700 }}
                >
                  Name<b className="text-danger">*</b>
                </label>
              <input
                      className="form-control form-control-md"
                      type="text"
                      name="name"
                      value={data.name}
                      required
                      onChange={handleChange}
                      placeholder="Enter name"
                      aria-label=".form-control-lg example"
                    />
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
                  value={data.email }
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
                <div className="mt-2">
                <label
                  className="contact mt-3 mb-3"
                  type="tel"
                  style={{ fontWeight: 700 }}
                >
                  Choose Insurance policy<b className="text-danger">*</b>
                </label>
                <select
                  className="form-select mb-2"
                  name="type"
                  value={data.type}
                  onChange={handleChange}
                  aria-label="Default select example"
                >
                  <option selected>Choose any storage</option>
                  <option value="lifeInsurance">Life Insurance</option>
                  <option value="motorInsurance">Motor insurance</option>
                  <option value="healthInsurance">Health insurance</option>
                  <option value="travelInsurance">Travel insurance</option>
                  <option value="propertyInsurance">Property insurance</option>
                  <option value="mobileInsurance">Mobile insurance</option>
                  <option value="cycleInsurance">Cycle insurance</option>
                  <option value="bite-sizeInsurance">Bite-size insurance</option>

                </select>
              </div>
<button className='btn btn-danger mt-3'>Submit Form</button>
            </form>  </div>
            </div>
          </div>
            </div>
    </div>
  )
}

export default InsurancePage;