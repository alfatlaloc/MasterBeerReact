import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOne } from "../../Redux/Actions/BotellaActions";
import { agregarAlCarrito } from "../../Redux/Actions/CarritoActions";
import { FormGroup } from "reactstrap";

function ItemView() {
  const params = useParams();
  const [Item, setItem] = useState();
  const [Cantidad, setCantidad] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getOne(params._id).then((data) => setItem(data));
  },[]);

  function addItem(e) {
    e.preventDefault();
    var a = Object.assign({}, Item);
    a["Cantidad"] = Cantidad;
    alert("Se agregaron: " + Cantidad + " al carrito");
    if (Cantidad > 0) dispatch(agregarAlCarrito(a));
  }
  if (!Item) return null;

  return (
    <div id="ItemView" className="itemView">
      <div className="area IVInfo">
        <h2 className="itemName">{Item.Nombre}</h2>
        <hr></hr>
        <h5> Información del producto</h5>
        <p className="ItemDesc">{Item.Desc}</p>
        <p>Disponibles: {Item.Stock}</p>
        <p>Tipo: {Item.Tipo}</p>
        <p>{`$ ${Item.Precio} mxn`}</p>
        <p>Marca: {Item.Marca}</p>
        <p>
          Contenido Neto: {Item.Contenido_N.Cantidad + Item.Contenido_N.Unidad}
        </p>
        <p>Volumen Alcohol: {Item.Volumen_A}</p>
        <hr></hr>
        <button
          className="blkwButton"
          onClick={(e) => {
            addItem(e);
          }}
        >
          Agregar al carrito
        </button>
      </div>
      <div className="area">
        <img
          className="itemViewImg"
          alt=""
          src={require(`../../img/Botellas/${Item.Nombre}.png`)}
        />
        <br></br>
        <FormGroup className="area">
          <label for="Cantidad">Cantidad</label>
          <select
            type="select"
            name="Cantidad"
            value={Cantidad}
            onChange={(evt) => {
              setCantidad(evt.target.value);
            }}
          >
            <option value="3">1</option>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="24">24</option>
          </select>
        </FormGroup>
      </div>
    </div>
  );
}

export default ItemView;
