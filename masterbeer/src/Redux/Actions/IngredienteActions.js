import * as types from "./actionTypes";
import * as IngredienteApi from "../../API/IngredienteAPI";

export function crearIngrediente(data) {
  return function (dispatch) {
    return IngredienteApi.crearIngrediente(data)
      .then((Ingrediente) => {
        dispatch({ type: types.CREATE_INGREDIENTE, Ingrediente });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updateIngrediente(data) {
  return function (dispatch) {
    return IngredienteApi.updateIngrediente(data)
      .then((Ingrediente) => {
        dispatch({ type: types.UPDATE_INGREDIENTE, Ingrediente });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadIngredienteSuccess(Ingredientes) {
  return { type: types.LOAD_INGREDIENTE_SUCCESS, Ingredientes };
}

export function loadIngredientes() {
  return function (dispatch) {
    return IngredienteApi.getIngredientes()
      .then((Ingredientes) => {
        dispatch(loadIngredienteSuccess(Ingredientes));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function eliminarIngredienteO(Ingrediente) {
  return { type: types.ELIMINAR_INGREDIENTE, Ingrediente };
}

export function eliminarIngrediente(Ingrediente) {
  return function (dispatch) {
    dispatch(eliminarIngredienteO(Ingrediente));
    return IngredienteApi.eliminarIngrediente(Ingrediente._id);
  };
}
