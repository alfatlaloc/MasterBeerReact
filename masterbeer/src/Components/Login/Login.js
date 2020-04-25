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
  componentDidMount(){
    this.props.actions.loadUsuarios().catch(error => {
      alert("Loading courses failed" + error);
    });
    
  }
  
  render (){
    return(
      <Container className="Login">
      <h2>Sign In</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="myemail@email.com"
              onChange=""
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
     <link></link>    
      </Form>
      <div>
      {this.props.Usuarios.map(Usuario => (
          <div key={Usuario.Correo}>{Usuario.Correo}{Usuario.Nombre}</div>
        ))}
      </div>

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
    Usuarios: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

function mapStateToProps(state) {
  return{
    Usuarios: state.Usuarios
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);