import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import './Login.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from 'react-router-dom';
function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const navigate=useNavigate()
    
   
  
    const email=(event)=>{
        setEmail(event.target.value)
    }
    const pswd=(event)=>{
        setPassword(event.target.value)
    }
    const submit=async(event)=>{
        event.preventDefault()
        const axioss=await axios.post("http://localhost:3001/userlogin",{Email,Password})
        console.log(axioss.data);
        if(!Email || !Password)
        {
          alert('filed is empty')
        }
        else if(axioss.data.Token){
          console.log('Registered');
          alert("Login Successfully")
          navigate("/Userbooks")
        }
        else{
          alert('User Already Exist')
          console.log('Error');
        }

        localStorage.setItem("userinfo",JSON.stringify(axioss.data))
        localStorage.setItem('userid',axioss.data.id)


        
       
      
    }
  return (
   
    <div className='d-flex justify-content-center'>
      <Card style={{ width: '18rem',marginTop:"150px",textAlign:"center",backgroundColor:"rgb(120,167,214",height:"18em"}}>
      
      <Card.Body>
      <form className='needs-validation' noValidate>
  

    <div className='form-group was-validated mb-2'>
    {/* <label for="exampleInputEmail1">Email address</label> */}
    <input type="email" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter email" value={Email} onChange={email} required/>
    <div className='invalid-feedback'>Please Enter Your Email</div>
    </div>

  <div className='form-group was-validated mb-3'>
    {/* <label for="exampleInputPassword1">Password</label> */}
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={Password} onChange={pswd} required/>
 <div className='invalid-feedback'>Please Enter Your Password</div>
  </div>
 
  

        <Button variant="primary" onClick={submit}>Login</Button>
        </form>
      </Card.Body>
    </Card>
   
    </div>   
    
  )
}

export default Login