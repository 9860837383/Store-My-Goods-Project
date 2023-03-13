import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import UserNav from "./UserNav";
import { toast } from 'react-toastify';
const email=JSON.parse(localStorage.getItem("email"))
console.log(email, "e,mai");
const Request = () => {
  const params=useParams();

  const [user, setUser] = useState([]);
  const[storage,setStorage]=useState([]);
  const [data, setData] = useState({
    typeOfStorage: "",
    userEmail: "",
    userId:null,
    storageId:null,
    storageStatus:"",
    price:null
  });
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const getUser = async () => {
    const res = await axios.get(`http://localhost:8080/api/v1/user/${email}`);
    console.log(res.data, "user");
    setUser(res.data);
    const getStorage=await axios.get(`http://localhost:8080/api/v1/units/${params.id}`);
    console.log(getStorage.data)
    setStorage(getStorage.data)
  };
  console.log(user.email, "userEmail");

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
try{
    const res = await axios.post(`http://localhost:8080/api/v1/renting`, data);
    console.log(res.data, "request");
    setData({
      typeOfStorage: "",
      userEmail: "",
      userId:null,
      storageId:null,
      storageStatus:""
    })
    toast("Storage Requetsed succesfully",{})
  }catch(err){
    console.log(err);
    toast.error(err.response.msg,{})
  }
  };
  return (
    <div>
      <UserNav/>
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
                    name="typeOfStorage"
                    value={data.typeOfStorage}
                    onChange={handleChange}
                    aria-label="Default select example"
                  >
                    <option selected>Choose any storage</option>
                    <option value="longtermStorage">LongTerm Storage</option>
                    <option value="shortTermStorage">ShortTerm storage</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    name="userEmail"
                    value={(data.userEmail = user.email)}
                    className="form-control text-danger"
                    id="exampleInputEmail1"
                    hidden
                    aria-describedby="emailHelp"
                  />
                </div>
             
                <div className="mb-3">
                  <input
                    name="userId"
                    value={(data.userId = user.id)}
                    className="form-control text-danger"
                    id="exampleInputEmail1"
                    hidden
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="storageId"
                    value={(data.storageStatus = storage.status)}
                    className="form-control text-danger"
                    id="exampleInputEmail1"
                    hidden
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="storageId"
                    value={(data.storageId = storage.id)}
                    className="form-control text-danger"
                    id="exampleInputEmail1"
                    hidden
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="price"
                    value={(data.price = storage.price)}
                    className="form-control text-danger"
                    id="exampleInputEmail1"
                    hidden
                    aria-describedby="emailHelp"
                  />
                </div>

                <button className="btn btn-danger mt-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
