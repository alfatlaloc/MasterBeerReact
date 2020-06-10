import * as types from "../Actions/actionTypes";
import initialState from "./initialState";

export default function ExtraReducer(state = initialState.Extras, action) {
  switch (action.type) {
    case types.CREATE_EXTRA:
      return [...state, { ...action.Extra}];
    case types.LOAD_EXTRAS_SUCCESS:
      return action.Extras;
    case types.ELIMINAR_EXTRA:
      return state.filter((Extra) => Extra._id !== action.Extra._id);
    case types.UPDATE_EXTRA:
      return state.map((e) => {
        if (e._id === action.Extra._id) {
          return action.Extra;
        }
        return e;
      });
    default:
      return state;
  }
}
