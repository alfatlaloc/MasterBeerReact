import React from "react";
import { Jumbotron, Button } from 'reactstrap';
import '../../css/Home.css';
import promo1 from '../../img/promo1.png';

const HomePage = () => (
  <div>
      <Jumbotron className="HomeBackground">
        <h1 className="display-3">Hola, bienvenido!</h1>
        <p className="lead "> MasterBeer es una aplicación que revolucionara la forma en como bebes en un bar.
        Esta diseñada para facilitar los pedidos y acelerar los tiempos atención y preparación.  
        Aqui puedes crear cualquier bebida que puedas imaginar.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Promocionales />
  </div>
);

const Promocionales = () =>(
  <div className="Promocionales">
    <img src={promo1} style={{ width: "600px"}} alt=""></img>
  </div>
);

export default HomePage;