import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Viewbook.css';
function Viewbook() {
  const [book, setBook] = useState([]);
  const {_id} = useParams();
  const navi=useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3001/eachbook/${_id}`)
      .then((view)=>{
        setBook(view.data)
      })
    
  },[_id]);

  const handleClose=()=>{
    navi(`/bookinfo`)

  }
  

  return (
   
    <div className="center">
         <Card className='update-card'style={{ width: '18rem',marginTop:"50px",textAlign:"center",height:"24rem",backgroundColor:"darkgrey"}}>
            <Card.Body>
               
                <Card.Text>
      <h2>{book.BookName}</h2>
      <p>Author: {book.Author}</p>
      <p>Publication: {book.Publication}</p>
      <p>Year: {book.Year}</p>
      <p>Availability: {book.Availability}</p>
      </Card.Text>
      </Card.Body>
      <Button variant='light' className='btn-lg-btn-block mt-4' onClick={()=>handleClose()}>close</Button>
        </Card>

    </div>
    )  
}

export default Viewbook;
