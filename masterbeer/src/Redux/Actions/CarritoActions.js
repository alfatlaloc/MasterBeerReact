import * as types from "./actionTypes";

export function agregarAlCarrito(Element) {
    return function (dispatch) {
            dispatch({ type: types.AGREGAR_AL_CARRITO,Element});
  }
}

export function vaciarCarrito() {
  return function (dispatch) {
          dispatch({ type: types.VACIAR_CARRITO});
}
}

export function eliminarDeCarrito(_id){
  return function (dispatch){
    dispatch({type:types.ELIMINAR_DEL_CARRITO,_id});
  }
}