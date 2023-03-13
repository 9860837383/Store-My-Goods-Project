import React from 'react'
import { useNavigate } from 'react-router-dom';
import MainNav from './MainNav';

const Insurance = () => {
  const navigate=useNavigate();
  return (
    <div>
        <MainNav/>
      <div className="container">
        <div className='row mt-5'>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <h2 className='text-danger text-center mt-3'>Online Insurance made Easy For You</h2>
                <p className='fs-4 text-dark text-center mt-3'> Getting Insurance is your responsibility  to your family and your loved ones.You may hate it .But it is your responsibility...</p>
             <center><button className='btn btn-danger mt-4' onClick={() => navigate('/insurancePage')}>Apply Insurance</button></center> 
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card'>
              <img src='https://blog.mint.com/wp-content/uploads/2013/02/1.jpg' alt='Store My goods'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insurance;
