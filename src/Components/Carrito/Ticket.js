import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Ticket() {
  const Carrito = useSelector((state) => state.Carrito);
  const [Total, setTotal] = useState(0);
    const Session = useSelector(state => state.Session);
  useEffect(() => {
    if (Carrito.length > 0) {
      setTotal(
        Carrito.reduce((acc, currProduct) => {
          const { Precio, Cantidad } = currProduct;
          const totalPrice = parseFloat(Precio) * Cantidad;
          return acc + totalPrice;
        }, 0)
      );
    } else {
      setTotal(0);
    }
  }, [Carrito]);

  return (
    <div className="TicketA">
      <div className="Ticket">
        <h2 className="titleTicket">Ticket</h2>
        <div className="break"></div>
        <div className="TicketElement">
          <p>ID del Pedido: 5ebc92652b9fed259d618106</p>
        </div>
        <div className="break"></div>
        <div className="TicketElement">
          <p>{`Hecho por: ${Session.UserName}`}</p>
        </div>
        
        <div className="break"></div>
        <div className="TicketElement">
          <div className="proTicket">
            <p>Productos</p>
          </div>
          {Carrito.length > 0
            ? Carrito.map((elements) => {
                return (
                  <React.Fragment>
                    <hr></hr>
                    <p>{elements.Nombre}</p>
                    <p>{`Precio Unitario: $ ${elements.Precio} mxn`}</p>
                    <p>Cantidad:{elements.Cantidad}</p>
                    <p>{`Subtotal: $ ${
                      elements.Precio * elements.Cantidad
                    } mxn`}</p>
                  </React.Fragment>
                );
              })
            : null}
        </div>

        <div className="break"></div>
        <div className="TicketElement pagoTicket">
          <p>{`Total a pagar $ ${Total} mxn`}</p>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
