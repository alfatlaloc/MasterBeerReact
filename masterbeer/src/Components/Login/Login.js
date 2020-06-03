import React,{useReducer,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getUserByCorreo} from '../../Redux/Actions/UserActions'
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

  
function Login (){
  const [loginInput, setLoginInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Correo:"",
      Contrasena:""
    });

  const Session = useSelector(state => state.Session);
  let history = useHistory();

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setLoginInput({ [name]: newValue });
  };
  
  useEffect(()=>{
    if(Session.logged)
      history.push("/");
  });
  function logear(event)
  {
    event.preventDefault();
    dispatch(getUserByCorreo(loginInput.Correo,loginInput.Contrasena))
    .catch(error => {
      alert("Usuario no Registrado" + error);
    });
  }

    return(
      <Container className="Login">
      <h2>Sign In</h2>
      <Form className="form" onSubmit={logear}>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              name="Correo"
              placeholder="myemail@email.com"
              onChange={handleChange}
              value={loginInput.Correo}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="Contrasena"
              onChange={handleChange}
              value={loginInput.Contrasena}
              placeholder="********"
            />
          </FormGroup>
        </Col>
        <Button>Submit</Button>
     
      </Form>
      <h4>
        <Link to='/Register'>
          Aún no tienes cuenta? Registrate
        </Link>
      </h4>
    </Container>
    );
  }

export default Login;