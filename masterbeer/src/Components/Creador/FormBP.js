import React,{useEffect} from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

function FormBP({
  Nombre,
  setNombre,
  Cantidad,
  setCantidad,
  Precio,
  prevStep,
  nextStep,
  calcularPrecio
}) {
  useEffect(()=>{
    if(Precio === 0) calcularPrecio();
  },[Precio,calcularPrecio]);

  return (
    <div className="area2 bebidaSelector">
      <h2>Informacion del pedido</h2>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Ponle nombre a tu trago</Label>
          <br></br>
          <Input
            type="text"
            name="NombreBP"
            placeholder="MasterBeerBP"
            required
            value={Nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </FormGroup>

        <FormGroup className="area">
          <label htmlFor="Cantidad">Cantidad:</label>
          <hr></hr>
          <select
            type="select"
            name="Cantidad"
            value={Cantidad}
            className="selectCantidad"
            onChange={(evt) => {
              setCantidad(evt.target.value);
            }}
          >
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="24">24</option>
          </select>
        </FormGroup>

        <div className="precioFinal"> <p>El precio final del trago {Precio}</p> </div>
        <hr></hr>
        <button className="prevStep" onClick={prevStep}>
          previous Step
        </button>
        <br></br>
          <button className="acceptCreador" onClick={nextStep}>Pedir Bebida</button>
      </Form>
    </div>
  );
}

export default FormBP;
