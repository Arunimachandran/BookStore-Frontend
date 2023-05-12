import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { BsEye } from 'react-icons/bs'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Orderinfo() {
    const [order, setorder] = useState([])
    const [show, setshow] = useState(false)
const [orderid, setorderid] = useState()


    const{_id}=useParams()
const history=useNavigate()

useEffect(() => {
    axios.get("http://localhost:3001/getorder")
    .then(res=>{
      setorder(res.data)
    }).catch(err=>console.log(err)) 
  }, [])

  const handledelete=(_id)=>{
    setorderid(_id)
    setshow(true)
  }

  function deletee(_id){
    axios.delete(`http://localhost:3001/deleteorder/${orderid}`)
    .then(res=>{
       setorder(order.filter(ord=>ord._id !==orderid))
       console.log("deleted successfully"); 
    })
    setshow(false)
  }
  const Vieworder=(_id)=>{
      
    history(`/Vieworder/${_id}`);
    return;
  }

  const editsubmit=(_id)=>{
    history(`/updateorder/${_id}`)
    
  }

  return (
    <div style={{display:'flex'}}>
       <Sidebar/> 
        <div className='booktable'style={{marginLeft:"auto",marginRight:"auto",width:"70%"}}>
        <div className="d-flex justify-content-end mb-3 mt-5">
     <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last name</th>
          <th>OrderId</th>
          <th>ProductNumber</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
   
   {order.map((orderinfoo)=>(
        <tr key={orderinfoo._id}>
          <td>{orderinfoo.FirstName}</td>
          <td>{orderinfoo.LastName}</td>
          <td>{orderinfoo.OrderId}</td>
          <td>{orderinfoo.ProductNumber}</td>
          <td>{orderinfoo.Date}</td>
         
          <td>
      
           <BsEye style={{cursor:"pointer",margin:"11px",color:"green"}} size={20} onClick={() => Vieworder(orderinfoo._id)}/>
           <BiEdit style={{cursor:"pointer",margin:"11px",color:"blue"}} size={20} onClick={()=>editsubmit(orderinfoo._id)}/>
           <AiOutlineDelete style={{cursor:"pointer",margin:"11px",color:"red"}} size={20} onClick={()=>handledelete(orderinfoo._id)}/>
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

export default Orderinfo