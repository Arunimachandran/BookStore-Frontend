import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Button, Modal, Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { BsEye } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'

function Teammemberinfo() {
    const [teammember, setteammember] = useState([])

    const [show, setshow] = useState(false)
    const [teammemberid, setteammemberid] = useState()


    const {_id}=useParams()
    const history=useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3001/getteammember")
        .then(res=>{
          setteammember(res.data)
        })
      }, [])

      const Viewteammember=(_id)=>{
      
        history(`/viewteammember/${_id}`);
        return;
      }

      const editsubmit=(_id)=>{
        history(`/updateteammember/${_id}`)
        
      }

      const handledelete=(_id)=>{
        setteammemberid(_id)
        setshow(true)
      }

      function deletee(_id){
        axios.delete(`http://localhost:3001/deleteteammember/${teammemberid}`)
        .then(res=>{
          setteammember(teammember.filter(teammembers=>teammembers._id !==teammemberid))
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
          <th>Email</th>
          <th>Date Of Birth</th>
          <th>Gender</th>
          <th>Description</th>
          <th>Role</th>
          <th>Phone Number</th>
          <th>Profile Picture</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
   
   {teammember.map((teammemberinfoo)=>(
        <tr key={teammemberinfoo._id}>
          <td>{teammemberinfoo.Name}</td>
          <td>{teammemberinfoo.Email}</td>
          <td>{teammemberinfoo.DateOfBirth}</td>
          <td>{teammemberinfoo.Gender ? "Male":"Female"}</td>
          <td>{teammemberinfoo.Description}</td>
          <td>{teammemberinfoo.Role}</td>
          <td>{teammemberinfoo.PhoneNumber}</td>
          <td>{teammemberinfoo.ProfilePicture}</td>
          <td>
      
           <BsEye style={{cursor:"pointer",margin:"11px",color:"green"}} size={20} onClick={() => Viewteammember(teammemberinfoo._id)}/>
           <BiEdit style={{cursor:"pointer",margin:"11px",color:"blue"}} size={20} onClick={()=>editsubmit(teammemberinfoo._id)}/>
           <AiOutlineDelete style={{cursor:"pointer",margin:"11px",color:"red"}} onClick={()=>handledelete(teammemberinfoo._id)}/>
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

export default Teammemberinfo