import React from 'react';
//import { useDispatch,useReducer } from "react-redux";
//import {crearIngrediente} from "../../Redux/Actions/IngredienteActions";

import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from "reactstrap";

function IngredienteForm({Nombre}){
    //const dispatch = useDispatch();

    /*const [ingredienteInput, setIngredienteInput] = useReducer(
      (state, newState) => ({ ...state, ...newState }),
      {
        Nombre: "",
        Marca: "",
        Precio: 0,
        Stock: 0,
        Desc: "",
        Tipo: "",
        Contenido_N: 0,
        volBP: 0,
      }
    );*/
    const handleChange = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        //setIngredienteInput({ [name]: newValue });
      };
    
    /*  const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(crearIngrediente(JSON.stringify(ingredienteInput)));
      };*/
    return(
        <Container className="botellaForm">
        <Form id="botellaForm" /*onSubmit={handleSubmit}*/>
          <Col>
            <FormGroup className="formCont">
              <Label htmlFor="Nombre">Nombre </Label>
              <br></br>
              <Input
                className="inputFormMB"
                name="Nombre"
                //value={ingredienteInput.Nombre}
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
                //value={ingredienteInput.Precio}
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
                //value={ingredienteInput.Stock}
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
                //value={ingredienteInput.Tipo}
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
  
          <Col>
            <FormGroup className="formCont">
              <Label htmlFor="Contenido_N">Volumen</Label>
              <br></br>
              <Input
                name="Contenido_N"
                className="inputFormMB"
                //value={ingredienteInput.Contenido_N}
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

export default IngredienteForm;