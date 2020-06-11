import React from "react";
import Porcentaje from "../../img/Creador/Porcentaje.png";
import { useState } from "react";

function Porcentajes({botellaArray,setBotellaArray,Recipiente,Progress,setProgress}) {
  const [MaxValue,setMaxValue] = useState(Recipiente.milis);

    function deleteB(_id){
        alert("Hago algo")
        setBotellaArray(botellaArray.filter(e => { return e._id !== _id}));
    }

    function reCalc(){
        
    }

    function handleP(evt,_id){
      let arr = botellaArray.slice();
      arr.map(
        el => {
          if( el._id === _id)
            el.Porcentaje=evt.target.value;
          return el;
        }
      );
      let milis = arr.reduce(

      );
      console.log(arr);
      console.log(Recipiente.milis);
      setBotellaArray(arr);
    }

  return (
    <div className="area2 Porcentajes">
      <h2>Porcentajes</h2>
      <img src={Porcentaje} alt="" />
      <p>
        Aqui ver las bebidas que has agregado, recuerda que cada recipiente tiene un limite en
        mililitros de lo que le puedes agregar.
      </p>
      <div className="PorcentajeWork">
      {MaxValue}
      {Recipiente ? (
        <div className={ (Recipiente.Tipo==="") ? 'RecipienteC': 'RecipienteCP'}>{`A escogido ${Recipiente.Tipo} con volumen ${Recipiente.Volumen.Cantidad} ${Recipiente.Volumen.Unidad}`}</div>
      ) : null}
        <hr></hr>
        {botellaArray.map((elements) => {
          return (
            <div key={elements._id}>
              {elements.Nombre}
              <p>{`Militros:${elements.Porcentaje} ml`}</p>
              <input value={elements.Porcentaje} onChange={evt => {handleP(evt,elements._id)}}></input>
              <button className="MBButtonC"
              onClick={e => { e.preventDefault(); deleteB(elements._id)}}
              > Eliminar </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Porcentajes;
