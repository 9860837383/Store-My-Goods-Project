import React from 'react'

const Benefits = () => {
  return (
    <div className='container mt-5'>
        <p className='display-4 text-center'>What Makes Us <b className='text-danger'>Unique</b>?</p>
        <div className='row'>
            <div className='col-sm-4'>
            <div className="card border" style={{ height: 520 }}>
            <img
              src="https://storemygoods.in/images/services/lowest_price.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text fs-4 text-center">
              Guaranteed Lowest
Price in NCR
              </p>
              <p className="card-text text-center text-danger">
              If you find lower price – one month
storage is free.CR
              </p>
              </div>
              </div>
            </div>
            <div className='col-sm-4'>
            <div className="card border" style={{ height: 520 }}>
            <img
              src="https://storemygoods.in/images/services/no_lockin.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text fs-4 text-center">
              No Lock-in
Period
              </p>
              <p className="card-text text-center text-danger">
              We understand your needs and that is
why we don’t mandate the lengthy
lock in periods.
              </p>
              </div>
              </div>
            </div>  <div className='col-sm-4'>
            <div className="card border" style={{ height: 520 }}>
            <img
              src="https://storemygoods.in/images/services/security_deposit.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text  fs-4 text-center">
              Guaranteed Lowest
Price in NCR
              </p>
              <p className="card-text text-center text-danger">
              If you find lower price – one month
storage is free.CR
              </p>
              </div>
              </div>
            </div>
        </div>
        
        </div>
  )
}

export default Benefits;