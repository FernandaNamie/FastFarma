import React from "react";
import SideBar from "../../components/motoboy/sidebar";
import "./MotoboyScreen.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import NavBar from "../../components/NavBar";
import Product from "../../components/motoboy/Product";

export default function MotoboyScreen() {
  return (
    <div>
      <NavBar />
      <div className="Index">
        <ErrorOutlineIcon fontSize="large" />
        <span className="MainText">Aceitar Pedido</span>
        <div className="container" style={{ paddingLeft: "50px" }}>
          <div className="row">
            <div className="col-6" style={{ fontWeight: "bold" }}>
              #A821AJKSD90
            </div>
            <div className="col-6">
              <GpsFixedIcon /> <span style={{ fontWeight: "bold" }}>De:</span>{" "}
              Barroso Neto, 562
            </div>
          </div>
          <div className="row">
            <div className="col-6" style={{ fontWeight: "bold" }}>
              Previsão de entrega: 12h50 - 13h00
            </div>
            <div className="col-6">
              <GpsFixedIcon /> <span style={{ fontWeight: "bold" }}>Para:</span>{" "}
              R. Vicente Linhares, 342
            </div>
          </div>
        </div>
        <Product />
      </div>
      <SideBar />
    </div>
  );
}