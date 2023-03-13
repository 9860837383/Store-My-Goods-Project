import React from "react";
import axios from "axios";
import { useEffect } from "react";
import AdminNav from "./../Pages/AdminNav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewRequest = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [storage, setStorage] = useState([]);
  // const [user, setUser] = useState([]);
  const getRequest = async () => {
    const getStorage = await axios.get(`http://localhost:8080/api/v1/units`);
    console.log(getStorage.data,"getStorage")
    setStorage(getStorage.data);

    const res = await axios.get(`http://localhost:8080/api/v1/renting`);
    console.log(res.data, "all request");
    setData(res.data);
  };
  useEffect(() => {
    getRequest();
  }, []);
  // console.log(storage, "storage");

  const handleAccept = async rent => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/users/${rent.userId}`
    );
    console.log(res.data, "user");
    const updateUser = await axios.patch(
      `http://localhost:8080/api/v1/users/${rent.userId}`,
      { ...res.data, status: "accepted" }
    );

    console.log(updateUser.data, "updateUser");
    // const getStorage = await axios.get(
    //   `http://localhost:8080/api/v1/units/${rent.storageId}`
    // );
    // console.log(getStorage.data, "stoarge");

    // const updateStorage = await axios.patch(
    //   `http://localhost:8080/api/v1/units/${rent.storageId}`,
    //   { ...getStorage.data, status: "booked" }
    // );

    // console.log(updateStorage.data, "updatestorage");

    const getRent = await axios.get(
      `http://localhost:8080/api/v1/renting/${rent.id}`
    );
    console.log(getRent.data, "getRent");
    const updateRenting = await axios.patch(
      `http://localhost:8080/api/v1/renting/${rent.id}`,
      { ...getRent.data, storageStatus: "booked" }
    );
    console.log(updateRenting.data, "updateRent");
    navigate(`/bill/${rent.id}`);
  };

  const handleReject = async id => {
    const res = await axios.get(`http://localhost:8080/api/v1/users/${id}`);
    console.log(res.data, "user");

    const updateUser = await axios.patch(
      `http://localhost:8080/api/v1/users/${id}`,
      { ...res.data, status: "rejected" }
    );
    console.log(updateUser.data, "updateUser");
  };
  return (
    <div>
      <AdminNav />
      <div className="container">
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>UserId</th>
              <th>StorageId</th>
              <th>UserEmail</th>
              <th>Type Of Storage</th>
              <th>Price</th>
              <th>Renting Id</th>
              <th>#Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((rent, index) => {
              return (
                <tr key={index}>
                  <td>
                    {rent.userId}
                  </td>
                  <td>
                    {rent.storageId}
                  </td>
                  <td>
                    {rent.userEmail}
                  </td>
                  <td>
                    {rent.typeOfStorage}
                  </td>
                  <td>
                    {rent.price}
                  </td>
                  <td>
                    {rent.id}
                  </td>
                  <td>
                    {rent.storageStatus === "booked"
                       // "returned"
                       ? <button className="btn btn-secondary">
                          Accepted
                        </button>
                      : <button
                          className="btn btn-success"
                          onClick={() => {
                            handleAccept(rent);
                            // setStorageId(rent.storageId);
                          }}
                        >
                          Accept
                        </button>}
                    {/* {rent.status === "notBooked"  ? (

                   
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleReject(rent.userId);
                        }}
                      >
                        Reject
                      </button>
                       ) : "dfd"} */}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewRequest;
