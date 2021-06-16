import * as types from './actionTypes';
import * as RecipienteApi from '../../API/RecipienteAPI';

export function crearRecipiente(data)
{
  return function(dispatch){
    return RecipienteApi
      .crearRecipiente(data)
      .then(Recipiente => {
        dispatch({type : types.CREATE_RECIPIENTE ,Recipiente})
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateRecipiente(data)
{
  return function (dispatch){
    return RecipienteApi.updateRecipiente(data)
    .then((Recipiente) => {
      dispatch({type: types.UPDATE_RECIPIENTE,Recipiente})
    })
    .catch((error) => {
      throw error;
    });
  };
}

export function loadRecipienteSuccess(Recipientes) {
    return { type: types.LOAD_RECIPIENTE_SUCCESS,Recipientes };
}

export function loadRecipientes() {
    return function(dispatch) {
      return RecipienteApi
        .getRecipientes()
        .then(Recipientes => {
          dispatch(loadRecipienteSuccess(Recipientes));
        })
        .catch(error => {
          throw error;
        });
    };
  }

  export function eliminarRecipienteO(Recipiente) {
    return { type: types.ELIMINAR_RECIPIENTE,Recipiente};
  }
  
  export function eliminarRecipiente(Recipiente) {
    return function (dispatch) {
      dispatch(eliminarRecipienteO(Recipiente));
      return RecipienteApi.eliminarRecipiente(Recipiente._id);
    }
  }