import React from "react";

const FulfillmentQuote = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navpadding">
        <div className="">
          <a className="navbar-brand" href="/">
            <img
              src="https://storemygoods.in/images/RedLogo.jpeg"
              alt="Logo"
              width="90"
              height="64"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-7">
            <div className="card mt-5">
              <div className="card-header">
                <h3 className="text-danger text-center mt-5 mb-5">
                  Warehousing and Fulfillment Services
                </h3>
                <h4 className="text-dark text-center mb-3">
                  For Online Retailers, e-Commerce business and Merchants
                </h4>
                <p className="text-dark text-center fs-5 mb-3">
                  Our multi channel, integrated e-fulfilment solutions offer
                  online businesses a complete one-stop-shop for order
                  management, fulfillment - including the receipt and storage of
                  goods, through to picking and packing and delivery management
                  of online orders across India.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="card mt-3">
              <h4 className="text-warning text-center mb-4">
                Request A Fulfillment Quote
              </h4>
              <div className="card-body">
                <input
                  className="form-control form-control-md mt-4"
                  type="text"
                  required
                  placeholder="Your Name"
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-md mt-4"
                  type="email"
                  required
                  placeholder="Enter Email"
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-md mt-4"
                  type="tel"
                  required
                  placeholder="Enter Mobile Number"
                  aria-label=".form-control-lg example"
                />{" "}
                <input
                  className="form-control form-control-md mt-4"
                  type="text"
                  required
                  placeholder="Enter Email"
                  aria-label=".form-control-lg example"
                />{" "}
                <input
                  className="form-control form-control-md mt-4"
                  type="text"
                  required
                  placeholder="Enter Company's Name"
                  aria-label=".form-control-lg example"
                />{" "}
              <select
                className="form-select mb-3 mt-4"
                aria-label="Default select example"
                placeholder="Postal Services"
              >
                <option selected>Postal Services</option>
                <option selected>Startup</option>
                <option value="wFH">Retailer</option>
                <option value="SFH">FMCG</option>
                <option value="renovation">postal Services</option>
                <option value="relocation">Delivery Agent</option>
                <option value="others">Other</option>
              </select>
             <select
                className="form-select mb-3 mt-4"
                aria-label="Default select example"
                placeholder="Your Requirements"
              >
                <option selected>Your Requirements</option>
                <option selected>Warehouse</option>
                <option value="wFH">Warehouse + fulfillment</option>
                <option value="SFH">Warehouse + fulfillment + shipping</option>
                <option value="renovation">postal Services</option>
                <option value="relocation">Delivery Agent</option>
              </select>
              <select
                className="form-select mb-3 mt-4"
                aria-label="Default select example"
                placeholder="Monthly Orders"
              >
                <option selected>Monthly Orders</option>
                <option selected>0-100</option>
                <option value="wFH">100-200</option>
                <option value="SFH">200-300</option>
                <option value="renovation">300-400</option>
                <option value="relocation">400-500</option>
                <option value="others">500+</option>
              </select> 
              <button className="btn btn-secondary">Enquire Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FulfillmentQuote;
