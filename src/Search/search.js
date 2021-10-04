import NavBar from "./navbar";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Card from "./card";
import SearchColumn from "./searchColumn";
import { remedios } from "./remedios";
import { Col, Row } from "react-bootstrap";
import TemporaryDrawer from "./Shopping";
import { useState } from "react";
import React from "react";
import { Drawer } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [pedidos, setPedidos] = useState(remedios);

  const [state, setState] = React.useState(false);

  function toggleDrawer(event, open) {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  }

  function handleClickLess(event, index) {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (pedidos[index].quantidade === 0) {
      return;
    } else {
      let pedido_temp = pedidos[index];
      pedido_temp.quantidade = pedido_temp.quantidade - 1;
      console.log(pedido_temp);
      setPedidos([...pedidos]);
    }
  }

  function handleClickPlus(event, index) {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    let pedido_temp = pedidos[index];
    pedido_temp.quantidade = pedido_temp.quantidade + 1;
    console.log(pedido_temp);
    setPedidos([...pedidos]);
  }

  function handleDelete(event, index) {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    let pedido_temp = pedidos[index];
    pedido_temp.quantidade = 0;
    console.log(pedido_temp);
    setPedidos([...pedidos]);
  }

  return (
    <div>
      <NavBar toggleDrawer={toggleDrawer} />
      <GlobalStyle />
      <Row>
        <Col md="2">
          <SearchColumn />
        </Col>
        <Col md="10">
          <Cards>
            {remedios.map((remedio, idx) => {
              return (
                <Card
                  nome={remedio.nome}
                  preco={remedio.preco}
                  toggleDrawer={toggleDrawer}
                  handleClickLess={handleClickLess}
                  handleClickPlus={handleClickPlus}
                  index={idx}
                  quantidade={pedidos[idx].quantidade}
                />
              );
            })}
          </Cards>
        </Col>
      </Row>
      <div>
        <React.Fragment key={"right"}>
          <Drawer
            anchor={"right"}
            open={state}
            onClose={(e) => {
              toggleDrawer(e, false);
            }}
          >
            <TemporaryDrawer
              value={state}
              toggleDrawer={toggleDrawer}
              pedidos={pedidos}
              handleClickLess={handleClickLess}
              handleClickPlus={handleClickPlus}
              handleDelete={handleDelete}
            />
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
  }
`;
const Cards = styled.span`
  margin-bottom: 50px;
  }
`;
