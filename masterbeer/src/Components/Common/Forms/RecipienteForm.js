import React,{useReducer} from 'react';
import { useDispatch} from "react-redux";
import {crearRecipiente} from "../../../Redux/Actions/RecipienteActions";

import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from "reactstrap";

function IngredienteForm(Obj){
    const dispatch = useDispatch();

    const [formInput, setFormInput] = useReducer(
      (state, newState) => ({ ...state, ...newState }),
      {

        Tipo: Obj.Tipo,
        Volumen: {
          Cantidad: Obj.Volumen.Cantidad,
          Unidad: Obj.Volumen.Unidad,
        },
        Material: Obj.Material,
        Stock: Obj.Stock,
      }
    );

    const handleChange = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setFormInput({ [name]: newValue });
      };

      const handleChangeA = (evt) => {
        const Name = evt.target.name.toString();
        const N = {
          Cantidad:
            Name === "Volumen_NC"
              ? evt.target.value
              : formInput.Volumen.Cantidad,
          Unidad:
            Name === "Volumen_NU"
              ? evt.target.value
              : formInput.Volumen.Unidad,
        };
        setFormInput({ Volumen: N });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(crearRecipiente(JSON.stringify(formInput)));
      };

    return(
        <Container className="botellaForm">
        <Form id="botellaForm" onSubmit={handleSubmit}>

          <Col>
            <FormGroup className="formCont">
              <Label htmlFor="Material">Material</Label>
              <br></br>
              <Input
                className="inputFormMB"
                name="Material"
                value={formInput.Material}
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
                value={formInput.Stock}
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
                value={formInput.Tipo}
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
  
          <Col>
          <FormGroup className="formCont">
            <Label htmlFor="Volumen">Volumen</Label>
            <br></br>
            <input
              name="Volumen_NC"
              className="inputFormMB"
              value={formInput.Volumen.Cantidad}
              type="text"
              onChange={handleChangeA}
              required
            />
            <br></br>
            <select
              name="Volumen_NU"
              value={formInput.Volumen.Unidad}
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