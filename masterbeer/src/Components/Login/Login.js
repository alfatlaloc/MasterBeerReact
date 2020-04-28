import React from 'react';
import {connect} from 'react-redux';
import * as UserActions from '../../Redux/Actions/UserActions'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {Link} from "react-router-dom";

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

  
class Login extends React.Component{
  //Es para recibier los parametros insertados en el form
    state ={
        Correo: '',
        Contraseña:''
    };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  logear = event =>
  {
    event.preventDefault();
    console.log(this.state.Contraseña);
    this.props.actions.getUserByCorreo(this.state.Correo,this.state.Contraseña).catch(error => {
      alert("Usuario no Registrado" + error);
    });
  }

  render (){
    return(
      <Container className="Login">
      <h2>Sign In</h2>
      <Form className="form" onSubmit={this.logear}>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              name="Correo"
              placeholder="myemail@email.com"
              onChange={this.handleChange}
              value={this.state.Correo}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="Contraseña"
              onChange={this.handleChange}
              value={this.state.Contraseña}
              placeholder="********"
            />
          </FormGroup>
        </Col>
        <Button>Submit</Button>
     <link></link>    
      </Form>
      <h4>
        <Link to='/Register'>
          Aún no tienes cuenta? Registrate
        </Link>
      </h4>
    </Container>
    );
    }
}

  Login.propTypes={
    actions: PropTypes.object.isRequired
  };

function mapStateToProps(state) {
  return{
    Usuario: state.Usuario
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions: {
      getUserByCorreo: bindActionCreators(UserActions.getUserByCorreo, dispatch)
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);