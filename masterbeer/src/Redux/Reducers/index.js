import {combineReducers} from 'redux';
import Usuarios from './usuarioReducer';
import Botellas from './botellaReducer';
import Carrito from './carritoReducer';
import Creador from './creadorReducer';
import Ingrediente from './ingredienteReducer';
import Session from './SessionReducer';
const rootReducer = combineReducers({
    Usuarios,
    Carrito,
    Botellas,
    Creador,
    Ingrediente,
    Session
});

export default rootReducer;