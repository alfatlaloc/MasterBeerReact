import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { loadBotellas,eliminarBotella } from "../../Redux/Actions/BotellaActions";
import { newBotella } from "../../API/DefaultObjects/DefObjects";
import useModal from "../Common/ModalMB/useModalObject";
import Modal from "../Common/ModalMB/Modal";
import BotellaForm from "../Common/Forms/BotellaForm";

function BotellaTable({ BotellaArray ,toggle,changeObject}){
  const dispatch = useDispatch();

  return BotellaArray.map((elements) => {
    function deleteB(elements){
      
      dispatch(eliminarBotella(elements));
    }

    return (
      <tr key={elements._id}>
        <td>{elements.Nombre}</td>
        <td>{elements.Marca}</td>
        <td>{elements.Precio}</td>
        <td>{elements.Stock}</td>
        <td>{elements._id}</td>
        <td>
          <button className="editarButtonMB"onClick={function(event){ toggle(); changeObject(elements)}}>Editar</button>
          <button className="eliminarButtonMB"
          onClick={function(event){ deleteB(elements)}}>ELIMINAR</button>
        </td>
        <td>

        </td>
      </tr>

    );
  });
};

function ManageExtras() {
  const Botellas = useSelector((state) => state.Botellas);
  const { isShowing, toggle ,Obj,changeObject} = useModal();

  const dispatch = useDispatch();

  useEffect(() => {
    if(Botellas.length===0) dispatch(loadBotellas());
  });


  return (
    <div className="ManageAdmin" id="ManageBotella">
      <h2 className="subPageTitleH"> Administrar Extras</h2>
      <button className="buttonAddBotella" onClick={function(event){ toggle(); changeObject(newBotella)}}>
        Crear Botella
      </button>
      <div className="manageContainer container">
      <Table id="ManageBotellaTable" dark className="manageTable">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>ID</th>
            <th>MB</th>
          </tr>
        </thead>
        <tbody>
          <BotellaTable BotellaArray={Botellas}  toggle={toggle} changeObject={changeObject} dispatch={dispatch}/>
        </tbody>
      </Table>
    </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        obj={Obj}
        form={BotellaForm}
        textH={"Editar Extra"}
      />
    </div>
  );
}

export default ManageExtras;
