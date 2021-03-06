import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MotoboyScreen from './pages/motoboy/MotoboyScreen';
import DrugstoreScren from './pages/drugstore/DrugstoreScreen';
import OrderStatus from './pages/Client/OrderStatus';
import ClientRegister from './pages/Client/ClientRegister';
import ProductRegister from './pages/drugstore/ProductRegister';
import DrugStoreRegister from './pages/drugstore/DrugStoreRegister';
import MotoboyRegister from './pages/motoboy/MotoboyRegister';
import Login from './pages/Auth/Login'
ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/motoboy" component={MotoboyScreen} />
        <Route path="/farmacia" component={DrugstoreScren} />
        <Route path="/cliente" component={OrderStatus} />
        <Route path="/login" component={Login} />
        <Route path='/RegistrarProduto' component={ProductRegister} />
        <Route path='/RegistrarCliente' component={ClientRegister} />
        <Route path='/RegistrarFarmacia' component={DrugStoreRegister} />
        <Route path='/RegistrarMotoboy' component={MotoboyRegister} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
