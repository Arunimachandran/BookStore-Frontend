import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './Updatebook.css';

function Updatebook() {
    const [data, setdata] = useState([])
    const{_id}=useParams()
    const navi=useNavigate()
    console.log(_id);
    useEffect(()=>{
        axios.get(`http://localhost:3001/eachbook/${_id}`)
        .then((bookdata)=>{
            setdata(bookdata.data)
            console.log(bookdata.data);
        })
    },[]) //each data getting using id
    console.log(data);
const [BookName, setBookName] = useState(data.BookName)
const [Author, setAuthor] = useState(data.Author)
const [Publication, setPublication] = useState(data.Publication)
const [Year, setYear] = useState(data.Year)
const [Availability, setAvailability] = useState(data.Availability)
    
const update=()=>{
    axios.put(`http://localhost:3001/updatebook/${_id}`,{BookName,Author,Publication,Year,Availability})
    .then((up)=>{
        console.log(up.data);
    })
    navi('/Bookinfo')
} //edit function


  return (
    <div className='update-form'>
        
        <Card className='update-card'style={{ width: '18rem',marginTop:"50px",textAlign:"center",height:"24rem",backgroundColor:"darkgrey"}}>
            <Card.Body>
               
                <Card.Text>
                    <input  type="text" placeholder='Book Name'   Value={data.BookName} onChange={(e)=>{setBookName(e.target.value)}}/>
                    <input  type="text" placeholder='Author'   Value={data.Author} onChange={(e)=>{setAuthor(e.target.value)}}/>
                    <input  type="text" placeholder='Publication'   Value={data.Publication} onChange={(e)=>{setPublication(e.target.value)}}/>
                    <input  type="text" placeholder='Year'  Value={data.Year} onChange={(e)=>{setYear(e.target.value)}}/>
                    <input  type="text" placeholder='Availability'  Value={data.Availability} onChange={(e)=>{setAvailability(e.target.value)}}/>
                </Card.Text>
                <Button type='submit'variant="dark" className='btn-up' onClick={update}style={{marginTop:"1rem"}}>Update</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Updatebook

