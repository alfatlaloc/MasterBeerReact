import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/NavBar.css';
import logoi from '../../img/icons/logo.png';
import { NavLink } from "react-router-dom";

const TopBar = () => {
    const activeStyle = { color: "#F15B2A" };
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <img src={logoi} alt=" " style={{ paddingRight: "10px"}}/>
                <a className="navbar-brand navBrandMB"><p>MasterBeer</p></a>
                <button className="navbar-toggler" data-toggle="collapse" data-target={"#navbarNav"} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink className="navItemMB" to="/" activeClassName="navItemMB" exact><p>Home</p></NavLink>
                        <NavLink className="navItemMB" to="/Catalogo" activeClassName="navItemMB" exact><p>Catálogo</p></NavLink>
                        <NavLink className="navItemMB" to="/Catalogo" activeClassName="navItemMB" exact><p>Sobre Nostros</p></NavLink>
                        <NavLink className="navItemMB" to="/Catalogo" activeClassName="navItemMB" exact><p>Login</p></NavLink>
                    </div>
                </div>
            </nav>
        );
    }

export default TopBar;