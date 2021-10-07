import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MotoboyScreen from './pages/motoboy/MotoboyScreen';
import DrugstoreScren from './pages/drugstore/DrugstoreScreen';
import OrderStatus from './pages/Client/OrderStatus'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/motoboy" component={MotoboyScreen} />
        <Route path="/farmacia" component={DrugstoreScren} />
        <Route path="/cliente" component={OrderStatus} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
