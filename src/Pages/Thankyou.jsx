import React from "react";
import Address from './Address';

const Thankyou = () => {
  return (
    <div>
    <div className="bg-light">
      <div className="display-1 text-dark text-center mt-3">
        <b>Thank You!</b>{" "}
      </div>

      <p className="text-center mt-5 mb-5">
        Sit back and relax, we got this...
      </p>
      <p className="text-center mt-3 mb-5">
        Having trouble?<b className="text-danger">contact us</b>
      </p>
      <center>
        {" "}<button className="btn btn-danger text-center mb-3">
          Continue To HomePage
        </button>
      </center>
   
    </div>
    <div className="bg-light">      <Address/></div>
 
 </div>
  );
};

export default Thankyou;
