import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import {
  crearExtra,
  updateExtra,
} from "../../../Redux/Actions/ExtraActions";

import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";

function ExtraForm({Obj,hide}) {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      _id: Obj._id,
      Nombre: Obj.Nombre,
      Precio: Obj.Precio
    }
  );

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const handleChangeNumericWP = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    const re = /^[0-9]*\.?[0-9]*$/;
    if (evt.target.value === '' || re.test(newValue)) {
      setFormInput({ [name]: newValue });
    }    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Obj._id) dispatch(updateExtra(JSON.stringify(formInput)));
    else dispatch(crearExtra(JSON.stringify(formInput)));
    hide();
  };

  return (
    <Container className="botellaForm">
      <Form id="botellaForm" onSubmit={handleSubmit}>
        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Nombre">Nombre</Label>
            <br></br>
            <Input
              className="inputFormMB"
              name="Nombre"
              value={formInput.Nombre}
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Precio">Precio</Label>
            <br></br>
            <Input
              name="Precio"
              className="inputFormMB"
              value={formInput.Precio}
              type="text"
              onChange={handleChangeNumericWP}
            />
          </FormGroup>
        </Col>

        <button type="submit" className="submitInsertButton">
        {Obj._id ? "Actualizar" : "Agregar al almacén!"}
        </button>
      </Form>
    </Container>
  );
}

export default ExtraForm;