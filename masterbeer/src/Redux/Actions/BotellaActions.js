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

export function eliminarBotella(_id) {
  alert(_id);
  return function (dispatch) {
    return BotellaApi.eliminarBotella(_id)
      .then((Botella) => {
        dispatch({ type: types.ELIMINAR_BOTELLA, Botella });
      })
      .catch((error) => {
        throw error;
      });
  };
}
