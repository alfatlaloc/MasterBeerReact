import React from "react";
import Porcentaje from "../../img/Creador/Porcentaje.png";

function Porcentajes({botellaArray,setBotellaArray,Recipiente,Progress,setProgress}) {

    function deleteB(_id){
        alert("Hago algo")
        setBotellaArray(botellaArray.filter(e => { return e._id !== _id}));
    }

    function reCalc(){
        botellaArray.reduce((acc, currProduct) => {
            const { Porcentaje } = currProduct;
            return acc + Porcentaje;
          }, 0)
    }

    function handleP(){
      
    }

  return (
    <div className="area2 Porcentajes">
      <h2>Porcentajes</h2>
      <img src={Porcentaje} alt="" />
      <p>
        Aqui puedes modificar los porcentajes de cada bebida en tu trago
        personalizado, recuerda que cada recipiente tiene un limite en
        mililitros de lo que le puedes agregar.
      </p>
      <div className="PorcentajeWork">
      {Recipiente ? (
        <div className={ (Recipiente.Tipo==="") ? 'RecipienteC': 'RecipienteCP'}>{`A escogido ${Recipiente.Tipo} con volumen ${Recipiente.Volumen.Cantidad} ${Recipiente.Volumen.Unidad}`}</div>
      ) : null}
        <hr></hr>
        {botellaArray.map((elements) => {
          return (
            <div key={elements._id}>
              {elements.Nombre}
              <p>{`Militros:${elements.Porcentaje} ml`}</p>
              <input value={elements.Porcentaje} onChange={handleP}></input>
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
