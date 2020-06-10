import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import {
  crearBotella,
  updateBotella,
} from "../../../Redux/Actions/BotellaActions";

import { Container, Col, Form, FormGroup, Label } from "reactstrap";

function BotellaForm({ Obj, hide }) {
  const dispatch = useDispatch();

  const [botellaInput, setBotellaInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      _id: Obj._id,
      Nombre: Obj.Nombre,
      Marca: Obj.Marca,
      Precio: Obj.Precio,
      Stock: Obj.Stock,
      Desc: Obj.Desc,
      Tipo: Obj.Tipo,
      Contenido_N: {
        Cantidad: Obj.Contenido_N.Cantidad,
        Unidad: Obj.Contenido_N.Unidad,
      },
      Volumen_A: Obj.Volumen_A,
      volBP: Obj.volBP,
    }
  );

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setBotellaInput({ [name]: newValue });
  };

  const handleChangeA = (evt) => {
    const Name = evt.target.name.toString();
    const N = {
      Cantidad:
        Name === "Contenido_NC"
          ? evt.target.value
          : botellaInput.Contenido_N.Cantidad,
      Unidad:
        Name === "Contenido_NU"
          ? evt.target.value
          : botellaInput.Contenido_N.Unidad,
    };
    setBotellaInput({ Contenido_N: N });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (botellaInput.Nombre.length < 50) {
      if (Obj._id) dispatch(updateBotella(JSON.stringify(botellaInput)));
      else dispatch(crearBotella(JSON.stringify(botellaInput)));
      hide();
    } else {
      alert(
        "El nombre es demasiado largo, intenta con uno que tenga 25 caracteres o menos "
      );
    }
  };

  return (
    <Container className="botellaForm">
      <Form id="botellaForm" onSubmit={handleSubmit}>
        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Nombre">Nombre </Label>
            <br></br>
            <input
              className="inputFormMB"
              name="Nombre"
              value={botellaInput.Nombre}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Marca">Marca </Label>
            <br></br>
            <input
              className="inputFormMB"
              name="Marca"
              type="text"
              value={botellaInput.Marca}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Precio">Precio </Label>
            <br></br>
            <input
              name="Precio"
              className="inputFormMB"
              value={botellaInput.Precio}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Stock">Stock </Label>
            <br></br>
            <input
              name="Stock"
              className="inputFormMB"
              value={botellaInput.Stock}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Desc">Descripción </Label>
            <br></br>
            <textarea
              name="Desc"
              className="textAreaFormMB"
              rows="4"
              cols="50"
              value={botellaInput.Desc}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Tipo">Tipo</Label>
            <br></br>
            <input
              name="Tipo"
              className="inputFormMB"
              value={botellaInput.Tipo}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Contenido_N">Contenido Neto</Label>
            <br></br>
            <input
              name="Contenido_NC"
              className="inputFormMB"
              value={botellaInput.Contenido_N.Cantidad}
              type="text"
              onChange={handleChangeA}
              required
            />
            <br></br>
            <select
              name="Contenido_NU"
              value={botellaInput.Contenido_N.Unidad}
              onChange={handleChangeA}
            >
              <option value="ml">ml</option>
              <option value="lt">lt</option>
              <option value="gal">gal</option>
            </select>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Volumen_A">Volumen de Alcohol </Label>
            <br></br>
            <input
              name="Volumen_A"
              className="inputFormMB"
              value={botellaInput.Volumen_A}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="volBP">Volumen BP</Label>
            <br></br>
            <input
              name="volBP"
              className="inputFormMB"
              value={botellaInput.volBP}
              type="text"
              onChange={handleChange}
              required
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

export default BotellaForm;
