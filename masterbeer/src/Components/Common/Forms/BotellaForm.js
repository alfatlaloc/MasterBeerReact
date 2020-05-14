import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { crearBotella } from "../../../Redux/Actions/BotellaActions";

import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  input,
  Button,
} from "reactstrap";

function BotellaForm(Botella) {
  const dispatch = useDispatch();

  const [botellaInput, setBotellaInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Nombre: Botella.Nombre,
      Marca: Botella.Marca,
      Precio: Botella.Precio,
      Stock: Botella.Stock,
      Desc: Botella.Desc,
      Tipo: Botella.Tipo,
      Contenido_N: {
        Cantidad: Botella.Contenido_N.Cantidad,
        Unidad: Botella.Contenido_N.Unidad,
      },
      Volumen_A: Botella.Volumen_A,
      volBP: Botella.volBP,
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
    dispatch(crearBotella(JSON.stringify(botellaInput)));
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
            />
            <br></br>
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
            />
          </FormGroup>
        </Col>

        <Button type="submit" className="submitInsertButton">
          Agregar al almacén!
        </Button>
      </Form>
    </Container>
  );
}

export default BotellaForm;
