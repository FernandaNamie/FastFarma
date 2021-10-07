import React from "react";
import SideBar from "../../components/motoboy/Sidebar";
import "./MotoboyScreen.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import NavBar from "../../components/NavBar";
import Product from "../../components/motoboy/Product";
import Order from "../../components/motoboy/Order";
import { pedidos } from "../../mockData/pedidos";

export default function MotoboyScreen() {
  var pedido = pedidos[0];
  return (
    <div>
      <NavBar />
      <div className="Index">
        <ErrorOutlineIcon fontSize="large" />
        <Order order={pedido}/>
      </div>
      <SideBar orders= {pedidos}/>
    </div>
  );
}
