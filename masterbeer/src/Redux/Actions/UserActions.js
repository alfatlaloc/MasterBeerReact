import * as types from './actionTypes';
import * as UsuarioApi from '../../API/UsuarioAPI';

export function crearUsuario(Usuario)
{
    return {type : types.CREATE_USUARIO , Usuario };
}

export function getUserByCorreo(Correo,Contraseña)
{
  return function(dispatch)
  {
    return UsuarioApi
    .getUserByCorreo(Correo,Contraseña)
    .then(Usuario=>{
      dispatch(getUserByCorreoSucess(Usuario));
    })
    .catch(error=>{throw error;});
  };
}

export function getUserByCorreoSucess(Usuario)
{
  return {type: types.GET_USER_BY_CORREO,Usuario}
}

export function loadUsuarioSuccess(Usuarios) {
    return { type: types.LOAD_USUARIOS_SUCCESS, Usuarios };
}

export function loadUsuarios() {
    return function(dispatch) {
      return UsuarioApi
        .getUsuarios()
        .then(Usuarios => {
          dispatch(loadUsuarioSuccess(Usuarios));
        })
        .catch(error => {
          throw error;
        });
    };
  }

