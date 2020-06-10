import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import {
  crearIngrediente,
  updateIngrediente,
} from "../../../Redux/Actions/IngredienteActions";

import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function IngredienteForm(Ingrediente) {
  const dispatch = useDispatch();

  const [ingredienteInput, setIngredienteInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Precio: Ingrediente.Precio,
      Stock: Ingrediente.Stock,
      Nombre: Ingrediente.Nombre,
      Tipo: Ingrediente.Tipo,
      Volumen: {
        Cantidad: Ingrediente.Volumen.Cantidad,
        Unidad: Ingrediente.Volumen.Unidad,
      },
      _id: Ingrediente._id
    }
  );

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setIngredienteInput({ [name]: newValue });
  };

  const handleChangeA = (evt) => {
    const Name = evt.target.name.toString();
    const N = {
      Cantidad:
        Name === "Contenido_NC"
          ? evt.target.value
          : ingredienteInput.Volumen.Cantidad,
      Unidad:
        Name === "Contenido_NU"
          ? evt.target.value
          : ingredienteInput.Volumen.Unidad,
    };
    setIngredienteInput({ Volumen: N });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Ingrediente._id)
      dispatch(updateIngrediente(JSON.stringify(ingredienteInput)));
    else dispatch(crearIngrediente(JSON.stringify(ingredienteInput)));
  };

  return (
    <Container className="botellaForm">
    {console.log(Ingrediente.Nombre)}
      <Form id="botellaForm" onSubmit={handleSubmit}>
        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Nombre">Nombre</Label>
            <br></br>
            <Input
              className="inputFormMB"
              name="Nombre"
              value={ingredienteInput.Nombre}
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Precio">Precio </Label>
            <br></br>
            <Input
              name="Precio"
              className="inputFormMB"
              value={ingredienteInput.Precio}
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Stock">Stock </Label>
            <br></br>
            <Input
              name="Stock"
              className="inputFormMB"
              value={ingredienteInput.Stock}
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Tipo">Tipo</Label>
            <br></br>
            <Input
              name="Tipo"
              className="inputFormMB"
              value={ingredienteInput.Tipo}
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Volumen">Contenido Neto</Label>
            <br></br>
            <input
              name="Contenido_NC"
              className="inputFormMB"
              value={ingredienteInput.Volumen.Cantidad}
              type="text"
              onChange={handleChangeA}
              required
            />
            <br></br>
            <select
              name="Contenido_NU"
              value={ingredienteInput.Volumen.Unidad}
              onChange={handleChangeA}
            >
              <option value="ml">ml</option>
              <option value="lt">lt</option>
              <option value="gal">gal</option>
            </select>
          </FormGroup>
        </Col>

        <button type="submit" className="submitInsertButton">
          Agregar al almacén!
        </button>
      </Form>
    </Container>
  );
}

export default IngredienteForm;
