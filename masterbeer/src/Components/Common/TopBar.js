import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/NavBar.css';
import logoi from '../../img/icons/logo.png';
import {NavLink} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText
  } from 'reactstrap';

const TopBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
        <Navbar className="navbarMB" light expand="md">
          <img src={logoi} alt=" " style={{ paddingRight: "10px"}}/>
          <NavbarBrand className="navBrandMB"><p>MasterBeer</p></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse className="" isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavLink className="navItemMB" to="/"><p>Home</p></NavLink>
            <NavLink className="navItemMB" to="/Catalogo"><p>Catálogo</p></NavLink>
                <NavLink className="navItemMB" to="/Login"><p>Login</p></NavLink>
                <NavLink className="navItemMB" to="/Carrito"><p>Carrito</p></NavLink>
                <NavLink className="navItemMB" to="/Creador"><p>Creador</p></NavLink>
            </Nav>
            <NavbarText style={{ color: 'white' }}>Buenos tragos buenos momentos</NavbarText>
            
          </Collapse>
        </Navbar>
      </div>
        );
    }

export default TopBar;