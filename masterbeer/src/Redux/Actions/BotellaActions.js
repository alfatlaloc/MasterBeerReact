import * as types from './actionTypes';
import * as BotellaApi from '../../API/BotellaAPI';

export function crearBotella(Botella)
{
    return {type : types.CREATE_BOTELLA , Botella };
}

export function loadBotellaSuccess(Botellas) {
    return { type: types.LOAD_BOTELLAS_SUCCESS, Botellas };
}

export function loadBotellas() {
    return function(dispatch) {
      return BotellaApi
        .getBotellas()
        .then(Botellas => {
          dispatch(loadBotellaSuccess(Botellas));
        })
        .catch(error => {
          throw error;
        });
    };
  }
