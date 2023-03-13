import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BeOurPartner = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert("Congratulations");
    toast("U r a partner of Store My goods", {});
    navigate("/");
  };
  return (
    <div className="container-fluid bg-light mt-5">
      <div className="row">
        <div className="col-sm-3" />
        <div className="col-sm-6">
          <div className="card">
            <img
              className="card-img-top"
              src="https://storemygoods.in/images/RedLogo.jpeg"
              alt="Card image cap"
              style={{ height: 200 }}
            />
            <div className="card-body">
              <h5 className="card-title">Name</h5>
              <input
                class="form-control form-control-md"
                type="text"
                required
                placeholder="Enter Name"
                aria-label=".form-control-lg example"
              />
              <label
                className="email mt-2"
                type="email"
                style={{ fontWeight: 700 }}
              >
                Email
              </label>
              <input
                className="form-control form-control-md mt-2"
                type="text"
                required
                placeholder="Enter Email"
                aria-label=".form-control-lg example"
              />
              <label
                className="contact mt-3"
                type="tel"
                style={{ fontWeight: 700 }}
              >
                Contact Number
              </label>
              <input
                className="form-control form-control-md mt-3"
                type="tel"
                required
                placeholder="contact Number"
                aria-label=".form-control-lg example"
              />{" "}
              <label
                className="contact mt-3"
                type="tel"
                style={{ fontWeight: 700 }}
              >
                Property Location
              </label>
              <input
                className="form-control form-control-md mt-3"
                type="text"
                required
                placeholder="Location"
                aria-label=".form-control-lg example"
              />{" "}
              <label
                className="contact mt-3"
                type="tel"
                style={{ fontWeight: 700 }}
              >
                Property Size(in sq.ft)
              </label>
              <input
                className="form-control form-control-md mt-3"
                type="number"
                required
                placeholder="Size"
                aria-label=".form-control-lg example"
              />{" "}
              <label
                className="email mt-2 mb-3"
                type="email"
                style={{ fontWeight: 700 }}
              >
                Type of Property
              </label>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>type of property</option>
                <option value="wFH">Ware House shed</option>
                <option value="SFH">Industrial</option>
                <option value="renovation">Commercial</option>
                <option value="relocation">Residential</option>
              </select>
              <label
                className="contact mt-1 mb-3"
                type="tel"
                style={{ fontWeight: 700 }}
              >
                CheckList
              </label>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Building Insurance
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Fire NOC
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  CCTV
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Security
                </label>
              </div>
              <label
                className="email mt-2"
                type="email"
                style={{ fontWeight: 700 }}
              >
                Expected Rental (in Rs. Per Sq. Ft)
              </label>
              <input
                className="form-control form-control-md mt-2"
                type="text"
                placeholder="in RS.per sq.feet"
                required
                aria-label=".form-control-lg example"
              />
              <div class="mb-3">
                <label
                  className="email mt-2"
                  type="email"
                  style={{ fontWeight: 700 }}
                >
                  Upload Property Images
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <button
                className="btn btn-danger mt-3 text-light"
                onClick={() => handleSubmit()}
              >
                <b>Submit</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeOurPartner;
