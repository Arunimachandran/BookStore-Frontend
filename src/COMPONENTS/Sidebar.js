import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav'
import { Button, NavLink } from 'react-bootstrap';
import './Sidebar.css'
import { BsBook, BsFilePersonFill, BsPersonCircle, BsPersonPlus } from 'react-icons/bs';
import { BiBookAdd } from 'react-icons/bi';
import {MdPersonAddAlt, MdPlaylistAdd } from 'react-icons/md';
import {IoIosPerson, IoIosPersonAdd } from 'react-icons/io';
import { RiLogoutBoxRLine, RiOrderPlayLine} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';



function Sidebar() {

  const history = useNavigate();

 

return(
  <div>
    <div className='sidebar'>
      <div className='heading'>
      <h5><b>BOOK STORE</b></h5>
      </div>
      <div className='links'>
        
        <NavLink className='BookLink' href='/bookinfo'>
          <BsBook/>  Books
          </NavLink>
        
        <NavLink className='BookLink' href='/Addbook'>
          <BiBookAdd/> Add Book
          </NavLink><br></br>

        <NavLink className='BookLink' href='/clientinfo'>
          <BsFilePersonFill/> Client
          </NavLink>
        <NavLink className='BookLink' href='/createclient'>
          <BsPersonPlus/> Add Client
          </NavLink><br></br>

        <NavLink className='BookLink' href='/customerinfo'>
          <BsPersonCircle/> Customer
          </NavLink>
        <NavLink className='BookLink' href='/addcustomer'>
          <MdPersonAddAlt/> Add Customer
          </NavLink><br></br>

        <NavLink className='BookLink' href='/teammemberinfo'>
          <IoIosPerson/> Teammember
          </NavLink>
        <NavLink className='BookLink' href='/addteammember'>
          <IoIosPersonAdd/> Add Teammember
          </NavLink><br></br>

        <NavLink className='BookLink' href='/orderinfo'>
          <RiOrderPlayLine/> Order
          </NavLink>
        <NavLink className='BookLink' href='/addorder'>
          <MdPlaylistAdd/> Add Order
          </NavLink><br></br>
          <NavLink className='BookLink' href='/'>
          <RiLogoutBoxRLine/> Logout
          </NavLink>
          
      </div>
    </div>
  </div>
)
}

export default Sidebar;

