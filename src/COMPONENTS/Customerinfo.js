import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Button, Modal, Table } from 'react-bootstrap'
import { BsEye } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Customerinfo() {
const [customer, setcustomer] = useState([])

const [show, setshow] = useState(false)
const [customerid, setcustomerid] = useState()

const{_id}=useParams()
const history=useNavigate()

useEffect(() => {
    axios.get("http://localhost:3001/getcustomer")
    .then(res=>{
      setcustomer(res.data)
    }).catch(err=>console.log(err)) 
  }, [])

  const handledelete=(_id)=>{
    setcustomerid(_id)
    setshow(true)
  }

  function deletee(_id){
    axios.delete(`http://localhost:3001/deletecustomer/${customerid}`)
    .then(res=>{
       setcustomer(customer.filter(cus=>cus._id !==customerid))
       console.log("deleted successfully"); 
    })
    setshow(false)
  }

  const Viewcustomer=(_id)=>{
      
    history(`/viewcustomer/${_id}`);
    return;
  }

  const editsubmit=(_id)=>{
    history(`/updatecustomer/${_id}`)
    
  }

  return (
   
<div style={{display:'flex'}}>
       <Sidebar/> 
        <div className='booktable'style={{marginLeft:"auto",marginRight:"auto",width:"70%"}}>
        <div className="d-flex justify-content-end mb-3 mt-5">
     <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
         
          <th>City</th>
          <th>State</th>
          <th>Pin Code</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
   
   {customer.map((customerinfoo)=>(
        <tr key={customerinfoo._id}>
          <td>{customerinfoo.Name}</td>
          <td>{customerinfoo.Email}</td>
          <td>{customerinfoo.AddressLine1}</td>
          
          <td>{customerinfoo.City}</td>
          <td>{customerinfoo.State}</td>
          <td>{customerinfoo.PinCode}</td>
          <td>{customerinfoo.Country}</td>
          <td>
      
           <BsEye style={{cursor:"pointer",margin:"11px",color:"green"}} size={20} onClick={() => Viewcustomer(customerinfoo._id)}/>
           <BiEdit style={{cursor:"pointer",margin:"11px",color:"blue"}} size={20} onClick={()=>editsubmit(customerinfoo._id)}/>
           <AiOutlineDelete style={{cursor:"pointer",margin:"11px",color:"red"}} size={20} onClick={()=>handledelete(customerinfoo._id)}/>
          </td>
        </tr>
      ))}
      </tbody>
   
    </Table>
    <Modal show={show} onHide={()=>setshow(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm Delete</Modal.Title>
  </Modal.Header>
  <Modal.Body>Are You Want to delete !</Modal.Body>
 
    <Button variant="secondary" onClick={()=>setshow(false)}>
      No
    </Button>
    <Button variant="primary" onClick={deletee}> Yes
    </Button>
  
</Modal>

   </div>
    </div>
    </div>
  )
}

export default Customerinfo