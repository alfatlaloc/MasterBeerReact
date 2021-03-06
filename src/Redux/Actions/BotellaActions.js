import * as types from "./actionTypes";
import * as BotellaApi from "../../API/BotellaAPI";

export function crearBotella(data) {
    return function(dispatch) {
        return BotellaApi.crearBotella(data)
            .then((Botella) => {
                dispatch({ type: types.CREATE_BOTELLA, Botella });
            })
            .catch((error) => {
                throw error;
            });
    };
}

export function updateBotella(data) {
    return function(dispatch) {
        return BotellaApi.updateBotella(data)
            .then((Botella) => {
                dispatch({ type: types.UPDATE_BOTELLA, Botella })
            })
            .catch((error) => {
                throw error;
            });
    };
}

export async function getOne(_id) {
    let Botella = await BotellaApi.getOne(_id).catch((error) => {
        throw error;
    });;
    return Botella;
}

export function loadBotellaSuccess(Botellas) {
    return { type: types.LOAD_BOTELLAS_SUCCESS, Botellas };
}

export const loadBotellas = () => {
    return function(dispatch) {
        return (async() => {
            const data = await BotellaApi.getBotellas();
            console.log(data);
            dispatch(loadBotellaSuccess(data));
        })();
    }
}

/*
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
}*/

export function eliminarBotellaO(Botella) {
    return { type: types.ELIMINAR_BOTELLA, Botella };
}

export function eliminarBotella(Botella) {
    return function(dispatch) {
        dispatch(eliminarBotellaO(Botella));
        return BotellaApi.eliminarBotella(Botella._id);
    }
}