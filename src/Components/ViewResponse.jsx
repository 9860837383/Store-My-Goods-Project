import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import UserNav from "../Pages/UserNav";
const email = JSON.parse(localStorage.getItem("email"));

const ViewResponse = () => {
  const [user, setUser] = useState([]);
  const getData = async () => {
    const getUser = await axios.get(
      `http://localhost:8080/api/v1/user/${email}`
    );
    console.log(getUser.data, "getUser");
    setUser(getUser.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
        <UserNav/>
        <div className="container">
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>UserId</th>
            <th>User Email</th>
            <th>FirstName</th>
            <th>Last Name</th>
            <th>Contact Number</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody className="table table-striped">

        <td>{user.id}</td>
        <td>{user.email
}</td>
        <td>{user.firstName
}</td>
        <td>{user.lastName
}</td>
        <td>{user.contactNumber
}</td>
        <td>{user.status}</td>
        </tbody>
      </table>
    </div></div>
  );
};

export default ViewResponse;
