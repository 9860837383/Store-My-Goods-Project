import React from "react";

const Reviews = () => {
  return (
    <div className="container mt-5">
      {/* <div className="row mt-5">
        <div className="col-sm-1" />
         <div className="col-sm-6">
          <img src="https://w3site.ca/wp-content/uploads/2020/02/Google-reviews-logo.jpg" />
        </div>  
      </div> */}
      {/* <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://simpletexting.com/wp-content/uploads/2020/01/review-6-1024x365.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://embedsocial.com/wp-content/uploads/2022/06/ScreenShot2022-05-23at20_50_42_9e4438cca1665562c76c372c9dc2d7f7_800.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://embedsocial.com/wp-content/uploads/2022/06/ScreenShot2022-05-23at18_16_43_bbf2041dd53eb1a10a076cd7d2aa4a2e_800.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      {/* -- */}
      
      <div className="row text-center mt-5 mb-5 display-6">
        <p className="text-danger">
          Frequently <b className="text-dark">asked</b> Questions
        </p>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p classNameName="text-dark fs-6"> Ques:</p>
              <p>Do I need to sign a long-term lease?</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                <b>Ans.</b>
                No, we store on a month-to-month basis unless the customer opts
                for a multi-month plan.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p className="text-dark fs-6"> Ques:</p>
              <p>What happens if I miss a payment?</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <b>Ans.</b>
                Though you’ll be receiving payment reminders before every
                forthcoming payment, in case you miss the deadline of payment
                submission the post-dated cheques are to be used.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p className="text-dark fs-6"> Ques:</p>
              <p>How do I make a payment?</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <b>Ans.</b>
                All the payments are to be made using our customer portal which
                accepts credit card, debit card, and net banking.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p className="text-dark fs-6"> Ques:</p>
              <p>What happens if I miss a payment?</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <b>Ans.</b>
                Though you’ll be receiving payment reminders before every
                forthcoming payment, in case you miss the deadline of payment
                submission the post-dated cheques are to be used.s
              </p>
            </div>
          </div>
        </div>{" "}
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p className="text-dark fs-6"> Ques:</p>
              <p>What items are prohibited in a self-storage unit?</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <b>Ans.</b>
                You may not store any items that are explosive, flammable,
                odorous, hazardous, corrosive, or perishable. These items can
                include food, drinks, fireworks, propane tanks, chemicals, etc.
                If you feel you have an item that may be classified as
                prohibited but are unsure, please contact the operations manager
                for clarification.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p className="text-dark fs-6"> Ques:</p>
              <p>What Kind Of Security Does Store My Goods Offer?</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <b>Ans.</b>
                Store My Goods offers multiple levels of security ranging from
                24*7 guarded storage facilities to CCTV surveillance
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p className="text-dark fs-6"> Ques:</p>
              <p>
                What extra charges do I need to pay apart from the storage space
                cost?
              </p>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <b>Ans.</b>
                You need to pay a refundable security deposit which will be
                equivalent to one month’s Storage Charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
