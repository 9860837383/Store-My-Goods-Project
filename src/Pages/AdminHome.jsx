import React, { useState,useEffect } from "react";
import AdminNav from "./AdminNav";
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import { toast } from 'react-toastify';
const AdminHome = () => {
  const[data,setData]=useState([]);
  const getStorageUnits =async() => {
    const res=await axios.get(`http://localhost:8080/api/v1/units`)
    console.log(res.data,"unnits")
    setData(res.data)
  }
  useEffect(() => {
    getStorageUnits();
  },[]);
  const handleDelete =async(id) => {
  // e.preventDefault();
    try{
      const res=await axios.delete(`http://localhost:8080/api/v1/units/${id}`);
      console.log(res.data)
toast(res.data.msg,{})
    }catch(err){
      console.log(err)
      toast(err.response.msg,{})
    }

  }
  console.log(data,"data")

  const filterByboxType =(boxStorage) => {
setData(data.filter(storage => {
  return storage.type.includes(boxStorage)
 
}));
  }
  const filterByPrivateType =(privateStorage) => {
    setData(data.filter(storage => {
      return storage.type.includes(privateStorage)
     
    }));
      } 
      const filterBySharedType =(sharedStorage) => {
        setData(data.filter(storage => {
          return storage.type.includes(sharedStorage)
         
        }));
          }
  const navigate=useNavigate();
  return (
    <div>
     <AdminNav/>
      <div className="container bg-light">
        <div className="row mt-5">
          <div className="col-sm-5" />
          <div className="col-sm-2">
            <button className="btn btn-danger" onClick={() => navigate( "/addStorage")}>
              Add Storage Units
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2" >
          <label className="mt-2 text-dark"><b>Type of Storage:</b></label>
          <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=> filterByboxType("boxStorage")}/>
  <label class="form-check-label" for="flexCheckDefault">
	boxStorage
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=> filterByPrivateType("privateStorage")}/>
  <label class="form-check-label" for="flexCheckDefault">
	privateStorage
  </label>
</div> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=> filterBySharedType("sharedStorage")}/>
  <label class="form-check-label" for="flexCheckDefault">
  sharedStorage
  </label>
</div>

          
          </div>
          <div className="col-sm-10">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Storage Id</th>
              <th>Type Of Storage</th>
              <th>Square Feet</th>
              <th>Price</th>
              <th>About</th>
              <th>#Actions</th>
            </tr>
          </thead>
          <tbody>
          {data.map((storage,index) => {
            return(
              <>
              <tr key={index}>
                <td>{storage.id}</td>
                <td>{storage.type}</td>
                <td>{storage.sqFeet}</td>
                <td>{storage.price}</td>
                <td>{storage.about}</td>
                <td>
                  <button className="btn btn-success" onClick={() => navigate(`/editStorage/${storage.id}`)}>EDIT</button>
                  <button className="btn btn-secondary" onClick={() => handleDelete(storage.id)}>DELETE</button>
                </td>
              </tr>
              </>
            )
          })}
          </tbody>
          
        </table>
        </div>
      </div></div>
    </div>
  );
};

export default AdminHome;
