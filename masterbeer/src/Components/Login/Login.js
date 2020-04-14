import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

  
class Login extends React.Component{
  
  state ={
          Usuario: {Correo: ""}
      };

  handleChange = event =>{
    const Usuario = {...this.state.Usuario,Correo:event.target.value};
    this.setState({Usuario});
  }

  handleSummit = event =>{
    event.preventDefault();
    alert(this.state.Usuario.Correo);
  }

  render (){
    return(
      <Container className="App">
      <h2>Sign In</h2>
      <Form className="form" onSubmit={this.handleSummit}>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="myemail@email.com"
              onChange={this.handleChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        </Col>
        <Button>Submit</Button>
      </Form>
    </Container>
    );
    }
}

export default Login;