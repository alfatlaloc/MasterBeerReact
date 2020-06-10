import * as types from "../Actions/actionTypes";
import initialState from "./initialState";

export default function botellaReducer(state = initialState.Botellas, action) {
  switch (action.type) {
    case types.CREATE_BOTELLA:
      return [...state, { ...action.Botella }];
    case types.LOAD_BOTELLAS_SUCCESS:
      return action.Botellas;
    case types.ELIMINAR_BOTELLA:
      return state.filter((Botella) => Botella._id !== action.Botella._id);
    case types.UPDATE_BOTELLA:
      return state.map((e) => {
        if (e._id === action.Botella._id) {
          return action.Botella;
        }
        return e;
      });
    default:
      return state;
  }
}
