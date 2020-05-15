import React,{useEffect,useReducer,useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { loadBotellas } from "../../Redux/Actions/BotellaActions";
import useModal from "../Common/ModalMB/useModalObject";



function CarritoArray({ CarritoArray ,toggle,changeObject}){
    const dispatch = useDispatch();
    return CarritoArray.map((elements) => {
      return (
          
        <tr key={elements._id}>
          <td>{elements.Nombre}</td>
          <td>{elements.Precio}</td>
          <td>Cantidad</td>
          <td>
            <button>ELIMINAR</button>
          </td>
          <td>
  
          </td>
        </tr>
  
      );
    });
  };

function Carrito(){
    const Botellas = useSelector((state) => state.Botellas);
    const { isShowing, toggle ,Obj,changeObject} = useModal();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(Botellas.length===0) dispatch(loadBotellas());
    });
    
    return( 
        <div className="Carrito" id="Carrito">
            <div className="row">
                <div className="col-8 carritoContent justify-content-center">
                    
                    <Table dark className="col">
                        <thead>
                            <tr>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <CarritoArray CarritoArray={Botellas}  toggle={toggle} changeObject={changeObject} dispatch={dispatch}/>
                            </tbody>
                    </Table>
                </div>
                <div className="col-4 carritoCuenta">
                    <h5>Subtotal</h5>
                    
                    <hr></hr>
                    
                    <h4>Total MXN</h4>
                    <button>Proceder al pago</button>
                </div>
            </div>
        </div>
    );
};

export default Carrito;