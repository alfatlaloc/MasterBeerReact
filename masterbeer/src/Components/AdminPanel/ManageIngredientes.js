import React from 'react';
import { useDispatch,useReducer } from "react-redux";
import {crearIngrediente} from "../../Redux/Actions/IngredienteActions";

import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from "reactstrap";

function ManageIngredientes({Nombre}){
    const dispatch = useDispatch();

    const [ingredienteInput, setIngredienteInput] = useReducer(
      (state, newState) => ({ ...state, ...newState }),
      {
        Nombre: "",
        Marca: "",
        Precio: 0,
        Stock: 0,
        Desc: "",
        Tipo: "",
        Contenido_N: 0,
        Volumen_A: 0,
        volBP: 0,
      }
    );
    const handleChange = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setIngredienteInput({ [name]: newValue });
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
                value={botellaInput.Nombre}
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
  
          <Col>
            <FormGroup className="formCont">
              <Label htmlFor="Marca">Marca </Label>
              <br></br>
              <Input
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
              <Input
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
              <Input
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
              <Input
                name="Desc"
                className="inputFormMB"
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
              <Input
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
              <Input
                name="Contenido_N"
                className="inputFormMB"
                value={botellaInput.Contenido_N}
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
  
          <Col>
            <FormGroup className="formCont">
              <Label htmlFor="Volumen_A">Volumen de Alcohol </Label>
              <br></br>
              <Input
                name="Volumen_A"
                className="inputFormMB"
                value={botellaInput.Volumen_A}
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
  
          <Col>
            <FormGroup className="formCont">
              <Label htmlFor="volBP">Volumen BP</Label>
              <br></br>
              <Input
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

export default ManageIngredientes;