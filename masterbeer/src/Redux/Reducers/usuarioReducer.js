import * as types from '../Actions/actionTypes';

export default function usuarioReducer(state =[],action)
{
    switch(action.type)
    {
        case types.CREATE_USUARIO:
            return state.push(action.payload);
        case types.LOAD_USUARIOS_SUCCESS:
            return action.Usuarios;
        case types.GET_USER_BY_CORREO:
            return action.Usuario;
        default:
            return state;
    }
}