import * as types from '../Actions/actionTypes';
import initialState from './initialState';
export default function sesionReducer(state =initialState.Session,action)
{
    const newState={};
    switch(action.type)
    {
        case types.LOG_IN:
            newState.UserName=action.Usuario.Correo;
            newState.Type=action.Usuario.Tipo;
            newState.logged=true;
            return newState;
        case types.LOG_OUT:
            newState.UserName="";
            newState.Type="Not_AUT";
            newState.logged=false;
            return newState;        
        case types.ACTUAL_USER:
            return state;
        default:
            return state;
    }
}