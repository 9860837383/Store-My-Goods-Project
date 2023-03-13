import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "./../Pages/AdminNav";
import { toast } from "react-toastify";
const ViewAllBills = () => {
  const [data, setData] = useState([]);
  const getBills = async () => {
    const res = await axios.get(`http://localhost:8080/api/v1/bills`);
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getBills();
  }, []);
  const sendMailToUser = async bill => {
    var date1=new Date(bill.date);
    var date2=new Date(bill.endDate);
    var difference=date2.getTime()-date1.getTime();
    var diffInDays=difference/(1000 * 3600 * 24);
    console.log(diffInDays,"diffe Indays")
    console.log(date1,"date 1")
    console.log(date2,"date 2")
    console.log(difference,"difference")
if(bill.status === "Pending Amount"  && diffInDays >= 30){
    try {
      const body = {
        Recipients: [
          {
            Email: `${bill.userEmail}`
          }
        ],
        Content: {
          Body: [
            {
              ContentType: "HTML",
              Content: `U have to pay the due  of ${bill.price}`,
              Charset: "string"
            }
          ],
          From: "cse.takeoff@gmail.com",
          Subject: "Hello!"
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
    } catch (err) {
      console.log(err);
      toast.error(err.response.msg, {});
    }}
  };
  const filterByPaid =(paid) => {
    setData(data.filter(storage => {
      return storage.status.includes(paid)
     
    }));
      }
      const filterByUnPaid =(PendingAmount) => {
        setData(data.filter(storage => {
          return storage.type.includes(PendingAmount)
         
        }));
          }
  return (
    <div>
      <AdminNav />
      <div className="container">
        <div className="row mt-5">
        <div className="col-sm-2" >
          <label className="mt-2 text-dark"><b>Search By Paid,UnPaid</b></label>
          <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=> filterByPaid("paid")}/>
  <label class="form-check-label" for="flexCheckDefault">
  Paid
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=> filterByUnPaid("PendingAmount")}/>
  <label class="form-check-label" for="flexCheckDefault">
	Pending Amount
  </label>
</div>

          
          </div>
          <div className="col-sm-10">
          <table className="table table-striped">
            <thead>
              <th>Bill Id</th>
              <th>User Email</th>
              <th>Starting Date</th>
              <th>Ending Date</th>
              <th>Status</th>
              <th>Amount</th>
              {/* <th>#Actions</th> */}
            </thead>
            <tbody className="table table-striped">
              {data.length >0 ? data.map((bill, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {bill.id}
                    </td>
                    <td>
                      {bill.userEmail}
                    </td>
                    <td>
                      {bill.date}
                    </td>
                    <td>
                      {bill.endDate}
                    </td>
                    <td>
                      {bill.status}
                    </td>
                    <td>
                      {bill.price}
                    </td>
                    {/* <td>
                      {bill.status && bill.status === "Pending Amount"
                        ? <button
                            className="btn btn-success text-dark"
                            onClick={() => sendMailToUser(bill)}
                          >
                            Send Reminder
                          </button>
                        : "Bill Paid"}
                    </td> */}
                  </tr>
                );
              }):<div className="card mt-5"><div className="card-body"><h1 className="text-danger text-center">NO Bills Generated </h1></div></div>}
            </tbody>
          </table>
        </div>
      </div>
    </div></div>
  );
};

export default ViewAllBills;
