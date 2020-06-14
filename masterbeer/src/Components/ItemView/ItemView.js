import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOne } from "../../Redux/Actions/BotellaActions";
import { agregarAlCarrito } from "../../Redux/Actions/CarritoActions";
import { FormGroup } from "reactstrap";
import Modal from '../Common/ModalMB/ModalIV';
import useModal from '../Common/ModalMB/useModal';

import BK from "../Common/backButton";
function ItemView() {
  const params = useParams();
  const [Item, setItem] = useState();
  const [Cantidad, setCantidad] = useState(1);
  const dispatch = useDispatch();
  const { isShowing, toggle} = useModal();
  const [SetTextH, setSetTextH] = useState("Aceptar");

  useEffect(() => {
    getOne(params._id).then((data) => setItem(data));
  }, [params._id]);

  function addItem(e) {
    e.preventDefault();
    var a = Object.assign({}, Item);
    if (Cantidad <= Item.Stock) {
      a["Cantidad"] = Cantidad;
      toggle(true);
      if (Cantidad > 0) dispatch(agregarAlCarrito(a));
    } else {
      toggle(true);
      //alert("No hay suficientes en stock");
    }
  }

  if (!Item) return null;

  return (
    <React.Fragment>
      <div className="backButtondiv">
        <BK />
      </div>
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
          <label htmlFor="Cantidad">Cantidad</label>
          <select
            type="select"
            name="Cantidad"
            value={Cantidad}
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
      </div>
      <Modal 
        isShowing={isShowing}
        hide={toggle}
        Item={Item}
        textH={SetTextH}
        setSetTextH={setSetTextH}
        Cantidad={Cantidad}
        setCantidad={setCantidad}
      />
    </div>
    </React.Fragment>
  );
}

export default ItemView;
