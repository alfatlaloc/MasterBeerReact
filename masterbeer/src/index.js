import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/Home.css';
import './css/Catalogo.css';
import './css/Registro.css';
import './css/Footer.css';
import './css/AdminPanel.css';
import './css/Modal.css';
import './css/AdminPanelForms/BotellaManagerForm.css';
import './css/ScrollBar.css';
import './css/Carrito.css';
import './css/Creador.css';
import './css/Buttons.css';
import './css/subPages/titles.css';
import './css/ItemView.css';
import './css/AdminPanelForms/bkbutton.css';

import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreR from './Redux/configureStore';
import {Provider as ReduxProvider} from 'react-redux';

ReactDOM.render(
    <ReduxProvider store={StoreR}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
