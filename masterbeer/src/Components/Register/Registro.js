import React, { Component } from 'react';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

class DatosFormulario extends Component{
    render(){
        return(
        <Container className="App" >
            <h2>Formulario de Registro</h2>
            <Form className="form maxdivCont Register">
                <Col>
                    <FormGroup className="formCont">
                        <Label htmlFor="name">Nombre </Label><br></br>
                        <Input name="name" id="name" type="text"/>                
                    </FormGroup> 
                </Col>

                <Col>
                    <FormGroup className="formCont">
                        <Label htmlFor="apellido">Apellido </Label><br></br>
                        <Input name="apellido" id="apellido" type="text"/>                
                    </FormGroup> 
                </Col>

                <Col>
                    <FormGroup className="formCont">
                        <Label htmlFor="email">Correo electronico </Label><br></br>
                        <Input name="email" id="email" type="email"/>                
                    </FormGroup> 
                </Col>

                <Col>
                    <FormGroup className="formCont">
                        <Label htmlFor="date">Fecha de nacimiento </Label><br></br>
                        <Input name="date" id="date" type="date"/>                
                    </FormGroup> 
                </Col>

                <Col>
                    <FormGroup className="formCont">    
                        <Label htmlFor="password">Contraseña </Label><br></br>
                        <Input name="password" id="password" type="password"/>
                    </FormGroup> 
                </Col>

                <Col>
                    <FormGroup className="formCont">    
                        <Label htmlFor="password">Confirmar Contraseña </Label><br></br>
                        <Input name="password2" id="password2" type="password"/>
                    </FormGroup> 
                </Col>

                <Col>
                    <FormGroup className="formCont">
                        <Label htmlFor="rfc">RFC</Label><br></br>
                        <Input name="rfc" id="rfc" type="text"/>
                    </FormGroup> 
                </Col>

                <Col>
                    <FormGroup className="formCont">
                        <Input type="checkbox"  id="condiciones" name="condiciones"/>
                        Aceptas terminos y condiciones                
                    </FormGroup> 
                </Col>                                
                    <Button className="registerButton">Submit</Button>
            </Form>
        </Container>
        ); 
    }
};


export default DatosFormulario;