import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { newRecipiente } from "../../API/DefaultObjects/DefObjects";
import useModal from "../Common/ModalMB/useModalObject";
import Modal from "../Common/ModalMB/Modal";
import RecipienteForm from "../Common/Forms/RecipienteForm";
import { loadRecipientes ,eliminarRecipiente} from "../../Redux/Actions/RecipienteActions";
import BK from '../Common/backButton';
function RecipientesTable({Array,toggle,changeObject}){
  const dispatch=useDispatch();
  function deleteI(elements){
      
    dispatch(eliminarRecipiente(elements));
  }
  return Array.map((elements) => {
    return (
      <tr key={elements._id}>
        <td>{elements.Tipo}</td>
        <td>{`${elements.Volumen.Cantidad} ${elements.Volumen.Unidad}`}</td>
        <td>{elements.Material}</td>
        <td>{elements.Stock}</td>
        <td>{elements.AlcoholP + ' ml'}</td>
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

function ManageRecipiente() {
  const Recipientes = useSelector((state) => state.Recipientes);
  const { isShowing, toggle ,Obj,changeObject} = useModal();

  const dispatch = useDispatch();

  useEffect(() => {
    if(Recipientes.length===0) dispatch(loadRecipientes());
  });


  return (
    <div className="ManageAdmin" id="ManageIngredientes">
    <div className="backButtondiv">
        <BK />
      </div>
      <h2 className="subPageTitleH">Administrar Recipientes</h2>
      <Buscador /> 
      <button className="buttonAddBotella" onClick={function(event){ toggle(); changeObject(newRecipiente)}}>
        Agregar Recipiente
      </button>
      <div className="container ">
      <Table dark id="ManageBotellaTable" className="col manageTable">
        <thead>
          <tr>
            <th>Tipo</th>          
            <th>Volumen</th>
            <th>Material</th>
            <th>Stock</th>
            <th>Alcohol P</th>
            <th>ID</th>
            <th>MB</th>
          </tr>
        </thead>
        <tbody>
          <RecipientesTable Array={Recipientes}  toggle={toggle} changeObject={changeObject}/>
        </tbody>
      </Table>
    </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        Obj={Obj}
        form={RecipienteForm}
        textH={"Editar Recipiente"}
      />
    </div>
  );
}

export default ManageRecipiente;
