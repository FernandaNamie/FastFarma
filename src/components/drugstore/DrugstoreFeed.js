import React from "react";
import "./DrugstoreFeed.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import DrugstoreClientOrder from "./DrugstoreClientOrder";

export default function DrugstoreFeed(props) {
  let getButton = <></>;
  console.log(props)
  if (props.pedido.status === "Novo")
    getButton = (
      <>
        <button
          type="button"
          class="btn btn-outline-dark"
          style={{ background: "#37B9C5", borderColor: "#37B9C5" }}
        >
          ACEITAR PEDIDO
        </button>
        <button
          type="button"
          class="btn btn-outline-dark"
          style={{
            marginLeft: "5px",
            background: "#FF5A5A",
            borderColor: "#FF5A5A",
          }}
        >
          RECUSAR PEDIDO
        </button>
      </>
    );
  return (
    <div className="Index">
      <ErrorOutlineIcon fontSize="large" />
      <span className="Title" style={{ marginLeft: "1%" }}>
        Pedido - Cliente {props.client}
      </span>
      <div className="container" style={{ paddingLeft: "50px" }}>
        <div className="row">
          <div className="col-6" style={{ fontWeight: "bold" }}>
            #{props.orderNumber}
          </div>
        </div>
        <div className="row">
          <div
            className="col-6"
            style={{ fontWeight: "bold" }}
            id="deliveryTime"
          >
            Previsão de entrega: {props.minDeliveryTime} -{" "}
            {props.maxDeliveryTime}
          </div>
        </div>
      </div>
      <div className="container Product">
        <DrugstoreClientOrder pedido={props.pedido} />
        <div class="row justify-content-center">
          <div class="w-100"></div>
          <div class="col-6" id="buttons" style={{ margin: "auto" }}>
            {getButton}
          </div>
        </div>
      </div>
    </div>
  );
}
