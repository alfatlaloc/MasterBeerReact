import React from "react";
import "../../css/NavBar.css";
function Footer() {
  function handleChange(event) {
    event.precentDefault();
  }
  return (
    <footer className="footerMB font-small justify-content-center">
      <h5 className="text-uppercase">CONTACTO</h5>
      <p>¿Tienes alguna duda, queja o sugerencia? Contáctanos.</p>
      <div className="row">
        {/* A JSX sahsahjashjsaj comment */}
        <div className="footerDatos col-6 ">
          <p>México, Ciudad de México</p>
          <p>Teléfono: (55) 15151515</p>
          <p>Email: clientes@masterbeer.com</p>
        </div>
        <div className="footerInformation col-6">
          
          <div className="col-9  footerForm">
            <form onSubmit={handleChange}>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Name"
                  required
                  name="Name"
                ></input>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Email"
                  required
                  name="Email"
                ></input>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Message"
                  required
                  name="Message"
                ></input>

              <button className="footerButton" type="submit">
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://masterber.com/"> MasterBeer.com</a>
      </div>
      
    </footer>
  );
}

export default Footer;
