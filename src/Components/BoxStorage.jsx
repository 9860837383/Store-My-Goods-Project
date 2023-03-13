import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserNav from './../Pages/UserNav';
const BoxStorage = () => {
    const navigate=useNavigate();
    const email=JSON.parse(localStorage.getItem("email"))
    const[data,setData]=useState([]);
    const[user,setUser]=useState([]);
    const[userId,setUserId]=useState("");
    const getStorageUnits =async() => {
      const res=await axios.get(`http://localhost:8080/api/v1/units`)
      console.log(res.data,"unnits")
      setData(res.data)
      const getUser=await axios.get(`http://localhost:8080/api/v1/user/${email}`)
      console.log(getUser.data,"getUser")

      setUser(getUser.data)
      setUserId(getUser.data.id)
      
      console.log(user,"user")
      console.log(userId,"userId")
    }
    useEffect(() => {
      getStorageUnits();
    },[]);
    const handleTypeChange = (e) => {
        setData(
            data.filter(storage => {
                return storage.type.toLowerCase().includes(e.target.value.toLowerCase());
            })
        )
    }
    const requestStorageUnit = async() => {
        console.log("clicked")
        const updateUser=await axios.patch(`http://localhost:8080/api/v1/users/${userId}`,{...user,status:"requested"})

// const updateUser=await axios.patch(`http://localhost:8080/api/v1/users/${userId}`,{...user,status:"requested"})

        console.log(updateUser.data,"update user")

    }
  return (
    <div>
        <UserNav/>
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-sm-2'></div>
                <div className='col-sm-4'>

             
        <form className="d-flex" role="search">
              <div className="input-group md-form form-sm form-2 pl-0">
                <input
                  className="form-control my-0 py-1 red-border text-danger"
                  type="text"
                  onChange={handleTypeChange}
                  placeholder="Search by Type of Storage "
                  aria-label="Search"
                />
                <div className="input-group-append text-danger">
                  <span
                    className="input-group-text red lighten-3"
                    id="basic-text1"
                  >
                    <i
                      className="fa fa-search text-danger"
                      style={{ " fontSize": 30 }}
                    />
                  </span>
                </div>
              </div>
            </form>
            </div>
            </div>
        <table className="table table-striped mt-4">
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
                        <td>{ (storage.id)}</td>
                        <td>{ (storage.type)}</td>
                        <td>{ (storage.sqFeet)}</td>
                        <td>{ (storage.price)}</td>
                        <td>{ (storage.about)}</td>
<td>{/* {storage.status === "booked"  */}
{/* "returned" 
? <button className='btn btn-danger'>BOOKED</button>
     : */}
<button className='btn btn-success'
onClick={() => requestStorageUnit (navigate(`/request/${storage.id}`))}>REQUEST</button>
{/* } */}
</td>
                    </tr>
                    </>
                )
            })}
          </tbody>
          </table>
          </div>
    </div>
  )
}

export default BoxStorage;