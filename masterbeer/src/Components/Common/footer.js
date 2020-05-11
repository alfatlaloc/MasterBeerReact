import React from "react";
import "../../css/NavBar.css";
function Footer() {
  function handleChange(event) {
    event.precentDefault();
  }
  return (
    <footer className="footerMB font-small justify-content-center">
      <div className="row">
        {/* A JSX sahsahjashjsaj comment */}
        <div className="col-4">
          <h5 className="text-uppercase">`Footer Content`</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>
        <div className="footerInformation col-8">
          <div className="">
            <i className="">Tokio, Japón</i>
            <i className="">Phone: +00 151515</i>
            <i className="">Email: mail@mail.com </i>
          </div>
          <div className="col-8 footerForm">
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

              <button class="footerButton" type="submit">
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
