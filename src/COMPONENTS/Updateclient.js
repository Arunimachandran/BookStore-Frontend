

import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './Updateclient.css';


function Updateclient()  {
  const [clientData, setClientData] = useState([]);
  const { _id } = useParams();
  const history = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3001/eachclient/${_id}`).then((res) => {
      setClientData(res.data);
    });
  }, []);
  console.log(clientData);

  const [Name, setClientName] = useState(clientData.Name);
  const [UserName, setUserName] = useState(clientData.UserName);
  const [Email, setEmail] = useState( clientData.Email);
  const [SignedStatus, setSignedStatus] = useState(clientData.SignedStatus);
  const [Role, setRole] = useState(clientData.Role);
  const [PhoneNumber, setPhoneNumber] = useState(clientData.PhoneNumber);

 

  function handleSubmit() {
    axios
      .put(`http://localhost:3001/updateclient/${_id}`, {
        Name,
        UserName,
        Email,
        SignedStatus,
        Role,
        PhoneNumber,
      })
      .then((res) => {
        console.log(`Client with ID ${_id} updated`);
      });
    history("/Clientinfo");
  }

  return (
    <div className='update-form'>
       <Card className='update-card' style={{ width: '18rem',marginTop:"50px",textAlign:"center",height:"32rem",backgroundColor:"darkgrey"}}>

        <Card.Body >
          {/* <div className="text-center mb-4"> */}
            {/* <h1 className="card-title">EDIT</h1> */}
            {/* <p className="" style={{ color: "white" }}>
              Please enter your updates
            </p> */}
          {/* </div> */}
          <Form className="w-100">
            <Form.Group controlId="formBasicName">
              {/* <Form.Label style={{ color: "white" }}>Name</Form.Label> */}
              <Form.Control
                type="text"
                Value={clientData.Name}
                onChange={(e) => {
                  setClientName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicusername">
              {/* <Form.Label style={{ color: "white" }}>User Name</Form.Label> */}
              <Form.Control
                type="text"
                name="UserName"
                Value={clientData.UserName}
                onChange={(e) => {
                  setUserName(e.target.value);
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
                Value={clientData.Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSignedstatus">
  {/* <Form.Label style={{ color: "black", }}>Signed Status</Form.Label> */}
  <div>
    <Form.Check
      inline
      label="Sign In"
      type="radio"
      name="radio"
      id="true"
      value='true'
  
      checked={clientData.SignedStatus === true}
      onChange={(e) => {
        setSignedStatus(e.target.value);
      }}
    />
    <Form.Check
      inline
      label="Not Sign In"
      type="radio"
      name="radio"
      id="not-sign-in"
      value='false'
      checked={clientData.SignedStatus === false}
      onChange={(e) => {
        setSignedStatus(e.target.value);
      }}
    />
  </div>
</Form.Group>


<Form.Group controlId="formBasicrole">
  {/* <Form.Label style={{ color: "white" }}>Role</Form.Label> */}
  <Form.Control as="select" value={clientData.Role} onChange={(e) => setRole(e.target.value)}>
  <option value="">Select  a Role</option>
    <option Value="Super Admin">Super Admin</option>
    <option Value="Only By Admin">Only By Admin</option>
  </Form.Control>
</Form.Group>

               <Form.Group controlId="formBasicnumber">
              {/* <Form.Label style={{ color: "white" }}>PhoneNumber</Form.Label> */}
              <Form.Control
                type="number"
                name="phonenumber"
                Value={clientData.PhoneNumber}
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
  );
}

  


export default Updateclient