import React from "react";
import './Sidebar.css';

export default function SideBar(props) {
    return (
        <div>
            <div className="Bar">
                <p className="InsideBar">Pedidos</p>
            </div>
            {props.orders.map((pedido, idx) => {
          return (
            <div className="col-6" style={{ marginLeft: "1%" }}>
              <span>
                <span className="ClientName">
                  {pedido.client}{" "}
                  <br/>
                  <span className="ClientCode">#{pedido.orderNumber}</span>
                </span>
                <span
                  className={`Status ${pedido.status}`}
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
    )
}