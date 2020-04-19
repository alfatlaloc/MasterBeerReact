import React from 'react';
import {connect} from 'react-redux';
import * as UserActions from '../../Redux/Actions/UserActions'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

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
    this.props.actions.crearUsuario(this.state.Usuario);
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
     <link></link>    
        {this.props.Usuarios.map(Usuario => (<div key={Usuario.Correo}>{Usuario.Correo}</div>))}
      </Form>
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