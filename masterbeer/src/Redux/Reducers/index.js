import {combineReducers} from 'redux';
import { sessionReducer } from 'redux-react-session';
import Usuarios from './usuarioReducer';
import Botellas from './botellaReducer';
import Carrito from './carritoReducer';
import Creador from './creadorReducer';
import Ingrediente from './ingredienteReducer';

const rootReducer = combineReducers({
    Usuarios,
    Carrito,
    Botellas,
    Creador,
    Ingrediente,
    Session: sessionReducer
});

export default rootReducer;