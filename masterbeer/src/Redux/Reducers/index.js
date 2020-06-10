import {combineReducers} from 'redux';
import Usuarios from './usuarioReducer';
import Botellas from './botellaReducer';
import Carrito from './carritoReducer';
import Ingrediente from './ingredienteReducer';
import Session from './SessionReducer';
import Recipientes from './recipienteReducer';

const rootReducer = combineReducers({
    Usuarios,
    Carrito,
    Botellas,
    Ingrediente,
    Recipientes,
    Session
});

export default rootReducer;