import React from "react";
import PorcentajeIMG from "../../img/Creador/Porcentaje.png";
import { useState, useEffect } from "react";
import {FormGroup,Label} from 'reactstrap';
function Porcentajes({
  Recipiente,
  Porcentaje,
  setPorcentaje,
  nextStep,
  pStep,
  Tipo,
  Descripcion,
  setDescripcion
}) {
  const [MaxValue, setMaxValue] = useState(0);

  useEffect(() => {
    console.log(Recipiente);
    if (Tipo === "Cerveza") setMaxValue(Recipiente.milis);
    else setMaxValue(Recipiente.AlcoholP);
  }, [setMaxValue]);

  const handleRangeSlider = (evt) => {
    setPorcentaje(evt.target.value);
  };

  function calc() {
    return Math.round((Porcentaje * 100) / MaxValue);
  }

  function handleNS() {
    if (Porcentaje > 0) nextStep();
  }
  return (
    <div className="area2 Porcentajes">
      <h2>Porcentajes</h2>
      <img src={PorcentajeIMG} alt="" />
      <div className="PorcentajeWork">
        <p>{`Puede agregar hasta: ${MaxValue} ml`}</p>
        {Recipiente ? (
          <div
            className={Recipiente.Tipo === "" ? "RecipienteC" : "RecipienteCP"}
          >{`A escogido ${Recipiente.Tipo} con volumen ${Recipiente.Volumen.Cantidad} ${Recipiente.Volumen.Unidad}`}</div>
        ) : null}
        <hr></hr>
        <p>{(Tipo === "Cerveza") ? 'Porcentaje' : 'Porcentaje (Alcohol)' }:{` ${calc()} %`}</p>
        <p>Mililitros: {Porcentaje}</p>
        <input
          onChange={handleRangeSlider}
          type="range"
          min="1"
          max={MaxValue}
          value={Porcentaje}
          className="slider sliderP"
        ></input>
        <hr></hr>
        { (Tipo !== "Cerveza") ?
        <FormGroup>
            <Label for="DescIngredientes">Agrega una descripción:</Label>
            <p>Escribe los mas breve y consistente como te gustarían las proporciones 
            de las botellas en tu trago</p>
            <br></br>
            <input
              type="text"
              value={Descripcion}
              onChange={(e) => setDescripcion(e.target.Name)}
              name="DescIngredientes"
              placeholder="Trago personalizado"
              required
            />
          </FormGroup>
        : null
        }
        <hr></hr>
        <button className="prevStep" onClick={pStep}>
          previous Step
        </button>
        <button className="nextStep" onClick={handleNS}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Porcentajes;
