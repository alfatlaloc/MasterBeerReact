import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {crearBotella} from '../../../Redux/Actions/BotellaActions';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

function BotellaForm (){
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(document.getElementById("botellaForm"));
        dispatch(crearBotella(data));
    }

    return(
          <Container className="botellaForm">
            <Form id="botellaForm" onSubmit={handleSubmit}>
                <Col>
                    <FormGroup className="formCont">
                        <Label htmlFor="Nombre">Nombre </Label><br></br>
                        <input name="Nombre" id="Nombre" type="text"/>                
                    </FormGroup> 
                </Col>

                <Col>
                    <FormGroup className="formCont">
                        <Label htmlFor="Marca">Marca </Label><br></br>
                        <Input name="Marca" id="Marca" type="text"/>                
                    </FormGroup> 
                </Col>

                <Col>
                    <FormGroup className="formCont">
                        <Label htmlFor="Precio">Precio </Label><br></br>
                        <Input name="Precio" id="Precio" type="text"/>                
                    </FormGroup> 
                </Col>

                <Col>
                    <FormGroup className="formCont">
                        <Label htmlFor="Stock">Stock </Label><br></br>
                        <Input name="Stock" id="Stock" type="text"/>                
                    </FormGroup> 
                </Col>

                <Col>
                    <FormGroup className="formCont">    
                        <Label htmlFor="desc">Descripción </Label><br></br>
                        <Input name="desc" id="desc" type="text"/>
                    </FormGroup> 
                </Col>
                <Col>
                    <FormGroup className="formCont">    
                        <Label htmlFor="Tipo">Tipo</Label><br></br>
                        <Input name="Tipo" id="Tipo" type="text"/>
                    </FormGroup> 
                </Col>
                <Col>
                    <FormGroup className="formCont">    
                        <Label htmlFor="Contenido_N">Contenido Neto</Label><br></br>
                        <Input name="Contenido_N" id="Contenido_N" type="text"/>
                    </FormGroup> 
                </Col>
                <Col>
                    <FormGroup className="formCont">    
                        <Label htmlFor="Volumen_A">Volumen de Alcohol </Label><br></br>
                        <Input name="Volumen_A" id="Volumen_A" type="text"/>
                    </FormGroup> 
                </Col>                                     
                    <Button type="submit"  className="submitInsertButton"
                    >Agregar al almacén!</Button>
            </Form>
          </Container>
    );
  }

export default BotellaForm;