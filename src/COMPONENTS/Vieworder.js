import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function Vieworder() {
    const [order, setorder] = useState([])
    const {_id}=useParams()
    const navi=useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3001/eachorder/${_id}`)
          .then((view)=>{
            setorder(view.data)
          })
        
      },[_id]);

      const handleClose=()=>{
        navi(`/orderinfo`)
    
      }

  return (
    <div className="center">
    <Card className='update-card'style={{ width: '18rem',marginTop:"50px",textAlign:"center",height:"22rem",backgroundColor:"darkgrey"}}>
               <Card.Body>
                  
           <Card.Text>
         <h2>{order.FirstName}</h2>
         <p>LastName: {order.LastName}</p>
         <p>OrderId:{order.OrderId}</p>
         <p>ProductNumber: {order.ProductNumber}</p>
         <p>Date: {order.Date}</p>
        
         </Card.Text>
         </Card.Body>
         <Button variant='light' className='btn-lg-btn-block mt-4' onClick={()=>handleClose()}>close</Button>
           </Card>

    </div>
  )
}

export default Vieworder