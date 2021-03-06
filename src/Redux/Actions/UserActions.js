import * as types from "./actionTypes";
import * as UsuarioApi from "../../API/UsuarioAPI";

export function getUserByCorreo(Correo, Contraseña) {
  return function (dispatch) {
    return UsuarioApi.getUserByCorreo(Correo, Contraseña)
      .then((Usuario) => {
        dispatch(getUserByCorreoSucess(Usuario));
        dispatch({type : types.LOG_IN,Usuario});
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function crearUsuario(data) {
  return function (dispatch) {
    return UsuarioApi.crearUsuario(data)
      .then((Usuario) => {
        dispatch({ type: types.CREATE_USUARIO, Usuario });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function crearBartender(data) {
    return UsuarioApi.crearBartender(data)
      .catch((error) => {
        throw error;
      });
}

export function logOut()
{
  return function (dispatch){
    dispatch({type:types.LOG_OUT});
  }
}

export function getUserByCorreoSucess(Usuario) {
  return { type: types.GET_USER_BY_CORREO, Usuario };
}

export function loadUsuarioSuccess(Usuarios) {
  return { type: types.LOAD_USUARIOS_SUCCESS, Usuarios };
}

export function loadUsuarios() {
  return function (dispatch) {
    return UsuarioApi.getUsuarios()
      .then((Usuarios) => {
        dispatch(loadUsuarioSuccess(Usuarios));
      })
      .catch((error) => {
        throw error;
      });
  };
}
