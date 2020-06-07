import * as types from '../Actions/actionTypes';
import initialState from './initialState';

export default function pedidosReducer(state =initialState.Pedidos,action)
{
    switch(action.type)
    {
        case types.HACER_PEDIDO:
            return [...state,{...action.Pedido}];
        case types.LOAD_PEDIDOS_SUCCESS:
            return action.Pedidos;
        case types.ELIMINAR_PEDIDO:
            return state.filter(Pedido => Pedido._id !== action.Pedido._id);
        default:
            return state;
    }
}