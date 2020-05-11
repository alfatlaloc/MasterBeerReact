import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { loadBotellas } from "../../Redux/Actions/BotellaActions";
import { newBotella } from "../../API/DefaultObjects/BotellaObject";
import useModal from "../Common/ModalMB/useModal";
import Modal from "../Common/ModalMB/Modal";
import BotellaForm from "../Common/Forms/BotellaForm";

function BotellaTable({ BotellaArray ,isShowing}){
  return BotellaArray.map((elements) => {
    return (
      <tr key={elements.Nombre}>
        <td>{elements.Nombre}</td>
        <td>{elements.Marca}</td>
        <td>{elements.Precio}</td>
        <td>{elements._id}</td>
        <td>
          <button onClick={isShowing}>Editar</button>
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

function ManageBotella() {
  const Botellas = useSelector((state) => state.Botellas);
  const Botella = useSelector(() => newBotella);
  const { isShowing, toggle } = useModal();

  const dispatch = useDispatch();

  useEffect(() => {
    if (Botellas.length === 0) dispatch(loadBotellas());
  });


  return (
    <div className="ManageBotella" id="ManageBotella">
      <h2>Manage Botellas</h2>
      <Buscador />
      <Table dark className="col">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>MB</th>
          </tr>
        </thead>
        <tbody>
          <BotellaTable BotellaArray={Botellas}  isShowing={toggle}/>
        </tbody>
      </Table>
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        form={BotellaForm}
        textH={"Editar Botella"}
      />
    </div>
  );
}

export default ManageBotella;
