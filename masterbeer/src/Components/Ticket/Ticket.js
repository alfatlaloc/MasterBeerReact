import React,{useEffect} from 'react';

function Ticket ({Bebida}){

    return(
        <div className="Ticket">
            
            <p>Cantidad:{Bebida.Cantidad}</p>
        </div>
    );
}

export default Ticket;