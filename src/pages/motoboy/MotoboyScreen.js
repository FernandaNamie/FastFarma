import { React, useState } from "react";
import SideBar from "../../components/motoboy/Sidebar";
import "./MotoboyScreen.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import NavBar from "../../components/NavBar";
import Order from "../../components/motoboy/Order";
import { pedidos } from "../../mockData/pedidos";

export default function MotoboyScreen() {
  function update(data) {
    setPedido(data);
  }
  const [pedido, setPedido] = useState(pedidos[0]);

  return (
    <div>
      <NavBar />
      <div className="Index">
        <ErrorOutlineIcon fontSize="large" />
        <Order order={pedido} />
      </div>
      <SideBar orders={pedidos} update={update} />
    </div>
  );
}
