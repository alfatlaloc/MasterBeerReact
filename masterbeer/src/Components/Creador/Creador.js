import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {newRecipiente} from '../../API/DefaultObjects/DefObjects';
import TipoVaso from './TipoVaso';
import BebidasA from './BebidasA';
import Porcentajes from './Porcentajes';

function ProgressBar({Progress}) {
  return (
    <div className="area2 progressBar">
      <h4>Mira tu avance: </h4>
      <div className="progressBarMargin">
        <div className="innerProgress" style={{ width: `${Progress}%` }}>
          {Progress}
        </div>
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
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail">Agrega una descripción</Label>
          <br></br>
          <Input
            type="text"
            value={Desc}
            onChange={(e) => setDesc(e.target.Name)}
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
  const [botellaArray, setBotellaArray] = useState([]);
  const [Recipiente,setRecipiente] = useState(newRecipiente);
  const [Progress,setProgress] = useState(0);
  
  useEffect(() => {});
  return (
    <div className="Creador">
      <TipoVaso 
        Recipiente={Recipiente}
        setRecipiente={setRecipiente}
      />
      <BebidasA botellaArray={botellaArray}
      setBotellaArray={setBotellaArray}/>
      <Porcentajes 
      botellaArray={botellaArray}
      setBotellaArray={setBotellaArray}
      Recipiente={Recipiente}
      Progress={Progress}
      setProgress={setProgress}
      />
      <div className="area">
        <h2>Bebidas S/A area</h2>
      </div>
      <div className="area">
        <h2>Ingredientes area2</h2>
      </div>
      <div className="area">
        <h2>Extras area</h2>
      </div>
      <ProgressBar 
        Progress={Progress}
      />
      <FormBP />
    </div>
  );
}

export default Creador;