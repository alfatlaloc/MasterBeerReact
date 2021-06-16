import * as types from './actionTypes';
import * as ExtraApi from '../../API/ExtraAPI';

export function crearExtra(data)
{
  return function(dispatch){
    return ExtraApi
      .crearExtra(data)
      .then(Extra => {
        dispatch({type : types.CREATE_EXTRA ,Extra})
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateExtra(data)
{
  return function (dispatch){
    return ExtraApi.updateExtra(data)
    .then((Extra) => {
      dispatch({type: types.UPDATE_EXTRA,Extra})
    })
    .catch((error) => {
      throw error;
    });
  };
}

export function loadExtraSuccess(Extras) {
    return { type: types.LOAD_EXTRAS_SUCCESS,Extras };
}

export function loadExtras() {
    return function(dispatch) {
      return ExtraApi
        .getExtras()
        .then(Extras => {
          dispatch(loadExtraSuccess(Extras));
        })
        .catch(error => {
          throw error;
        });
    };
  }

  export function eliminarExtraO(Extra) {
    return { type: types.ELIMINAR_EXTRA,Extra};
  }
  
  export function eliminarExtra(Extra) {
    return function (dispatch) {
      dispatch(eliminarExtraO(Extra));
      return ExtraApi.eliminarExtra(Extra._id);
    }
  }