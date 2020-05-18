import * as types from "./actionTypes";

export function agregarAlCarrito(Element) {
    return function (dispatch) {
            dispatch({ type: types.AGREGAR_AL_CARRITO,Element});
  }
}