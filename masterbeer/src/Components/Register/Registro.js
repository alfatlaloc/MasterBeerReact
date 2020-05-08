import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { crearUsuario } from "../../Redux/Actions/UserActions";

import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

function Registro() {
  const dispatch = useDispatch();

  const [usuarioInput, setUsuarioInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Nombre: "",
      Correo: "",
      Fecha: "dd-mm-YYYY",
      Contrasena: "",
      RFC: "",
      Tipo:"USER"
    }
  );

  const [ TyC, setTyC ] = useState(false);
  const [contrasenaC,setContrasenaC] = useState("");

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setUsuarioInput({ [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(usuarioInput.Contrasena === contrasenaC)
      dispatch(crearUsuario(JSON.stringify(usuarioInput)));
    else
      alert("Password not match");
    };

  return (
    <Container className="Register">
      <h2>Formulario de Registro</h2>
      <Form onSubmit={handleSubmit} className="form maxdivCont Register">
        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Nombre">Nombre o Alias</Label>
            <br></br>
            <Input
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
            <Label htmlFor="Correo">Email </Label>
            <br></br>
            <Input
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
            <Input
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
            <Input
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
            <Input
              name="ContrasenaC"
              className="inputFormMB"
              value={contrasenaC}
              type="password"
              onChange={e => setContrasenaC(e.target.value)}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="RFC">RFC</Label>
            <br></br>
            <Input
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
            <Input
              type="checkbox"
              id="condiciones"
              name="condiciones"
              onClick={() => setTyC(!TyC)}
              required
            />
            Aceptas terminos y condiciones
          </FormGroup>
        </Col>

        <Button type="submit" className="submitInsertButton">
          Registrame!
        </Button>
      </Form>
    </Container>
  );
}

export default Registro;
