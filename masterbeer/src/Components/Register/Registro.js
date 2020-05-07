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
      Fecha: "YYYY-mm-dd",
      Contrasena: "",
      ContrasenaC: "",
      RFC: "",
    }
  );

  const { TyC, setTyC } = useState(false);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setUsuarioInput({ [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(crearUsuario(JSON.stringify(usuarioInput)));
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
              value={usuarioInput.ContrasenaC}
              type="password"
              onChange={handleChange}
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
            />
            Aceptas terminos y condiciones
          </FormGroup>
        </Col>

        <Button type="submit" className="submitInsertButton">
          Agregar al almacén!
        </Button>
      </Form>
    </Container>
  );
}

export default Registro;
