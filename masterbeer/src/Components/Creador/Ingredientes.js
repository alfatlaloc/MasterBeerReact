import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { loadIngredientes } from "../../Redux/Actions/IngredienteActions";

function Ingredientes({ingredienteArray,setIngredienteArray, nextStep, pStep,volumenRestante }) {
  const IngredientesArray = useSelector((state) => state.Ingrediente);
  const dispatch = useDispatch();
  const [tipoIngrediente, setTipoIngrediente] = useState("Todo");
  const [IngredienteActual, setBotellaActual] = useState("");

  let regexPattern = /LIQUIDO/i;

  useEffect(() => {
    if (IngredientesArray.length === 0) dispatch(loadIngredientes());
  });

  function deleteB(_id) {
    setIngredienteArray(
      ingredienteArray.filter((e) => {
        return e._id !== _id;
      })
    );
  }

  function addToBebida(evt) {
    evt.preventDefault();
    if (ingredienteArray.length < 5) {
      if (ingredienteArray.some((e) => e.Tipo.match(regexPattern)))
        alert("No puedes agregar mas");
      else {
        var a = Object.assign(
          {},
          ingredienteArray.find((el) => {
            return el.Nombre === IngredienteActual;
          })
        );
        setIngredienteArray([...IngredientesArray, a]);
      }
    } else alert("Ya hay cinco ingredientes");
  }

  return (
    <div className="area bebidaSelector">
      <h2>Ingredientes</h2>
      {volumenRestante}
      <FormGroup className="area">
        <Label for="exampleSelectMulti">Tipo de bebida</Label>
        <Input
          type="select"
          name="Contenido_NU"
          value={tipoIngrediente}
          onChange={(evt) => {
            evt.preventDefault();
            setTipoIngrediente(evt.target.value);
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
          value={IngredienteActual.Aux}
          onChange={(e) => {
            e.preventDefault();
            setBotellaActual(e.target.value);
          }}
        >
          {IngredientesArray.map((elements) => {
            if (tipoIngrediente === "LIQUIDO") {
              if (elements.Tipo.match(regexPattern))
                return (
                  <option value={elements.Nombre} key={elements._id}>
                    {elements.Nombre}
                  </option>
                );
            } else if (tipoIngrediente === "Botella") {
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

      {ingredienteArray.map((elements) => {
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

      <button onClick={pStep}>previous Step</button>
      <button onClick={nextStep}>Next Step</button>
    </div>
  );
}

export default Ingredientes;
