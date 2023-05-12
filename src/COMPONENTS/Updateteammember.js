import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import {  useNavigate, useParams } from 'react-router-dom';

function Updateteammember() {
    const [teammemberData, setteammemberData] = useState([]);
  const { _id } = useParams();
  const history = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3001/eachteammember/${_id}`).then((res) => {
      setteammemberData(res.data);
    });
  }, []);
  console.log(teammemberData);

  const [Name, setName] = useState(teammemberData.Name);
  const [Email, setEmail] = useState( teammemberData.Email);
  const [DateOfBirth, setDateOfBirth] = useState( teammemberData.DateOfBirth);
  const [Gender, setGender] = useState(teammemberData.Gender);
  const [Description, setDescription] = useState(teammemberData.Description);
  const [Role, setRole] = useState(teammemberData.Role);
  const [PhoneNumber, setPhoneNumber] = useState(teammemberData.PhoneNumber);


  function handleSubmit() {
    axios
      .put(`http://localhost:3001/updateteammember/${_id}`, {
        Name,
        Email,
       DateOfBirth,
       Gender,
       Description,
        Role,
        PhoneNumber,
      })
      .then((res) => {
        console.log(`Client with ID ${_id} updated`);
      });
    history("/teammemberinfo");
  }
  return (
    <div className='update-form'>
 <Card className='update-card' style={{ width: '22rem',marginTop:"50px",textAlign:"center",height:"36rem",backgroundColor:"darkgrey"}}>

<Card.Body className="d-flex flex-column align-items-center">
  <div className="text-center mb-4">
    {/* <h1 className="card-title">EDIT</h1> */}
    {/* <p className="" style={{ color: "white" }}>
      Please enter your updates
    </p> */}
  </div>
  <Form className="w-100">
    <Form.Group controlId="formBasicName">
      {/* <Form.Label style={{ color: "white" }}>Name</Form.Label> */}
      <Form.Control
        type="text"
        Value={teammemberData.Name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </Form.Group>

    
    <Form.Group controlId="formBasicEmail">
      {/* <Form.Label style={{ color: "white" }}>
        Email
      </Form.Label> */}
      <Form.Control
        type="email"
        name="Email"
        Value={teammemberData.Email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </Form.Group>

    <Form.Group controlId="formBasicusername">
      {/* <Form.Label style={{ color: "white" }}>Date Of Birth</Form.Label> */}
      <Form.Control
        type="text"
        name="DateOfBirth"
        Value={teammemberData.DateOfBirth}
        onChange={(e) => {
          setDateOfBirth(e.target.value);
        }}
      />
    </Form.Group>


    <Form.Group controlId="formBasicGender">
{/* <Form.Label style={{ color: "black", }}>Gender</Form.Label> */}
<div>
<Form.Check
inline
label="Male"
type="radio"
name="radio"
id="true"
value='true'

checked={teammemberData.Gender === true}
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
value='false'
checked={teammemberData.Gender === false}
onChange={(e) => {
setGender(e.target.value);
}}
/>
</div>
</Form.Group>

<Form.Group controlId="formBasiDescription">
      {/* <Form.Label style={{ color: "white" }}>Description</Form.Label> */}
      <Form.Control
        type="text"
        name="Description"
        Value={teammemberData.Description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
    </Form.Group>

<Form.Group controlId="formBasicrole">
{/* <Form.Label style={{ color: "white" }}>Role</Form.Label> */}
<Form.Control as="select" value={teammemberData.Role} onChange={(e) => setRole(e.target.value)}>
<option value="">Select  a Role</option>
<option Value="Team Leader">Team Leader</option>
<option Value="Admin">Admin</option>
</Form.Control>
</Form.Group>

       <Form.Group controlId="formBasicnumber">
      {/* <Form.Label style={{ color: "white" }}>PhoneNumber</Form.Label> */}
      <Form.Control
        type="text"
        name="phonenumber"
        Value={teammemberData.PhoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
    </Form.Group>
    <Button
      className="btn-lg btn-block rounded-pill mt-4"
      variant="dark" style={{marginTop:"2rem"}}
      onClick={handleSubmit}
    >
      Update
    </Button>
  </Form>
</Card.Body>
</Card>
    </div>
  )
}

export default Updateteammember