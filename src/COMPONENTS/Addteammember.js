import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

function Addteammember() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [DateOfBirth, setDateOfBirth] = useState("")
    const [Gender, setGender] = useState("")
    const [Description, setDescription] = useState("")
    const [Role, setRole] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [ProfilePicture, setProfilePicture] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const  teammember= {
          Name: Name,
          Email: Email,
          DateOfBirth: DateOfBirth,
          Gender:Gender,
          Description:Description,
          Role: Role,
          PhoneNumber:PhoneNumber,
          ProfilePicture:ProfilePicture
        }
        navigate('/Teammemberinfo')
        
        axios
        .post("http://localhost:3001/teammember",teammember )
        .then((res) => {
          setName("")
          setEmail("")
          setDateOfBirth("")
          setGender("")
          setDescription("")
          setRole("")
          setPhoneNumber("")
          setProfilePicture("")
        })
        .catch((err) => console.log(err));
    }
  return (
   <div style={{display:"flex"}}>
  <Sidebar/>
      <div style={{marginLeft:"auto",marginRight:"auto"}} >
      <Card style={{ width: '18rem',marginTop:"50px",textAlign:"center",height:"34rem",backgroundColor:"darkgrey"}}>
      
     <Card.Body>
      <Form>
        <Form.Group controlId="Name">
          {/* <Form.Label> Name</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={Name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>

       
        <Form.Group controlId="Email">
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="DateOfBirth">
          {/* <Form.Label>Date Of Birth</Form.Label> */}
          <Form.Control
            type="date"
            placeholder="Date Of Birth"
            value={DateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
            required
          />
        </Form.Group>
<br/>
        {/* <div style={{ marginBottom: "2rem" }}> */}
        {/* <Form.Group controlId="formBasicGender"> */}
  {/* <Form.Label style={{ color: "black" }}>Gender</Form.Label> */}
  <div>
    <Form.Check
      inline
      label="Male"
      type="radio"
      name="radio"
      id="Male"
      value="true"
      checked={Gender === "true"}
      onChange={(e) => {
        setGender(e.target.value);
      }}
    />
    <Form.Check
      inline
      label="Female"
      type="radio"
      name="radio"
      id="Female"
      value="false"
      checked={Gender === "false"}
      onChange={(e) => {
        setGender(e.target.value);
      }}
    />
  </div>
  {/* </div> */}
{/* </Form.Group> */}

<Form.Group controlId="Description">
          {/* <Form.Label>Description</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Description"
            value={Description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </Form.Group>


<Form.Group controlId="formBasicrole">
  {/* <Form.Label style={{ color: "black" }}>Role</Form.Label> */}
  <Form.Control as="select" value={Role} onChange={(e) => setRole(e.target.value)}>
  <option value="">Select  a Role</option>
  <option value="TeamLeader"> TeamLeader</option>
    <option value="Admin">Admin</option>
  </Form.Control>
</Form.Group>


        <Form.Group controlId="phonenumber">
          {/* <Form.Label>PhoneNumber</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Phonenumber"
            value={PhoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="profilePicture">
          {/* <Form.Label>Profile Picture</Form.Label> */}
          <Form.Control
            type="file"
            placeholder="Upload Picture"
            value={ProfilePicture}
            onChange={(event) => setProfilePicture(event.target.value)}
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit" onClick={handleSubmit}style={{marginTop:"1rem"}}>
          Add
        </Button>
      </Form>
      </Card.Body>
     </Card>
      </div>
    </div>
  )
}

export default Addteammember