import React from "react";
import "./DrugstoreFeed.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
<<<<<<< HEAD
import DrugstoreClientOrder from "../../components/drugstore/DrugstoreClientOrder";
=======
import DrugstoreClientOrder from "./DrugstoreClientOrder";
>>>>>>> 2ea87fd9472685babda38f6c951bac7c62eb0fba

export default function DrugstoreFeed(props) {
  return (
    <div className="Index">
      <ErrorOutlineIcon fontSize="large" />
<<<<<<< HEAD
      <span className="Title">Pedido - Cliente {props.client}</span>
=======
      <span className="Title" style={{ marginLeft: "1%" }}>
        Pedido - Cliente {props.client}
      </span>
>>>>>>> 2ea87fd9472685babda38f6c951bac7c62eb0fba
      <div className="container" style={{ paddingLeft: "50px" }}>
        <div className="row">
          <div className="col-6" style={{ fontWeight: "bold" }}>
            #{props.orderNumber}
          </div>
        </div>
        <div className="row">
          <div className="col-6" style={{ fontWeight: "bold" }}>
            Previsão de entrega: {props.minDeliveryTime} -{" "}
            {props.maxDeliveryTime}
          </div>
        </div>
      </div>
      <div className="container Product">
<<<<<<< HEAD
        <DrugstoreClientOrder />
        <div class="row justify-content-center">
          <div class="w-100"></div>
          <div class="col-4">
            <button
              type="button"
              class="btn btn-primary"
=======
        <DrugstoreClientOrder pedido={props.pedido} />
        <div class="row justify-content-center">
          <div class="w-100"></div>
          <div class="col-6" style={{ margin: "auto" }}>
            <button
              type="button"
              class="btn btn-outline-dark"
>>>>>>> 2ea87fd9472685babda38f6c951bac7c62eb0fba
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
          </div>
        </div>
      </div>
    </div>
  );
}
