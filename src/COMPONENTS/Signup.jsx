import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import './Signup.css'
import { useNavigate } from 'react-router-dom';
function Signup() {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate=useNavigate()
    const fname=(event)=>{
        setFirstName(event.target.value)
    }
    const lname=(event)=>{
        setLastName(event.target.value)
    }   
    const email=(event)=>{
        setEmail(event.target.value)
    }
    const pswd=(event)=>{
        setPassword(event.target.value)
    }
    const submit=async(event)=>{
        event.preventDefault()
        const axioss=await axios.post("http://localhost:3001/userregistration",{FirstName,LastName,Email,Password})
        console.log(axioss.data);
        localStorage.setItem("userdata",JSON.stringify(axioss.data))
        if(!FirstName || !LastName || !Email || !Password)
        {
          alert('filed is empty')
        }
        else if(axioss.data.Token){
          console.log('Registered');
          alert("Regisered Successfully")
          navigate("/Login")
        }
        else{
          alert('User Already Exist')
          console.log('Error');
        }
    }
  return (
    <div className='d-flex justify-content-center'>
         <Card style={{ width: '18rem',marginTop:"200px",textAlign:"center",backgroundColor:"rgb(120,167,214",height:"30rem"}}>
      
      <Card.Body>
      <form className='needs-validation' noValidate>
  <div className='form-group was-validated mb2'>
    {/* <label for="exampleInputEmail1">First Name</label> */}
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" value={FirstName} onChange={fname} required/>
  <div className='invalid-feedback'>Please Enter Your First Name</div>
  </div>


  <div class='form-group was-validated mb-2'>
    {/* <label for="exampleInputEmail1">Last Name</label> */}
    <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter Last Name" value={LastName} onChange={lname} required/>
    <div className='invalid-feedback'>Please Enter Your Last Name</div>
    </div>

    <div class='form-group was-validated mb-2'>
    {/* <label for="exampleInputEmail1">Email address</label> */}
    <input type="email" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter email" value={Email} onChange={email} required/>
    <div className='invalid-feedback'>Please Enter Your Email</div>
    </div>

  <div class='form-group was-validated mb-2'>
    {/* <label for="exampleInputPassword1">Password</label> */}
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={Password} onChange={pswd} required/>
 <div className='invalid-feedback'>Please Enter Your Password</div>
  </div>
 
  

        <Button variant="primary" onClick={submit}style={{marginTop:".1rem"}}>SignUp</Button>
        <Button href="/Login" variant='primary'style={{marginTop:".1rem",marginLeft:"1rem"}}>Login</Button>
        </form>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Signup