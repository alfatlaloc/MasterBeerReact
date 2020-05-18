import * as types from '../Actions/actionTypes';
import initialState from './initialState';

export default function carritoReducer(state=initialState.Carrito,action)
{
    switch(action.type)
    {
        case types.AGREGAR_AL_CARRITO:
            console.log(action);
            return [...state, {...action.Element}];
        case types.ELIMINAR_DEL_CARRITO:
            return state.filter(Element => Element.Nombre !== action.Element.Nombre);
        default:
            return state;
    }
}