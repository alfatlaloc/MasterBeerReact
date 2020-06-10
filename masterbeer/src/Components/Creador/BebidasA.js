import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { loadBotellas } from "../../Redux/Actions/BotellaActions";

function BebidasA({ botellaArray, setBotellaArray }) {
  const BotellasArray = useSelector((state) => state.Botellas);
  const dispatch = useDispatch();
  const [tipoBotella, setTipoBotella] = useState("Todo");
  const [BotellaActual, setBotellaActual] = useState("XX");

  let regexPattern = /Cerveza/i;
  useEffect(() => {
    if (BotellasArray.length === 0) dispatch(loadBotellas());
  });

  function addToBebida(evt) {
    evt.preventDefault();
    if (botellaArray.length < 3) {
      var a = Object.assign(
        {},
        BotellasArray.find((el) => {
          return el.Nombre === BotellaActual;
        })
      );
      a["Porcentaje"] = 30;
      setBotellaArray([...botellaArray, a]);
    } else alert("Ya hay tres botellas");
  }

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
            evt.preventDefault();
            setTipoBotella(evt.target.value);
          }}
        >
          <option value="Todo">Todo</option>
          <option value="Botella">Botella</option>
          <option value="Cerveza">Cerveza</option>
        </Input>
      </FormGroup>

      <FormGroup className="area">
        <Label for="selectBebidas">Bebidas Disponibles</Label>
        <Input
          type="select"
          id="selectBotellas"
          name="selectBebidas"
          value={BotellaActual.Nombre}
          onChange={(e) => {
            e.preventDefault();
            setBotellaActual(e.target.value);
          }}
        >
          {BotellasArray.map((elements) => {
            if (tipoBotella === "Cerveza") {
              if (elements.Tipo.match(regexPattern))
                return (
                  <option value={elements.Nombre} key={elements._id}>
                    {elements.Nombre}
                  </option>
                );
            } else if (tipoBotella === "Botella") {
              if (!elements.Tipo.match(regexPattern)) {
                return (
                  <option value={elements.Nombre} key={elements._id}>
                    {elements.Nombre}
                  </option>
                );
              }
            } else
              return (
                <option value={elements.Nombre} key={elements._id}>
                  {elements.Nombre}
                </option>
              );
          })}
        </Input>
      </FormGroup>

      <button className="submitInsertButton"
        onClick={(evt) => {
          addToBebida(evt);
        }}
      >
        Agregar la bebida
      </button>
    </div>
  );
}

export default BebidasA;
