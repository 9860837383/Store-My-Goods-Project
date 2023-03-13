import React from "react";
import { useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddStorage = () => {
  const navigate=useNavigate();
  const [data, setData] = useState({
    type:"",
    sqFeet: null,
    about: "",
    price: null
  });
  // const[type,setType]=useState("");
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/units`, data);
      toast("storage units added sucessfully",{})
      console.log(res.data);
      navigate("/adminHome")
    } catch (err) {
      console.log(err);
      toast.error(err.response.msg,{})
    }
  };
  return (
    <div>
      <AdminNav />
      <div className="row">
        <div className="col-sm-3" />
        <div className="col-5">
          <div className="card mt-5">
            <div className="card-header">
              <h5 className="text-warning"> Add Storage Units</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h6 className="card-title">Type Of Storage</h6>
                <div className="mt-2">
                  <select
                    className="form-select mb-2"
                    name="type"
                    value={data.type}
                    onChange={handleChange}
                    aria-label="Default select example"
                  >
                    <option selected>Choose any storage</option>
                    <option value="boxStorage">Box Storage</option>
                    <option value="sharedStorage">Shared storage</option>
                    <option value="privateStorage">Private Storage</option>
                  </select>
                </div>
                <label className="mt-2" style={{ fontWeight: 700 }}>
                  Square Feet
                </label>
                <input
                  className="form-control form-control-md mt-2"
                  type="text"
                  name="sqFeet"
                  value={data.sqFeet}
                  onChange={handleChange}
                  required
                  placeholder="Area in sq.feet"
                  aria-label=".form-control-lg example"
                />
                <label
                  className="email mt-2"
                  type="price"
                  style={{ fontWeight: 700 }}
                >
                  Price
                </label>
                <input
                  className="form-control form-control-md mt-2"
                  type="text"
                  name="price"
                  value={data.price}
                  onChange={handleChange}
                  required
                  placeholder="Enter price"
                  aria-label=".form-control-lg example"
                />
                <label
                  className="contact mt-3"
                  type="text"
                  style={{ fontWeight: 700 }}
                >
                  About
                </label>
                <input
                  className="form-control form-control-md mt-3"
                  type="text"
                  name="about"
                  value={data.about}
                  onChange={handleChange}
                  required
                  placeholder="about"
                  aria-label=".form-control-lg example"
                />{" "}
                <button className="btn btn-danger mt-3 text-light">
                  <b>Submit</b>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStorage;
