import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
//import { loadIngrediente,eliminarIngrediente } from "../../Redux/Actions/IngredienteActions";
//import { newIngrediente } from "../../API/DefaultObjects/IngredienteObject";
import useModal from "../Common/ModalMB/useModalObject";
import Modal from "../Common/ModalMB/Modal";
import IngredienteForm from "../Common/Forms/IngredienteForm";

function IngredientesTable({ IngredienteArray ,toggle,changeObject}){
  const dispatch = useDispatch();

  return IngredienteArray.map((elements) => {
    return (
      <tr key={elements._id}>
        <td>{elements.Nombre}</td>
        <td>{elements.Marca}</td>
        <td>{elements.Precio}</td>
        <td>{elements._id}</td>
        <td>
          <button className="editarIngredienteButton"onClick={function(event){ toggle(); changeObject(elements)}}>Editar</button>
          <button className="eliminarIngredienteButton"
          /*onClick={function(event){ dispatch(eliminarIngrediente(elements));}}*/>ELIMINAR</button>
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
  const Ingredientes = useSelector((state) => state.Botellas);
  const { isShowing, toggle ,Obj,changeObject} = useModal();

  const dispatch = useDispatch();

  useEffect(() => {
    //if(Ingredientes.length===0) dispatch(loadIngredientes());
  });


  return (
    <div className="ManageIngredientes" id="ManageIngredientes">
      <h2>Manage Ingredientes</h2>
      <Buscador /> 
      <button className="buttonAddBotella" onClick={function(event){ toggle(); /*changeObject(newBotella)*/}}>
        Crear Ingrediente
      </button>
      <div class="container ">
      <Table dark className="col">
        <thead>
          <tr>
            <th>Nombre</th>          
            <th>Precio</th>
            <th>ID</th>
            <th>MB</th>
          </tr>
        </thead>
        <tbody>
          <IngredientesTable IngredienteArray={Ingredientes}  toggle={toggle} changeObject={changeObject} dispatch={dispatch}/>
        </tbody>
      </Table>
    </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        obj={Obj}
        form={IngredienteForm}
        textH={"Editar Ingrediente"}
      />
    </div>
  );
}

export default ManageIngredientes;
