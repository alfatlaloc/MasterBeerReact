import React from 'react';
import './App.css';
import TopBar from './Common/TopBar';
import Footer from './Common/footer';
import HomePage from './HomePage/HomePage';
import Catalogo from './Catalogo/Catalogo';
import AdminPanel from './AdminPanel/AdminPanel';
import CreadorM from './Creador/CreadorM';
import ManageBotella from './AdminPanel/ManageBotella';
import ManageIngrediente from './AdminPanel/ManageIngredientes';
import ManageRecipiente from './AdminPanel/ManageRecipientes';
import ManageExtras from './AdminPanel/ManageExtras';
import Pedidos from './Pedidos/Pedidos';
import Carrito from './Carrito/Carrito';
import Login from './Login/Login';
import Register from './Register/Registro';
import TicketCarrito from './Carrito/Ticket';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Route, Switch} from 'react-router-dom';
import PageNotFound from './PageNotFound';
import ItemView from './ItemView/ItemView';
import BartenderRegister from './AdminPanel/Bartender';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Catalogo" component={Catalogo}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Creador" component={CreadorM}/>
        <Route path="/Register" component={Register}/>
        <Route path="/AdminPanel" component={AdminPanel}/>
        <Route path="/ManageBotella" component={ManageBotella}/>
        <Route path="/ManageIngrediente" component={ManageIngrediente}/>
        <Route path="/ManageRecipiente" component={ManageRecipiente}/>
        <Route path="/ManageExtras" component={ManageExtras}/>
        <Route path="/Pedidos" component={Pedidos}/>
        <Route path="/Carrito" component ={Carrito}/>
        <Route path="/TicketCarrito" component ={TicketCarrito}/>
        <Route path="/BartenderRegister" component ={BartenderRegister}/>
        <Route path="/ItemView:_id" component ={ItemView}/>
        <Route component={PageNotFound}/>
      </Switch>  
      <Footer/>
    </div>
  );
}

export default App;
