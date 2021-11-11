import { React, useState, useEffect } from "react";
import Sidebar from "../../components/drugstore/Sidebar";
import NavBar from "../../components/NavBar";
import DrugstoreFeed from "../../components/drugstore/DrugstoreFeed";
import { pedidos } from "../../mockData/pedidos";
import axios from "axios";

export default function DrugstoreScreen() {
  function update(data) {
    setPedidos(data);
  }
  const [pedidosFinal, setPedidos] = useState(pedidos);
  useEffect(() => {
    if (localStorage.getItem("token") !== "erro") {
      axios.get('/farmacias/pedidos')
        .then(response =>
          setPedidos(response.data)
        )
        .catch((error) => console.log(error));
    }

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  console.log(pedidosFinal[0])
  return (
    <div>
      <NavBar />
      <DrugstoreFeed
        client={pedidosFinal[0].client}
        orderNumber={pedidosFinal[0].orderNumber}
        minDeliveryTime={pedidosFinal[0].minDeliveryTime}
        maxDeliveryTime={pedidosFinal[0].maxDeliveryTime}
        pedido={pedidosFinal[0]}
      />
      <Sidebar orders={pedidosFinal} update={update} />
    </div>
  );
}
