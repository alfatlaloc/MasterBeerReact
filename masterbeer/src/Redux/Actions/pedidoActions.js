import * as types from "./actionTypes";

export function hacerPedido(Element) {
    return function (dispatch) {
            dispatch({ type: types.HACER_PEDIDO,Element});
  }
}

export function eliminarPedido(_id) {
  return function (dispatch) {
          dispatch({ type: types.ELIMINAR_PEDIDO,_id});
}
}

export function atenderPedido() {
    return function (dispatch) {
            dispatch({ type: types.ATENDER_PEDIDO});
  }
  }
