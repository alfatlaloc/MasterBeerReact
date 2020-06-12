import React from "react";
import PorcentajeIMG from "../../img/Creador/Porcentaje.png";
import { useState } from "react";

function Porcentajes({Recipiente,Porcentaje,setPorcentaje,nextStep,pStep}) {
  const [MaxValue,setMaxValue] = useState(Recipiente.milis);

  const handleRangeSlider = (evt) => {
    setPorcentaje(evt.target.value);
  };
  return (
    <div className="area2 Porcentajes">
      <h2>Porcentajes</h2>
      <img src={PorcentajeIMG} alt="" />
      <p>
        QUe tanto vol de alchol deseas?
      </p>
      <div className="PorcentajeWork">
      {MaxValue}
      {Recipiente ? (
        <div className={ (Recipiente.Tipo==="") ? 'RecipienteC': 'RecipienteCP'}>{`A escogido ${Recipiente.Tipo} con volumen ${Recipiente.Volumen.Cantidad} ${Recipiente.Volumen.Unidad}`}</div>
      ) : null}
        <hr></hr>
        <p>Porcentaje: {Porcentaje}</p>
        <input 
        onChange={handleRangeSlider}
        type="range" min="1" max={MaxValue} value={Porcentaje} 
        className="slider sliderP"></input>
<button onClick={pStep}>previous Step</button>
      <button onClick={nextStep}>Next Step</button>
      </div>
    </div>
  );
}

export default Porcentajes;
