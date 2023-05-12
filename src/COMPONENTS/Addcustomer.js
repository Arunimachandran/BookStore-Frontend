import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import './Addcustomer.css'
function Addcustomer() {
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [AddressLine1, setAddressLine1] = useState()
   
    const [City, setCity] = useState()
    const [State, setState] = useState()
    const [PinCode, setPinCode] = useState()
    const [Country, setCountry] = useState()
    const [countryname, setcountryname] = useState([])

    const history = useNavigate();

const name=(event)=>{
    setName(event.target.value)
}

const email=(event)=>{
    setEmail(event.target.value)
}

const adl1=(event)=>{
    setAddressLine1(event.target.value)
}



const city=(event)=>{
    setCity(event.target.value)
}

const state=(event)=>{
    setState(event.target.value)
}

const pin=(event)=>{
    setPinCode(event.target.value)
}
const country=(event)=>{
    setCountry(event.target.value)
}




    useEffect(() => {
      axios.get('https://countriesnow.space/api/v0.1/countries').then((cntry)=>setcountryname(cntry.data.data))
    }, [])
    console.log(countryname);


const submit=(event)=>{
    // event.preventDefault()
    if (!Name || !Email || !AddressLine1 || !City || !State || !PinCode || !Country) {
      alert("Please fill all fields");
      return;
    }
  
    axios
      .post("http://localhost:3001/customer", { Name, Email, AddressLine1, City, State, PinCode, Country })
      .then((response) => {
        console.log(response.data);
        history('/Customerinfo');
      })
      .catch((error) => {
        console.error(error);
      });
  //    axios.post("http://localhost:3001/customer",{Name,Email,AddressLine1,City,State,PinCode,Country})
  // console.log(event.data);
  // history('/Customerinfo')

}

  return (
 
 <div style={{display:"flex"}}>
    <Sidebar/>
        <div className='bookform'style={{alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto"}}>
        
         <Card style={{ width: '22rem',marginTop:"50px",textAlign:"center",height:"42rem",backgroundColor:"darkgrey"}}>
      
      <Card.Body>
      <form>
  <div class="form-group">
    {/* <label for="exampleInputEmail1">First Name</label> */}
    <input type="text" class="form-control" id="example1" aria-describedby="emailHelp" placeholder="Name" value={Name} onChange={name} required/>
  </div>

  <div class="form-group">
    {/* <label for="exampleInputEmail1">Last Name</label> */}
    <input type="email" class="form-control" id="example2" aria-describedby="emailHelp" placeholder="Email" value={Email} onChange={email} required/>
    </div>

    {/* <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" class="form-control" id="example3" aria-describedby="emailHelp" placeholder="Address Line 1" value={AddressLine1} onChange={adl1}/>
    </div> */}

     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        {/* <Form.Label>Example textarea</Form.Label> */}
        <Form.Control as="textarea" rows={3} placeholder="Address" defaultValue={AddressLine1} onChange={adl1} style={{width: '98%'}} required/>
      </Form.Group>

   

  <div class="form-group">
    {/* <label for="exampleInputPassword1">Password</label> */}
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="City" value={City} onChange={city} required/>
    </div>

    <div class="form-group">
    {/* <label for="exampleInputEmail1">Email address</label> */}
    <input type="text" class="form-control" id="exampleInputEmail5" aria-describedby="emailHelp" placeholder="State" value={State} onChange={state} required/>
    </div>

    <div class="form-group">
    {/* <label for="exampleInputEmail1">Email address</label> */}
    <input type="text" class="form-control" id="exampleInputEmail6" aria-describedby="emailHelp" placeholder="Pin Code" value={PinCode} onChange={pin} required/>
    </div>

    {/* <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" class="form-control" id="exampleInputEmail7" aria-describedby="emailHelp" placeholder="Country" value={Country} onChange={country}/>
    </div> */}

    <select className='customer-dropdown' value={Country} onChange={country} required>
      <option value="">Select</option>
      {countryname.map((res)=>(
        <option value={res.country}>{res.country}</option>
      ))}
    </select>
    
        <Button variant="dark" onClick={submit}style={{marginTop:"1rem"}}>Add</Button>
        
        </form>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Addcustomer