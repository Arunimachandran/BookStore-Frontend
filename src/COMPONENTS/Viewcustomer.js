import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Viewcustomer.css';

function Viewcustomer() {
    const [customer, setcustomer] = useState([])
    const {_id}=useParams()
    const navi=useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3001/eachcustomer/${_id}`)
          .then((view)=>{
            setcustomer(view.data)
          })
        
      },[_id]);

      const handleClose=()=>{
        navi(`/customerinfo`)
    
      }

  return (
    <div className="center">
 <Card className='update-card'style={{ width: '18rem',marginTop:"50px",textAlign:"center",height:"27rem",backgroundColor:"darkgrey"}}>
            <Card.Body>
               
        <Card.Text>
      <h2>{customer.Name}</h2>
      <p>Email: {customer.Email}</p>
      <p>AddressLine1: {customer.AddressLine1}</p>
      
      <p>City: {customer.City}</p>
      <p>State: {customer.State}</p>
      <p>PinCode: {customer.PinCode}</p>
      <p>Country: {customer.Country}</p>
      </Card.Text>
      </Card.Body>
      <Button variant='light' className='btn-lg-btn-block mt-4' onClick={()=>handleClose()}>close</Button>
        </Card>
    </div>
  )
}

export default Viewcustomer