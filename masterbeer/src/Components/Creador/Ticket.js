import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { agregarAlCarrito } from "../../Redux/Actions/CarritoActions";
/*
let Bebida = {
  Tipo: "Trago",
  Recipiente: {
    Tipo: "Jarra",
    Volumen: { Cantidad: 100, Unidad: "ml" },
  },
  VolA: 50, //QUe tanto alcohol contiene
  BotellaA: [
    { Nombre: "Botella1", id: 1 },
    { Nombre: "Botella3", id: 3 },
    { Nombre: "Botella2", id: 2 },
  ], //Cosas que lleva
  IngredienteArray: [
    { Nombre: "Ing1", id: 21 },
    { Nombre: "Ing2", id: 22 },
    { Nombre: "Ing3", id: 23 },
  ],
  Extras: [
    { Nombre: "Extra1", id: 31 },
    { Nombre: "Extra2", id: 32 },
    { Nombre: "Extra3", id: 33 },
  ],

  Descripcion: "Que quede balanceado", // Como quiere las botellas
  DescripcionIn: "Que queden al tiro", // Como quiere los Ingredientes
  Precio: 100,
  Cantidad: 12,
  By: "elkks",
  Nombre: "tragin",
};
*/

function Ticket({ Bebida }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Bebida) dispatch(agregarAlCarrito(Bebida));
  }, [Bebida,dispatch]);
  return (
    <div className="Ticket">
      <h2 className="titleTicket">Ticket</h2>
      <div className="break"></div>
      <div className="TicketElement">
        {" "}
        <p>{`Nombre: ${Bebida.Nombre}`}</p>{" "}
      </div>
      <div className="TicketElement">
        {" "}
        <p>{`Tipo de Recipiente: ${Bebida.Recipiente.Tipo} de ${Bebida.Recipiente.Volumen.Cantidad} ${Bebida.Recipiente.Volumen.Unidad}`}</p>{" "}
      </div>

      <div className="TicketElement">
        <p>Contiene:</p>
        {Bebida.BotellaA.length > 0
          ? Bebida.BotellaA.map((elements) => {
              return <p>{elements.Nombre}</p>;
            })
          : null}
        <hr></hr>
        <p>Descripción: {Bebida.Descripcion}</p>
      </div>

      <div className="TicketElement">
        <p>Ingredientes:</p>
        {Bebida.IngredienteArray.length > 0
          ? Bebida.IngredienteArray.map((elements) => {
              return <p>{elements.Nombre}</p>;
            })
          : null}
        <hr></hr>
        <p>Descripción: {Bebida.DescripcionIn}</p>
      </div>

      <div className="TicketElement">
        <p>Extras:</p>
        {Bebida.Extras.length > 0
          ? Bebida.Extras.map((elements) => {
              return <p>{elements.Nombre}</p>;
            })
          : null}
      </div>
      <div className="break"></div>
      <div className="TicketElement">
        <p>{`Cantidad: ${Bebida.Cantidad}`}</p>
      </div>
      <div className="break"></div>
      <div className="TicketElement">
        <p>{`Precio U: ${Bebida.Precio}`}</p>
      </div>
      <div className="break"></div>
      <div className="TicketElement">
        <p>{`Total: ${Bebida.Precio * Bebida.Cantidad} mxn`}</p>
      </div>
      <div className="break"></div>
      <div className="TicketElement">
        <p>{`Creador por ${Bebida.By}`}</p>
      </div>
    </div>
  );
}

export default Ticket;
