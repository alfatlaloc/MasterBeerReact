import React from 'react';

let Pedidos = [
{_id:"5ebc92652b9fed259d618102",status:"Pendiente",tipoEntrega:"BAR",FechaE:"2020-06-14"},
{_id:"5ebc92652b9fed259d618103",status:"Pendiente",tipoEntrega:"BAR",FechaE:"2020-06-15"},
{_id:"5ebc92652b9fed259d618104",status:"Pendiente",tipoEntrega:"BAR",FechaE:"2020-06-16"},
{_id:"5ebc92652b9fed259d618105",status:"Pendiente",tipoEntrega:"BAR",FechaE:"2020-06-14"},
];
function GestorPedidos () {

    return(
        <div className="Pedidos">
            <h2>Gestor de pedidos</h2>
            <div className="break"></div>
                {Pedidos.map(e=>{
                    return <div className="PedidoA">
                        <p>{e._id}</p>
                        <p>{e.status}</p>
                        <p>{e.tipoEntrega}</p>
                        <p>{e.FechaE}</p>
                        <button className="MBButton"> Atender Pedido</button>
                        <br></br>
                        <button className="eliminarButtonMB"> Eliminar Pedido</button>
                    </div>
                })}

        </div>
    );

}

export default GestorPedidos;