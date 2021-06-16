import React from "react";
import PorcentajeIMG from "../../img/Creador/Porcentaje.png";
import { useState, useEffect } from "react";
import { FormGroup, Label } from "reactstrap";
function Porcentajes({
  Recipiente,
  Porcentaje,
  setPorcentaje,
  nextStep,
  pStep,
  Tipo,
  Descripcion,
  setDescripcion,
  doubleStep,
}) {
  const [MaxValue, setMaxValue] = useState(0);

  useEffect(() => {
    console.log(Recipiente);
    if (Tipo === "Cerveza") setMaxValue(Recipiente.milis);
    else setMaxValue(Recipiente.AlcoholP);
  }, [setMaxValue, Recipiente, Tipo]);

  const handleRangeSlider = (evt) => {
    setPorcentaje(evt.target.value);
  };

  function calc() {
    return Math.round((Porcentaje * 100) / MaxValue);
  }

  function handleNS() {
    if (Porcentaje > 20) {
      if (Tipo === "Cerveza") {
        if (parseFloat(Porcentaje) === MaxValue) doubleStep();
        else if (Porcentaje <= MaxValue - 20) nextStep();
      } else if (Tipo === "Trago") {
        nextStep();
      }
    } else alert("Porcentaje no validlll");
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
        <p>
          {Tipo === "Cerveza" ? "Porcentaje" : "Porcentaje (Alcohol)"}:
          {` ${calc()} %`}
        </p>
        <p>Mililitros: {Porcentaje}</p>
        <input
          onChange={handleRangeSlider}
          type="range"
          min="20"
          max={MaxValue}
          value={Porcentaje}
          className="slider sliderP"
        ></input>
        <hr></hr>
        {Tipo !== "Cerveza" ? (
          <FormGroup>
            <Label for="DescIngredientes">Agrega una descripción:</Label>
            <p>
              Escribe los mas breve y consistente como te gustarían las
              proporciones de las botellas en tu trago
            </p>
            <br></br>
            <textarea
              type="text"
              value={Descripcion}
              className="creadorTextArea"
              onChange={(e) => setDescripcion(e.target.value)}
              name="DescIngredientes"
              placeholder="Trago personalizado"
              required
            />
          </FormGroup>
        ) : null}
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
