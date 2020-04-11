import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoi from './img/icons/logo.png';

class TopBar extends React.Component{
    render (){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img src={logoi} alt=" " style={{ paddingRight: "10px"}}/>
                <a class="navbar-brand" href="#">MasterBeer</a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Catálogo</a>
                    <a class="nav-item nav-link" href="#">Sobre nosotros</a>
                    <a class="nav-item nav-link disabled" href="#">Login</a>
                    </div>
                </div>
            </nav>
        );
    };
}


export default TopBar;