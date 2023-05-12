import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function Updateorder() {
    const [data,setdata] = useState([])
    const{_id}=useParams()
    const navi=useNavigate()

    console.log(_id);
    useEffect(()=>{
        axios.get(`http://localhost:3001/eachorder/${_id}`)
        .then((orddata)=>{
            setdata(orddata.data)
            console.log(orddata.data);
        })
    },[])
    console.log(data);
    const [FirstName, setFirstName] = useState(data.FirstName)
    const [LastName, setLastName] = useState(data.LastName)
    const [OrderId, setOrderId] = useState(data.OrderId)
    const [ProductNumber, setProductNumber] = useState(data.ProductNumber) 
    const [Date, setDate] = useState(data.Date)
   
    
    const update=()=>{
        axios.put(`http://localhost:3001/updateorder/${_id}`,{FirstName,LastName,OrderId,ProductNumber,Date})
        .then((up)=>{
            console.log(up.data);
        })
        navi('/orderinfo')
    }
  return (
    <div className='update-form'>
        
    <Card className='update-card'style={{ width: '22rem',marginTop:"50px",textAlign:"center",height:"26rem",backgroundColor:"darkgrey"}}>
        <Card.Body>
           
            <Card.Text>
                <input  type="text" placeholder='First Name'   Value={data.FirstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                <input  type="text" placeholder='Last Name'   Value={data.LastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                <input  type="text" placeholder='Order Id'   Value={data.OrderId} onChange={(e)=>{setOrderId(e.target.value)}}/>
                <input  type="number" placeholder='Product Number'  Value={data.ProductNumber} onChange={(e)=>{setProductNumber(e.target.value)}}/>
                <input  type="date" placeholder='Date'  Value={data.Date} onChange={(e)=>{setDate(e.target.value)}}/>
               
            </Card.Text>
            <Button type='submit'variant="dark" className='btn-up' onClick={update}style={{marginTop:"1rem"}}>Update</Button>
        </Card.Body>
    </Card>

    </div>
  )
}

export default Updateorder