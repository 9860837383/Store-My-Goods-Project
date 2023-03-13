import React from "react";
import AdminNav from "./AdminNav";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment/moment";
import { toast } from "react-toastify";
const Bill = () => {
  const email = JSON.parse(localStorage.getItem("email"));
  const params = useParams();
  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    rentingId: null,
    userEmail: "",
    billType: "",
    price: null,
    time: "",
    storageId: null,
    endDate: "",
    storageStatus: ""
  });
  const getData = async () => {
    const renting = await axios.get(
      `http://localhost:8080/api/v1/renting/${params.id}`
    );
    console.log(renting.data, "renting");
    setUser(renting.data);
  };

  console.log(user, "user");

  useEffect(() => {
    getData();
  }, []);
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/bills`, data);
      console.log(res.data, "bill");
      const addBillToUser = await axios.post(
        `http://localhost:8080/api/v1/addBills/${res.data.userEmail}/${res.data
          .id}`
      );
      console.log(addBillToUser, "addBillToUser");
      toast("bill Generated successfully", {});
      const sendRemindForDue = await axios.get(
        `http://localhost:8080/api/v1/reminder/${res.data.id}`
      );
      console.log(sendRemindForDue.data, "send REminder");
      var date1 = new Date(res.data.date);
      var date2 = new Date(res.data.endDate);
      var difference = date2.getTime() - date1.getTime();
      var diffInDays = difference / (1000 * 3600 * 24);
      console.log(diffInDays, "diffe Indays");
      console.log(date1, "date 1");
      console.log(date2, "date 2");
      console.log(difference, "difference");
      if (res.data.status === "PendingAmount" && diffInDays >= 30) {
        const body = {
          Recipients: [
            {
              Email: `${res.data.userEmail}`
            }
          ],
          Content: {
            Body: [
              {
                ContentType: "HTML",
                Content: `Hi, You have to pay the due  of ${res.data
                  .price},where your bill generated date is ${res.data
                  .date} and bill end date is ${res.data
                  .endDate}...,And Here we are providing new services to pickup and drop ur goods...`,
                Charset: "string"
              }
            ],
            From: "cse.takeoff@gmail.com",
            Subject: "Bill Payment"
          },
          Headers: {
            city: "Tpt",
            age: "34"
          }
        };

        const headers = {
          "X-ElasticEmail-ApiKey":
            " FCE09D54A8F56F09716DC8FB3550636773E71D1219444F7EF87613C6E8B29E58621E031BBCB92D5D51ECBC63E0DA7BE9"
        };

        await axios.post(`https://api.elasticemail.com/v4/emails`, body, {
          headers: headers
        });

        toast.success("🦄Email sended to user successfully!", {});
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.msg, {});
    }
  };
  //   setData({
  //     rentingId: null,
  //     userEmail: "",
  //     billType: "",
  //     price: null,
  //     time: "",
  //     endDate: ""

  //   })
  // }catch(err){
  //   console.log(err)
  //   toast.error(err.response.msg,{})
  // }

  return (
    <div>
      <div className="row">
        <AdminNav />
        <div className="col-sm-3" />
        <div className="col-sm-4">
          <div className="card mt-5">
            <div className="card-header">
              <h5 className="text-warning"> Add Storage Units</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h6 className="card-title text-center text-danger">
                  Generating Bill
                </h6>
                <label className="mt-2" style={{ fontWeight: 700 }}>
                  UserEmail
                </label>
                <input
                  className="form-control form-control-md mt-2"
                  type="text"
                  name="userEmail"
                  value={(data.userEmail = user.userEmail)}
                  onChange={handleChange}
                  required
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-md mt-2"
                  type="text"
                  name="storageStatus"
                  value={(data.storageStatus = user.storageStatus)}
                  onChange={handleChange}
                  required
                  hidden
                  aria-label=".form-control-lg example"
                />
                <label className="mt-2" style={{ fontWeight: 700 }}>
                  Renting Id
                </label>
                <input
                  className="form-control form-control-md mt-2"
                  type="text"
                  name="rentingId"
                  value={(data.rentingId = user.id)}
                  onChange={handleChange}
                  required
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-md mt-2"
                  type="text"
                  name="storageId"
                  hidden
                  value={(data.storageId = user.storageId)}
                  onChange={handleChange}
                  required
                  aria-label=".form-control-lg example"
                />
                <label className="mt-2" style={{ fontWeight: 700 }}>
                  Type Of Storage:
                </label>
                <input
                  className="form-control form-control-md mt-2"
                  type="text"
                  name="billType"
                  value={(data.billType = user.typeOfStorage)}
                  onChange={handleChange}
                  required
                  aria-label=".form-control-lg example"
                />
                <label
                  className="email mt-2"
                  type="price"
                  style={{ fontWeight: 700 }}
                >
                  Price:
                </label>
                {console.log(user.typeOfStorage, "type of storgae")}
                {user.typeOfStorage && user.typeOfStorage === "longtermStorage"
                  ? <input
                      className="form-control form-control-md mt-2"
                      type="text"
                      name="price"
                      value={(data.price = user.price * 3)}
                      onChange={handleChange}
                      required
                      placeholder="Enter price"
                      aria-label=".form-control-lg example"
                    />
                  : user.typeOfStorage === "shortTermStorage"
                    ? <input
                        className="form-control form-control-md mt-2"
                        type="text"
                        name="price"
                        value={(data.price = user.price * 2)}
                        onChange={handleChange}
                        required
                        placeholder="Enter price"
                        aria-label=".form-control-lg example"
                      />
                    : "no Storage Found"}
                <label
                  className="contact mt-3"
                  type="text"
                  style={{ fontWeight: 700 }}
                >
                  Todays Date
                </label>
                <input
                  className="form-control form-control-md mt-3"
                  type="text"
                  name="time"
                  value={
                    (data.time = moment().format("MMMM Do YYYY, h:mm:ss a"))
                  }
                  onChange={handleChange}
                  required
                  placeholder="Date"
                  aria-label=".form-control-lg example"
                />{" "}
                <label
                  className="contact mt-3"
                  type="text"
                  style={{ fontWeight: 700 }}
                >
                  End Date:
                </label>
                <input
                  className="form-control form-control-md mt-3"
                  type="date"
                  name="endDate"
                  value={data.endDate}
                  onChange={handleChange}
                  required
                  placeholder="Date"
                  aria-label=".form-control-lg example"
                />{" "}
                <button className="btn btn-danger mt-3 text-light">
                  <b>Generate Bill</b>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
