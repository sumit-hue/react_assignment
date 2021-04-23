import React, { useState } from 'react';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NavLink as ReactLink } from 'react-router-dom';



const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="dark" dark expand="md" className=" navbar navbar-light bg-secondry py-auto fixed-top" light expand="md" style={{padding:`5px`}}> 

      

        <NavbarBrand href="/">The<strong>Anime</strong>Naruto</NavbarBrand>
        <NavbarToggler onClick={toggle}   />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="ml-auto" navbar>
            <NavItem className="py-1 ">
              <NavLink className="px-5 chh" to="/listing"  className='text-info' style={{textDecoration:'none', marginRight: '10px', padding: '15px'}} ><strong>Listing</strong></NavLink>
            </NavItem>
            <NavItem className="py-1">
              <NavLink className="px-5 chh" to="/hero"  className='text-primary' style={{textDecoration:'none',marginRight: '10px' , padding: '15px' }}><strong>Hero</strong></NavLink>
            </NavItem>
            <NavItem className="py-1">
              <NavLink className="px-5 chh" to="/carousel"  className='text-primary' style={{textDecoration:'none',marginRight: '10px' , padding: '15px'}}><strong>Carousel</strong></NavLink>
            </NavItem>
          </Nav>
          <NavItem>
            <NavLink to="/ " className='text-white' style={{textDecoration:'none'}}><strong>SignIn</strong></NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/ " className='text-white' style={{textDecoration:'none'}}><strong>SignOut</strong></NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

  
  


  
