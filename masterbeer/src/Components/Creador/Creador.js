import React, { useEffect, useState } from "react";
import Recipiente from "../../img/Creador/Recipiente.png";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { loadBotellas } from "../../Redux/Actions/BotellaActions";
import { loadRecipientes } from "../../Redux/Actions/RecipienteActions";

function TipoVaso() {
  const RecipientesArray = useSelector((state) => state.Recipientes);
  useSelector((state) => console.log(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (RecipientesArray.length === 0) dispatch(loadRecipientes());

  });

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
        <Input
          type="select"
          name="selectMulti"
          id="exampleSelectMulti"
        >
          {RecipientesArray.map((elements) => {
            return <option>{elements.Tipo}</option>;
          })}
        </Input>
      </FormGroup>
    </div>
  );
}

function BebidasA() {
  const BotellasArray = useSelector((state) => state.Botellas);
  const dispatch = useDispatch();
  const [tipoBotella, setTipoBotella] = useState("Cerveza");

  useEffect(() => {
    if (BotellasArray.length === 0) dispatch(loadBotellas());
  });

  return (
    <div className="area bebidaSelector">
      <h2>Bebidas area</h2>
      <FormGroup className="area">
        <Label for="exampleSelectMulti">Tipo de bebida</Label>
        <Input
          type="select"
          name="Contenido_NU"
          value={tipoBotella}
          onChange={(evt) => {
            setTipoBotella(evt.target.value);
          }}
          id="exampleSelectMulti"
        >
          <option value="Botella">Botella</option>
          <option value="Cerveza">Cerveza</option>
        </Input>
      </FormGroup>

      <FormGroup className="area">
        <Label for="exampleSelectMulti">Bebidas Disponibles</Label>
        <Input
          type="select"
          name="selectMulti"
          id="exampleSelectMulti"
          multiple
        >
          {BotellasArray.map((elements) => {
            return <option key={elements._id}>{elements.Nombre}</option>;
          })}
        </Input>
      </FormGroup>
    </div>
  );
}

function ProgressBar() {
  const Progress = useSelector((state) => state.Creador.Progreso);
  return (
    <div className="area2 progressBar">
      <h4>Mira tu avance: </h4>
      <div className="progressBarMargin">
        <div className="innerProgress" style={{ width: `${Progress}%` }}>
          Progress{Progress}
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
            onClick={e => setDesc(e.target.Name)}
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
      <BebidasA />
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
      <ProgressBar />
      <FormBP />
    </div>
  );
}

export default Creador;
