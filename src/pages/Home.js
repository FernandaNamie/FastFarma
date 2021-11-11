import NavBar from "../components/NavBar";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Card from "../components/Card";
import SearchColumn from "../components/SearchColumn";
import { remedios } from "../mockData/remedios";
import { Col, Row } from "react-bootstrap";
import Shopping from "../components/Shopping";
import { useState, useEffect } from "react";
import React from "react";
import { Drawer } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useHistory } from "react-router";

export default function Home() {
  const [remediosApi, setRemediosApi] = useState(remedios);
  const [pedidos, setPedidos] = useState(remediosApi);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") !== "erro")
      axios
        .get("http://localhost:8080/produtos", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => setRemediosApi(response.data))
        .catch((error) => console.log(error));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  useEffect(() => {
    setPedidos(remediosApi);
  });

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

  function handlePedidos(changePedidos) {
    const formData = new FormData();

    formData.append("data", JSON.stringify(changePedidos));
    axios
      .post("http://localhost:8080/order/", changePedidos, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        if ((response.status === 200 || response.status === 201)) {
          history.push('/cliente');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <NavBar toggleDrawer={toggleDrawer} />
      <GlobalStyle />
      <Row>
        <Col md="2">
          <SearchColumn setRemediosApi={setRemediosApi} />
        </Col>
        <Col md="10">
          <Cards id={"Cards"}>
            {remediosApi.map((remedio, idx) => {
              return (
                <Card
                  nome={remedio.nome}
                  preco={remedio.preco}
                  toggleDrawer={toggleDrawer}
                  handleClickLess={handleClickLess}
                  handleClickPlus={handleClickPlus}
                  index={idx}
                  quantidade={pedidos[idx].quantidade}
                  id={`card${idx}`}
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
            <Shopping
              value={state}
              toggleDrawer={toggleDrawer}
              pedidos={pedidos}
              handleClickLess={handleClickLess}
              handleClickPlus={handleClickPlus}
              handleDelete={handleDelete}
              handlePedidos={handlePedidos}
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
