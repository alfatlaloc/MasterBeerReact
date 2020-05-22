import React, { useEffect, useReducer, useState } from "react";
import Recipiente from "../../img/Creador/Recipiente.png";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import {useSelector} from 'react-redux';

function TipoVaso() {
  return (
    <div className="area TipoVaso">
      <h2>Tipo vaso area</h2>
      <img src={Recipiente} alt="" />
      <p>
        Selecciona un tipo de vaso, recuerda que las medidas de alcohol que
        puedes colocar en cada uno varia.
      </p>
      <FormGroup className="area">
        <Label for="exampleSelectMulti">Recipientes Disponibles</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
    </div>
  );
}

function ProgressBar(){
  const Progress = useSelector(state=>state.Creador.Progreso);
  return(
    <div className="area2 progressBar">
    <h4>Mira tu avance: </h4>
      <div className="progressBarMargin">
        <div className="innerProgress" style={{width: `${Progress}%`}}>Progress{Progress}</div>
      </div>
    </div>
  );
}

function FormBP() {
  const [Nombre, setNombre] = useState("");
  const [Desc, setDesc] = useState("");

  return (
    <div className="area2 AcceptCreador">
      <Form>
        <FormGroup row>
          <Label for="exampleEmail">Ponle nombre a tu trago</Label>
          <br></br>
          <Input
            type="text"
            name="NombreBP"
            placeholder="MasterBeerBP"
            required
            value={Nombre}
            onChange={e =>{setNombre(e.target.value)}}
          />
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail">Agrega una descripción</Label>
          <br></br>
          <Input
            type="text"
            name="DescBP"
            placeholder="Trago personalizado"
            required
          />
        </FormGroup>
        <FormGroup check row>
          <Button>Pedir Bebida</Button>
        </FormGroup>
      </Form>
    </div>
  );
}
function Creador() {
  useEffect(() => {});
  return (
    <div className="Creador">
      <TipoVaso />
      <div className="area">
        <h2>Bebidas area</h2>
      </div>
      <div className="area">
        <h2>Bebidas area</h2>
      </div>
      <div className="area">
        <h2>Bebidas S/A area</h2>
      </div>
      <div className="area">
        <h2>Ingredientes area2</h2>
      </div>
      <div className="area">
        <h2>Extras area</h2>
      </div>
      <ProgressBar/>
      <FormBP/>
    </div>
  );
}

export default Creador;
