import * as types from '../Actions/actionTypes';
import initialState from './initialState';
export default function creadorReducer(state =initialState.Creador,action)
{
    switch(action.type)
    {
        case types.AGREGAR_RECIPIENTE:
            return [...state.Recipiente,{...action.Recipiente}];
        default:
            return state;
    }
}