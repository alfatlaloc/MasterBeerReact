import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { loadIngredientes,eliminarIngrediente} from "../../Redux/Actions/IngredienteActions";
import { newIngrediente } from "../../API/DefaultObjects/DefObjects";
import useModal from "../Common/ModalMB/useModalObject";
import Modal from "../Common/ModalMB/Modal";
import IngredienteForm from "../Common/Forms/IngredienteForm";
import BK from '../Common/backButton';
function IngredientesTable({IngredienteArray,toggle,changeObject}){
  const dispatch=useDispatch();
  function deleteI(elements){
      
    dispatch(eliminarIngrediente(elements));
  }
  return IngredienteArray.map((elements) => {
    return (
      <tr key={elements._id}>
        <td>{elements.Nombre}</td>
        <td>{elements.Stock}</td>
        <td>{elements.Precio}</td>
        <td>{elements._id}</td>
        <td>
          <button className="editarButtonMB"onClick={function(event){ toggle(); changeObject(elements)}}>Editar</button>
          <button className="eliminarButtonMB"
          onClick={function(event){ deleteI(elements)}}>ELIMINAR</button>
        </td>
        <td>
        </td>
      </tr>
    );
  });
};

const Buscador = () => {
  return <div></div>;
};

function ManageIngredientes() {
  const Ingredientes = useSelector((state) => state.Ingrediente);
  const { isShowing, toggle ,Obj,changeObject} = useModal();

  const dispatch = useDispatch();

  useEffect(() => {
    if(Ingredientes.length===0) dispatch(loadIngredientes());
  });


  return (
    <div className="ManageAdmin" id="ManageBotella">
    <div className="backButtondiv">
        <BK />
      </div>
      <h2 className="subPageTitleH">Administrar Ingredientes</h2>
      <Buscador /> 
      <button className="buttonAddBotella" onClick={function(event){ toggle(); changeObject(newIngrediente)}}>
        Crear Ingrediente
      </button>
      <div className="container ">
      <Table id="ManageBotellaTable" dark className="manageTable">
        <thead>
          <tr>
            <th>Nombre</th>   
            <th>Stock</th>        
            <th>Precio</th>
            <th>ID</th>
            <th>MB</th>
          </tr>
        </thead>
        <tbody>
          <IngredientesTable IngredienteArray={Ingredientes}  toggle={toggle} changeObject={changeObject}/>
        </tbody>
      </Table>
    </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        Obj={Obj}
        form={IngredienteForm}
        textH={"Editar Ingrediente"}
      />
    </div>
  );
}

export default ManageIngredientes;
