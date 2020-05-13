import React from "react";
import { Jumbotron, Button } from 'reactstrap';
import '../../css/Home.css';
import promo1 from '../../img/Masterbeer promo.png';

const HomePage = () => (
  <div>
      <Jumbotron className="HomeBackground">
        <h1 className="display-3">Hola, bienvenido!</h1>
        <p className="lead "> MasterBeer es una aplicación que revolucionara la forma en como bebes en un bar.
        Esta diseñada para facilitar los pedidos y acelerar los tiempos atención y preparación.  
        Aqui puedes crear cualquier bebida que puedas imaginar.</p>
        <hr className="my-2" />
        <p>Este proyecto hace uso de React,Redux,Express,MongoDB y una API REST propia.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <div className="homeInfo">
        <Promocionales />
        <h2>¿Quiénes somos?</h2>
        <h5 className="homeText">Aplicación web para administración y apoyo a bares, la cual permite a los clientes ordenar antes de su llegada 
          o durante su estancia en el bar. También permite generar tragos personalizados, en los cuales el cliente podrá 
          escoger los ingredientes, las cantidades  y las proporciones de estos. También se podra escoger la medida del trago 
          y la presentación a preparar. Añadido a esto contamos con servicio a domicilio.
        </h5>

      </div>
      
      
  </div>
);

const Promocionales = () =>(
  <div className="Promocionales">
    <img src={promo1} style={{maxWidth:"40%"}} alt="" ></img>
  </div>
);

export default HomePage;