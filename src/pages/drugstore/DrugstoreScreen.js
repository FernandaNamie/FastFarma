import React from "react";
import Sidebar from "../../components/drugstore/Sidebar";
import NavBar from "../../components/NavBar";
import DrugstoreFeed from "../../components/drugstore/DrugstoreFeed";
import { pedidos } from "../../mockData/pedidos";

export default function DrugstoreScreen() {
  let pedido = pedidos[0];
  return (
    <div>
      <NavBar />
      <DrugstoreFeed
        client={pedido.client}
        orderNumber={pedido.orderNumber}
        minDeliveryTime={pedido.minDeliveryTime}
        maxDeliveryTime={pedido.maxDeliveryTime}
        pedido={pedido}
      />
      <Sidebar pedidos={pedidos} />
    </div>
  );
}
