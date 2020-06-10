import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { newExtra } from "../../API/DefaultObjects/DefObjects";
import useModal from "../Common/ModalMB/useModalObject";
import Modal from "../Common/ModalMB/Modal";
import ExtraForm from "../Common/Forms/ExtraForm";
import { loadExtras ,eliminarExtra} from "../../Redux/Actions/ExtraActions";

function ExtrasTable({Array,toggle,changeObject}){
  const dispatch=useDispatch();
  function deleteI(elements){
      
    dispatch(eliminarExtra(elements));
  }
  return Array.map((elements) => {
    return (
      <tr key={elements._id}>
        <td>{elements.Nombre}</td>
        <td>{`$ ${elements.Precio} MXN`}</td>
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

function ManageExtra() {
  const Extras = useSelector((state) => state.Extras);
  const { isShowing, toggle ,Obj,changeObject} = useModal();

  const dispatch = useDispatch();

  useEffect(() => {
    if(Extras.length===0) dispatch(loadExtras());
  },[]);


  return (
    <div className="ManageAdmin" id="ManageIngredientes">
      <h2 className="subPageTitleH">Manage Extras</h2>
      <Buscador /> 
      <button className="buttonAddBotella" onClick={function(event){ toggle(); changeObject(newExtra)}}>
        Agregar Extra
      </button>
      <div className="container ">
      <Table dark id="ManageBotellaTable" className="col manageTable">
        <thead>
          <tr>
            <th>Nombre</th>          
            <th>Precio</th>
            <th>ID</th>
            <th>MB</th>
          </tr>
        </thead>
        <tbody>
          <ExtrasTable Array={Extras}  toggle={toggle} changeObject={changeObject}/>
        </tbody>
      </Table>
    </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        Obj={Obj}
        form={ExtraForm}
        textH={"Editar Extra"}
      />
    </div>
  );
}

export default ManageExtra;
