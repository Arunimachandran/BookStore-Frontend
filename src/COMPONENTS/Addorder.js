import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

function Addorder() {

    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [OrderId, setOrderId] = useState()
    const [ProductNumber, setProductNumber] = useState()
    const [Date, setDate] = useState()

    const history = useNavigate();

    const submit=async()=>{
        axios.post("http://localhost:3001/order",{FirstName,LastName,OrderId,ProductNumber,Date})
        history('/orderinfo')
    }
   
  return (
    <div style={{display:"flex"}}>
    <Sidebar/>
      <div className='bookform' style={{alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto"}}>
      
       <Card style={{ width: '18rem',marginTop:"50px",textAlign:"center",height:"24rem",backgroundColor:"darkgrey"}}>
    
    <Card.Body>
  <Form>

    <Form.Group className="mb-3" controlId="basicname">
      <Form.Control type="text" placeholder="First Name" value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="basiclname">
      <Form.Control type="text" placeholder="LastName" value={LastName} onChange={(e)=>setLastName(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="basicorder">
      <Form.Control type="text" placeholder="Order Id" value={OrderId} onChange={(e)=>setOrderId(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="basicpnumber">
      <Form.Control type="number" placeholder="Product Number" value={ProductNumber} onChange={(e)=>setProductNumber(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="basicdate">
      <Form.Control type="date" placeholder="Date" value={Date} onChange={(e)=>setDate(e.target.value)}/>
    </Form.Group>
    <Button variant="dark" type="submit" onClick={submit} style={{marginTop:"1rem"}}>
     Add
    </Button>
    
  </Form>
  </Card.Body>
  </Card>
  </div>

    </div>
  )
}

export default Addorder