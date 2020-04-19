import React from 'react';
import Botella from'./Botella';

const BotellasArray = [new Botella("XX",35.45,10),new Botella("Stella",40.20,15),
new Botella("Corona",32,50),new Botella("Bud Light",34,15),new Botella("Tecate",32.50,26)];

//Tambien es una "clase" pero con el operador flecha
//En este caso reprentara el arreglo de botellas en Catalogo
const BotellaList = (props) =>(
    <div className="container">
        <div className="BotellasList row mt-8 justify-content-center">
            {BotellasArray.map(elements => <Card {...elements}/>)}
        </div>
    </div>
);

//No es una clase simplemente esta definiendo las cartas donde iran las botellas y bebidas
//Es un componente de React que no representa nada de el diagrama de clases
class Card extends React.Component{
    render(){
        const elements = this.props; /* */
        return(
            <div className="cardMB mx-2 mb-3">
                <div className="card-header">
                    <p>{elements.Nombre}</p>
                </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{elements.Precio}</li>
                        <li className="list-group-item">{elements.Stock}</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className=""><button>Agregar al carrito</button></li>
                    </ul>
            </div>
        );
    };
}

class Catalogo extends React.Component{
    render (){
        return(
            <div className="Catalogo">s
                <h2>Catálogo MasterBeer</h2>
                <div>
                    <h3>Bebidas</h3>
                    <BotellaList />
                    <p>Hola{}</p>
                </div>
            </div>
        );
    };
}
export default Catalogo;