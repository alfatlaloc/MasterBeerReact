import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { loadBotellas } from "../../Redux/Actions/BotellaActions";

function BebidasA({
  botellaArray,
  setBotellaArray,
  nextStep,
  pStep,
  Tipo,
  setTipo,
}) {
  const BotellasArray = useSelector((state) => state.Botellas);
  const dispatch = useDispatch();
  const [tipoBotella, setTipoBotella] = useState("Todo");
  const [BotellaActual, setBotellaActual] = useState("XX");

  let regexPattern = /Cerveza/i;
  useEffect(() => {
    if (BotellasArray.length === 0) dispatch(loadBotellas());
  });

  function deleteB(_id) {
    setBotellaArray(
      botellaArray.filter((e) => {
        return e._id !== _id;
      })
    );
  }

  function addToBebida(evt) {
    evt.preventDefault();
    if (botellaArray.length < 3) {
      let aux = BotellasArray.find((e) => {
        return e.Nombre === BotellaActual;
      });
      if (!aux) return;
      if (aux.Tipo.match(regexPattern)) {
        setTipoBotella("Cerveza");
        if (botellaArray.length === 0) setTipo("Cerveza");
      } else {
        setTipoBotella("Botella");
        if (botellaArray.length === 0) setTipo("Botella");
      }
      if (Tipo === "Trago" && tipoBotella === "Cerveza") {
        alert("No puedes agregar cerveza a un trago");
        return;
      }

      if (botellaArray.some((e) => e.Tipo.match(regexPattern)))
        alert("No puedes agregar mas");
      else {
        var a = Object.assign(
          {},
          BotellasArray.find((el) => {
            return el.Nombre === BotellaActual;
          })
        );
        if (a.Tipo.match(regexPattern) && Tipo === "Trago")
          alert("Error no puedes agregar cerveza a un trago");
        else setBotellaArray([...botellaArray, a]);
        if (a.Tipo.match(regexPattern)) setTipo("Cerveza");
        else setTipo("Trago");
      }
    } else alert("Ya hay tres botellas");
  }

  function handleNS() {
    if (botellaArray.length > 0) nextStep();
    else alert("No ah elejido");
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
          <option key="sel" value="Sel">
            Seleccionar {tipoBotella}
          </option>
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
            return null;
          })}
        </Input>
      </FormGroup>

      <button
        className="submitInsertButton"
        onClick={(evt) => {
          addToBebida(evt);
        }}
      >
        Agregar la bebida
      </button>
      <hr></hr>
      {botellaArray.map((elements) => {
        return (
          <div key={elements._id}>
            {elements.Nombre}
            <p>{elements.Tipo}</p>
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
      })}
      <hr></hr>
      <button className="prevStep" onClick={pStep}>
        previous Step
      </button>
      <button className="nextStep" onClick={handleNS}>
        Next Step
      </button>
    </div>
  );
}

export default BebidasA;
