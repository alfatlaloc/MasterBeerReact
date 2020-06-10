import * as types from "../Actions/actionTypes";
import initialState from "./initialState";

export default function RecipienteReducer(
  state = initialState.Recipientes,
  action
) {
  switch (action.type) {
    case types.CREATE_RECIPIENTE:
      return [...state, { ...action.Recipiente }];
    case types.LOAD_RECIPIENTE_SUCCESS:
      return action.Recipientes;
    case types.ELIMINAR_RECIPIENTE:
      return state.filter(
        (Recipiente) => Recipiente._id !== action.Recipiente._id
      );
    case types.UPDATE_RECIPIENTE:
      return state.map((e) => {
        if (e._id === action.Recipiente._id) {
          return action.Recipiente;
        }
        return e;
      });
    default:
      return state;
  }
}
