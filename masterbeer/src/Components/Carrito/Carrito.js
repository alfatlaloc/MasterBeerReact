import React,{useEffect,useReducer,useState} from 'react';

function Carrito(){
return( 
    <div className="Carrito">
        <div className="row">
            <div className="col-8 carritoContent justify-content-center">
                holakks
            </div>
            <div className="col-4 carritoCuenta">
                <h5>Subtotal</h5>
                <hr></hr>
                <h4>Total</h4>
                <button>Proceder al pago</button>
            </div>
        </div>
    </div>
);
};

export default Carrito;