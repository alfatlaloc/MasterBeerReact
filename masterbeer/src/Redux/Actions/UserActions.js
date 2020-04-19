import * as types from './actionTypes';

export function crearUsuario(Usuario)
{
    return {type : types.CREATE_USUARIO , Usuario };
}
