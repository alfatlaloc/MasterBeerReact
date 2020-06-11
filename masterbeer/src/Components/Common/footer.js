import React from "react";
import "../../css/NavBar.css";

import {Form,Input} from 'reactstrap';
function Footer() {
  function handleChange(event) {
    event.precentDefault();
  }
  return (
    <footer className="footerMB page-footer font-small">
      <div className="contacto text-center">
        <h5 className="contactFooter ">CONTACTO</h5>
        <p>¿Tienes alguna duda, queja o sugerencia? Contáctanos.</p>
      </div>
      
      <div className="row no-gutters">
        {/* A JSX sahsahjashjsaj comment */}
        <div className="footerDatos col-6 text-center ">
          <p>México, Ciudad de México</p>
          <p>Teléfono: (55) 15151515</p>
          <p>Email: clientes@masterbeer.com</p>
        </div>
        <div className="footerInformation col-6">
          
          <div className="col-9  footerForm ">
            <Form onSubmit={handleChange}>
                <Input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Name"
                  required
                  name="Name"
                ></Input>
                <Input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Email"
                  required
                  name="Email"
                ></Input>
                <Input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Message"
                  required
                  name="Message"
                ></Input>

              <button className="footerButton" type="submit">
                ENVIAR
              </button>
            </Form>
          </div>
        </div>
      </div>
      <p className="pFooter">
        © 2020 Copyright:
        <a href="/"> MasterBeer.com</a>
        </p>
    </footer>
  );
}

export default Footer;
