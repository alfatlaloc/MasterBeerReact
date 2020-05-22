import React,{useReducer} from 'react';
import { useDispatch} from "react-redux";
import {crearIngrediente} from "../../../Redux/Actions/IngredienteActions";

import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from "reactstrap";

function IngredienteForm(Ingrediente){
    const dispatch = useDispatch();

    const [ingredienteInput, setIngredienteInput] = useReducer(
      (state, newState) => ({ ...state, ...newState }),
      {
        Nombre: Ingrediente.Nombre,
        Precio: Ingrediente.Precio,
        Stock: Ingrediente.Stock,
        Tipo: Ingrediente.Tipo,
        Volumen: {
          Cantidad: Ingrediente.Volumen.Cantidad,
          Unidad: Ingrediente.Volumen.Unidad,
        },
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
              : ingredienteInput.Contenido_N.Cantidad,
          Unidad:
            Name === "Contenido_NU"
              ? evt.target.value
              : ingredienteInput.Contenido_N.Unidad,
        };
        setIngredienteInput({ Contenido_N: N });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(crearIngrediente(JSON.stringify(ingredienteInput)));
      };

    return(
        <Container className="botellaForm">
        <Form id="botellaForm" onSubmit={handleSubmit}>
          <Col>
            <FormGroup className="formCont">
              <Label htmlFor="Nombre">Nombre </Label>
              <br></br>
              <Input
                className="inputFormMB"
                name="Nombre"
                alue={ingredienteInput.Nombre}
                type="text"
                onChange={handleChange}
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
            <Label htmlFor="Contenido_N">Contenido Neto</Label>
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
  
          
          
  
          <Button type="submit" className="submitInsertButton">
            Agregar al almacén!
          </Button>
        </Form>
      </Container>
    );
}

export default IngredienteForm;