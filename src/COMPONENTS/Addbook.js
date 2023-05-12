import axios from 'axios';
import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';



function Addbook() {
    const [BookName, setBookName] = useState()
    const [Author, setAuthor] = useState()
    const [Publication, setPublication] = useState()
    const [Year, setYear] = useState()
    const [Availability, setAvailability] = useState()
    const [Price, setPrice] = useState()
    const [Image, setImage] = useState()

    const history = useNavigate();
    
    const submit=async()=>{
      //event.preventDefault()
     
     axios.post("http://localhost:3001/books",{BookName,Author,Publication,Year,Availability,Price,Image})
    //  .then(async(res)=>{
    //   await swal(res.data.message,"Book is Added","success")
    //   window.location.reload()
    //  }).catch((err)=>{swal(err.response.data.message,"please check","error")})
     
    // console.log(addbook.data);
      
      // .then((res)=>{
      //     setBookName("")
      //     setAuthor("")
      //     setPublication("")
      //     setYear("")
      //     setAvailability("")
      // })
       history('/Bookinfo')
  }
    
     

  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
        <div className='bookform'style={{alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto"}}>
        
         <Card style={{ width: '18rem',marginTop:"50px",textAlign:"center",height:"30rem",backgroundColor:"darkgrey"}}>
      
      <Card.Body>
    <Form>

      <Form.Group className="mb-3" controlId="formname">
        <Form.Control type="text" placeholder="Enter Book Name" value={BookName} onChange={(e)=>setBookName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formauthor">
        <Form.Control type="text" placeholder="Author" value={Author} onChange={(e)=>setAuthor(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formpublication">
        <Form.Control type="text" placeholder="Publication" value={Publication} onChange={(e)=>setPublication(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formyear">
        <Form.Control type="text" placeholder="Year" value={Year} onChange={(e)=>setYear(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formavailability">
        <Form.Control type="text" placeholder="Availability" value={Availability} onChange={(e)=>setAvailability(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formavailability">
        <Form.Control type="text" placeholder="Price" value={Price} onChange={(e)=>setPrice(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formavailability">
        <Form.Control type="text" placeholder="Image" value={Image} onChange={(e)=>setImage(e.target.value)}/>
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

export default Addbook