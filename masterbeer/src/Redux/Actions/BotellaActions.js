import * as types from "./actionTypes";
import * as BotellaApi from "../../API/BotellaAPI";

export function crearBotella(data) {
  return function (dispatch) {
    return BotellaApi.crearBotella(data)
      .then((Botella) => {
        dispatch({ type: types.CREATE_BOTELLA, Botella });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function getOne(_id){
    let Botella = await BotellaApi.getOne(_id).catch((error) => {
      throw error;
    });;
    return Botella;
}

export function loadBotellaSuccess(Botellas) {
  return { type: types.LOAD_BOTELLAS_SUCCESS, Botellas };
}

export function loadBotellas() {
  return function (dispatch) {
    return BotellaApi.getBotellas()
      .then((Botellas) => {
        dispatch(loadBotellaSuccess(Botellas));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function eliminarBotellaO(Botella) {
  return { type: types.ELIMINAR_BOTELLA,Botella};
}

export function eliminarBotella(Botella) {
  return function (dispatch) {
    dispatch(eliminarBotellaO(Botella));
    return BotellaApi.eliminarBotella(Botella._id);
  }
}
