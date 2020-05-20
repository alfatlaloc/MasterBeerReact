import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBotellas } from "../../Redux/Actions/BotellaActions";
import { agregarAlCarrito } from "../../Redux/Actions/CarritoActions";

//Ya es un hook
//En este caso reprentara el arreglo de botellas en Catalogo
function BotellaList({ Botellas }) {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="BotellasList row mt-8 justify-content-center">
        {Botellas.map((elements) => {
          return (
            <div className="cardMB mx-2 mb-3" key={elements.Nombre}>
              <div className="card-header">
                <p>{elements.Nombre}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <img
                    alt=""
                    src={require(`../../img/Botellas/${elements.Nombre}.png`)}
                  />
                </li>
                <li className="list-group-item">{elements.Precio}</li>
                <li className="list-group-item">{elements.Marca}</li>
                <li className="list-group-item">{elements.Stock}</li>
                <div>
                  <button
                    onClick={() => {
                      dispatch(agregarAlCarrito(elements));
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//No es una clase simplemente esta definiendo las cartas donde iran las botellas y bebidas
//Es un componente de React que no representa nada de el diagrama de clases

function Catalogo() {
  const Botellas = useSelector((state) => state.Botellas);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Botellas.length === 0) dispatch(loadBotellas());
  });

  return (
    <div className="Catalogo">
      <h2>Catálogo MasterBeer</h2>
      <div>
        <BotellaList Botellas={Botellas} />
      </div>
    </div>
  );
}

export default Catalogo;
