import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/Home.css';
import './css/Catalogo.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from './Redux/configureStore';
import {Provider as ReduxProvider} from 'react-redux';

const Store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={Store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
