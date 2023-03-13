import React from "react";

const Address = () => {
  return (
    <div className="container bg-light mt-5">
      <div className="row mt-5">
        <div className="col-sm-3">
          <div className="row">
            <div className="col-sm-3">
              <p className="text-dark  mb-3 fs-6"> Address</p>
              <i
                className="material-icons text-danger mb-3"
                style={{ fontSize: 36 }}
              >
                place
              </i>
            </div>
            <div className="col-sm-8 mt-4">
              A-22, A-Block, Sector 89, Pune Pin Code - 411002
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="row">
            <div className="col-sm-3">
              <p className="text-dark  mb-3 fs-6"> Phone</p>
              <i class="fa fa-phone text-danger" style={{ fontSize: 24 }} />
            </div>
            <div className="col-sm-8 mt-4">
              +91 1800 200 8899 Mon-Sat 9:30am - 8:00pm
            </div>
          </div>
        </div>{" "}
        <div className="col-sm-4">
          <div className="row">
            <div className="col-sm-2 text-danger">
              <p className="text-dark  mb-3 fs-6"> Email</p>
              <i class="fa fa-envelope" style={{ fontSize: 24 }} />
            </div>
            <div className="col-sm-7 text-danger mt-4">
            storemygoods.contact@gmail.com
            </div>
          </div>
        </div>{" "}
        <div className="col-sm-2">
          <div className="row">
            <div className="col-sm-3" />
            <p className="text-dark  mb-3 fs-6"> Follow US</p>
            <div className="col-sm-8">
              <i
                className="fa fa-facebook-f text-danger"
                style={{ fontSize: 21 }}
              />&nbsp;&nbsp;
              <i
                className="fa fa-instagram text-danger"
                style={{ fontSize: 21 }}
              />&nbsp;&nbsp;
              <i
                className="fa fa-google text-danger"
                style={{ fontSize: 21 }}
              />&nbsp;&nbsp;
              <i
                className="fa fa-linkedin text-danger"
                style={{ fontSize: 21 }}
              />&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <p className="text-center">
          Copyright @ 2023 <b className="text-danger">Store My Goods.</b> All
          Rights Reserved
        </p>
        <p className="text-dark text-center mt-2">
          SMG Storage Private Limited Cities we are present In: Pune, India.
        </p>
        <p className="text-danger text-center">Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Address;