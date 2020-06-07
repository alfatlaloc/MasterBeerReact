import * as types from '../Actions/actionTypes';
import initialState from './initialState';

export default function carritoReducer(state=initialState.Carrito,action)
{
    switch(action.type)
    {
        case types.AGREGAR_AL_CARRITO:
            console.log(action);
            if(state.some(e => e._id === action.Element._id )){
            return state.map(product => {
                if (product._id === action.Element._id) {
                  return {...product, Cantidad: parseFloat(product.Cantidad) + parseFloat(action.Element.Cantidad)}
                };
                return product;
              });
            }
            else
                return [...state, {...action.Element}];  
        case types.ELIMINAR_DEL_CARRITO:
            return state.filter(Element => Element._id !== action._id);
        case types.VACIAR_CARRITO:
            return [];
        default:
            return state;
    }
}