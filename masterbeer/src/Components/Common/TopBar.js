import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/NavBar.css';
import logoi from '../../img/icons/logo.png';
import {NavLink} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {logOut} from '../../Redux/Actions/UserActions';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavbarText
  } from 'reactstrap';

function TopBar(){
    const [isOpen, setIsOpen] = useState(false);
    const Session = useSelector(state => state.Session);
    const dispatch = useDispatch();

    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
        <Navbar className="navbarMB" light expand="md">
          <img src={logoi} className="principalLogo" alt=" " style={{ paddingRight: "10px"}}/>
          <NavbarToggler onClick={toggle} />
          <Collapse className="" isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavLink className="navItemMB" to="/"><p>Home</p></NavLink>
            <NavLink className="navItemMB" to="/Catalogo"><p>Catálogo</p></NavLink>
                
              {
                (Session.Type === "ADMIN") ? 
                <React.Fragment>
                <NavLink className="navItemMB" to="/Carrito"><p>Carrito</p></NavLink>
                <NavLink className="navItemMB" to="/Creador"><p>Creador</p></NavLink>
                <NavLink className="navItemMB" to="/AdminPanel"><p>Admin Panel</p></NavLink>
                <NavLink className="navItemMB" to="/Pedidos"><p>Pedidos</p></NavLink>
                </React.Fragment>
                : null
              }
            </Nav>
            { (!Session.logged) ? <NavLink className="navItemMB" to="/Login"><p>Login</p></NavLink>
                : 
                <NavLink className="navItemMB" to="/"
                  onClick={() => dispatch(logOut())}
                >
                <p>Log out</p></NavLink>
                }
            <NavbarText id="NavBarText">Buenos tragos buenos momentos</NavbarText>
            
          </Collapse>
        </Navbar>
      </div>
        );
    }

export default TopBar;