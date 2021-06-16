import * as types from '../Actions/actionTypes';
import initialState from './initialState';

export default function bebidaPReducer(state =initialState.BebidaP,action)
{
    switch(action.type)
    {
        case types.CREATE_BOTELLA:
            return [...state,{...action.Botella}];
        case types.LOAD_BOTELLAS_SUCCESS:
            return action.Botellas;
        case types.ELIMINAR_BOTELLA:
            return state.filter(Botella => Botella._id !== action.Botella._id);
        default:
            return state;
    }
}