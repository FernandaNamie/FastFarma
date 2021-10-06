import React from "react";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import Product from "./Product";

export default function Order(props){
    return(
        <span>
            <span className="MainText">Aceitar Pedido</span>
            <div className="container" style={{ paddingLeft: "50px" }}>
            <div className="row">
            <div className="col-6" style={{ fontWeight: "bold" }}>
                {props.order.orderNumber}
            </div>
            <div className="col-6">
                <GpsFixedIcon /> <span style={{ fontWeight: "bold" }}>De:</span>{" "}
                {props.order.drugStoreAddress}
            </div>
            </div>
            <div className="row">
            <div className="col-6" style={{ fontWeight: "bold" }}>
                Previsão de entrega: {props.order.minDeliveryTime} - {props.order.maxDeliveryTime}
            </div>
            <div className="col-6">
                <GpsFixedIcon /> <span style={{ fontWeight: "bold" }}>Para:</span>{" "}
                {props.order.clientAddress}
            </div>
            </div>
        </div>
        <div className="container Product">
            <p>
                <span style={{ color: "#37B9C5", fontWeight: "bold" }}>Quantidade</span>
                <span style={{ fontWeight: "bold", paddingLeft: "60px" }}>
                Detalhes do Pedido
                </span>
            </p>
            {props.order.products.map((item, idx) => {
                return (
                <Product
                    amount={item.amount}
                    name={item.productName}
                    price={item.price}
                />
                );
            })}
            <div class="row justify-content-end">
                <div
                class="col-3"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
                >
                <span style={{ color: "#37B9C5" }}>Frente:</span>
                <span style={{ paddingLeft: "11px" }}>R$6,00</span>
                </div>
                <div class="w-100"></div>
                <div
                class="col-3"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
                >
                <span style={{ color: "#37B9C5" }}>Total:</span>
                <span style={{ paddingLeft: "20px", fontWeight: "bold" }}>
                    R$106,00
                </span>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-4" style={{ fontWeight: "bold" }}>
                Iniciar entrega
                </div>
                <div class="w-100"></div>
                <div class="col-4">
                <button
                    type="button"
                    class="btn btn-primary "
                    style={{ background: "#37B9C5", borderColor: "#37B9C5" }}
                >
                    Sim
                </button>
                <button
                    type="button"
                    class="btn btn-outline-dark"
                    style={{ marginLeft: "5px" }}
                >
                    Não
                </button>
                </div>
            </div>
        </div>
    </span>
    )
}