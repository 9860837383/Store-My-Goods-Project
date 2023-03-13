import React from "react";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate=useNavigate();
 
  return (
    <div >
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner car">
          <div className="carousel-item active car">
            <img
              src="https://www.snapnsure.net/wp-content/uploads/2018/04/Declutter-Your-Home-1200x565.jpg"
              className="d-block w-100 car"
              alt="Store My Goods"
            />

            <div className="carousel-caption mb-5 d-none d-md-block">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card border-light">
                    <div className="display-4 text-dark mb-2">
                      <b>Business Storage Made Easy</b>
                    </div>
                    <div className="text-danger cardtext fs-4 mb-3">
                      SECURE,AFFORDABLE,TECH-ENABLED
                    </div>

                    <center>
                    <button type="button"onClick={() => navigate(`/login`)} className="btn btn-dark mb-3 mt-4 btn-lg">Get A Quote</button>

                    </center>
                  </div>{" "}
                </div>
              </div>

              <br />
              <br />

              <p className="text-light fs-4">
                Business & startup storage | Files & Document Storage | Bulk
                Inventory Storage | Office Movement and outeSourcing
              </p>
            </div>
          </div>
          <div className="carousel-item car">
            <img
              src="https://www.movingsolutions.in/blog/wp-content/uploads/2016/12/house-plants-moving.jpg"
              className="d-block w-100 car"
              alt="Store My Goods"
            />
            <div className="carousel-caption mb-5 d-none d-md-block">
            <div className="row">
                <div className="col-sm-6">
                  <div className="card border-light">
                    <div className="display-4 text-dark mb-2">
                      <b>Househlod Storage Made Easy</b>
                    </div>
                    <div className="text-danger cardtext fs-4 mb-3">
                      SECURE,AFFORDABLE,TECH-ENABLED
                    </div>

                    <center>
                    <button type="button" className="btn btn-dark mb-3 mt-4 btn-lg" onClick={() => navigate(`/login`)}>Get Quote</button>

                    </center>
                  </div>{" "}
                </div>
              </div>

              <br />
              <br />

              <p className="text-light fs-4">
                Business & startup storage | Files & Document Storage | Bulk
                Inventory Storage | Office Movement and outeSourcing
              </p>
            </div>
          </div>
          <div className="carousel-item car">
            <img
              src="https://www.snapnsure.net/wp-content/uploads/2018/04/Declutter-Your-Home-1200x565.jpg"
              className="d-block w-100 car"
              alt="Store My Goods"
            />
            <div className="carousel-caption d-none d-md-block">
            <div className="row">
                <div className="col-sm-6">
                  <div className="card border-light">
                    <div className="display-4 text-dark mb-2">
                      <b>Business Storage Made Easy</b>
                    </div>
                    <div className="text-danger cardtext fs-4 mb-3">
                      SECURE,AFFORDABLE,TECH-ENABLED
                    </div>

                    <center>
                    <button type="button" className="btn btn-dark mb-3 mt-4 btn-lg" onClick={() => navigate(`/login`)}>Get Quote</button>

                    </center>
                  </div>{" "}
                </div>
              </div>
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
