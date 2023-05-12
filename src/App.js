import logo from './logo.svg';
import './App.css';
import Signup from './COMPONENTS/Signup';
import Login from './COMPONENTS/Login';
import Navbarr from './COMPONENTS/Navbarr';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bookinfo from './COMPONENTS/Bookinfo';
import Sidebar from './COMPONENTS/Sidebar';
import Addbook from './COMPONENTS/Addbook';
import Viewbook from './COMPONENTS/Viewbook';
import Updatebook from './COMPONENTS/Updatebook';
import Createclient from './COMPONENTS/Createclient';
import Clientinfo from './COMPONENTS/Clientinfo';
import Customerinfo from './COMPONENTS/Customerinfo';
import Addcustomer from './COMPONENTS/Addcustomer';
import Viewcustomer from './COMPONENTS/Viewcustomer';
import Updatecustomer from './COMPONENTS/Updatecustomer';
import Viewclient from './COMPONENTS/Viewclient';
import Updateclient from './COMPONENTS/Updateclient';
import Teammemberinfo from './COMPONENTS/Teammemberinfo';
import Addteammember from './COMPONENTS/Addteammember';
import Viewteammember from './COMPONENTS/Viewteammember';
import Updateteammember from './COMPONENTS/Updateteammember';
import Addorder from './COMPONENTS/Addorder';
import Orderinfo from './COMPONENTS/Orderinfo';
import Vieworder from './COMPONENTS/Vieworder';
import Updateorder from './COMPONENTS/Updateorder';
import Adminlogin from './COMPONENTS/Adminlogin';


import Userbooks from './COMPONENTS/Userbooks';
import Cartpage from './COMPONENTS/Cartpage';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Navbarr/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Adminlogin" element={<Adminlogin/>}/>
      <Route path="/Sidebar" element={<Sidebar/>}/>



      <Route path="/Bookinfo" element={<Bookinfo/>}/>
      <Route path="/Addbook" element={<Addbook/>}/>
      <Route path="/Viewbook/:_id" element={<Viewbook/>}/>
      <Route path="/updatebook/:_id" element={<Updatebook/>}/>



      <Route path="/Createclient" element={<Createclient/>}/>
      <Route path="/Clientinfo" element={<Clientinfo/>}/>
      <Route path="/Viewclient/:_id" element={<Viewclient/>}/>
      <Route path="/updateclient/:_id" element={<Updateclient/>}/>



      <Route path="/Customerinfo" element={<Customerinfo/>}/>
      <Route path="/AddCustomer" element={<Addcustomer/>}/>
      <Route path="/Viewcustomer/:_id" element={<Viewcustomer/>}/>
      <Route path="/updatecustomer/:_id" element={<Updatecustomer/>}/>



      
      <Route path="/Teammemberinfo" element={<Teammemberinfo/>}/>
      <Route path="/addteammember" element={<Addteammember/>}/>
      <Route path="/Viewteammember/:_id" element={<Viewteammember/>}/>
      <Route path="/updateteammember/:_id" element={<Updateteammember/>}/>


      <Route path="/orderinfo" element={<Orderinfo/>}/>
     <Route path="/addorder" element={<Addorder/>}/>    
     <Route path="/Vieworder/:_id" element={<Vieworder/>}/> 
     <Route path="/updateorder/:_id" element={<Updateorder/>}/> 

     {/* <Route path="/Addcart" element={<Addcart/>}/>
     <Route path="/cart" element={<Cart/>}/>  */}
     
     <Route path="/userbooks" element={<Userbooks/>}/>
     <Route path="/cartpage" element={<Cartpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
