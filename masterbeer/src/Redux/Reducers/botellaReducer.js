import * as types from '../Actions/actionTypes';

export default function usuarioReducer(state =[],action)
{
    switch(action.type)
    {
        case types.CREATE_BOTELLA:
            return [...state,{...action.Botellas}];
        case types.LOAD_BOTELLAS_SUCCESS:
            return action.Botellas;
        default:
            return state;
    }
}