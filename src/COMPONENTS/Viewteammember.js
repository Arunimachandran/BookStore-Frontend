import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function Viewteammember() {
    const [teammember, setteammember] = useState([])
    const {_id} = useParams();
    const navi=useNavigate()
  
    useEffect(() => {
      axios.get(`http://localhost:3001/eachteammember/${_id}`)
        .then((view)=>{
          setteammember(view.data)
        })
      
    },[_id]);
  
    const handleClose=()=>{
      navi(`/teammemberinfo`)
  
    }
  return (
    <div className="center">

<Card className='update-card'style={{ width: '18rem',marginTop:"50px",textAlign:"center",height:"24rem",backgroundColor:"darkgrey"}}>
              <Card.Body>
                 
                  <Card.Text>
        <h2>{teammember.Name}</h2>
        
        <p>Email: {teammember.Email}</p>
        <p>DateOfBirth: {teammember.DateOfBirth}</p>
        <p>Gender: {teammember.Gender ? "Male" :"Female"}</p>
        <p>Description: {teammember.Description}</p>
        <p>Role: {teammember.Role}</p>
        <p>PhoneNumber: {teammember.PhoneNumber}</p>
        </Card.Text>
        </Card.Body>
        <Button variant='light' className='btn-lg-btn-block mt-4' onClick={()=>handleClose()}>close</Button>
          </Card>
    </div>
  )
}

export default Viewteammember