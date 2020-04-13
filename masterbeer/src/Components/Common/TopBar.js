import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/NavBar.css';
import logoi from '../../img/icons/logo.png';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavbarText
  } from 'reactstrap';

const TopBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
        <Navbar color="dark" light expand="md">
          <img src={logoi} alt=" " style={{ paddingRight: "10px"}}/>
          <NavbarBrand className="navBrandMB" href="/"><p>MasterBeer</p></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse className="" isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavLink className="navItemMB" href="/Catalogo"><p>Catálogo</p></NavLink>
                <NavLink className="navItemMB" href="/About"><p>Sobre el Proyecto</p></NavLink>
                <NavLink className="navItemMB" href="/Login"><p>Login</p></NavLink>
            </Nav>
            <NavbarText style={{ color: 'white' }}>Buenos tragos buenos momentos</NavbarText>
          </Collapse>
        </Navbar>
      </div>
        );
    }

export default TopBar;