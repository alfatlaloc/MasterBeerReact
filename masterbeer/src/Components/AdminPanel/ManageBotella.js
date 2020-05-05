import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import { Table } from 'reactstrap';
import {loadBotellas} from '../../Redux/Actions/BotellaActions'; 
import {newBotella} from '../../API/DefaultObjects/BotellaObject';
import useModal from '../Common/ModalMB/useModal';
import Modal from '../Common/ModalMB/Modal';
import BotellaForm from '../Common/Forms/BotellaForm';

const BotellaTable = ({BotellaArray}) =>{
    return(
      BotellaArray.map(elements =>{
        return(
        <tr key={elements.Nombre}>
          <td>{elements.Nombre}</td>
          <td>{elements.Marca}</td>
          <td>{elements.Precio}</td>
          <td><button>Editar</button></td>
        </tr>
        );
      }
  ))
}

const Buscador = () =>{
  return(
    <div>

    </div>
  );
}

function ManageBotella(){

  const Botellas = useSelector(state => state.Botellas);
  const Botella = useSelector(()=>newBotella);
  const {isShowing, toggle} = useModal();

  const dispatch = useDispatch();

    useEffect(() => {
        if (Botellas.length === 0)
          dispatch(loadBotellas());
      });

        return(
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
                    <BotellaTable BotellaArray={Botellas}/>
                  </tbody>
                  
                </Table>
                <button className="button-default" onClick={toggle}>Show Modal</button>
                <Modal isShowing={isShowing} hide={toggle} form={BotellaForm} textH={"Agregar Botella"}/>
            </div>
      );
}

export default ManageBotella;