import * as types from '../Actions/actionTypes';
import initialState from './initialState';

export default function ingredienteReducer(state =initialState.Ingredientes,action)
{
    switch(action.type)
    {
        case types.CREATE_INGREDIENTE:
            return [...state,{...action.Ingrediente}];
        case types.LOAD_INGREDIENTE_SUCCESS:
            return action.Ingredientes;
        case types.ELIMINAR_INGREDIENTE:
            return state.filter(Ingrediente => Ingrediente._id !== action.Ingrediente._id);
        default:
            return state;
    }
}