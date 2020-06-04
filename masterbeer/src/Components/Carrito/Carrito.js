import React,{useEffect,useReducer,useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { agregarAlCarrito ,vaciarCarrito} from "../../Redux/Actions/CarritoActions";
import useModal from "../Common/ModalMB/useModalObject";



function CarritoArray({ CarritoArray}){
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
    const Test = useSelector(state => {console.log(state)});
    const Carrito = useSelector(state =>(state.Carrito));
    const dispatch = useDispatch();
    useEffect(() => {
      //Carrito.push(2);
        if(Carrito.length===0) {
          console.log(Carrito);
        }
          
    });
    
    return( 
        <div className="Carrito" id="Carrito">
            <div className="row no-gutters">
                <div className="col-8 carritoContent justify-content-center">
                    {(Carrito.length!==0) ?
                    <React.Fragment>
                    <Table dark className="col">
                        <thead>
                            <tr>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <CarritoArray CarritoArray={Carrito}/>
                            </tbody>
                    </Table>
                    <button onClick={() =>dispatch(vaciarCarrito())}>Vaciar Carrito</button>
                    </React.Fragment>
                    : <React.Fragment>
                      <h3>Carrito Vacio</h3>
                    </React.Fragment>
                }
                </div> 

                <div className="col-4 carritoCuenta">
                    <h5>Subtotal</h5>
                    
                    <hr></hr>
                    
                    <h4>Total MXN</h4>
                    <button className="MBButton">Proceder al pago</button>
                </div>
            </div>
        </div>
    );
};

export default Carrito;