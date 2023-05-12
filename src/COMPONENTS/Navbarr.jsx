import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './Navbarr.css'
import { GiSecretBook } from 'react-icons/gi'

function Navbarr() {
  return (
    <div className='background'>
          <Navbar className='nav' bg="secondary" expand="lg" style={{paddingLeft:'130px',height:'81px'}}>
    <Container fluid>
      <Navbar.Brand href="#home"><b><GiSecretBook/> BOOK STORE</b>
    
  </Navbar.Brand>
 <div className='d-flex'>
 <Button href="/Signup" variant='light' style={{marginRight: '10px'}}>User Signup</Button>
 <Button href="/Adminlogin" variant='light'>Admin Login</Button>
  {/* <Button href="/Login" variant='light'>Login</Button> */}
  
  </div>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navbarr