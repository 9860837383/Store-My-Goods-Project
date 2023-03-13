import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Storables from './Pages/Storables';
import Register from './Pages/Register';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BeOurPartner from './Pages/BeOurPartner';
import FulfillmentQuote from './Pages/FulfillmentQuote';
import Thankyou from './Pages/Thankyou';
import Login from './Pages/login';
import AddStorage from './Pages/AddStorage';
import AdminHome from './Pages/AdminHome';
import EditStorage from './Components/EditStorage';
import BoxStorage from './Components/BoxStorage';
import ViewRequest from './Components/ViewRequest';
import AdminNav from './Pages/UserNav';
import Request from './Pages/Request';
import ViewResponse from './Components/ViewResponse';
import Bill from './Pages/Bill';
import ViewBill from './Components/ViewBill';
import ViewAllBills from './Components/ViewAllBills';
import Insurance from './Pages/Insurance';
import InsurancePage from './Pages/InsurancePage';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/storables' element={<Storables/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/beOurPartner' element={<BeOurPartner/>}/>
          <Route path='/fulfillmentQuote' element={<FulfillmentQuote/>}/>
          <Route path='/thankyou' element={<Thankyou/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/adminHome' element={<AdminHome/>}/>
          <Route path='/addStorage' element={<AddStorage/>}/>
          <Route path='/editStorage/:id' element={<EditStorage/>}/>
          <Route path='/boxStorage' element={<BoxStorage/>}/>
          <Route path='/viewRequest' element={<ViewRequest/>}/>
          <Route path='/request/:id' element={<Request/>}/>
          <Route path='/viewResponse' element={<ViewResponse/>}/>
          <Route path='/bill/:id' element={<Bill/>} />
          <Route path='/viewBill' element={<ViewBill/>}/>
          <Route path='/viewBills' element={<ViewAllBills/>}/>
          <Route path='/insurance' element={<Insurance/>}/>
          <Route path='/insurancePage' element={<InsurancePage/>}/>

        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
