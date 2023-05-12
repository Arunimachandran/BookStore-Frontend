import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Button, Modal, Table } from 'react-bootstrap'
import { BsEye } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import Sidebar from './Sidebar'
import { useNavigate, useParams } from 'react-router-dom'

function Clientinfo() {
    const [client, setclient] = useState([])

    const [show, setshow] = useState(false)
    const [clientid, setclientid] = useState()

    const {_id}=useParams()
    const history=useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3001/getclient")
        .then(res=>{
          setclient(res.data)
        })
      }, [])


      

      const Viewclient=(_id)=>{
      
        history(`/viewclient/${_id}`);
        return;
      }

      const editsubmit=(_id)=>{
        history(`/updateclient/${_id}`)
        
      }

      const handledelete=(_id)=>{
        setclientid(_id)
        setshow(true)
      }

      function deletee(_id){
        axios.delete(`http://localhost:3001/deleteclient/${clientid}`)
        .then(res=>{
          setclient(client.filter(clients=>clients._id !==clientid))
            console.log("book deleted successfully");
        })
        setshow(false)

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
          <th>User Name</th>
          <th>Email</th>
          <th>Signed Status</th>
          <th>Role</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
   
   {client.map((clientinfoo)=>(
        <tr key={clientinfoo._id}>
          <td>{clientinfoo.Name}</td>
          <td>{clientinfoo.UserName}</td>
          <td>{clientinfoo.Email}</td>
          <td>{clientinfoo.SignedStatus ? "Sign In":"Not Sign In"}</td>
          <td>{clientinfoo.Role}</td>
          <td>{clientinfoo.PhoneNumber}</td>
          <td>
      
           <BsEye style={{cursor:"pointer",margin:"11px",color:"green"}} size={20} onClick={() => Viewclient(clientinfoo._id)}/>
           <BiEdit style={{cursor:"pointer",margin:"11px",color:"blue"}} size={20} onClick={()=>editsubmit(clientinfoo._id)}/>
           <AiOutlineDelete style={{cursor:"pointer",margin:"11px",color:"red"}} onClick={()=>handledelete(clientinfoo._id)}/>
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

export default Clientinfo