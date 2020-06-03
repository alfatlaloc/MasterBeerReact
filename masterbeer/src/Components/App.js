import React from 'react';
import './App.css';
import TopBar from './Common/TopBar';
import Footer from './Common/footer';
import HomePage from './HomePage/HomePage';
import Catalogo from './Catalogo/Catalogo';
import AdminPanel from './AdminPanel/AdminPanel';
import Creador from './Creador/Creador';
import ManageBotella from './AdminPanel/ManageBotella';
import ManageIngrediente from './AdminPanel/ManageIngredientes';
import ManageRecipiente from './AdminPanel/ManageRecipientes';
import Carrito from './Carrito/Carrito';
import Login from './Login/Login';
import Register from './Register/Registro';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Route, Switch} from 'react-router-dom';
import PageNotFound from './PageNotFound';
import ItemView from './ItemView/ItemView';
function App() {
  return (
    <div className="App">
      <TopBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Catalogo" component={Catalogo}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Creador" component={Creador}/>
        <Route path="/Register" component={Register}/>
        <Route path="/AdminPanel" component={AdminPanel}/>
        <Route path="/ManageBotella" component={ManageBotella}/>
        <Route path="/ManageIngrediente" component={ManageIngrediente}/>
        <Route path="/ManageRecipiente" component={ManageRecipiente}/>
        <Route path="/Carrito" component ={Carrito}/>
        <Route path="/ItemView:slug" component ={ItemView}/>
        <Route component={PageNotFound}/>
      </Switch>  
      <Footer/>
    </div>
  );
}

export default App;
