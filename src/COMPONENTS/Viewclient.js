import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
// import './ViewClient.css'

function Viewclient() {
    const [client, setClient] = useState([]);
    const {_id} = useParams();
    const navi=useNavigate()
  
    useEffect(() => {
      axios.get(`http://localhost:3001/eachclient/${_id}`)
        .then((view)=>{
          setClient(view.data)
        })
      
    },[_id]);
  
    const handleClose=()=>{
      navi(`/clientinfo`)
  
    }
  
    return (
     
      <div className="center">
           <Card className='update-card'style={{ width: '18rem',marginTop:"50px",textAlign:"center",height:"24rem",backgroundColor:"darkgrey"}}>
              <Card.Body>
                 
                  <Card.Text>
        <h2>{client.Name}</h2>
        <p>UserName: {client.UserName}</p>
        <p>Email: {client.Email}</p>
        <p>SignedStatus: {client.SignedStaus ? "Sign In" :"Not Sign In"}</p>
        <p>Role: {client.Role}</p>
        <p>PhoneNumber: {client.PhoneNumber}</p>
        </Card.Text>
        </Card.Body>
        <Button variant='light' className='btn-lg-btn-block mt-4' onClick={()=>handleClose()}>close</Button>
          </Card>
      </div>
    )
}

export default Viewclient;
