import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { eliminarDeCarrito ,vaciarCarrito} from "../../Redux/Actions/CarritoActions";
import {useHistory} from 'react-router-dom';

function CarritoArray({ CarritoArray}){
    const dispatch = useDispatch();

    return CarritoArray.map((elements) => {
      return (
          
        <tr key={elements._id}>
          <td>{elements.Nombre}</td>
          <td>{elements.Precio}</td>
          <td>{elements.Cantidad}</td>
          <td>{elements.Precio*elements.Cantidad}</td>
          <td>
            <button className="eliminarButtonMB"
            onClick={()=>{
              dispatch(eliminarDeCarrito(elements._id));
            }}>Eliminar</button>
          </td>
          <td>
          </td>
        </tr>
  
      );
    });
  };

function Carrito(){
    const Carrito = useSelector(state =>(state.Carrito));
    const dispatch = useDispatch();
    const [Total,setTotal] = useState(0);
    const history = useHistory();
    useEffect(() => {
      if(Carrito.length>0){
        setTotal(
        Carrito.reduce((acc, currProduct) => {
          const { Precio, Cantidad } = currProduct;
          const totalPrice = parseFloat(Precio) * Cantidad;
          return acc + totalPrice;
        }, 0)
        );
    }else{
      setTotal(0);
    }
    },[Carrito]);
    
    function procederPago(evt){
      evt.preventDefault();
      if(Carrito.length>0)
        history.push("/TicketCarrito");
    }
    return( 
        <div className="Carrito" id="Carrito">
            <div className="row no-gutters">
                <div className="col-8 carritoContent justify-content-center">
                    {(Carrito.length!==0) ?
                    <React.Fragment>
                    <Table dark id="carritoTable" className="col">
                        <thead>
                            <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th> $$$ </th>
                            </tr>
                        </thead>
                        <tbody>
                            <CarritoArray CarritoArray={Carrito}/>
                            </tbody>
                    </Table>
                    <button className="eliminarButtonMB"
                    onClick={() => {setTotal(0); 
                    dispatch(vaciarCarrito())}}>
                    Vaciar Carrito</button>
                    </React.Fragment>
                    : <React.Fragment>
                      <h3>Carrito Vacio</h3>
                    </React.Fragment>
                }
                </div> 

                <div className="col-4 carritoCuenta">
                    <h5>Subtotal</h5>
                    
                    <hr></hr>
                    
                    <h4>MXN $ {Total}</h4>
                    <button className="MBButton" onClick={procederPago}>Proceder al pago</button>
                </div>
            </div>
        </div>
    );
};

export default Carrito;