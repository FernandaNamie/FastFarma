import { React, useState } from "react";
import Sidebar from "../../components/drugstore/Sidebar";
import NavBar from "../../components/NavBar";
import DrugstoreFeed from "../../components/drugstore/DrugstoreFeed";
import { pedidos } from "../../mockData/pedidos";

export default function DrugstoreScreen() {
  function update(data) {
    setPedido(data);
  }
  const [pedido, setPedido] = useState(pedidos[0]);

  return (
    <div>
      <NavBar isPharmacy={true}/>
      <DrugstoreFeed
        client={pedido.client}
        orderNumber={pedido.orderNumber}
        minDeliveryTime={pedido.minDeliveryTime}
        maxDeliveryTime={pedido.maxDeliveryTime}
        pedido={pedido}
      />
      <Sidebar orders={pedidos} update={update} />
    </div>
  );
}
