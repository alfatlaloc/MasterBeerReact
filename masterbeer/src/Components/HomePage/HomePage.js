import React from "react";
import { Jumbotron } from "reactstrap";
import "../../css/Home.css";
import promo1 from "../../img/Masterbeer promo.png";
import bebida from "../../img/icons/botella.png";
import carro from "../../img/icons/carrito.png";
import menu from "../../img/icons/menu.png";
import mundo from "../../img/icons/mundo.png";

const HomePage = () => (
  <React.Fragment>
    <Jumbotron className="HomeBackground" id="jumboHome">
      <h1 className="display-3">Hola, bienvenido!</h1>
      <h5 className="lead ">
        {" "}
        MasterBeer es una aplicación que revolucionara la forma en como bebes en
        un bar. Esta diseñada para facilitar los pedidos y acelerar los tiempos
        atención y preparación. Aqui puedes crear cualquier bebida que puedas
        imaginar.
      </h5>
      <hr className="my-2" />
      <p>
        Este proyecto hace uso de React,Redux,Express,MongoDB y una API REST
        propia.
      </p>
    </Jumbotron>

    
      <div className="row QuienesSomos no-gutters">
        <div className="promo col-sm">
          <Promocionales />
        </div>
        <div className="info col-sm">
          <h2>¿Quiénes somos?</h2>
          <h5 className="homeText">
            Aplicación web para administración y apoyo a bares, la cual permite
            a los clientes ordenar antes de su llegada o durante su estancia en
            el bar. También permite generar tragos personalizados, en los cuales
            el cliente podrá escoger los ingredientes, las cantidades y las
            proporciones de estos. También se podra escoger la medida del trago
            y la presentación a preparar. Añadido a esto contamos con servicio a
            domicilio.
          </h5>
        </div>
      </div>
    

    <div className="row delimitacion no-gutters justify-content-center">
    <div className="col-sm">
        <h2 className="delimit">Delimitación del proyecto</h2>
        <h5>
          Software especializado en bares con capacidad de entre 100 a 300
          personas, con un almacén pequeño o mediano, con alrededor de 1-5
          barman trabajando a la vez.
        </h5>
        <h5>
          La aplicación podrá cubrir la actividad del bar durante todo el día.
        </h5>
      </div>
    </div>
    

    <div className=" funciones no-gutters justify-content-center">
    <h2 >Funciones</h2>
    <br></br>
    <div className="row no-gutters">
        <div className="col-sm-3">
          <div className="card">
            <div className="face face--front">
              <div className="row-icon">
                <img src={bebida} className="icon" alt=""></img>
              </div>
              <div className="card-text">
                <h3>Creador de tragos personalizados</h3>
              </div>
            </div>
            <div className="face face--back">
              <h3>
                Permitirá al cliente crear sus propios tragos con los sabores
                que más le encantan además de que podrá experimentar para crear
                nuevos sabores.
              </h3>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card">
            <div className="face face--front">
              <div className="row-icon">
                <img src={carro} className="icon" alt=""></img>
              </div>

              <div className="card-text">
                <h3>Visualización y compra de productos disponibles</h3>
              </div>
            </div>
            <div className="face face--back">
              <h3>
                El cliente podrá ver lo que el bar tiene disponible para él en
                el menú.
              </h3>
            </div>
          </div>
        </div>

          <div className="col-sm-3">
            <div className="card">
              <div className="face face--front">
                <div className="row-icon">
                  <img src={menu} className="icon" alt=""></img>
                </div>
                <div className="card-text">
                  <h3>
                    Visualización y compra del catálogo de tragos predefinido
                    del bar
                  </h3>
                </div>
              </div>
              <div className="face face--back">
                <h3>
                  El cliente podrá ver lo que el bar tiene disponible para él en
                  el menú de bebidas que tiene predefinido.
                </h3>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card">
              <div className="face face--front">
                <div className="row-icon">
                  <img src={mundo} className="icon" alt=""></img>
                </div>

                <div className="card-text">
                  <h3>Geolocalización para servicio a domicilio</h3>
                </div>
              </div>
              <div className="face face--back">
                <h3>
                  ¿Sin ganas de salir a un bar? No te preocupes, nosotros te lo
                  llevamos hasta la puerta de tu casa, solo registrate y forma
                  parte de la comunidad.
                </h3>
              </div>
            </div>
      </div>
      </div>
    </div>

      <div className="row objetivos no-gutters">
        <div className="col-sm">
        <h2 className="tituloObjetivos">OBJETIVOS</h2>
        <h5>
          Desarrollar una aplicación web que apoye la administración y
          organización de pedidos de bebidas alcohólicas en bares de la CDMX.
          <h2 className="especificos">Objetivos específicos</h2>
          <h5>Optimizar el proceso de solicitar una bebida.</h5>
          <h5>
            Mejorar la experiencia del cliente al diseñar una bebida de acuerdo
            a sus gustos.
          </h5>
          <h5>Permitir la entrega a domicilio.</h5>
        </h5>
        </div>
      </div>

      </React.Fragment>
);

const Promocionales = () => (
  <div className="Promocionales">
    <img src={promo1} style={{ maxWidth: "90%" }} alt=""></img>
  </div>
);

export default HomePage;
