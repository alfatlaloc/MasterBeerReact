import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './Reducers';
import {loadState,saveState} from './localStorage';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import throttle from 'lodash.throttle';
import thunk from 'redux-thunk';


const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

const persistedState = loadState();
// store.jsconst persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk,reduxImmutableStateInvariant()))
);

store.subscribe(throttle(() => {
  saveState({
    Carrito: store.getState().Carrito
  });
}, 1000));

export default store;