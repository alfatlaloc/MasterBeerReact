import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { agregarAlCarrito } from "../../../Redux/Actions/CarritoActions";


function Mostrar(hide,Cantidad,Item,setSetTextH){
  let d="";
  const dispatch = useDispatch();

  function addItem(e,Cantidad) {
    e.preventDefault();
    var a = Object.assign({}, Item);
    a["Cantidad"] = Cantidad;
    dispatch(agregarAlCarrito(a));
  }

  if(Cantidad>2){
    d+="s";
  }
  if(Cantidad>Item.Stock){
    setSetTextH("Cancelar");
    return(
      <div>
      <h2 className="subPageTitleH">
        <p> No se pudo agregar {Cantidad} {Item.Tipo}{d} </p>
        <p>{Item.Nombre}</p>
        <p> ¿Desea agregar {Item.Stock}? </p>
      </h2>
      <button
          className="modalClose"
          onClick={(e) => {
            hide(false);
            addItem(e,Item.Stock);
          }}
        >
          Añadir {Item.Stock}
        </button>
      </div>
      
    )}
  return(
    <div>
    <h2 className="subPageTitleH"> 
    <p>Agregaste {Cantidad} {Item.Tipo}{d}</p>
    <p>{Item.Nombre}</p>
    </h2>
    <Link to={`/Carrito`}>
          <button type="button" className="modalClose">Ir al carrito</button>
        </Link>
    </div>
  )
}

const Modal = ({ isShowing, hide ,Item,textH,setSetTextH,Cantidad}) => isShowing ? ReactDOM.createPortal(
    <div className="row modal-overlay justify-content-center" tabIndex={-1}>
      <div className="modalVContent justify-content-center">
        {Mostrar(hide,Cantidad,Item,setSetTextH)}
        <p></p>
        <button type="button"
        data-dismiss="modal"
        aria-label="Close"
        onClick={hide}
        className="modalClose"
        >
        {textH}
        </button>
        
      </div>
    </div>
  , document.body
) : null;

export default Modal;