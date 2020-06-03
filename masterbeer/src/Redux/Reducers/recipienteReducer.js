import * as types from '../Actions/actionTypes';
import initialState from './initialState';

export default function ingredienteReducer(state =initialState.Recipientes,action)
{
    switch(action.type)
    {
        case types.CREATE_RECIPIENTE:
            return [...state,{...action.Recipiente}];
        case types.LOAD_RECIPIENTE_SUCCESS:
            return action.Recipientes;
        case types.ELIMINAR_RECIPIENTE:
            return state.filter(Recipiente => Recipiente._id !== action.Recipiente._id);
        default:
            return state;
    }
}