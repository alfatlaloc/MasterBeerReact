import React from "react";
import { Jumbotron, Button } from 'reactstrap';
import '../../css/Home.css';
import promo1 from '../../img/Masterbeerpromo.png';
import bebida from '../../img/icons/botella.png';
import carro from '../../img/icons/carrito.png';
import menu from '../../img/icons/menu.png';
import mundo from '../../img/icons/mundo.PNG';

const HomePage = () => (
  <div>
      <Jumbotron className="HomeBackground">
        <h1 className="display-3">Hola, bienvenido!</h1>
        <h5 className="lead "> MasterBeer es una aplicación que revolucionara la forma en como bebes en un bar.
        Esta diseñada para facilitar los pedidos y acelerar los tiempos atención y preparación.  
        Aqui puedes crear cualquier bebida que puedas imaginar.</h5>
        <hr className="my-2" />
        <p>Este proyecto hace uso de React,Redux,Express,MongoDB y una API REST propia.</p>
      </Jumbotron>

      <Jumbotron className="QuienesSomos">
        <div className="row">
          <div className="promo col-6">
            <Promocionales />
          </div>
          <div className="info col-6">
           <h2>¿Quiénes somos?</h2>
            <h5 className="homeText">Aplicación web para administración y apoyo a bares, la cual permite a los clientes ordenar antes de su llegada 
              o durante su estancia en el bar. También permite generar tragos personalizados, en los cuales el cliente podrá 
             escoger los ingredientes, las cantidades  y las proporciones de estos. También se podra escoger la medida del trago 
              y la presentación a preparar. Añadido a esto contamos con servicio a domicilio.
            </h5>
          </div>
        </div>
      </Jumbotron>

      <Jumbotron className="delimitacion">
      <h2 className="delimit">Delimitación del proyecto</h2>
          <h5>Software especializado en bares con capacidad de entre 100 a 300 personas, con un almacén pequeño o mediano, con alrededor de 1-5 barman trabajando a la vez.</h5>
          <h5>La aplicación podrá cubrir la actividad del bar durante todo el día.</h5>
      </Jumbotron>
      

      
      
      <div className="funciones">
        <div >
          <h3>Funciones</h3>
        </div>
      <div className="row s12 m6 l3">
       <div className="flip-container">
          <div className="card">
            <div className="front">
              <div>
                <img src={bebida} style={{maxWidth: "2550px"}} alt=""></img>
              </div>
              <h3>Creador de tragos personalizados</h3>
            </div>
            <div className="back">
              <h3>Permitirá al cliente crear sus propios tragos con los sabores que más le 
              encantan además de que podrá experimentar para crear nuevos sabores.</h3>
            </div>
          </div>
        </div>

        <div className="flip-container">
          <div className="card">
            <div className="front">
              <div>
                <img src={carro} style={{maxWidth: "50px"}} alt=""></img>
              </div>
              <h5>Visualización y compra de productos disponibles</h5>
            </div>
            <div className="back">
              <h3>El cliente podrá ver lo que el bar tiene disponible para él en el menú.</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row s12 m6 l3">
        <div className="flip-container ">
          <div className="card">
            <div className="front">
              <div>
                <img src={menu} style={{maxWidth: "50px"}} alt=""></img>
              </div>
              <h5>Visualización y compra del catálogo de tragos predefinido del bar</h5>
            </div>
            <div className="back">
              <h3>El cliente podrá ver lo que el bar tiene disponible para él en el menú de 
              bebidas que tiene predefinido.</h3>
            </div>
          </div>
        </div>
    
        <div className="flip-container">
          <div className="card">
            <div className="front">
              <div>
                <img src={mundo} style={{maxWidth: "50px"}} alt=""></img>
              </div>
              <h5>Geolocalización para servicio a domicilio</h5>
            </div>
            <div className="back">
              <h3>¿Sin ganas de salir a un bar? No te preocupes, nosotros te lo llevamos 
              hasta la puerta de tu casa, solo registrate y forma parte de la comunidad.</h3>
            </div>
          </div>
        </div>
    </div>
    </div>
    
    <Jumbotron className="objetivos">
      <h4 className="tituloObjetivos">OBJETIVOS</h4>
      <h5>Objetivo General</h5>
      <h5>Desarrollar una aplicación web que apoye la administración y organización de pedidos de bebidas alcohólicas en bares de la CDMX.
      <h5 className="especificos">Objetivos específicos</h5>
      <h5>Optimizar el proceso de solicitar una bebida.</h5>
      <h5>Mejorar la experiencia del cliente al diseñar una bebida de acuerdo a sus gustos.</h5>
      <h5>Permitir la entrega a domicilio.</h5>
      </h5>
    </Jumbotron>
  </div>
);

const Promocionales = () =>(
  <div className="Promocionales">
    <img src={promo1} style={{maxWidth:"90%"}} alt="" ></img>
  </div>
);

export default HomePage;