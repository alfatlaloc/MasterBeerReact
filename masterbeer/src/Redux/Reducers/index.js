import {combineReducers} from 'redux';
import Usuarios from './usuarioReducer';
import Botellas from './botellaReducer';

const rootReducer = combineReducers({
    Usuarios,
    Botellas
});

export default rootReducer;