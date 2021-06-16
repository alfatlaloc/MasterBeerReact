import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { loadIngredientes } from "../../Redux/Actions/IngredienteActions";

function Ingredientes({
  ingredienteArray,
  setIngredienteArray,
  nextStep,
  pStep,
  volumenRestante,
  DescripcionIn,
  setDescripcionIn,
}) {
  const IngredientesArray = useSelector((state) => state.Ingrediente);
  const dispatch = useDispatch();
  const [IngredienteActual, setIngredienteActual] = useState("");

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
    console.log(IngredientesArray);
    console.log(ingredienteArray);
    console.log(IngredienteActual);
    if (IngredienteActual === "sel") return;
    if (ingredienteArray.length < 5) {
      var a = Object.assign(
        {},
        IngredientesArray.find((el) => {
          return el.Nombre === IngredienteActual;
        })
      );
      setIngredienteArray([...ingredienteArray, a]);
    } else alert("Ya hay cinco ingredientes");
  }
  function handleNS() {
    if (ingredienteArray.length > 0) nextStep();
    else alert("Agrega un ingrediente");
  }

  return (
    <div className="area bebidaSelector">
      <h2>Ingredientes</h2>
      {`Mililitros restantes: ${volumenRestante}`}
      <FormGroup className="area">
        <Label for="selectBebidas">Bebidas Disponibles</Label>
        <Input
          type="select"
          id="selectBotellas"
          name="selectBebidas"
          value={IngredienteActual}
          onChange={(e) => {
            e.preventDefault();
            setIngredienteActual(e.target.value);
          }}
        >
          <option key="key" value="sel">
            Seleccionar Ingrediente
          </option>
          {IngredientesArray.map((elements) => {
            return (
              <option value={elements.Nombre} key={elements._id}>
                {elements.Nombre}
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

      {ingredienteArray.map((elements) => {
        return (
          <div key={elements._id}>
            <p>{elements.Nombre}</p>
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
      <FormGroup>
        <Label for="DescIngredientes">Agrega una descripción:</Label>
        <p>
          Escribe los mas breve y consistente como te gustarían las proporciones
          de las botellas en tu trago
        </p>
        <br></br>
        <textarea
          type="text"
          value={DescripcionIn}
          className="creadorTextArea"
          onChange={(e) => setDescripcionIn(e.target.value)}
          name="DescIngredientes"
          placeholder="Trago personalizado"
          required
        />
      </FormGroup>
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

export default Ingredientes;
