import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UserNav from "./../Pages/UserNav";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const email = JSON.parse(localStorage.getItem("email"));
const ViewBill = () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  const [storage, setStorage] = useState([]);
  const [renting, setRenting] = useState([]);
  const getBill = async () => {
    const res = await axios.get(`http://localhost:8080/api/v1/user/${email}`);
    console.log(res.data.bills, "bill");
    setData(res.data.bills);
    // setIsData(true);
  };
  useEffect(() => {
    getBill();
  }, []);
  const payBill = async bill => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/bills/${bill.id}`
    );
    console.log(res.data, "bill");
    const updateBill = await axios.patch(
      `http://localhost:8080/api/v1/bills/${bill.id}`,
      { ...bill, status: "paid" }
    );
    toast("Bill paid Successfully", {});
    console.log(updateBill.data, "updatebill");
    navigate(`/viewBill`);
    window.location.assign("/viewBill")

  };
  const ReturnStorage = async bill => {
    const getBill = await axios.get(
      `http://localhost:8080/api/v1/bills/${bill.id}`
    );
    const updateBill = await axios.patch(
      `http://localhost:8080/api/v1/bills/${bill.id}`,
      {
        ...getBill.data,
        storageStatus: "returned"
      }
    );
    const getStorage = await axios.get(
      `http://localhost:8080/api/v1/units/${bill.storageId}`
    );
    const updateStorage = await axios.patch(
      `http://localhost:8080/api/v1/units/${bill.storageId}`,
      {
        ...getStorage.data,
        status: "returned"
      }
    );
    setStorage(getStorage.data);

    const getRenting = await axios.get(
      `http://localhost:8080/api/v1/renting/${bill.rentingId}`
    );
    setRenting(getRenting);
    const updateRenting = await axios.patch(
      `http://localhost:8080/api/v1/renting/${bill.rentingId}`,
      {
        ...getRenting.data,
        storageStatus: "returned"
      }
    );
   const deleteRenting=await axios.delete(`http://localhost:8080/api/v1/renting/${bill.rentingId}`);
   console.log(deleteRenting,"delete")
    console.log(renting,"rentinggg")
    console.log(getRenting.data, "getRenting");
    console.log(updateRenting.data, "update");
    console.log(getStorage.data, "getStorage");
    console.log(updateStorage.data, "updateStorzg");
    navigate(`/viewBill`);
  };
  console.log(storage, "stoareg");
  return (
    <div>
      <UserNav />
      <div className="row mt-5">
        <div className="col-sm-3" />
        <div className=" col-sm-5">
          {data.length > 0
            ? data.map((bill, index) => {
                return (
                  <div className="card mt-3" key={index}>
                    <div className="card-header text-warning fs-4">
                      View Bill
                    </div>
                    {/* {isData = true ? ( */}

                    <div className="card-body">
                      <p className="card-text">
                        <b className="text-primary">Bill Id:</b>
                        {bill.id}
                      </p>
                      <p className="card-text">
                        <b className="text-primary">UserEmail:</b>
                        {bill.userEmail}
                      </p>

                      <p className="card-text">
                        <b className="text-primary">Generated Date:</b>
                        {bill.date}
                      </p>
                      <p className="card-text">
                        <b className="text-primary">Generated Time:</b>
                        {bill.time}
                      </p>
                      <p className="card-text">
                        <b className="text-primary">End Date:</b>
                        {bill.endDate}
                      </p>
                      <p className="card-text">
                        <b className="text-primary">Price:</b>
                        {bill.price}
                      </p>
                      {/* <p className='card-text'><b className='text-primary'>Status:</b>{data.status}</p> */}
                      {bill.status === "PendingAmount"
                        ? <div
                            className="btn btn-success"
                            onClick={() => payBill(bill)}
                          >
                            Pay Bill
                          </div>
                        : <button className="btn btn-secondary">
                            Bill Paid
                          </button>}
                          {console.log(renting)}
                      {bill.storageStatus === "returned" 
                      // && renting.storageStatus === "returned"
                        ? (<button className="btn btn-secondary">
                            Storage Returned
                          </button>)
                        : (bill.status )=== "paid" ? (<div
                            className="btn btn-primary"
                            onClick={() => ReturnStorage(bill)}
                          >
                            Return Storage
                          </div>):""}
                    </div>

                    {/* ):<p className="text-danger text-center fs-1">"Bill Not Exist"</p>} */}
                  </div>
                );
              })
            : <div className="card mt-5">
                <div className="card-body">
                  <h1 className="text-danger text-center">
                    NO Bills Belongs To This User{" "}
                  </h1>
                </div>
              </div>}
        </div>
      </div>
    </div>
  );
};

export default ViewBill;
