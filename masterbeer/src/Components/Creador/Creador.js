import React, { useEffect, useReducer, useState } from "react";
import Recipiente from "../../img/Creador/Recipiente.png";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

function TipoVaso() {
  return (
    <div className="area TipoVaso">
      <h2>Tipo vaso area</h2>
      <img src={Recipiente} alt="" />
      <p>
        Selecciona un tipo de vaso, recuerda que las medidas de alcohol que
        puedes colocar en cada uno varia.
      </p>
      <FormGroup>
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

function FormBP() {
  const [Nombre, setNombre] = useState("");
  const [Desc, setDesc] = useState("");
  return (
    <div className="AcceptCreador">
      <Form>
        <FormGroup row>
          <Label for="exampleEmail">Ponle nombre a tu trago</Label>
          <br></br>
          <Input
            type="text"
            name="NombreBP"
            placeholder="MasterBeerBP"
            required
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
  const [tipoVaso, setTipoVaso] = useState(null);
  const [porcentaje, setPorcentaje] = useState(0);

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
      <FormBP 
        porcentaje={porcentaje}
      />
    </div>
  );
}

export default Creador;
