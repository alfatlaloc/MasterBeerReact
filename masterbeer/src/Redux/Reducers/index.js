import {combineReducers} from 'redux';
import { sessionReducer } from 'redux-react-session';
import Usuarios from './usuarioReducer';
import Botellas from './botellaReducer';
import Carrito from './carritoReducer';

const rootReducer = combineReducers({
    Usuarios,
    Carrito,
    Botellas,
    Session: sessionReducer
});

export default rootReducer;