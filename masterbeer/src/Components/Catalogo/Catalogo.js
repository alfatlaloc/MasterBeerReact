import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as botellaActions from '../../Redux/Actions/BotellaActions'; 

//Tambien es una "clase" pero con el operador flecha
//En este caso reprentara el arreglo de botellas en Catalogo
const BotellaList = ({Botellas}) =>(
    <div className="container">
        <div className="BotellasList row mt-8 justify-content-center">
            {Botellas.map(elements => 
                {
                    return( <div className="cardMB mx-2 mb-3" key={elements.Nombre}>
                    <div className="card-header">
                        <p>{elements.Nombre}</p>
                    </div>
                        <ul className="list-group list-group-flush">
                        
                            <li className="list-group-item">
                                <img alt="" src={require(`../../img/Botellas/${elements.Nombre}.png`)}/>
                            </li>
                            <li className="list-group-item">{elements.Precio}</li>
                            <li className="list-group-item">{elements.Marca}</li>
                            <li className="list-group-item">{elements.Stock}</li>
                            <li className=""><button>Agregar al carrito</button></li>
                        </ul>
                </div>
                )
                }
                )
            }
        </div>
    </div>
);


//No es una clase simplemente esta definiendo las cartas donde iran las botellas y bebidas
//Es un componente de React que no representa nada de el diagrama de clases

class Catalogo extends React.Component{

    componentDidMount() {
        if (this.props.Botellas.length === 0) {
          this.props.actions.loadBotellas().catch(error => {
            alert("Loading Botellas failed" + error);
          });
        }
    }

    render (){
        return(
            <div className="Catalogo">
                <h2>Catálogo MasterBeer</h2>
                <div>
                    <h3>Bebidas</h3>
                    <BotellaList Botellas={this.props.Botellas}/>
                </div>
            </div>
        );
    };
}

Catalogo.propTypes = {
    Botellas: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return{
      Botellas: state.Botellas
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        loadBotellas: bindActionCreators(botellaActions.loadBotellas, dispatch)
      }
    };
  }
export default connect(mapStateToProps,mapDispatchToProps)(Catalogo);