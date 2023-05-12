import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './Updatecustomer.css';


function Updatecustomer() {
    const [data,setdata] = useState([])
    const{_id}=useParams()
    const navi=useNavigate()

    console.log(_id);

    useEffect(()=>{
        axios.get(`http://localhost:3001/eachcustomer/${_id}`)
        .then((cusdata)=>{
            setdata(cusdata.data)
            console.log(cusdata.data);
        })
    },[])
    console.log(data);
    const [Name, setName] = useState(data.Name)
    const [Email, setEmail] = useState(data.Email)
    const [AddressLine1, setAddressLine1] = useState(data.AddressLine1)
    const [City, setCity] = useState(data.City)
    const [State, setState] = useState(data.State)
    const [PinCode, setPinCode] = useState(data.PinCode)
    const [Country, setCountry] = useState(data.Country)
    const [countryname, setcountryname] = useState([])


    useEffect(() => {
      axios.get('https://countriesnow.space/api/v0.1/countries').then((cntry)=>setcountryname(cntry.data.data))
    }, [])
    console.log(countryname);

    
    const update=()=>{
        axios.put(`http://localhost:3001/updatecustomer/${_id}`,{Name,Email,AddressLine1,City,State,PinCode,Country})
        .then((up)=>{
            console.log(up.data);
        })
        navi('/customerinfo')
    }
  return (
    <div className='update-form'>
        
        <Card className='update-card'style={{ width: '22rem',marginTop:"50px",textAlign:"center",height:"34rem",backgroundColor:"darkgrey"}}>
            <Card.Body>
               
                <Card.Text>
                    <input  type="text" placeholder='Name'   Value={data.Name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input  type="text" placeholder='Email'   Value={data.Email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    {/* <input  type="text" placeholder='Address Line 1'   Value={data.AddressLine1} onChange={(e)=>{setAddressLine1(e.target.value)}}/> */}
                   
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        {/* <Form.Label>Example textarea</Form.Label> */}
        <Form.Control as="textarea" rows={3} placeholder='Address'   defaultValue={data.AddressLine1} onChange={(e)=>{setAddressLine1(e.target.value)}}/>
      </Form.Group>

                   
                    <input  type="text" placeholder='City'  Value={data.City} onChange={(e)=>{setCity(e.target.value)}}/>
                    <input  type="text" placeholder='State'  Value={data.State} onChange={(e)=>{setState(e.target.value)}}/>
                    <input  type="text" placeholder='Pin Code'  Value={data.PinCode} onChange={(e)=>{setPinCode(e.target.value)}}/>
                    {/* <input  type="text" placeholder='Country'  Value={data.Country} onChange={(e)=>{setCountry(e.target.value)}}/> */}

                    <select className='edit-dropdown' Value={data.Country} onChange={(e)=>{setCountry(e.target.value)}}>
                        {countryname.map((res)=>(
                            <option key={res.country} value={res.country} selected={data.Country === res.country}>{res.country}</option>
                        ))}
                    </select>
                   


                </Card.Text>
                <Button type='submit'variant="dark" className='btn-up' onClick={update}style={{marginTop:"1rem"}}>Update</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Updatecustomer