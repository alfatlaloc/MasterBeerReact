import React from 'react';
import './App.css';
import TopBar from './Common/TopBar';
import Footer from './Common/footer';
import HomePage from './HomePage/HomePage';
import Catalogo from './Catalogo/Catalogo';
import Login from './Login/Login';
import'bootstrap/dist/js/bootstrap.bundle.min';
import {Route, Switch} from 'react-router-dom';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Catalogo" component={Catalogo}/>
        <Route path="/Login" component={Login}/>
        <Route component={PageNotFound}/>
      </Switch>  
      <Footer/>
    </div>
  );
}

export default App;
