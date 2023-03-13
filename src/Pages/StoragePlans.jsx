import React from "react";
import { useNavigate } from "react-router-dom";

const StoragePlans = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="fs-2 text-center">
        <strong className="text-dark">Storage</strong>
        <b className="text-danger">Plans</b>
      </div>
      <div className="row">
        <div className="col-sm-3" />
        <div className=" col-sm-6 mt-4">
          <p className="fs-3 text-center mb-5">
            Expertise that you can trust. We offer different plans for all your
            storage needs. Choose as per your requirement.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card border" style={{ height: 650 }}>
            <img
              src="https://storemygoods.in/images/services/box_storage.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fs-2">Box Storage </h5>
              <p className="card-text text-danger text-center">
                Packing done right with boxes
              </p>
              <p className="card-text text-dark mb-3 text-center">
                Starting at 199/- per box.
              </p>
              <p className="card-text text-dark mb-3 text-center">
                <b>Box Size:</b>
                2 ft x 1.25 ft x 1 ft
              </p>
              <br />
              <div className="row">
                <div className="col-6">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter1"
                  >
                    <div className="card-footer cardfooter row  bg-dark">
                      <button
                        type="button"
                        className="btn btn-dark col-sm-12"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal10"
                      >
                        Read More
                      </button>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModal10"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content ">
                          <div className="modal-header bg-danger">
                            <h1
                              className="modal-title text-light justify-content: center fs-5"
                              id="exampleModalLabel"
                            >
                              Box Storage
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body text-dark">
                            We at Store my goods know that finding space for
                            personal storage can be difficult. That's why we're
                            committed to provide the perfect storage
                            solutions.We pride ourselves on being the best when
                            it comes to helping you with storing your
                            belongings. Your privacy , security and hygiene
                            would be our prime importance.
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-dark"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-dark"
                              data-bs-dismiss="modal"
                            >
                              GEt Quote
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 card-footer cardfooter row  bg-danger">
                  <button
                    type="button"
                    className=" btn btn-danger col-sm-12"
                    onClick={() => navigate(`/login`)}
                  >
                GET QUOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card border" style={{ height: 650 }}>
            <img
              src="https://storemygoods.in/images/services/shared_storage.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fs-2">Shared Storage </h5>
              <p className="card-text text-danger text-center">
                Don’t wanna spend much? We understand your needs.
              </p>

              <br />
              <br />
              <br />

              <div className="row">
                <div className="col-6">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter1"
                  >
                    <div className="card-footer cardfooter row  bg-dark">
                      <button
                        type="button"
                        className="btn btn-dark col-sm-12"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal11"
                      >
                        Read More
                      </button>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModal11"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content ">
                          <div className="modal-header bg-danger">
                            <h1
                              className="modal-title text-light justify-content: center fs-5"
                              id="exampleModalLabel"
                            >
                              Shared Storage
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body text-dark">
                         The shared storage plan is made for you if you want to a proper storage
                         facility with cheaper price. The storage will be shared with one or More 
                         storage holders but there will be no compromises on the levels of security,
                         hygiene and our promises.

                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              GEt Quote
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 card-footer cardfooter row  bg-danger">
                  <button
                    type="button"
                    className=" btn btn-danger col-sm-12"
                    onClick={() => navigate(`/login`)}
                  >
                  GET QUOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-sm-4">
          <div className="card border" style={{ height: 650 }}>
            <img
              src="https://storemygoods.in/images/services/private_storage.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fs-2">Private Storage </h5>
              <p className="card-text text-danger text-center">
                Privacy is priority, Get your own storage at a little upgrade.
              </p>

              <p className="card-text text-dark mb-3 text-center">
                <b>Room Size:</b>
                10 ft x 10 ft x 9 ft
              </p>
              
              <br />
              <div className="row">
                <div className="col-6">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter1"
                  >
                    <div className="card-footer cardfooter row  bg-dark">
                      <button
                        type="button"
                        className="btn btn-dark col-sm-12"
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal12"
                      >
                        Read More
                      </button>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModal12"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content ">
                          <div className="modal-header bg-danger">
                            <h1
                              className="modal-title text-light justify-content: center fs-5"
                              id="exampleModalLabel"
                            >
                              Private Storage
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body text-dark">
                            Having trouble sharing your storage space? We got you all
                            covered ! Store my goods even brings you an option to 
                            store your belongings privately. The items are cared for,
                            wrapped up and professionally 
                            packed and locked into individual containers.
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                              onClick={() => navigate('/login')}
                            >
                              GEt Quote
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 card-footer cardfooter row  bg-danger">
                  <button
                    type="button"
                    className=" btn btn-danger col-sm-12"
                    onClick={() => navigate(`/login`)}
                  >
               GET QUOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoragePlans;
