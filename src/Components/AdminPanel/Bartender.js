import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { crearBartender } from "../../Redux/Actions/UserActions";
import { useHistory } from "react-router-dom";

import { Col, Form, FormGroup, Label } from "reactstrap";

function Bartender() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [usuarioInput, setUsuarioInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Nombre: "",
      Apellido: "",
      Correo: "",
      Fecha: "",
      Contrasena: "",
      RFC: "",
      Tipo: "BARTENDER",
      Sueldo: 0,
      Horario: "",
    }
  );

  const [TyC, setTyC] = useState(false);
  const [contrasenaC, setContrasenaC] = useState("");

  function validateDate() {
    let nData = usuarioInput.Fecha.substring(0, 4);
    let today = new Date().getFullYear();
    if (parseFloat(today) - parseFloat(nData) > 17) return true;

    alert("Debes de ser mayor de edad para poder Registrarte");
    return false;
  }

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setUsuarioInput({ [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateDate()) {
      if (usuarioInput.Contrasena === contrasenaC) {
        dispatch(crearBartender(JSON.stringify(usuarioInput)));
        history.push("/");
      } else alert("Password not match");
    }
  };
  return (
    <div id="BartenderRegister">
      <Form onSubmit={handleSubmit} className="maxdivCont" id="Register">
        <h2>Registro Bartender</h2>
        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Nombre">Nombre (s)</Label>
            <br></br>
            <input
              className="inputFormMB"
              name="Nombre"
              value={usuarioInput.Nombre}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Apellido">Apellido (s)</Label>
            <br></br>
            <input
              className="inputFormMB"
              name="Apellido"
              value={usuarioInput.Apellido}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Correo">Email </Label>
            <br></br>
            <input
              className="inputFormMB"
              name="Correo"
              type="email"
              value={usuarioInput.Correo}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Fecha">Fecha de Nacimiento </Label>
            <br></br>
            <input
              name="Fecha"
              className="inputFormMB"
              value={usuarioInput.Fecha}
              type="date"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Contrasena">Contraseña </Label>
            <br></br>
            <input
              name="Contrasena"
              className="inputFormMB"
              value={usuarioInput.Contraseña}
              type="password"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="ContrasenaC">Confirmar Contraseña </Label>
            <br></br>
            <input
              name="ContrasenaC"
              className="inputFormMB"
              value={contrasenaC}
              type="password"
              onChange={(e) => setContrasenaC(e.target.value)}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="RFC">RFC</Label>
            <br></br>
            <input
              name="RFC"
              className="inputFormMB"
              value={usuarioInput.RFC}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Sueldo">Sueldo Base</Label>
            <br></br>
            <input
              name="Sueldo"
              className="inputFormMB"
              value={usuarioInput.Sueldo}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Horario">Horario</Label>
            <br></br>
            <input
              name="Horario"
              className="inputFormMB"
              value={usuarioInput.Horario}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className="formCont">
            <input
              type="checkbox"
              id="condiciones"
              name="condiciones"
              onClick={() => setTyC(!TyC)}
              required
            />
            Aceptas terminos y condiciones
          </FormGroup>
        </Col>

        <button type="submit" className="submitInsertButton">
          Registrar
        </button>
      </Form>
    </div>
  );
}

export default Bartender;
