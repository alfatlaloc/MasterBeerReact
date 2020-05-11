import {combineReducers} from 'redux';
import { sessionReducer } from 'redux-react-session';
import Usuarios from './usuarioReducer';
import Botellas from './botellaReducer';

const rootReducer = combineReducers({
    Usuarios,
    Botellas,
    Session: sessionReducer
});

export default rootReducer;