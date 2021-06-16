import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadExtras } from "../../Redux/Actions/ExtraActions";
import { FormGroup, Label, Input } from "reactstrap";

function ExtrasA({ Extras, setExtras, prevStep, nextStep,BK2,DoubleStepBK}) {
  const ExtrasArray = useSelector((state) => state.Extras);
  const dispatch = useDispatch();
  const [extraActual, setExtraActual] = useState("sel");

  useEffect(() => {
    if (ExtrasArray.length === 0) dispatch(loadExtras());
  });

  function deleteB(_id) {
    setExtras(
      Extras.filter((e) => {
        return e._id !== _id;
      })
    );
  }

  function hanldePS(){
    if(BK2 === 0 )
        DoubleStepBK();
    else
        prevStep();
  }

  function addToBebida(evt) {
    evt.preventDefault();
    if(extraActual === 'sel') return;
    if (Extras.length < 10) {
      let aux = ExtrasArray.find((e) => {
        return e._id === extraActual;
      });
      setExtras([...Extras, aux]);
    } else alert("No peudes agregar mas extras");
  }

  return (
    <div className="area bebidaSelector">
      <h2>Extras</h2>
      <FormGroup className="area">
        <Label htmlFor="selectExtras">Bebidas Disponibles</Label>
        <Input
          type="select"
          id="selectExtras"
          name="selectExtras"
          value={extraActual}
          onChange={(e) => {
            e.preventDefault();
            setExtraActual(e.target.value);
          }}
        >
          <option key="key" value="sel">
            Seleccionar Extra
          </option>
          {ExtrasArray.map((elements) => {
            return (
              <option value={elements._id} key={elements._id}>
                {elements.Nombre} + {` $ ${elements.Precio} mxn`}
              </option>
            );
          })}
        </Input>
      </FormGroup>
      <hr></hr>
      <button
        className="submitInsertButton"
        onClick={(evt) => {
          addToBebida(evt);
        }}
      >
        Agregar la bebida
      </button>
      <hr></hr>
      {(Extras.length > 0) ? Extras.map((elements) => {
        return (
          <div key={elements._id}>
            <p>{elements.Nombre}</p>
            <p> Precio: {elements.Precio}</p>
            <button
              className="MBButtonC"
              onClick={(e) => {
                e.preventDefault();
                deleteB(elements._id);
              }}
            >
              Eliminar
            </button>
          </div>
        );
      }) : <p>No has agregado ningun extra</p>}

      <button className="prevStep" onClick={hanldePS}>previous Step</button>
      <button className="nextStep" onClick={nextStep}>Next Step</button>
    </div>
  );
}

export default ExtrasA;
