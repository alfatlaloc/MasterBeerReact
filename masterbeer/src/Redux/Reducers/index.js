import {combineReducers} from 'redux';
import Usuarios from './usuarioReducer';
import Botellas from './botellaReducer';
import Carrito from './carritoReducer';
import Ingrediente from './ingredienteReducer';
import Session from './SessionReducer';
import Recipientes from './recipienteReducer';
import Extras from './extrasReducer';

const rootReducer = combineReducers({
    Usuarios,
    Carrito,
    Botellas,
    Ingrediente,
    Recipientes,
    Extras,
    Session
});

export default rootReducer;