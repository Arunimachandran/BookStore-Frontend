// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Button, Card, Container, Modal, Nav, Navbar } from 'react-bootstrap'
// import './Userbooks.css'
// import { Link, useNavigate, useParams } from 'react-router-dom'




// import { GiSecretBook } from 'react-icons/gi'
// import { useCart } from '../Context/CartProvider'
// import { BsCartPlusFill } from 'react-icons/bs'

// function Userbooks() {
//     const [bookinfo, setbookinfo] = useState([])

//     const [cart, setcart] = useCart()
//     // const [show, setshow] = useState(false)
//     // const [cart, setcart] = useState([])
    
//     const {_id}=useParams()
//   //  const navig=useNavigate()


//     useEffect(() => {
//         axios.get(`http://localhost:3001/book`).then((res)=>{
//         setbookinfo(res.data)
//       })
//     }, [])
    

// const logout=()=>{
//   // const db=await axios.post('http://localhost:5000/userlogin',{Email,Password})
//   localStorage.clear('userinfo')
 

// }
    
    
//   return (
       
//    <div style={{backgroundColor:'black'}}>
//    <div>
//    <Navbar className='main-navbar' expand="lg">
//     <Container fluid>
//       <Navbar.Brand className='navbar-brand' href="#"> <GiSecretBook /> Books</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Nav>
//       <Link  to="/userbooks" className='navbar-link'><b>Home</b></Link>
//       <Link  to="/cartpage" className='navbar-link'> <BsCartPlusFill/> {cart.length} </Link>
//       <Link  to="/" className='navbar-link' onClick={logout}> <b>Log Out</b> </Link>
//       </Nav>
//     </Container>
//   </Navbar>
//    </div>
//     <div className='user-main-div'>
//     {bookinfo.map((data)=>(
//     <Card key={data._id} className='user-card' >
//      <div className='img-fluid'>
//       <img style={{width:"200px",height:"210px",
//       borderTopLeftRadius:"10px",
//       borderTopRightRadius:"10px"
//       }}
//        src={data.Image} alt="/"/>
//      </div>
//       <Card.Body className='d-block'>
//         <Card.Title>Book Name:-{data.BookName}</Card.Title>
//         <Card.Text>
//           Author:-{data.Author}<br/>
//           Publication:-{data.Publication}<br/>
//           Year:-{data.Year}<br/>
//           Rs:{data.Price}
          
//         </Card.Text>
        
//         <Button className='user-card-button' onClick={()=>{  
//           if(cart.find((book)=>book._id === data._id)){
//           alert('Already in cart')
//         }else{
//           setcart([...cart,data])
//           alert('Item added')
//           localStorage.setItem('cart',JSON.stringify([...cart,data]))
//         }
//       }}>Add to cart</Button>
//       </Card.Body>
//     </Card>
//     ))}

   
//     </div>
//     </div>


//   )
// }

// export default Userbooks

//================================================

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Modal, Nav, Navbar } from 'react-bootstrap'
import './Userbooks.css'
import { Link, useNavigate, useParams } from 'react-router-dom'




import { GiSecretBook } from 'react-icons/gi'


function Userbooks() {
    const [bookinfo, setbookinfo] = useState([])
    const [productid, setproductid] = useState('')

    // const [cart, setcart] = useCart()
    // const [show, setshow] = useState(false)
    // const [cart, setcart] = useState([])
    
    const {_id}=useParams()
  //  const navig=useNavigate()


    useEffect(() => {
      axios.get('http://localhost:3001/book').then((res)=>{
        setbookinfo(res.data)
      })
    }, [])


    const handlecart=(productid)=>{
      const prdctid=productid
      const userid=localStorage.getItem('userid')
      // console.log(userid);
      // console.log({productid:prdctid,userid:userid});

      const data={productid:prdctid,userid:userid}
      console.log(data.productid);
      
      axios.post('http://localhost:3001/addtocart',data).then((res)=>
      console.log(res.data))
    
    }
    
    
const logout=()=>{
  localStorage.removeItem('userinfo')
}
  return (
       
   <div style={{backgroundColor:'black'}}>
   <div>
   <Navbar className='main-navbar' bg="grey" expand="lg">
    <Container fluid>
      <Navbar.Brand className='navbar-brand' href="#"> <GiSecretBook /> Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Nav>
      <Link  to="/userbooks" className='navbar-link'>Home</Link>
      <Link  to="/cartpage" className='navbar-link'> Cart  </Link>
      <Link  to="/Login" className='navbar-link' onClick={logout}> Log Out </Link>
      </Nav>
    </Container>
  </Navbar>
   </div>
    <div className='user-main-div'>
    {bookinfo.map((data)=>(
    <Card key={data._id} className='user-card' >
      <div className='img-fluid'>
      <img style={{width:"200px",height:"210px",
      borderTopLeftRadius:"10px",
      borderTopRightRadius:"10px"
      }}
       src={data.Image} alt="/"/>
     </div>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body className='d-block'>
        <Card.Title>Book Name:-{data.BookName}</Card.Title>
        <Card.Text>
          Author:-{data.Author}<br/>
          Publication:-{data.Publication}<br/>
          Year:-{data.Year}<br/>
          Price:{data.Price}
        </Card.Text>
        
        <Button className='user-card-button' onClick={()=>handlecart(data._id)}>Add to cart</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
    </div>


  )
}

export default Userbooks

//  cart function
// ---------------
// {()=>{  
//   if(cart.find((book)=>book._id === data._id)){
//   alert('Already in cart')
// }else{
//   setcart([...cart,data])
//   alert('Item added')
//   localStorage.setItem('cart',JSON.stringify([...cart,data]))
// }
// }}