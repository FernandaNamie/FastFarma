import { padding } from "@material-ui/system";
import React from "react";
import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <div>
      <div className="Bar">
        <p className="InsideBar">Pedidos</p>
      </div>
      <div className="ClientsStyle">
        {props.pedidos.map((pedido, idx) => {
          return (
            <div className="col-6" style={{ marginLeft: "2%" }}>
              <span>
                <span className="ClientName">
                  {pedido.client}{" "}
                  <span className="ClientCode">#{pedido.orderNumber}</span>
                </span>
                <span
                  className="Status New"
                  style={{
                    marginLeft: "4%",
                    textAlign: "center",
                    padding: "1px",
                  }}
                >
                  {pedido.status}
                </span>
              </span>
              <p className="Message">{pedido.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
