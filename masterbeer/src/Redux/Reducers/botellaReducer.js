import * as types from '../Actions/actionTypes';

export default function botellaReducer(state =[],action)
{
    switch(action.type)
    {
        case types.CREATE_BOTELLA:
            return [...state,{...action.Botella}];
        case types.LOAD_BOTELLAS_SUCCESS:
            return action.Botellas;
        default:
            return state;
    }
}