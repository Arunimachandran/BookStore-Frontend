import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Sidebar from './Sidebar';
import { BsEye } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai";
import{ BiEdit } from "react-icons/bi"
import Viewbook from './Viewbook'; 
import { useNavigate, useParams } from 'react-router-dom';
import Updatebook from './Updatebook';
import ReactPaginate from 'react-paginate'
import './Bookinfo.css'




function Bookinfo() {
    const [books, setbooks] = useState([])

    const [show, setshow] = useState(false)
    const [bookid, setbookid] = useState()
    
    const history=useNavigate()
   const [searchQuery, setsearchQuery] = useState("")
    
    const {_id}=useParams()

    const [PageNumber, setPageNumber] = useState(0)
    const perpage=5;
    const pageclick=PageNumber*perpage;
    const countpage=Math.ceil(books.length/perpage);




    useEffect(() => {
      axios.get("http://localhost:3001/book")
      .then(res=>{
        setbooks(res.data)
      }).catch(err=>console.log(err)) 
    }, [])

    const handledelete=(_id)=>{
      setbookid(_id)
      setshow(true)
    }

   function deletee(_id){
        axios.delete(`http://localhost:3001/deletebook/${bookid}`)
        .then(res=>{
          setbooks(books.filter(book=>book._id !==bookid))
            console.log("book deleted successfully");
        })
        setshow(false)
    }

    const Viewbook=(_id)=>{
      
      history(`/viewbook/${_id}`);
      return;
    }


    const editsubmit=(_id)=>{
      history(`/updatebook/${_id}`)
      
    }

    const bookfilter=books.filter((book)=>
      book.BookName?.toLowerCase().includes(searchQuery?.toLowerCase())
    )
   
   

    

    const changepage=({selected})=>{
      setPageNumber(selected);
  
     }
  
    
  return (

    <div style={{display:'flex'}}>
       <Sidebar/> 
        <div className='booktable'>
          <div className="d-flex justify-content-end mb-3 mt-5">
          <Form.Control
              type="text"
              placeholder="Search by book name"
              value={searchQuery}
              onChange={(e)=> setsearchQuery(e.target.value)}/>
              </div>
     <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Author</th>
          <th>Publication</th>
          <th>Year</th>
          <th>Availability</th>
          <th>Price</th>
         
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
   
      {bookfilter.slice(pageclick,pageclick+perpage).map((bookinfoo,index)=>(
        <tr key={index}>
          <td>{bookinfoo.BookName}</td>
          <td>{bookinfoo.Author}</td>
          <td>{bookinfoo.Publication}</td>
          <td>{bookinfoo.Year}</td>
          <td>{bookinfoo.Availability}</td>
          <td>{bookinfoo.Price}</td>
          
          <td>
      
           <BsEye style={{cursor:"pointer",margin:"11px",color:"green"}} size={20} onClick={() => Viewbook(bookinfoo._id)}/>
           <BiEdit style={{cursor:"pointer",margin:"11px",color:"blue"}} size={20} onClick={()=>editsubmit(bookinfoo._id)}/>
           <AiOutlineDelete style={{cursor:"pointer",margin:"11px",color:"red"}} size={20} onClick={()=>handledelete(bookinfoo._id)}/>
          </td>
        </tr>
      ))}
      </tbody>
   
    </Table>

    <ReactPaginate 
  previousLabel={"Previous"} 
  nextLabel={"Next"}
  pageCount={countpage}
  onPageChange={changepage}
containerClassName={"paginationBttns"}
previousLinkClassName={"previousBttn"}
nextLinkClassName={"nextBttn"}
activeClassName={"paginationActive"}
disabledClassName={"paginationDisabled "}

 />


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
    
  )
}


export default Bookinfo


