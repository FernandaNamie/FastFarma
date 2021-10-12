import { React, useState } from "react";
import ClientData from "./ClientData";
import "./Sidebar.css";

export default function Sidebar(props) {
  function onClick(key) {
    var data = props.orders.filter((order) => {
      return key === order.orderNumber;
    });
    setKey(key);
    props.update(data[0]);
  }

  const [key, setKey] = useState(props.orders[0].orderNumber);

  return (
    <div>
      <div className="Bar">
        <p className="InsideBar">Pedidos</p>
      </div>
      {props.orders.map((order, idx) => {
        return (
          <ClientData
            name={order.client}
            key={order.orderNumber}
            id={order.orderNumber}
            message={order.message}
            status={order.status}
            onClick={onClick}
            selected={order.orderNumber === key ? "ClientSelected" : ""}
          />
        );
      })}
    </div>
  );
}
