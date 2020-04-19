import * as types from '../Actions/actionTypes';

export default function usuarioReducer(state =[],action)
{
    switch(action.type)
    {
        case types.CREATE_USUARIO:
            return [...state,{...action.Usuario}];

        default:
            return state;
    }
}